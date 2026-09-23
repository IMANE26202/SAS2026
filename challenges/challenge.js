let a = [17,80,16,90,30];
let b = [16,90,0];

let trouve = false;

for(i = 0; i < b.length; i++) {
     
for (j = 0; j < a.length; j++){

    if (a [j] == b [i]){  
    trouve = true;
    break;
   } 
 }
if (trouve) break;
}
console.log(trouve);
