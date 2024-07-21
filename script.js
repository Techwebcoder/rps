let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const RanIdx = Math.floor(Math.random() * 3);
    return options[RanIdx];
};

const drawgame = () => {
    msg.innerText = "Game is Draw 😄";
    msg.style.backgroundColor = "orange";
};

const showWinner = (userWin,userChoice,compchoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win 😄 ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lose 😢 ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compchoice = genCompchoice();
    if (userChoice === compchoice) {
        drawgame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compchoice === "scissor" ? false : true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
