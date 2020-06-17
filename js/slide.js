$(document).ready(function(){
$("#slide figure img:eq(0)").show().addClass('ativo')
})  

// função para passar as imagens
    function slide() {
        if ($(".ativo").next().length){
            $(".ativo").fadeOut().removeClass('ativo').next().fadeIn().addClass("ativo")
            
        
        }else{
            $(".ativo").fadeOut().removeClass("ativo")
            $("#slide figure img:eq(0)").fadeIn().addClass('ativo')
            
            $("#slide p").fadeOut().remove()
        }
    }
// intervalo de tempo da função
    setInterval(slide, 5000)

// seta pra avançar >>
    $("#avancar").click(slide)
            
// seta pra voltar <<

    $("#voltar").click(function(){
        if($(".ativo").attr("alt")!="Cozinha"){
            $("#slide").fadeIn()
        }else {
            $(".ativo").fadeOut().removeClass("ativo")
            $("#slide figure img:eq(2)").fadeIn().addClass("ativo")
        }
    })

   