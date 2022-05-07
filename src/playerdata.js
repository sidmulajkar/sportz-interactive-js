const playerData = [
    {
        id: 1,
        img: "./player-images/63706.jpg",
        pfName: "Name : Cristiano Ronaldo",
        tName: "Team: Juventus",
        skillDesc: "Skill: Forward",
        value: "Value: $12",
        upComingMatchesListcCode: "Upcoming Match: JUV",
        upComingMatchesListvsCode: "OLY",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 2,
        img: "./player-images/64257.jpg",
        pfName: "Name : David Silva",
        tName: "Team: Man. City",
        skillDesc: "Skill: Midfield",
        value: "Value: $9.0",
        upComingMatchesListcCode: "Upcoming Match: MC",
        upComingMatchesListvsCode: "SHK",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 3,
        img: "./player-images/72048.jpg",
        pfName: "Name : Edin Dzeko",
        tName: "Team: Roma",
        skillDesc: "Skill: Forward",
        value: "Value: $10.5",
        upComingMatchesListcCode: "Upcoming Match: ASR",
        upComingMatchesListvsCode: "QAR",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 4,
        img: "./player-images/73965.jpg",
        pfName: "Name : Marek Hamsik",
        tName: "Team: Napoli",
        skillDesc: "Skill: Midfield",
        value: "Value: $9.0",
        upComingMatchesListcCode: "Upcoming Match: NAP",
        upComingMatchesListvsCode: "FEY",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 5,
        img: "./player-images/93321.jpg",
        pfName: "Name : Karim Benzema",
        tName: "Team: Real Madrid",
        skillDesc: "Skill: Forward",
        value: "Value: $10.0",
        upComingMatchesListcCode: "Upcoming Match: RM",
        upComingMatchesListvsCode: "BVB",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 6,
        img: "./player-images/95803.jpg",
        pfName: "Name : Linoel Messi",
        tName: "Team: Barcelona  ",
        skillDesc: "Skill: Forward",
        value: "Value: $11.5",
        upComingMatchesListcCode: "Upcoming Match: BAR",
        upComingMatchesListvsCode: "SCP",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 7,
        img: "./player-images/101528.jpg",
        pfName: "Name : Kevin Gameiro",
        tName: "Team: Atletico",
        skillDesc: "Skill: Forward",
        value: "Value: $9.0",
        upComingMatchesListcCode: "Upcoming Match: ATL",
        upComingMatchesListvsCode: "CHE",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 8,
        img: "./player-images/102225.jpg",
        pfName: "Name : Gareth Bale",
        tName: "Team: Real Madrid",
        skillDesc: "Skill: Forward",
        value: "Value: $10.5",
        upComingMatchesListcCode: "Upcoming Match: RM",
        upComingMatchesListvsCode: "BVB",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 9,
        img: "./player-images/103310.jpg",
        pfName: "Name : Ivan Perišić",
        tName: "Team: Internazionale",
        skillDesc: "Skill: Midfield",
        value: "Value: $9.0",
        upComingMatchesListcCode: "Upcoming Match:  ",
        upComingMatchesListvsCode: " ",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 10,
        img: "./player-images/106375.jpg",
        pfName: "Name : Luis Suárez",
        tName: "Team: Barcelona",
        skillDesc: "Skill: Forward",
        value: "Value: $10.5",
        upComingMatchesListcCode: "Upcoming Match: BAR",
        upComingMatchesListvsCode: "SCP",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 11,
        img: "./player-images/1900730.jpg",
        pfName: "Name : Diego Costa",
        tName: "Team: Atlético",
        skillDesc: "Skill: Forward",
        value: "Value: $10.0",
        upComingMatchesListcCode: "Upcoming Match: ATL",
        upComingMatchesListvsCode: "CHE",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 12,
        img: "./player-images/1903543.jpg",
        pfName: "Name : Sergio Agüero",
        tName: "Team: Man. City",
        skillDesc: "Skill: Forward",
        value: "Value: $10.5",
        upComingMatchesListcCode: "Upcoming Match: MC",
        upComingMatchesListvsCode: "SHK",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 13,
        img: "./player-images/1905153.jpg",
        pfName: "Name : Ángel Di María",
        tName: "Team: Paris",
        skillDesc: "Skill: Midfield",
        value: "Value: $8.5",
        upComingMatchesListcCode: "Upcoming Match: PAR",
        upComingMatchesListvsCode: "BAY",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 14,
        img: "./player-images/1905788.jpg",
        pfName: "Name : Sandro Wagner",
        tName: "Team: Bayern",
        skillDesc: "Skill: Forward",
        value: "Value: $9.0",
        upComingMatchesListcCode: "Upcoming Match: BAY",
        upComingMatchesListvsCode: "PAR",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    },
    {
        id: 15,
        img: "./player-images/1905813.jpg",
        pfName: "Name : Edinson Cavani",
        tName: "Team: Paris",
        skillDesc: "Skill: Forward",
        value: "Value: $11.0",
        upComingMatchesListcCode: "Upcoming Match: PAR",
        upComingMatchesListvsCode: "BAY",
        nextMatchTime: "Next Match Time: 2/10/2019 12:00:00 AM"
    }
];

export default playerData;