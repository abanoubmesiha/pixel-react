import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
        <div className="container">
            <h1>Lab: Pixel Art Maker</h1>
            <h2>Choose Grid Size</h2>
            <form id="sizePicker">
                Grid Height:
                <input type="number" id="inputHeight" name="height" min="1" value="10" />
                Grid Width:
                <input type="number" id="inputWidth" name="width" min="1" value="10" />
                <button id="submit" type="button">Submit</button>
            </form>

            <h2>Pick A Color</h2>
            <input type="color" id="colorPicker" />

            <h2>Design Canvas</h2>
            <table id="pixelCanvas"></table>
        </div>
    );
}

export default App;
