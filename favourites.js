// write js code here corresponding to favourites.html


// favouriteArray=JSON.parse(localStorage.getItem("favourites"))

var favouriteArray=JSON.parse(localStorage.getItem("favourites")) || []

favouriteArray.forEach(function(elem)
{

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
td6.innerText="Delete"
td6.style.color="Red"
td6.style.cursor="pointer"
td6.addEventListener("click",function(){

    removeElement(elem)

})
   





tr.append(td1,td2,td3,td4,td5,td6)

var report=document.querySelector("tbody")
report.append(tr)





})

function removeElement(elem){

    favouriteArray.splice(elem,1);
    localStorage.setItem("favourites",JSON.stringify(favouriteArray));
    window.location.reload();

}