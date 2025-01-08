import { Component } from 'react';

class ProgressBar extends Component {
   componentDidMount() {
      const canvas = document.getElementById('progressCanvas');
      const outer = canvas.getContext('2d'); // внешнее кольцо

      function drawOuterProgressBar() {
         outer.beginPath();
         outer.arc(60, 60, 52, 0, 2 * Math.PI);
         outer.lineWidth = 7;
         outer.strokeStyle = '#4ca89a';
         outer.stroke();
         outer.closePath();
      }

      drawOuterProgressBar();
   }

   componentDidUpdate(oldProps) {
      const { total, completed } = this.props; 

      function drawInnerProgressBar() {
         const canvas = document.getElementById('progressCanvas');
         const inner = canvas.getContext('2d'); // внутреннее кольцо

         if (oldProps.completed !== total) {
            inner.beginPath();
            inner.arc(60, 60, 45, 0 , 2 * Math.PI * (completed / total));
            inner.lineWidth = 7;
            inner.strokeStyle = '#96d6f4';
            inner.stroke();
            inner.closePath();
         }
      }

      drawInnerProgressBar();
   }

   render() {
      return <canvas id='progressCanvas' width='120' height='120' className='progress'></canvas>;
   }
}

export default ProgressBar;
