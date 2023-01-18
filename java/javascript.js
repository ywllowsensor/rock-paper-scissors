
'use strict';

function getComputerChoice() {
    let num = (Math.round(Math.random()*2));
    let choice = num.toString();
    if (choice === '0') {
        return 'Rock';
    } else if (choice === '1') {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playOneRound(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player === 'rock' && computer === 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'You Win! Scissors beats Paper';
    } else if (player === 'paper' && computer === 'rock') {
        return 'You Win! Paper beats Rock';
    } else if (player === 'scissors' && computer === 'rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (player === 'rock' && computer === 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'You Lose! Scissors beats paper';
    } else if (player === 'rock' && computer === 'rock' || player === 'paper' && computer === 'paper' || player === 'scissors' && computer === 'scissors') {
        return 'It"s a draw! Try again';
    } else {
        return 'Type in rock, paper or scissors.';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt ('Rock, paper, or scissors. Choose wisely.');
        const computerSelection = getComputerChoice();
        playOneRound(playerSelection,computerSelection);
        console.log(playOneRound(playerSelection,computerSelection))
    }
}

console.log(game());