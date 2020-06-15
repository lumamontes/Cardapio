//BOtão de enviar as informações no WhatsApp

$(document).ready(function(){
      $("#enviar").click(function(){
       var nome=$("#nome").val()
       var endereco=$("#endereco").val()
       var numero=$("#numero").val()
       var bairro=$("#bairro").val()
       var observacao = $("textarea").val()
       
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

        // Valor do Pedido
        var soma = 0; 
       
        // Pedido Selecionado
        
        var pedido = "" 
        const pedidosDisponiveis = document.querySelectorAll("input[type=checkbox]")
        var pedidoSelecionado = ""
    
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
        var valorTotal = soma + TaxaDeEntrega
        var texto=`${nome};${endereco} ; ${bairro}; ${numero}; ${observacao}; 
        // Forma de pagamento: ${formaSelecionada}, Pedido: ${pedidoSelecionado}, Adicionais: ${adicionalSelecionado},
         Valor Pedido = ${soma},00 
         ;Taxa de entrega: 
         ;Valor Total:` 
        
        var site="https://api.whatsapp.com/send?phone=5596991410023"+texto.replace(" ","%20")
        window.location.href= site;
        console.log(site)

        
    })
})
