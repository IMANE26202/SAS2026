/*Count Vowels (Loops) */
let v = ("aeouiAEOUI");
let a = ("imane");
let compteur = 0;

for ( i = 0; i < a.length; i++) {
  for ( j = 0; j < v.length; j++){
    if (a [i] === v [j]) {
      console.log ("Voyelle :" + a[i]);
      compteur++;

       } 
      }
     }
console.log("Nombre total de voyelles : " + compteur );
