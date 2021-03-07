canvas=document.getElementById("mycanvas");
CTX=canvas.getContext("2d");
color="black";

CTX.beginPath();
CTX.strokeStyle="black";
CTX.lineWidth=5;
CTX.rect(150,100,1100,400);
CTX.stroke();

CTX.beginPath();
CTX.strokeStyle="blue";
CTX.lineWidth=5;
CTX.arc(500,250,80,0,2*Math.PI);
CTX.stroke();

CTX.beginPath();
CTX.strokeStyle="yellow";
CTX.lineWidth=5;
CTX.arc(600,350,80,0,2*Math.PI);
CTX.stroke();

CTX.beginPath();
CTX.strokeStyle="black";
CTX.lineWidth=5;
CTX.arc(700,250,80,0,2*Math.PI);
CTX.stroke();

CTX.beginPath();
CTX.strokeStyle="green";
CTX.lineWidth=5;
CTX.arc(800,350,80,0,2*Math.PI);
CTX.stroke();

CTX.beginPath();
CTX.strokeStyle="red";
CTX.lineWidth=5;
CTX.arc(900,250,80,0,2*Math.PI);
CTX.stroke();
