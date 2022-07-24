import colorSeed from './colorSeed'
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom'
import { Component } from 'react';
import PaletteList from './PaletteList';
import generatePalette from './colorHelper';


class App extends Component{
  constructor(props) {
    super(props)
    this.findPalettes = this.findPalettes.bind(this)
  }
  
  findPalettes(id)
  {
    return colorSeed.find((color)=>color.id===id)
  }

  render (){
    return(
      <div className="App">
        <Switch>
          <Route exact path = "/">
          <PaletteList palettes = {colorSeed}/>
          </Route>
          <Route 
            exact 
            path = "/palettes/:id" 
            render = {
              routeProps =>
            <Palette palette = 
            {
              generatePalette(this.findPalettes(routeProps.match.params.id))
            }
            />}>
          </Route>
        </Switch>
    </div> 
    );
  };
}

export default App;
