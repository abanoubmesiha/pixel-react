import React, {Component} from 'react';


class App extends Component {
  constructor(){
    super();
    this.state={
      height:10,
      width:10,
      drag:false

    }
  }
  HandleHoverOn(event){ // drag is ( hovering + drag:true )
    const color = document.querySelector("#colorPicker").value;
    if (this.state.drag) 
    { event.target.style.backgroundColor = color; }
  }
  handleMouseUp(){
        this.setState({
          drag:false
        })
  }
  handleMouseDown(){
    this.setState({
      drag:true
    })
  }
  handleDoubleClickItem(event){
  	event.target.style.backgroundColor = null;
  }
  handleClick(event){
      const color = document.querySelector("#colorPicker").value;
      event.target.style.backgroundColor = color;
  }
  handleNewGrid(){ //make cells without color every time grid dimensions change
    const tds = document.querySelectorAll("td");
    for(var i = 0; i < tds.length; i++){
      tds[i].style.backgroundColor = null; 
    }
  }
  handleChangeHeight(event){
    this.handleNewGrid();
    this.setState({
      height: event.target.value
    });
  }
  handleChangeWidth(event){
    this.handleNewGrid();
    this.setState({
      width: event.target.value
    });
  }
  handleCreateRows(){
    let rows = [];
    for (let r = 0; r < this.state.height; r++){
      let cells = [];
      for (let c = 0; c < this.state.width; c++){
        cells.push(<td 
                      onClick={this.handleClick.bind(this)}
                      onDoubleClick={this.handleDoubleClickItem.bind(this)}
                      onMouseDown={this.handleMouseDown.bind(this)}
                      onMouseUp={this.handleMouseUp.bind(this)}
                      onMouseEnter={this.HandleHoverOn.bind(this)}
                      ></td>)
      }
      rows.push(<tr>{cells}</tr>)
    }
    return rows
  }
  render() {
// generate rows and cells
     
     
     
    const {height, width} = this.state;
      return (
        <div className="container">
            <h1>Lab: Pixel Art Maker</h1>
            <h2>Choose Grid Size</h2>
            <form id="sizePicker">
                Grid Height:
                <input type="number" id="inputHeight" name="height" min="1"
                      value={height} onChange={this.handleChangeHeight.bind(this)} />
                Grid Width:
                <input type="number" id="inputWidth" name="width" min="1"
                      value={width} onChange={this.handleChangeWidth.bind(this)} />
            </form>

            <h2>Pick A Color</h2>
            <input type="color" id="colorPicker" />
            <h2>Design Canvas</h2>
            <table>
            <tbody>
            {this.handleCreateRows()}
            </tbody>
            </table>
            
        </div>
    );
}
}
export default App;
