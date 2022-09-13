import { Button } from '@mui/material';
import * as React from 'react';

function App() {
  const [state, setState] = React.useState([]);

  // Load state from url if url has state
  React.useEffect(() => {
    const url = new URL(window.location);
    if(url.searchParams.get('colors')){
      setState([...JSON.parse(decodeURIComponent(url.searchParams.get('colors')))])
      console.log(JSON.parse(decodeURIComponent(url.searchParams.get('colors'))))
    }
  }, []);

  const Swatch = ({ color }) => {
    return (
      <div style={{ width: '4rem', height: '8rem', backgroundColor: color, padding: '0.2rem 0.5rem', boxShadow: state.includes(color) ?  '0px 0px 5px 5px #fff' : '0px 0px 10px 2px #000', }}
        onClick={e => addOrRemoveColor(e.target.innerText)}
      >
        <code style={{ fontSize: '0.8rem' }}>{color}</code>
      </div>
    )
  }

  const SwatchGroup = ({ colors }) => {
    return (
      <div style={{ width: 'fit-content', marginTop: '2rem', display: 'flex', flexDirection: 'row', /*border: '2px solid white',*/ }} >
        {colors.map((color, i) => (
          <Swatch key={i} color={color} />
        ))}
      </div>
    )
  }

  const addOrRemoveColor = (color) => {
    if (state.includes(color)) {
      setState(state.filter(a => a !== color))
    } else {
      setState([...state, color])
    }
  }

  const getURL = () => {
    const url = new URL(window.location);
    url.searchParams.set('colors', encodeURIComponent(JSON.stringify(state)));
    navigator.clipboard.writeText(url.href)
    console.log(url.href)
  }


  const blues = [
    '#3E5767',
    '#1D3A49',
    '#233342',
    '#18252D',
    '#13242A',
    '#0F1F23',
    '#06111D',
  ]

  const blues1 = [
    '#294163',
    '#2A425C',
    '#2B4251',
    '#22323B',
    '#354E58',
  ]

  const blues2 = [
    '#47656D',
    '#668C7E',
    '#A5B2B1',
    '#8FADBA',
    '#7C9EB8',
    '#8198AF',
    '#8FA7B8',
    '#ADC7D3',
    '#8FA6BD',
    '#788CA5',
    '#909AA2',
    '#9BA8B4',
    '#A5C2DD',
    '#BEBECA',
  ]


  const reds = [
    '#99737C',
    '#683338',
    '#802E35',
    '#6E3034',
    '#4B222A',
    '#2D0B0C',
    '#340505',
    '#3C0609',
    '#580D16',
    '#6D1018',
    '#860615',
  ]

  const whites = [
    '#CAA182',
    '#B9B9B9',
  ]

  const greens = [
    '#7E8C78',
    '#7D9A90',
    '#749992',
    '#CDCEBD',
    '#8D9567',
    '#434B3B',
    '#22321E',
    '#192210',
    '#162009',
    '#12150B',
  ]

  const headerStyle = {
    maxWidth: '60rem', margin: '0 auto', marginTop: '4rem',
  }

  return (
    <div className="App" style={{ marginTop: '8rem' }}>

      <div style={{ maxWidth: '60rem', margin: '0 auto', marginTop: '4rem', }}>
        
        <h2 style={headerStyle}>Blues</h2>
        <SwatchGroup colors={blues} />
        <SwatchGroup colors={blues1} />
        <SwatchGroup colors={blues2} />

        <h2 style={headerStyle}>Reds</h2>
        <SwatchGroup colors={reds} />

        <h2 style={headerStyle}>Greens</h2>
        <SwatchGroup colors={greens} />

        <h2 style={headerStyle}>Whites</h2>
        <SwatchGroup colors={whites} />

        <h2 style={headerStyle}>Selected Colors</h2>
        <SwatchGroup colors={state} />


        <Button style={{margin: '5rem 0'}} onClick={()=>getURL()}> Get Link</Button>
      </div>
    </div>

  );
}

export default App;
