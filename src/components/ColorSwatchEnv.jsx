import Swatch from "./Swatch"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useRecoilState } from "recoil";
import { swatchesState } from "../atoms/atoms";
import GridLayout from "react-grid-layout";

const ColorSwatchEnv = () => {

  const [swatches, setSwatches] = useRecoilState(swatchesState);

  const handleAddColor = () => {
    setSwatches((oldSwatches) => [...oldSwatches,
    {
      id: oldSwatches.length + 1,
      color: '#e3e3e3',
      texture: null,
      specularity: null,
      emission: null,
    }
    ])
  }

  // const layout = [
  //   { i: "a", x: 0, y: 0, w: 1, h: 1, static: false },
  //   { i: "b", x: 1, y: 0, w: 1, h: 1, minW: 2, maxW: 4 },
  //   { i: "c", x: 4, y: 0, w: 1, h: 1 }
  // ];

  // const children = 

  return (
    <div style={{ width: '50%', backgroundColor: 'rgb(29 29 29)', overflowY: 'auto',  height: '100vh'}}>
      <GridLayout
        className="layout"
        //layout={layout}
        cols={12}
        rowHeight={80}
        width={1200}
        height={1200}
        autoSize={true}
        isDraggable={true}
        isResizable={false}
        compactType={"horizontal"}
        margin={[16, 16]}
      >
        {/* <div key="a" style={{ width: '5rem', height: '5rem', backgroundColor: '#fff' }}>a</div>
        <div key="b" style={{ width: '5rem', height: '5rem', backgroundColor: '#d3d3d3' }}>b</div>
        <div key="c" style={{ width: '5rem', height: '5rem', backgroundColor: '#000' }}>c</div> */}
        {swatches.map((data, idx) => (
          <div key={idx} data-grid={{ x: idx, y: 0, w: 1, h: 1 }}  >
            <Swatch color="#ffffff" data={data} />
          </div>
        ))}
        {/* <div  key={1} data-grid={{ x: 1, y: 1, w: 1, h: 1 }} >
        <Swatch color="#ffffff" data={{id: 1, color: '#ffffff'}} />
        </div>
      <div  key={2} data-grid={{ x: 2, y: 1, w: 1, h: 1 }} >
      <Swatch color="#ffffff" data={{id: 2, color: '#ffffff'}} />
      </div> */}

      </GridLayout>

      <div style={{ width: '5rem', height: '5rem', textAlign: 'center', marginTop: '0.8rem', zIndex: '1 !important', margin: '1rem' }}>
          <Fab color="primary" size="medium" aria-label="add" onClick={handleAddColor} sx={{ zIndex: 1 }}>
            <AddIcon />
          </Fab>
        </div>


      <div style={{ display: 'flex', flexFlow: 'row wrap', alignContent: 'flex-start', gap: '1rem', margin: '2rem' }}>


        {/* {swatches.map((data) => (
          <Swatch key={data.id} color="#ffffff" data={data} />
        ))} */}



      
      </div>
    </div>
  )
}

export default ColorSwatchEnv 