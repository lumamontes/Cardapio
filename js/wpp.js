$(document).ready(function(){
      $("#enviar").click(function(){
       var nome=$("#nome").val()
       var endereco=$("#endereco").val()
       var numero=$("#numero").val()
       var bairro=$("#bairro").val()
       const formasDePagamento= document.querySelectorAll("form input[type=radio]")
       var formaSelecionada = ""
       if(formasDePagamento[0].checked){
           formaSelecionada = "Dinheiro"
        } else if (formasDePagamento[1].checked) {
            formaSelecionada =" Cartão de Crédito"
        } else {
            formaSelecionada = "cartão de Débito"
            
        }
        var pedido = "" 
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
        
        var texto=`${nome} ,${endereco} , ${bairro}, ${numero}, ${formaSelecionada} , ${pedidoSelecionado} , Valor Total = ${soma}`
        
        var site="https://api.whatsapp.com/send?phone=5596991410023"+texto.replace(" ","%20")
        // console.log(site)
        
    })
})

// const BotaoAdicionais = document.querySelectorAll(".btnAdd")
// const Hide = document.querySelectorAll('.ADDhidden')
// const Adicionais = document.querySelectorAll(".adicionais")
// const botao1 = document.getElementsByClassName('btnAdd-1')
//     $(botao1).click(function(){
//         $('#adicionais-2').addClass('ADDhidden')
//         $('#adicionais-3').addClass('ADDhidden')
//         $('#adicionais-4').addClass('ADDhidden')
//         $('#adicionais-5').addClass('ADDhidden')
//         $('#adicionais-6').addClass('ADDhidden')

//         $('#adicionais-1').removeClass('ADDhidden')
//         $('#adicionais-1').addClass('ADDactive')
//         // console.log(BotaoAdicionais[0])
//         // console.log(BotaoAdicionais[1])
//         // console.log(BotaoAdicionais[2])
//         // console.log(BotaoAdicionais[3])
        
//     })
    
//     console.log(BotaoAdicionais[0])
//     console.log(botao1)




  
