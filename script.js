       function valida(){
           var nome =form_pedido.nome.value
           var endereco =form_pedido.endereco.value
           var numero =form_pedido.numero.value
           var bairro =form_pedido.bairro.value
           var cupom =form_pedido.cupom.value
           var mensagem =form_pedido.mensagem.value
           var radios = document.getElementsByName("pagamento")
           var pagamento = ''
           
           if(nome==""){
           alert("Por favor, informe seu nome completo para o pedido ser realizado.")
           form_pedido.nome.focus()
           return false
                 
        }
           
           
           if(endereco==""){
           alert("Por favor, informe seu enderenço.")
           form_pedido.endereco.focus()
           return false
        }
           
           if(numero==""){
           alert("Por favor, informe o número.")
           form_pedido.numero.focus()
           return false
        }
           
           if(bairro==""){
           alert("Por favor, informe o bairro que o pedido será entregue")
           form_pedido.bairro.focus()
           return false 
        }

        if(radios[0].checked){
           pagamento = 'Dinheiro'
           
        } else if (radios[1].checked){
           pagamento = 'Cartão de Crédito'
        } else  {
           pagamento =" Cartão de Débito"
        }
        alert(`${nome}, ${endereco}, ${numero}, ${bairro}, ${pagamento}`)
     
    } 

//     document.getElementById("btnSubmit").onclick = function() {
      
//       for (var i = 0; i < radios.length; i++) {
//           if (radios[i].checked) {
//               console.log("Escolheu: " + radios[i].value);
//           }
//       }
//   };

   //  document.getElementsByClassName("i-lanches").click(function(){
   //     document.getElementById("lanches
   //  })
       
   $(function(){
      $('#i-sobre').click(function(i){
         $("#lanches").addClass("hidden")
        $("#bebidas").addClass("hidden")
        $("#pedido").addClass("hidden")
        $("#adicionais").addClass("hidden")

        $('#sobre').removeClass('hidden');
        $(this).addClass('active');
        
      });
   }); 
   
   $(function(){
      $('#i-lan').click(function(i){
         $("#sobre").addClass("hidden")
         $("#bebidas").addClass("hidden")
         $("#pedido").addClass("hidden")
         $("#adicionais").addClass("hidden")

          $('#lanches').removeClass('hidden');
          $(this).addClass('active');
 
      });
  });     

$(function(){
   $('#i-bebidas').click(function(i){
      $("#lanches").addClass("hidden")
      $("#sobre").addClass("hidden")
      $("#pedido").addClass("hidden")
      $("#adicionais").addClass("hidden")

       $('#bebidas').removeClass('hidden');
       $(this).addClass('active');

   });
}); 

$(function(){
   $('#i-adicionais').click(function(i){
      $("#lanches").addClass("hidden")
      $("#sobre").addClass("hidden")
      $("#pedido").addClass("hidden")
      $("#bebidas").addClass("hidden")
       $('#adicionais').removeClass('hidden');
       $(this).addClass('active');

   });
}); 

$(function(){
   $('#i-pedidos').click(function(i){
      $("#lanches").addClass("hidden")
      $("#sobre").addClass("hidden")
      $("#adicionais").addClass("hidden")
      $("#bebidas").addClass("hidden")

       $('#pedido').removeClass('hidden');
       $(this).addClass('active');

   });
}); 
