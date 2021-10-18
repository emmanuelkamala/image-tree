import React from 'react';
import tree from './tree.jpg';
import './canvas.css';

class Canvas extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image
    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      ctx.lineWidth = 3;
      ctx.strokeStyle = "blue";
      ctx.strokeRect(625, 505, 30, 30)
    };
    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";
    ctx.strokeRect(625, 505, 30, 30)
  }

  render() {
    return(
      <div>
        <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight} className="tree" />
        <img ref="image" src={tree} alt="tree" className="tree-one" />
      </div>
    )
  }
}
export default Canvas
