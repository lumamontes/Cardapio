       function valida(){
           var nome =form_pedido.nome.value
           var endereco =form_pedido.endereco.value
           var numero =form_pedido.numero.value
           var bairro =form_pedido.bairro.value
           var cupom =form_pedido.cupom.value
           var mensagem =form_pedido.mensagem.value
           
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
     
    } 
       
       
 