import { Component } from 'react';

class ProgressBar extends Component {
   // рисуем круг
   drawProgressBar(radius, segment, color, anticlockdirection = false) {
      const canvas = document.getElementById('progressCanvas');
      const ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.arc(60, 60, radius, 0, segment, anticlockdirection);
      ctx.lineWidth = 7;
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.closePath();
   }

   // рисуем текст в центре круга
   drawPercentage(percentage) {
      const canvas = document.getElementById('progressCanvas');
      const ctx = canvas.getContext('2d');

      ctx.clearRect(30, 30, 60, 60);
      ctx.fillStyle = '#000';
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(percentage + '%', 60, 60);
   }

   componentDidMount() {
      this.drawProgressBar(52, 2 * Math.PI, '#4ca89a');
      this.drawProgressBar(45, this.props.completed / 2, '#96d6f4');
      this.drawPercentage(Math.round((this.props.completed / this.props.total) * 100));
   }

   componentDidUpdate(oldProps) {
      const { total, completed } = this.props;
      let result = Math.round((completed / total) * 100); // проценты прочтения

      if (oldProps.completed <= completed) {
         this.drawProgressBar(45, 2 * Math.PI * (completed / total), '#96d6f4');
         this.drawPercentage(result);
      } else {
         this.drawProgressBar(45, 2 * Math.PI * (completed / total), '#fff', true);
         this.drawPercentage(result);
      }
   }

   render() {
      return <canvas id='progressCanvas' width='120' height='120' className='progress'></canvas>;
   }
}

export default ProgressBar;
