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
       
      function valida(){
         var nome =form_pedido.nome.value
         var endereco =form_pedido.endereco.value
         var numero =form_pedido.numero.value
         var bairro =form_pedido.bairro.value
         var cupom =form_pedido.cupom.value
         var mensagem =form_pedido.mensagem.value
         var radios = document.getElementsByName("pagamento")
         var formapagamento = ''
         console.log(valida)
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
         formapagamento = 'Dinheiro'
         return true

         
      } else if (radios[1].checked){
         formapagamento = 'Cartão de Crédito'
         return true


      } else {
         formapagamento =" Cartão de Débito"
      } 
      if (radios[0].checked == false && radios[1].checked == false && radios[2].checked == false){
         alert("Escolha uma forma de pagamento, por favorzi")
      radios.focus()
      return false
      }
   } 



   var itens = document.getElementsByClassName("lanches_info")[0]
   var itensQuantidade = itens.getElementsByClassName("lanches_quant")[0]
   var item = itensQuantidade.getElementsByClassName('item_quant').innerHTML
   var btnAdicionar = itens.getElementsByClassName("btnA")[0]
   
   btnAdicionar.addEventListener('click', () => {
    var itens = document.getElementsByClassName("lanches_info")[0]
    var itensQuantidade = itens.getElementsByClassName("lanches_quant")[0]
    var item = itensQuantidade.getElementsByClassName('item_quant')[0]
    item.innerHTML = Number(item.innerHTML) + 1;
})


function retirarItem(){
   var item = itensQuantidade.getElementsByClassName('item_quant')[0].innerHTML
   item--;
   itensQuantidade.getElementsByClassName('item_quant')[0].innerHTML = item;
}

   var btnRemove = itens.getElementsByClassName("btnB")[0]
   btnRemove.addEventListener('click', retirarItem)
   console.log("lanches_info")

   function nome(){
      var nome= form_pedido.nome.value
      if(nome==""){
          alert("Por favor, informe seu nome completo para o pedido ser realizado")
          return false
      }
      var regex=/[]/
  }
   





       

