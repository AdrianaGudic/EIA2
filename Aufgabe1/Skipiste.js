window.addEventListener("load", init);
function init() {
    let canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    let crc2 = canvas.getContext("2d");
    console.log(crc2);
    //Himmel
    crc2.fillStyle = "#CEECF5";
    crc2.fillRect(0, 0, 800, 600);
    //Berg1
    crc2.beginPath();
    crc2.moveTo(120, 80);
    crc2.lineTo(550, 600);
    crc2.lineTo(30, 600);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#D8D8D8";
    crc2.fill();
    //Berg1
    crc2.beginPath();
    crc2.moveTo(120, 80);
    crc2.lineTo(300, 600);
    crc2.lineTo(-100, 400);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#BDBDBD";
    crc2.fill();
    //Berg2
    crc2.beginPath();
    crc2.moveTo(330, 80);
    crc2.lineTo(700, 600);
    crc2.lineTo(400, 600);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#D8D8D8";
    crc2.fill();
    //Berg2
    crc2.beginPath();
    crc2.moveTo(330, 80);
    crc2.lineTo(400, 600);
    crc2.lineTo(0, 400);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#BDBDBD";
    crc2.fill();
    //Piste
    crc2.beginPath();
    crc2.moveTo(0, 100);
    crc2.lineTo(0, 600);
    crc2.lineTo(1100, 600);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    //Baum1
    crc2.beginPath();
    crc2.moveTo(200, 350);
    crc2.lineTo(240, 450);
    crc2.lineTo(160, 450);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#0B610B";
    crc2.fill();
    //Baumstamm1
    crc2.beginPath();
    crc2.moveTo(190, 450);
    crc2.lineTo(210, 450);
    crc2.lineTo(210, 480);
    crc2.lineTo(190, 480);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#61380B";
    crc2.fill();
    //Baum2
    crc2.beginPath();
    crc2.moveTo(680, 340);
    crc2.lineTo(710, 430);
    crc2.lineTo(650, 430);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#0B610B";
    crc2.fill();
    //Baumstamm2
    crc2.beginPath();
    crc2.moveTo(670, 430);
    crc2.lineTo(690, 430);
    crc2.lineTo(690, 450);
    crc2.lineTo(670, 450);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#61380B";
    crc2.fill();
    //Sonne
    crc2.beginPath();
    crc2.arc(700, 70, 60, 0, 2 * Math.PI);
    crc2.fillStyle = "#FE9A2E";
    crc2.fill();
    //Liftseil
    crc2.beginPath();
    crc2.moveTo(0, 150);
    crc2.lineTo(800, 800);
    crc2.closePath();
    crc2.strokeStyle = "#000000";
    crc2.stroke();
    //Liftbefestigung
    crc2.beginPath();
    crc2.moveTo(150, 270);
    crc2.lineTo(160, 280);
    crc2.lineTo(160, 300);
    crc2.lineTo(150, 300);
    crc2.closePath();
    crc2.strokeStyle = "#B40404";
    crc2.stroke();
    crc2.fillStyle = "#B40404";
    crc2.fill();
    //Liftgondel
    crc2.beginPath();
    crc2.moveTo(120, 300);
    crc2.lineTo(190, 300);
    crc2.lineTo(190, 350);
    crc2.lineTo(120, 350);
    crc2.closePath();
    crc2.strokeStyle = "#B40404";
    crc2.stroke();
    crc2.fillStyle = "#B40404";
    crc2.fill();
    //Gondelfenster
    crc2.beginPath();
    crc2.moveTo(140, 310);
    crc2.lineTo(180, 310);
    crc2.lineTo(180, 340);
    crc2.lineTo(140, 340);
    crc2.closePath();
    crc2.strokeStyle = "#A9E2F3";
    crc2.stroke();
    crc2.fillStyle = "#A9E2F3";
    crc2.fill();
    //Wolke
    crc2.beginPath();
    crc2.arc(500, 100, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    //Wolke
    crc2.beginPath();
    crc2.arc(530, 100, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    //Wolke
    crc2.beginPath();
    crc2.arc(570, 100, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    //Wolke
    crc2.beginPath();
    crc2.arc(550, 80, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    //Wolke
    crc2.beginPath();
    crc2.arc(520, 80, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
}
