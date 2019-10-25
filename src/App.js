import React, {Component} from 'react';


class App extends Component {
  constructor(){
    super();
    this.state={
      height:10,
      width:2

    }
    this.handleChangeHeight=this.handleChangeHeight.bind(this);
    this.handleChangeWidth=this.handleChangeWidth.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(event){
    const color = document.querySelector("#colorPicker").value;
    event.target.style.backgroundColor = color;
    };
  
  handleChangeHeight(event){
    this.setState({
      height: event.target.value
    })
  }
  handleChangeWidth(event){
    this.setState({
      width: event.target.value
    })
  }
  render() {

      let rows = [];
      for (let r = 0; r < this.state.height; r++){
        let rowID = `row${r+1}`;
        let cells = [];
        for (let c = 0; c < this.state.width; c++){
          let cellID = `cell${r+1}-${c+1}`;
          cells.push(<td key={cellID} id={cellID} 
                        onClick={this.handleClick.bind(this)}
                        style={{backgroundColor: "#ffffff"}}></td>)
        } //console.log(cells);
        rows.push(<tr key={rowID} id={rowID}>{cells}</tr>)
      }
     //console.log(rows);
    const {height, width} = this.state;
      return (
        <div className="container">
            <h1>Lab: Pixel Art Maker</h1>
            <h2>Choose Grid Size</h2>
            <form id="sizePicker">
                Grid Height:
                <input type="number" id="inputHeight" name="height" min="1"
                      value={height} onChange={this.handleChangeHeight} />
                Grid Width:
                <input type="number" id="inputWidth" name="width" min="1"
                      value={width} onChange={this.handleChangeWidth} />
            </form>

            <h2>Pick A Color</h2>
            <input type="color" id="colorPicker" />
            <h2>Design Canvas</h2>
            <table>
            <thead>
              
            </thead>
            <tbody>
            {rows}
            </tbody>
            <tfoot>

            </tfoot>
            </table>
        </div>
    );
}
}
export default App;
