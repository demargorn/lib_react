import { Component } from 'react';

class ProgressBar extends Component {
   drawProgressBar(radius, segment, color) {
      const canvas = document.getElementById('progressCanvas');
      const ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.arc(60, 60, radius, 0, segment);
      ctx.lineWidth = 7;
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.closePath();
   }

   componentDidMount() {
      this.drawProgressBar(52, 2 * Math.PI, '#4ca89a');
      this.drawProgressBar(45, this.props.completed / 2, '#96d6f4');
   }

   componentDidUpdate(oldProps) {
      const { total, completed } = this.props;

      if (oldProps.completed !== total) {
         this.drawProgressBar(45, 2 * Math.PI * (completed / total), '#96d6f4');
      }
   }

   render() {
      return <canvas id='progressCanvas' width='120' height='120' className='progress'></canvas>;
   }
}

export default ProgressBar;
