// Declare variables
const teamName = document.getElementById("team");
const typeOfSport =  document.getElementById("sport");
const worldCupYear =  document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
    team: "Argentina",
    sport: "Football",
    year: 1986,
    isWorldCupWinner: true,
    headCoach: {
        coachName: "Carlos Bilardo",
        matches: 7,
    },
    players: [
        {
            img: "Pics/Sergio Almirón.jpg",
            name: "Sergio Almirón",
            position: "forward",
            number: 1,
            isCaptain: false,
            nickname: null,
        },
        {
            img: "Pics/Sergio Batista.jpg",
            name: "Sergio Batista",
            position: "midfielder",
            number: 2,
            isCaptain: false,
            nickname: null,
        },
        {
            img: "Pics/Ricardo Bochini.jpg",
            name: "Ricardo Bochini",
            position: "midfielder",
            number: 3,
            isCaptain: false,
            nickname: "El Bocha",
          },
          {
            img: "Pics/Claudio Borghi.jpg",
            name: "Claudio Borghi",
            position: "midfielder",
            number: 4,
            isCaptain: false,
            nickname: "Bichi",
          },
          {
            img: "Pics/José Luis Brown.jpg",
            name: "José Luis Brown",
            position: "defender",
            number: 5,
            isCaptain: false,
            nickname: "Tata",
          },
          {
            img: "Pics/Daniel Passarella.jpg",
            name: "Daniel Passarella",
            position: "defender",
            number: 6,
            isCaptain: false,
            nickname: "El Gran Capitán",
          },
          {
            img: "Pics/Jorge Burruchaga.jpg",
            name: "Jorge Burruchaga",
            position: "forward",
            number: 7,
            isCaptain: false,
            nickname: "Burru",
          },
          {
            img: "Pics/Néstor Clausen.jpg",
            name: "Néstor Clausen",
            position: "defender",
            number: 8,
            isCaptain: false,
            nickname: null,
          },
          {
            img: "Pics/José Luis Cuciuffo.jpg",
            name: "José Luis Cuciuffo",
            position: "defender",
            number: 9,
            isCaptain: false,
            nickname: "El Cuchu",
          },
          {
            img: "Pics/Diego Maradona.jpg",
            name: "Diego Maradona",
            position: "midfielder",
            number: 10,
            isCaptain: true,
            nickname: "El Pibe de Oro",
          },
          {
            img: "Pics/Jorge Valdano.jpg",
            name: "Jorge Valdano",
            position: "forward",
            number: 11,
            isCaptain: false,
            nickname: "The Philosopher of Football",
          },
          {
            img: "Pics/Héctor Enrique.jpg",
            name: "Héctor Enrique",
            position: "midfielder",
            number: 12,
            isCaptain: false,
            nickname: null,
          },
          {
            img: "Pics/Oscar Garré.jpg",
            name: "Oscar Garré",
            position: "defender",
            number: 13,
            isCaptain: false,
            nickname: null,
          },
          {
            img: "Pics/Ricardo Giusti.jpg",
            name: "Ricardo Giusti",
            position: "midfielder",
            number: 14,
            isCaptain: false,
            nickname: null,
          },
          {
            img: "Pics/Luis Islas.jpg",
            name: "Luis Islas",
            position: "goalkeeper",
            number: 15,
            isCaptain: false,
            nickname: "El loco",
          },
          {
            img: "Pics/Julio Olarticoechea.jpg",
            name: "Julio Olarticoechea",
            position: "defender",
            number: 16,
            isCaptain: false,
            nickname: null,
          },
          {
            img: "Pics/Pedro Pasculli.jpg",
            name: "Pedro Pasculli",
            position: "forward",
            number: 17,
            isCaptain: false,
            nickname: null,
          },
          {
            img: "Pics/Nery Pumpido.jpg",
            name: "Nery Pumpido",
            position: "goalkeeper",
            number: 18,
            isCaptain: false,
            nickname: null,
          },
          {
            img: "Pics/Oscar Ruggeri.jpg",
            name: "Oscar Ruggeri",
            position: "defender",
            number: 19,
            isCaptain: false,
            nickname: "El Cabezón",
          },
          {
            img: "Pics/Carlos Tapia.jpg",
            name: "Carlos Tapia",
            position: "midfielder",
            number: 20,
            isCaptain: false,
            nickname: null,
          },
          {
            img: "Pics/Marcelo Trobbiani.jpg",
            name: "Marcelo Trobbiani",
            position: "midfielder",
            number: 21,
            isCaptain: false,
            nickname: "Calesita",
          },
          {
            img: "Pics/Héctor Zelada.jpg",
            name: "Héctor Zelada",
            position: "goalkeeper",
            number: 22,
            isCaptain: false,
            nickname: null,
          },
    ],

};
Object.freeze(myFavoriteFootballTeam); //Freeze

const { sport, team, year, players } = myFavoriteFootballTeam;
const{ coachName } = myFavoriteFootballTeam.headCoach;

// Display Team Informations
typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

// Function that will show player cards based on the selections made by the user 
const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr.map(({ img, name, position, number, isCaptain, nickname}) =>  
    `
    <div class="player-card">
    <img src="${img}" alt="${name}" style="width: 200px; height:250px;"/>
    <h2>${isCaptain ? "(captain)" : "" } ${name}</h2>
    <p>Position: ${position}</p>
    <p>Number: ${number}</p>
    <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
    </div>
    `
  )
  .join("");// Romove commas from array
};

// Function that will detect when a user makes a selection
playersDropdownList.addEventListener("change", (e) => {

playerCards.innerHTML = ""; // reset the content for the playerCards element
switch (e.target.value) {
  case "nickname":
    setPlayerCards(players.filter((player) => player.nickname !== null));
    break;
  case "forward":
    setPlayerCards(players.filter((player) => player.position === "forward"));
    break;
  case "midfielder":
    setPlayerCards(
      players.filter((player) => player.position === "midfielder")
    );
    break;
  case "defender":
    setPlayerCards(
      players.filter((player) => player.position === "defender")
    );
    break;
  case "goalkeeper":
    setPlayerCards(
      players.filter((player) => player.position === "goalkeeper")
    );
    break;
    default:
    setPlayerCards(); 
    }
});