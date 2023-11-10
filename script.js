function userChoice(user) {
    const choices = ["stone", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(user, computerChoice);

    document.querySelector('.result').innerText = `You chose ${user}. The computer chose  ${computerChoice}. ${result}`;
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if (user === "stone") {
        return computer === "scissors" ? "You win!" : "You lose!";
    } else if (user === "paper") {
        return computer === "stone" ? "You win!" : "You lose!";
    } else if (user === "scissors") {
        return computer === "paper" ? "You win!" : "You lose!";
    }
}