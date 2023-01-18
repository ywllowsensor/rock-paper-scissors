//The computer will generate a random choice between rock, paper or scissors//
//The function that tells the computer to do so is called getComputerChoice//
//How do I tell the computer to randomly pick between three strings?//

//Math.random() tells a computer to choose between 0 and 1 randomly//

//Assign values of 1 to 3 to each choice and use Math.random to choose a random number between 1 and 3//

//the number choses will correspond to the choice of rock or paper etc//
//computer will return the choice in the consile//

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

//the computer will take note of the players choice and the computers choice//

//how do i get the players choice?//

//the computer will evaluate the choices and tell the player who won//
//take the players choice//
//use switch to come up with different case scenarios where smtg beats smtg//
//use toLowerCase() for plaer and comp selection//

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