/*Valid Triangle */
let angle1 = 60;
let angle2 = 90;
let angle3 = 30;
let sommeAnngles = angle1 + angle2 + angle3;

if (sommeAnngles === 180 && (angle1 > 0 && angle2 > 0 && angle3 > 0)){
       console.log ("c'est un triangle");
}else{
    console.log("ce n'est pas un triangle");
}

