   function pesquisar(){
   var nome = document.getElementById
   ("nome").value;
   var destino = document.querySelector("#destino").value;
   var idade = document.getElementById("idade").value;

   if (idade <= 18 || idade == 0) {
      alert("ATENÇÂO! Menor de Idade, Viajem permitida apenas com autorização")
      
   } else if (idade >= 18 ){
      alert("tudo ok")   
   }        
   var img1 = document.createElement("img");
   img1.src = "riodejaneiro.jpg"

   var img2 = document.createElement("img");
   img2.src = "saopaulo.jpg"

   var img3 = document.createElement("img");
   img3.src = "espiritosanto.png"

   var img4 = document.createElement("img");
   img4.src = "minas.jpg"

   var src = document.querySelector('#resultadopesquisa');

   document.getElementById("res").innerHTML = `<h3>Olá ${nome} você escolheu viajar para ${destino}</h3> `

   if (destino == "Rio de Janeiro"){
    document.getElementById("resultadopesquisa").innerHTML ="<button>Classe economica</button> <br><br> <button>Primeira Classe</button> <br><br>";
    
    src.appendChild(img1) ;
 }   
     else if(destino == "São Paulo"){
        document.getElementById("resultadopesquisa").innerHTML = "<button>Classe economica</button> <br><br> <button>Primeira Classe</button> <br><br>";
        src.appendChild(img2);
       }
         

       else if(destino == "Espirito santo"){
        document.getElementById("resultadopesquisa").innerHTML = "<button>Classe economica</button> <br><br> <button>Primeira Classe</button> <br><br>";
        src.appendChild(img3);
      
       }
         
       else {
         document.getElementById("resultadopesquisa").innerHTML = "<button>Classe economica</button> <br><br> <button>Primeira Classe</button> <br><br>";
       
        src.appendChild(img4);

       
   }
       }
