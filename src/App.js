import * as React from 'react';
import ColorSwatchEnv from './components/ColorSwatchEnv';
import ColorTestEnv from './components/ColorTestEnv';
import ColorPicker from './components/ColorPicker';

function App() {

  // const optionsState = atom({
  //   key: 'Options',
  //   default: {
  //     darkMode: true,
  //     testEnv: null,
  //     testLight: null,
  //   },
  // });

  return (
    <div className="App" >
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%', width: '100%' }} >
        <ColorSwatchEnv />
        <ColorTestEnv />
      </div>
      <ColorPicker />
    </div>
  );
}

export default App;
