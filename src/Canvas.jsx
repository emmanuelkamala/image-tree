import React from 'react';
import tree from './tree.jpg';
import './canvas.css';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.myRef.current;
    const ctx = canvas.getContext("2d")
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)
      ctx.lineWidth = 3;
      ctx.strokeStyle = "blue";
      ctx.strokeRect(785, 480, 30, 30)
    };
    img.src = tree;
  }

  render() {
    return(
      <canvas 
        ref = {this.myRef}
        width={window.innerWidth} 
        height={window.innerHeight} 
        className="tree" 
      />
    )
  }
}

export default Canvas;
