// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit",masaiFunction)

var masaiArray=JSON.parse(localStorage.getItem("schedule")) || []

function masaiFunction(){
    event.preventDefault();

    var masaiObj={

        matchNumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        matchDate:masaiForm.date.value,
        matchVenue:masaiForm.venue.value,


    }
    masaiArray.push(masaiObj)
    console.log( masaiArray)
    localStorage.setItem("schedule",JSON.stringify(masaiArray))
    window.location.href="matches.html"
}