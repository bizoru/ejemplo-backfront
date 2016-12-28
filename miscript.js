console.log("Hola!!");



function calcular(){
  var valor = document.getElementsByName("numero_uno")[0].value;


  if(!isNaN(valor)){
        var nvalor = parseInt(valor) + 1;
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("resultado").innerHTML = "El valor es: "+nvalor;
  }else{

    document.getElementById("resultado").innerHTML = "No es un numero!!";

  }
  console.log(valor);
}


$(function(){

   $("input[name=enviar]").click(function(event){
      event.preventDefault();
      var numero = $("input[name=numero_uno]").val();
      console.log("hice click!");
      $.ajax({
        type:"POST",
        url:"calculo.php",
        data: {numero_uno: numero},
        success: function(data){
          $("#resultado").html(data.calculo);
       },
       dataType:"json"
     });

   });


});
