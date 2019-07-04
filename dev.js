

var x = Math.floor(Math.random() * 100) + 1;
var y=0;
var i=0;
rep="O";

do
   do {             
            y = Number(prompt("Donnez un nombre entre 1 et 100:"));

            if (y<x)
            {
                console.log(y+" est trop petit!");
            }
            else if (y>x)
            {
                console.log(y+" est trop grand!");
            }
            else if (Number.isNaN(y)){
                alert("il faut donner un nombre!");
                            
            }
            else if (y<1||y>100){
                alert("il faut donner un nombre compris entre 1 et 100!");
            }
           i++;
        
    
   } while(i<6 &&  y!==x);

   if(y===x)
   {
      console.log("Bravo! Le nombre recherché est " + x );
   }

   else
   {
      console.log("vous avez échoué! Le nombre recherché est" + x);
   } 
   
   rep = (prompt("voulez vous recommencer le jeu ? [O/N]"));
while (rep=="O");
