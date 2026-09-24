const prompt = require('prompt-sync')();
let choix;
do {

function addBook() {  
      let title = prompt("Enter book title")
      let author = prompt ("Entrer author title")
  let book = {
    title : title,
    author : author

  };   

book.push ( book);
console.log ("the book is added.");
  }
 

    console.log ("1.add");
    console.log ("2.display");
    console.log ("3.delet");
    console.log("4.sort");
    console.log ("5.modifier");
    console.log("6.exist");

choix = Number(prompt("entrer votre choix : "));
switch (choix) { 
    case 1 :
        console.log("add.") ;
        break;
     case 2 :
        console.log("display.") ;
        break;
     case 3 :
        console.log("delet.") ;
        break;
     case 4 :
        console.log("sort.") ;
        break;
     case 5 :
        console.log("modifier.") ;
        break;
     case 6 :
        console.log("exist.") ;
        break;   
    default :
            if(choix !== 0 || choix > 6){
                 console.log("choix incorrect. veuiller enter 1, 2, 3, 4, 5, 6.");

            }
        break;
}
 } while (choix !== 0)





    

