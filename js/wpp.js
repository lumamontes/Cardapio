//BOtão de enviar as informações no WhatsApp

$(document).ready(function(){
      $("#enviar").click(function(){
       var nome=$("#nome").val()
       var endereco=$("#endereco").val()
       var numero=$("#numero").val()
       var bairro=$("#bairro").val()
       var observacao = $("textarea").val()
       var cupom = $("#cupom").val()

       if(cupom.val() === LUMA) {

       }
       console.log(cupom)
       
       // FORMA de pagamento selecionada
       const formasDePagamento= document.querySelectorAll("form input[type=radio]")
       var formaSelecionada = ""
       if(formasDePagamento[0].checked){
           formaSelecionada = "Dinheiro"
        } else if (formasDePagamento[1].checked) {
            formaSelecionada =" Cartão de Crédito"
        } else {
            formaSelecionada = "cartão de Débito"
            
        }

      
        // Pedido Selecionado
        
        var pedido = "" 
        const pedidosDisponiveis = document.querySelectorAll("input[type=checkbox]")
        var pedidoSelecionado = ""
        var soma = 0; 
        for ( pedido of pedidosDisponiveis) {
            var pedidoSelecionados = pedido.checked
            
            if(pedido.checked == true) {
                pedidoSelecionado +=` ${pedido.id} -> ${pedido.value} Reais; ` 
                var pedidosValores  =  parseInt(pedido.value)
                soma += pedidosValores   
            }
        }

        // Adicional Selecionado
        
        const AdicionaisDisponiveis = document.querySelectorAll(".input-add")
        var adicionalSelecionado = ""
        for (adicional of AdicionaisDisponiveis){
            if(adicional.checked == true){
                adicionalSelecionado += `${adicional.alt}: ${adicional.id} -> ${adicional.value} Reais;`
                var adicionaisValores = parseInt(adicional.value)
                soma+= adicionaisValores
            }
            
        }
        
        //Taxa de entrega
        // Valor do Pedido
        var TaxaDeEntrega = 0;

        const Bairros = document.querySelectorAll("option")
        if(Bairros[1].selected==true){
            TaxaDeEntrega += parseInt(Bairros[1].value)
            
        } else if(Bairros[2].selected==true){
            TaxaDeEntrega += parseInt(Bairros[2].value)
            
        } else if(Bairros[3].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[3].value)
            
        } else if(Bairros[4].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[4].value)
            
        } else if (Bairros[5].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[5].value)
            
        }
        // console.log(soma)
        console.log(soma+TaxaDeEntrega)
        // console.log(TaxaDeEntrega)
        
        // var valorTotal = soma +TaxaDeEntrega;
        // console.log(valorTotal)
        var texto=`${nome};${endereco} %0a ; ${bairro}; %0a ${numero}; ${observacao}; 
        // Forma de pagamento: ${formaSelecionada}, Pedido: ${pedidoSelecionado}, Adicionais: ${adicionalSelecionado},
         Valor Pedido = ${soma},00 
         ;Taxa de entrega = ${TaxaDeEntrega}
         ;Valor Total: ${soma+TaxaDeEntrega}` 
        
        var site="https://api.whatsapp.com/send?phone=5596991910012&text="+texto.replace(" ","%20","%0a")
        window.location.href= site;

        
    })
})
