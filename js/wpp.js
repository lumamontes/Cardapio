    // Enviar no wpp
    // Atualmente, só as informações adicionadas form
    // Pensar em lógica pra puxar infos dos itens também 
      $("#enviar").click(function(){
       var nome=$("#nome").val()
       var endereco=$("#endereco").val()
       var numero=$("#numero").val()
       var bairro=$("#bairro").val()
       var pagamento=$("#dinheiro").val()

        var texto=`${nome}, ${pagamento}, ${bairro}, ${endereco}. ${numero}`
       if(nome=="")

    {alert("digite as informações corretas né")
  }else{
      var texto=`${nome}, ${pagamento}, ${bairro}, ${endereco}, ${numero} Vim através do sistema`
      var site="https://api.whatsapp.com/send?phone=5596991410023"+texto.replace(" ","%20")
      window.location.href=site;

  }
     })



  
