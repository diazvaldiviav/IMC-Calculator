let button = document.querySelector(".btn-calc");

button.addEventListener("click", ()=>{
    let peso = parseFloat(document.querySelector("#peso").value);
    let estatura = parseFloat(document.querySelector("#estatura").value)
   

    calcularImcHombre(peso,estatura);
})


function calcularImcHombre(peso, altura) {

    let imc = peso/Math.pow(altura,2)

   if(imc < 20){
    alert("Su IMC es de " + imc + " Tiene Bajo peso");
   }
   else if(imc > 20 && imc <= 27){
    alert("Su IMC es de " + imc + " Tiene un peso normal");
   }
    
   else if(imc > 27 && imc <= 30){
    alert("Su IMC es de " + imc + " Tiene sobrepeso");
   }

   else if(imc > 30 && imc <= 40){
    alert("Su IMC es de " + imc + " Tiene obesidad");
   }

   else if(imc > 40){
    alert("Su IMC es de " + imc + " Tiene obesidad morbida");
   }
}