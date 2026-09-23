let a = [5,2,3,7,6];
let b = [16,5];
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
