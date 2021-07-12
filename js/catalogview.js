import  {Mangas} from "../js/data.js";

document.addEventListener("DOMContentLoaded",function(event){

console.log(Mangas);
var mangaClicked= window.localStorage.getItem("lastClicked");
var manga;

Mangas.forEach(x=> { 
    if (x.Id == mangaClicked) 
    {
        manga = x;
    }
})
document.getElementById("mangaContent").innerHTML = "<div class='mangaContainer'> <div class='imgContainer'> <img src='" + manga.Cover + "'> </div> <div class='mangaInfo'><h1>" + manga.Name + "</h1><p>" + manga.Description + "</p></div></div>"

var chapterString = "";

manga.Chapters.forEach( x=>{
    chapterString += "<li>"+x.Number+"--"+x.Name+"----"+x.DatePublished+"</li>"
})
document.getElementById("chapterList").innerHTML = chapterString;

});