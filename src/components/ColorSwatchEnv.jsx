import Swatch from "./Swatch"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useRecoilState } from "recoil";
import { swatchesState } from "../atoms/atoms";

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

  return (
    <div style={{ width: '50%', backgroundColor: 'rgb(29 29 29)' }}>
      <div style={{ display: 'flex', flexFlow: 'row wrap', alignContent: 'flex-start', gap: '1rem', margin: '2rem' }}>


        {swatches.map((data) => (
          <Swatch key={data.id} color="#ffffff" data={data} />
        ))}


        <div style={{ width: '5rem', height: '5rem', textAlign: 'center', marginTop: '0.8rem', zIndex: '1 !important' }}>
          <Fab color="primary" size="medium" aria-label="add" onClick={handleAddColor} sx={{ zIndex: 1 }}>
            <AddIcon />
          </Fab>
        </div>
      </div>
    </div>
  )
}

export default ColorSwatchEnv 