import useContextMenu from "./useContextMenu"
import { HexColorPicker } from "react-colorful";
import { useEffect, useState } from "react"
import { swatchesState } from "../atoms/atoms";
import { useRecoilState } from "recoil";

const ColorPicker = () => {
  const [color, setColor] = useState("#fff");
  const [swatches, setSwatches] = useRecoilState(swatchesState);
  const { anchorPoint, show, target } = useContextMenu();
  const Color = require('color');

  useEffect(() => {
    if (isSwatch) {
      setColor(getColor())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchorPoint])

  const getColor = () => {
    return swatches.find(item => item.id === Number(target.id.replace('swatch-', ''))).color
  }

  const updateColor = () => {
    if (isSwatch) {
      const newSwatches = [...swatches].map((item) => {
        if (item.id === Number(target.id.replace('swatch-', ''))) return { ...item, color };
        else return item;
      });
      setSwatches(newSwatches)
    }
  }

  const isSwatch = target?.id?.startsWith("swatch-");

  if (show && isSwatch) {
    return (
      <div id="context-menu" className="swatch" style={{ position: 'absolute', top: anchorPoint.y, left: anchorPoint.x, zIndex: '9999' }}>
        <div style={{ width: '20rem', height: '10rem', boxShadow: '0px 0px 5px 5px #000', backgroundColor: '#464646' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '5rem', height: '6.5rem', backgroundColor: color, position: 'relative', flexShrink: 0, }}
              onClick={updateColor}
            >
              <code style={{ fontSize: '0.8rem', position: "absolute", bottom: '0.5rem', left: '1rem', color: Color(color).isDark() ? '#fff' : '#000' }}>{color}</code>
            </div>
            <HexColorPicker className="color-picker"
              color={color}
              onChange={setColor}
            />
          </div>

          {/* TODO: Texture swatch alternatives */}

        </div>
      </div>
    );
  }
  return <></>;
}


export default ColorPicker