$(Document).ready(function(){
      $("#enviar").click(function(){
       var nome=$("#nome").val()
       var endereco=$("#endereco").val()
       var numero=$("#numero").val()
       var bairro=$("#bairro").val()
       const formasDePagamento= document.querySelectorAll("form input[type=radio]")
       var formaSelecionada = ""
       var pedido = ""
       if(formasDePagamento[0].checked){
           formaSelecionada = "Dinheiro"
         } else if (formasDePagamento[1].checked) {
             formaSelecionada =" Cartão de Crédito"
         } else {
             formaSelecionada = "cartão de Débito"

         }
         const pedidosDisponiveis = document.querySelectorAll("input[type=checkbox]")       
         var pedidoSelecionado = ""
         var soma = 0; 
         for ( pedido of pedidosDisponiveis) {
                 var pedidoSelecionados = pedido.checked
                 
                 if(pedido.checked == true) {
                     pedidoSelecionado +=` ${pedido.id}, ${pedido.value} Reais` 
                     var pedidosValores  =  parseInt(pedido.value)
                     soma += pedidosValores   
                 }
         }

       var texto=`${nome},${endereco}, ${bairro}, ${numero}, ${formaSelecionada}, ${pedidoSelecionado}, ${soma}`
       
      var site="https://api.whatsapp.com/send?phone=5596991410023"+texto.replace(" ","%20")
      window.location.href=site;
        console.log(site)

    })
})
   


  
