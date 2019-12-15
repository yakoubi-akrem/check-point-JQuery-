

var getText = document.getElementById("Text")


function onBold(){
    
    if(getText.style.fontWeight=="bold")
       {
           getText.style.fontWeight="normal"
        }
       else
       {
        getText.style.fontWeight="bold"
       }
}

function italics(){

    if(getText.style.fontStyle=="italic")
    {
        getText.style.fontStyle="normal"
     }
    else
    {
     getText.style.fontStyle="italic"
    }

}

function underline(){

    if(getText.style.textDecoration=="underline")
    {
        getText.style.textDecoration="none"
    }
    else
    {
        getText.style.textDecoration="underline"
    }
}


function taille_texte()
{
    getText.style.fontSize=document.getElementById("size").value
}


function changement()
{
    getText.style.fontFamily=document.getElementById("change").value
}


$("#img1").mouseenter(function(){
    $("#img1").css("opacity","0.7")
    $("#BT1").show();
})
$("#img1").mouseleave(function(){
    $("#img1").css("opacity","1")
    $("#BT1").hide();
})

$("#img2").mouseenter(function(){
    $("#img2").css("opacity","0.7")
    $("#BT2").show();
})
$("#img2").mouseleave(function(){
    $("#img2").css("opacity","1")
    $("#BT2").hide();
})

$("#img3").mouseenter(function(){
    $("#img3").css("opacity","0.7")
    $("#BT3").show();
})
$("#img3").mouseleave(function(){
    $("#img3").css("opacity","1")
    $("#BT3").hide();
})

$("#img4").mouseenter(function(){
    $("#img4").css("opacity","0.7")
    $("#BT4").show();
})
$("#img4").mouseleave(function(){
    $("#img4").css("opacity","1")
    $("#BT4").hide();
})


$("#img5").mouseenter(function(){
    $("#img5").css("opacity","0.7")
    $("#BT5").show();
})
$("#img5").mouseleave(function(){
    $("#img5").css("opacity","1")
    $("#BT5").hide();
})


$("#img6").mouseenter(function(){
    $("#img6").css("opacity","0.7")
    $("#BT6").show();
})
$("#img6").mouseleave(function(){
    $("#img6").css("opacity","1")
    $("#BT6").hide();
})


$("#img7").mouseenter(function(){
    $("#img7").css("opacity","0.7")
    $("#BT7").show();

})
$("#img7").mouseleave(function(){
    $("#img7").css("opacity","1")
    $("#BT7").hide();
})



$("#img8").mouseenter(function(){
    $("#img8").css("opacity","0.7")
    $("#BT8").show();

})
$("#img8").mouseleave(function(){
    $("#img8").css("opacity","1")
    $("#BT8").hide();
})



$("#img9").mouseenter(function(){
    $("#img9").css("opacity","0.7")
    $("#BT9").show();

})
$("#img9").mouseleave(function(){
    $("#img9").css("opacity","1")
    $("#BT9").hide();
})
