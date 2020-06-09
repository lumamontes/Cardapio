        //Validações
        
        function nome(){
        var nome =form_pedido.nome.value
        if(nome==""){
        alert("Por favor, informe seu nome completo.")
        return false
      }
      var regex=/[0-9]/
      if(regex.test(nome)==true){
         alert("Seu nome não pode ter números.")
         return false
      
      }
      var regexa=/[!-@]/
      if(regexa.test(nome)==true){
         alert("nao pode")
      }
      if(nome.length>=30){
         alert("Por favor, digite até 30 caracteres!")
         
      }
      if(nome.length<=2){
         alert("Digite seu nome.")
      }

     }
     function endereco(){
        var endereco =form_pedido.endereco.value
        if(endereco==""){
        alert("Por favor, informe seu endereço.")
      }
       var regex=/[0-9]/
       if(regex.test(endereco)==true){
          alert("Seu endereço não pode ter numeros.")
       }
     }

     function numero(){
        var numero =form_pedido.numero.value
        if(numero==""){
           alert("Informe o número da sua casa ou apartamento.")
        }
        var regex=/[A-za-z]/
        if(regex.test(numero)==true){
           alert("Coloque apenas números.")
        }
        if(numero.length>=5){
           alert("digite um numero válido")
        }
     }
     function bairro(){
        var bairro =form_pedido.bairro.value
        if(bairro==""){
           alert("Por favor, informe seu bairro.")
        }
        var regex=/[0-9]/
        if(regex.test(bairro)==true){
           alert("Coloque somente letras ao informar o seu bairro")
        }
     }
     function radio(){
      var radios= document.getElementsByName("pagamento")
      var formapagamento=""
     
      if(radios[0].checked){
         formapagamento = 'Dinheiro'
         return true
 
         
      } else if (radios[1].checked){
         formapagamento = 'Cartão de Crédito'
         return true
 
 
      } else {
         formapagamento =" Cartão de Débito"
      } 
      if(radios[0].checked== false && radios[1].checked==false&&radios[2].checked==false){
         alert("Escolha uma forma de pagamento.")
         radios.focus()
         return false
      }
   }     

   function valida(){
        nome()
        endereco()
        numero()
        bairro()
        radio()
     };


     //Adicionar quantidade de itens

     var itens = document.getElementsByClassName("item_info")[1]
     var itensQuantidade = itens.getElementsByClassName("item_quant")[0]
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


  $(function(){
 $('input#adda').click(function(){ 
     $('#item-txt-add').removeClass('item-txt-add');
     $("#item-txt-add").addClass('item-txt-add-show');
 
 });
 }); 


  




      





       

