let canvas=document.querySelector('canvas')
let ctx=canvas.getContext('2d')

//Making a triangle using path
ctx.beginPath();
ctx.moveTo(100,100)
ctx.lineTo(200,200)
ctx.lineTo(300,100)
ctx.lineTo(100,100)
// ctx.stroke();   //if wanting border
ctx.fill();   //if filling inside too
ctx.closePath();

//Text
ctx.font='28px monospace'
ctx.fillStyle='red'
ctx.fillText("Adi fatso",140,100)