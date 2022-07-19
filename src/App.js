import generatePalette from './colorHelper';
import colorSeed from './colorSeed'
import Palette from './Palette';

function App() {
  console.log(generatePalette(colorSeed[4]))
  return (
    <div className="App">
      <Palette {...colorSeed[4]} />
    </div>
  );
}

export default App;
