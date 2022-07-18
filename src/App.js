import colorSeed from './colorSeed'
import Palette from './Palette';

function App() {
  return (
    <div className="App">
      <Palette {...colorSeed[4]} />
    </div>
  );
}

export default App;
