$(function(){

    $('#i-sobre').click(function(i){
      $(this).toggleClass('selected')
      $('#i-lan').removeClass('selected')
      $('#i-bebidas').removeClass('selected')
      $('#i-pedidos').removeClass('selected')
      
      
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
      $(this).toggleClass('selected')
      $('#i-sobre').removeClass('selected')
      $('#i-bebidas').removeClass('selected')
      $('#i-pedidos').removeClass('selected')

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
   $(this).toggleClass('selected')
   $('#i-sobre').removeClass('selected')
   $('#i-lan').removeClass('selected')
   $('#i-pedidos').removeClass('selected')

    $("#lanches").addClass("hidden")
    $("#sobre").addClass("hidden")
    $("#pedido").addClass("hidden")
    $("#adicionais").addClass("hidden")
 
     $('#bebidas').removeClass('hidden');
     $(this).addClass('active');
 
 });
 }); 
 
 
 $(function(){
 $('#i-pedidos').click(function(i){
    $(this).toggleClass('selected')
    $('#i-sobre').removeClass('selected')
    $('#i-lan').removeClass('selected')
    $('#i-bebidas').removeClass('selected')

    $("#lanches").addClass("hidden")
    $("#sobre").addClass("hidden")
    $("#adicionais").addClass("hidden")
    $("#bebidas").addClass("hidden")
 
     $('#pedido').removeClass('hidden');
     $(this).addClass('active');
 
 });
 }); 
 
 // adicionar ou remover uma classe com JavaScript

// const todasLi = document.querySelectorAll('header li a')
// for (li of todasLi){
//    addEventListener("click", selecionarLi)
// }
// function selecionarLi(event){
// const Li = event.target
// Li.classList.toggle("selected")
// }


