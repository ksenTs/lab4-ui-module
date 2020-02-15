import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnChanges {

  @Input() public radius: number = 0;

  constructor() { }

  private ctx: CanvasRenderingContext2D;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.radius && changes.radius.currentValue >= 0) {
      this.renderCanvas(changes.radius.currentValue);
    }
  }

  renderCanvas(radius: number): void {
    let canvas;
    try {
      canvas = document.getElementById('canvas');
      this.ctx = canvas.getContext('2d');
    } catch (e) {
      alert('Ваш браузер не поддерживает элемент HTML5 Canvas');
      console.log(e);
      document.getElementById('support').innerHTML =
        "<br><br><img src='area.jpg' alt='Область' width='420' height='380'>";
      return;
    }
    const size = 360;
    canvas.height = size;
    canvas.width = size;

    //Single segment
    const i = (canvas.width / 2 - 30) / 5;
    radius = radius * i;
    const startX = canvas.height / 2;
    const startY = canvas.width / 2;
    this.ctx.fillStyle = '#3355ff';
    this.ctx.beginPath();

    //Triangle
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(startX - radius / 2, startY);
    this.ctx.lineTo(startX, startY + radius);
    this.ctx.fill();

    //Arc
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(startX, startY - radius/2);
    this.ctx.arc(startX, startY, radius/2, 2*Math.PI, 3*Math.PI/2, true);
    this.ctx.lineTo(startX + radius/2, startY);
    this.ctx.fill();

    //Rectangle
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(startX, startY - radius);
    this.ctx.lineTo(startX - radius/2, startY - radius);
    this.ctx.lineTo(startX - radius/2, startY);
    this.ctx.lineTo(startX, startY);
    this.ctx.fill();

    //Lines
    this.ctx.strokeStyle = '#000000'; // colour of the lines
    this.ctx.strokeRect(startX, 0, 0, canvas.height); // y axis
    this.ctx.strokeRect(0, startY, canvas.width, 0); // x axis

    //Axes' arrows
    this.ctx.moveTo(startX, 0);
    this.ctx.lineTo(startX - 4, 10);
    this.ctx.moveTo(startX, 0);
    this.ctx.lineTo(startX + 4, 10);
    this.ctx.moveTo(canvas.width, startY);
    this.ctx.lineTo(canvas.width - 10, startY - 4);
    this.ctx.moveTo(canvas.width, startY);
    this.ctx.lineTo(canvas.width - 10, startY + 4);

    //X axe strokes
    this.ctx.moveTo(startX - i * 5, startY - 5);
    this.ctx.lineTo(startX - i * 5, startY + 5);
    this.ctx.moveTo(startX - i * 4, startY - 5);
    this.ctx.lineTo(startX - i * 4, startY + 5);
    this.ctx.moveTo(startX - i * 3, startY - 5);
    this.ctx.lineTo(startX - i * 3, startY + 5);
    this.ctx.moveTo(startX - i * 2, startY - 5);
    this.ctx.lineTo(startX - i * 2, startY + 5);
    this.ctx.moveTo(startX - i, startY - 5);
    this.ctx.lineTo(startX - i, startY + 5);
    this.ctx.moveTo(startX + i, startY - 5);
    this.ctx.lineTo(startX + i, startY + 5);
    this.ctx.moveTo(startX + i * 2, startY - 5);
    this.ctx.lineTo(startX + i * 2, startY + 5);
    this.ctx.moveTo(startX + i * 3, startY - 5);
    this.ctx.lineTo(startX + i * 3, startY + 5);
    this.ctx.moveTo(startX + i * 4, startY - 5);
    this.ctx.lineTo(startX + i * 4, startY + 5);
    this.ctx.moveTo(startX + i * 5, startY - 5);
    this.ctx.lineTo(startX + i * 5, startY + 5);


    //Y axe strokes
    this.ctx.moveTo(startX - 5, startY - i * 5);
    this.ctx.lineTo(startX + 5, startY - i * 5);
    this.ctx.moveTo(startX - 5, startY - i * 4);
    this.ctx.lineTo(startX + 5, startY - i * 4);
    this.ctx.moveTo(startX - 5, startY - i * 3);
    this.ctx.lineTo(startX + 5, startY - i * 3);
    this.ctx.moveTo(startX - 5, startY - i * 2);
    this.ctx.lineTo(startX + 5, startY - i * 2);
    this.ctx.moveTo(startX - 5, startY - i);
    this.ctx.lineTo(startX + 5, startY - i);
    this.ctx.moveTo(startX - 5, startY + i);
    this.ctx.lineTo(startX + 5, startY + i);
    this.ctx.moveTo(startX - 5, startY + i * 2);
    this.ctx.lineTo(startX + 5, startY + i * 2);
    this.ctx.moveTo(startX - 5, startY + i * 3);
    this.ctx.lineTo(startX + 5, startY + i * 3);
    this.ctx.moveTo(startX - 5, startY + i * 4);
    this.ctx.lineTo(startX + 5, startY + i * 4);
    this.ctx.moveTo(startX - 5, startY + i * 5);
    this.ctx.lineTo(startX + 5, startY + i * 5);

    this.ctx.stroke();

    //Signatures
    this.ctx.strokeText('-5', startX - i * 5, startY - 10, 20);
    this.ctx.strokeText('-4', startX - i * 4, startY - 10, 20);
    this.ctx.strokeText('-3', startX - i * 3, startY - 10, 20);
    this.ctx.strokeText('-2', startX - i * 2, startY - 10, 20);
    this.ctx.strokeText('-1', startX - i, startY - 10, 20);
    this.ctx.strokeText('1', startX + i, startY - 10, 20);
    this.ctx.strokeText('2', startX + i * 2, startY - 10, 20);
    this.ctx.strokeText('3', startX + i * 3, startY - 10, 20);
    this.ctx.strokeText('4', startX + i * 4, startY - 10, 20);
    this.ctx.strokeText('5', startX + i * 5, startY - 10, 20);
    this.ctx.strokeText('-5', startX + 10, startY + i * 5, 20);
    this.ctx.strokeText('-4', startX + 10, startY + i * 4, 20);
    this.ctx.strokeText('-3', startX + 10, startY + i * 3, 20);
    this.ctx.strokeText('-2', startX + 10, startY + i * 2, 20);
    this.ctx.strokeText('-1', startX + 10, startY + i, 20);
    this.ctx.strokeText('1', startX + 10, startY - i, 20);
    this.ctx.strokeText('2', startX + 10, startY - i * 2, 20);
    this.ctx.strokeText('3', startX + 10, startY - i * 3, 20);
    this.ctx.strokeText('4', startX + 10, startY - i * 4, 20);
    this.ctx.strokeText('5', startX + 10, startY - i * 5, 20);
    this.ctx.strokeText("x", canvas.width - 10, startY - 10, 20);
    this.ctx.strokeText("y", startX + 10, 10, 20);

    this.initPoints();
    this.ctx.closePath();
  }

  private initPoints(): void {
    let points = [];
    const pointsStr = sessionStorage.getItem("points");
    if (pointsStr != null) {
      points = JSON.parse(pointsStr);
      for (let point of points) {
        // this.drawPoint(document.getElementById("canvas").getContext('2d'), 30 * point.x + 180, 180 - 30 * point.y, point.r);
      }
    }
  }

  private drawPoint(context, x, y, r): void {
    const canvas = document.getElementById("canvas");
    const startX = canvas.height / 2;
    const startY = canvas.width / 2;
    const radius = sessionStorage.getItem("radiusValue");

    // if (!isInArea((x - startX) / 150 * 5, (startY - y) / 150 * 5, r)) {
    //   context.fillStyle = 'red';
    // } else {
    //   context.fillStyle = 'green';
    // }
    context.beginPath();
    context.strokeStyle = 'black';
    context.arc(x, y, 3, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
  }

}
