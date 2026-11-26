$(function(){

    
    // walidacja fromularza

    $("form").submit(function(e){
        e.preventDefault

        let opis = $("#opis").trim()
        let kwota = $("#kwota").trim()
        let typ = $("#typ")
        let kategoria = $("#kategoria")

        if(opis.length == 0){
            
        }

        if(kwota > 0){

        }



    })


})