const playerCardTemplate = document.querySelector("[data-player-template]")
const playerCardContainer = document.querySelector("[data-player-cards-container]")
const searchInput = document.querySelector("[data-search]")


//creating an array to store the variables locally and then filter the search results

let playerdata = []

searchInput.addEventListener("input", e => {
    const searchValue = e.target.value.toLowerCase()
    // console.log(searchValue)
        playerdata.forEach(player => {
            const isVisible = 
            player.name.toLowerCase().includes(searchValue) || 
            player.tname.toLowerCase().includes(searchValue)
        player.element.classList.toggle("hide", !isVisible)
    })
})


// fetch('http://127.0.0.1:3000/playerData')
//     .then(res => res.json())
//     .then(data => console.log(data))



fetch("http://127.0.0.1:3000/playerData")
    .then(res => res.json())
    .then(data => {
        playerdata = data.map(players => {
            const playerInfo = playerCardTemplate.content.cloneNode(true).children[0]
            console.log(players);

            const playerImg = playerInfo.querySelector("[player-img]");
            const playerName = playerInfo.querySelector("[playerName]");
            const playerTeamname = playerInfo.querySelector("[player-teamName]");
            const playerSkill = playerInfo.querySelector("[player-skillDes]");
            const playerValue = playerInfo.querySelector("[player-value]");
            const playerupcomingMatch = playerInfo.querySelector("[player-upcomingMatch]");
            const playerupcomingvsMatch = playerInfo.querySelector("[player-upcomingvsMatch]");
            const playernextMatchTime = playerInfo.querySelector("[player-nextMatchTime]");

            //adding the data to the player card contianers
            playerImg.content = players.img
            playerName.textContent = players.pfName
            playerTeamname.textContent = players.tName
            playerSkill.textContent = players.skillDesc
            playerValue.textContent = players.value
            playerupcomingMatch.textContent = players.upComingMatchesListcCode
            playerupcomingvsMatch.textContent = players.upComingMatchesListvsCode
            playernextMatchTime.textContent = players.nextMatchTime

            // appending all the data into playercardContainer
            playerCardContainer.append(playerInfo)
          
          
            return { name: players.pfName, tname: players.tName, element: playerInfo }
        
            
        })
        
})