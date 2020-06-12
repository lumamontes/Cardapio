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

//  const itens = document.querySelectorAll(".icone")

//  for(const item of itens) {
//      addEventListener("click", "")
//  }

   // adicionar ou remover uma classe com JavaScript
   $('input[type=checkbox]').click(function(){ 
      const todosInputs = document.getElementsByClassName('item-checkbox')
      const todosAdicionais = document.getElementsByClassName('adicionais')
      for(input of todosInputs){   
         todosAdicionais.toggleClass('hidden')
      }
         
         
      }

   )
