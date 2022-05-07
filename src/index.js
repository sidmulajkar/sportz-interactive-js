import playerData from "./playerdata";
import cardText from "./playerdata";

{/* <div class"playerInfo">
<img src"./player-images/63706.jpg" alt"ronaldo">
<div class"cardText">
    <h3 class"pfName">Cristiano Ronaldo</h3>
    <p class"skillDesc">Left Striker</p>
    <p class"value">$100000</p>
    <p class"upComingMatchesList">JUV vs OLY</p>
    <p class"nextMatchTime">2/10/2019 12:00:00 AM</p>
</div>
</div> */}





let htmlCode = ``;

playerData.forEach(function(playerdetail) {
    htmlCode =
    htmlCode +
    `
    <div class = "playerInfo">
        <div>
        <img src="${playerdetail.img}" >
        </div>
        <div class="cardText">
        <h3 class = "pfName">${playerdetail.pfName}</h3>
        <p class = "tName">${playerdetail.tName}</p>
        <p class = "skillDesc">${playerdetail.skillDesc}</p>
        <p class = "value">${playerdetail.value}</p>
        <p>${playerdetail.upComingMatchesListcCode} vs ${playerdetail.upComingMatchesListvsCode}</p>
        <p>${playerdetail.nextMatchTime}</p>
        </div>
    </div>
    `;
  // uncomment the line below to see the output in the browser console.
  // console.log(htmlCode);

});

const playerCards = document.querySelector(".cards");
playerCards.innerHTML = htmlCode;



//new search 
// function searchFun() {
//     let filter = document.getElementById('search').value.toUpperCase();

//     let playerSearch = document.getElementsByClassName('cardText');

//     for(var i=0; i < cardText.length; i++){
//         let name = playerSearch[i].getElementsByTagName('h3')[0];

//         let textValue = name.textContent || name.outerHTML;

//         if(textValue.toUpperCase().indexOf(filter) > -1){
//             name[i].style.display = '';
//         }else{
//             name[i].style.display = 'NAN';
//         }
//     }
// }

// need to work on this
const searchInput = document.querySelector("[data-search]")


searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    console.log(value)
})


// searchFun();