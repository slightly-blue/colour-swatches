import { useEffect, useState } from "react"

import { HexColorPicker} from "react-colorful";
import { useRecoilState } from "recoil";
import { swatchesState } from "../atoms/atoms";

const Swatch = ({ data }) => {

  const [open, setOpen] = useState()
  const [color, setColor] = useState(data.color);
  const [swatches, setSwatches] = useRecoilState(swatchesState);

  const Color = require('color');


  const handleColorPick = () => {
    setOpen(!open)
  }

  // Close Color picker on clicks outside color picker 
  useEffect(()=>{
    document.addEventListener("click", e => {
      if (!document.getElementById("swatch-" +data.id).contains(e.target) && open){
        handleClose()
      } 
    });
  },[])

  // useEffect(()=>{
  //   //setSwatches()
  //   //console.log({...swatches.find(a => a.id === data.id ), color: color})
  //   // setSwatches((oldSwatches) => [...oldSwatches,
  //   //   {...swatches.find(a => a.id === data.id ), color: color}
  //   // ])
  
  // },[open])


  const handleClose = () => {
    setOpen(false)
    console.log( {...swatches.find(a => a.id === data.id ), color: color})
    setSwatches((oldSwatches) => [...oldSwatches,
      {...swatches.find(a => a.id === data.id ), color: color}
    ])
  }

  // TODO: clicking outside of element should close picker  

  return (
    <div id={"swatch-" +data.id} className="swatch" style={{ width: '5rem', height: '5rem', boxShadow: '0px 0px 5px 5px #000', padding: '0', margin: '0', zIndex: open ? '100': '1' }}
      //onClick={()=>setOpen(false)}
      onAuxClick={handleColorPick}
    >
     <div style={{width: open ? '20rem' : 0, height: open ? '10rem' : 0,  }}>
      <div style={{display: 'flex', flexDirection:'row'}}>

      <div style={{ width: '5rem', height: '5rem', backgroundColor: color, position: 'relative', flexShrink: 0,}}>
        <code className="swatch-text" style={{ fontSize: '0.8rem', position: "absolute", bottom: '0.5rem', left: '1rem', color: Color(color).isDark() ? '#fff' :'#000' }}>{data.color}</code>
      </div>
   
      {open &&    <HexColorPicker className="color-picker"  color={color} onChange={setColor}/>}
      </div>
   
     </div>
    
    </div>
  )
}

export default Swatch 