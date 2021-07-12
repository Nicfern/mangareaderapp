import {Mangas} from "../js/data.js";


function mangaClicked(Id)
        {
            window.localStorage.setItem("lastClicked",Id);
            window.location.href="../html/vermanga.html";
        }

document.addEventListener("DOMContentLoaded",function(event){

    
    var stringCarousel = "";
        
    Mangas.forEach(x => {
        stringCarousel += "<div class='item'>" + x.Name + "<img id='"+x.Name + x.Id +"' src='"+ x.Cover + "'> </div>";
    });

    document.getElementById("carouselcontainer").innerHTML = stringCarousel;
    
    Mangas.forEach(x => {
        document.getElementById(x.Name + x.Id).addEventListener("click",function(){mangaClicked(x.Id)});
    })

});