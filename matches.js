// write js code here corresponding to matches.html

displaybody=JSON.parse(localStorage.getItem("schedule"))
console.log(displaybody)
display(displaybody)

function filterByVenue(){
    var selected =document.querySelector("#filterVenue").value 

    var filtervalue=displaybody.filter(function(elem){
        return elem.matchVenue==selected;

    });

    console.log(filtervalue)
    display(filtervalue)

}

function display(data){


data.forEach(function(elem){

var tr=document.createElement("tr")

var td1=document.createElement("td")
td1.innerText=elem.matchNumber

var td2=document.createElement("td")
td2.innerText=elem.teamA


var td3=document.createElement("td")
td3.innerText=elem.teamB



var td4=document.createElement("td")
td4.innerText=elem. matchDate



var td5=document.createElement("td")
td5.innerText=elem. matchVenue

var td6=document.createElement("td")
td6.innerText="Add as Favourites"
td6.style.color="green"
td6.style.cursor="pointer"
td6.addEventListener("click",function(){

    addFavourite(elem)
    window.location.href="favourites.html"

})
   





tr.append(td1,td2,td3,td4,td5,td6)

var report=document.querySelector("tbody")
report.append(tr)





})


}

var favouritesarray=JSON.parse(localStorage.getItem("favourites")) || []

function addFavourite(elem){

    favouritesarray.push(elem)

    localStorage.setItem("favourites",JSON.stringify( favouritesarray))


   }