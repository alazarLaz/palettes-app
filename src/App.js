import generatePalette from './colorHelper';
import colorSeed from './colorSeed'
import Palette from './Palette';

function App() {
  console.log()
  return (
    <div className="App">
      <Palette palette =  {generatePalette(colorSeed[4])} />
    </div>
  );
}

export default App;
