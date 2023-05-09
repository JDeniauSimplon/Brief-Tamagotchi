// import

import { Dog } from "./Dog";
import { Cat } from "./Cat";
import { reloadButton } from "./function";
import { link } from "./function";
import { reloadCommandInput } from "./function";
import { executeCommand } from "./function";
import { decreaseJauges } from "./function";
import { checkJaugesDog } from "./function";
import { checkJaugesCat } from "./function";

// déclaration des constantes + selection d'element du DOM (+export vers function.ts)

const homePage: HTMLElement | null = document.querySelector('#homePage');
const pageTamagotchi: HTMLElement | null = document.querySelector('#tamagotchi');
const startButton: HTMLButtonElement | null = document.querySelector('.startButton');
const pseudoButton: HTMLElement | null = document.querySelector('.pseudoButton');

const dogCharacter: HTMLButtonElement | null = document.querySelector('.dogCharacter');
const catCharacter: HTMLButtonElement | null = document.querySelector('.catCharacter');

export const tamagotchiScreen: HTMLElement | null = document.querySelector('#tamagotchiScreen');

const fishBar: HTMLElement | null = document.querySelector('#fishBar');
export const fishPlusButton: HTMLElement | null = document.getElementById('fishPlusButton');
export const fishBarFull : HTMLElement | null = document.getElementById('fishProgressBarFull');

const meatBar: HTMLElement | null = document.querySelector('#meatBar');
export const meatPlusButton: HTMLElement | null = document.getElementById('meatPlusButton');
export const meatBarFull : HTMLElement | null = document.getElementById('meatProgressBarFull');

export const commandInput : HTMLInputElement | null = document.querySelector('#commandInput');
export const returnButton: HTMLButtonElement | null = document.querySelector('.returnButton');

export const healthBarFull : HTMLElement | null= document.getElementById('healthProgressBarFull');
export const healthPlusButton: HTMLElement | null = document.getElementById('healthPlusButton');
export const thirstBarFull : HTMLElement | null = document.getElementById('thirstProgressBarFull');
export const thirstPlusButton: HTMLElement | null = document.getElementById('thirstPlusButton');

export let myDog : Dog = new Dog(100, 100, 100);
export let myCat : Cat = new Cat(100, 100, 100);
export let dogElement: HTMLElement;
export let catElement: HTMLElement;
export let isDogSelected : boolean = false;
export let isCatSelected : boolean = false;

let intervalDecrease : number ;

// par défaut cache la page Tamagotchi

if (homePage && pageTamagotchi) {
  pageTamagotchi.style.display = 'none';
}

// cache les bar propres à Dog et Cat

if (fishBar && meatBar) {
  fishBar.style.display = 'none';
  meatBar.style.display = 'none';
}

// Ajoute un eventListener au bouton pseudo et remplace le texte par un champs pour écrire

if (pseudoButton != null) {
  pseudoButton.addEventListener('click', function () {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Your pet name :';
    input.maxLength = 12;
    input.className = 'inputPseudo'; // Ajoute une classe

    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' && input.parentNode != null) {
        pseudoButton.textContent = input.value;
        input.parentNode.replaceChild(pseudoButton, input);
        pseudoButton.style.backgroundColor = 'rgb(255, 252, 247)';
      }
    });

    if (pseudoButton.parentNode != null) {
      pseudoButton.parentNode.replaceChild(input, pseudoButton);
      input.focus(); // donne le focus à l'élément input
    }
  });
}

// Ajoute un eventListener au bouton Return pour retourner à la page principale

if (returnButton && pageTamagotchi && homePage) {
  returnButton.addEventListener('click', function () {
    pageTamagotchi.style.display = 'none';
    homePage.style.display = 'flex';
    returnButton.style.display = 'none';
    clearInterval(intervalDecrease);

    if (dogElement) {
      dogElement.classList.remove("spriteDogDead");
      dogElement.classList.add("spriteDog");
    }
    if (catElement) {
      catElement.classList.remove("spriteCatDead");
      catElement.classList.add("spriteCat");
    }

    myCat.health = 100;
    myCat.thirst = 100;
    myCat.fish = 100;
    myDog.health = 100;
    myDog.thirst = 100;
    myDog.meat = 100;
    link();
    reloadCommandInput();
  });
}

// Fonction pour pour valider la commande dans la console

export function handleCommandInput(event : KeyboardEvent) {
  if (event.key === 'Enter' && commandInput) {
    executeCommand(commandInput.value.toLowerCase());
  }
}

// Fonction de création du compagnon 

function removeClasses() {
  if (dogElement) {
    dogElement.remove();
  }
  if (catElement) {
    catElement.remove();
  }
}

// Fonction qui ajoute un event listener sur le bouton commencez et execute plusieurs fonction/changement de style etc...

function startGame() {
  if (homePage && pageTamagotchi && meatBar && fishBar && startButton) {
    startButton.addEventListener('click', function () {
      if (isDogSelected || isCatSelected) {
        myCat.health = 100;
        myCat.thirst = 100;
        myCat.fish = 100;
        myDog.health = 100;
        myDog.thirst = 100;
        myDog.meat = 100;
        intervalDecrease = setInterval(decreaseJauges, 1000);
        homePage.style.display = 'none';
        pageTamagotchi.style.display = 'flex';
        reloadButton();
        reloadCommandInput();
        if (isCatSelected) {
          setInterval(checkJaugesCat, 100);
          fishBar.style.display = 'flex';
          meatBar.style.display = 'none';
          if (healthBarFull && thirstBarFull && fishBarFull) {
            healthBarFull.innerHTML = `<span class="percentage-display">${myCat.health}%</span>`;
            thirstBarFull.innerHTML = `<span class="percentage-display">${myCat.thirst}%</span>`;
            fishBarFull.innerHTML = `<span class="percentage-display">${myCat.fish}%</span>`;
          }
        }

        else if (isDogSelected) {
          setInterval(checkJaugesDog, 100);
          fishBar.style.display = 'none';
          meatBar.style.display = 'flex';
          if (healthBarFull && thirstBarFull && meatBarFull) {
            healthBarFull.innerHTML = `<span class="percentage-display">${myDog.health}%</span>`;
            thirstBarFull.innerHTML = `<span class="percentage-display">${myDog.thirst}%</span>`;
            meatBarFull.innerHTML = `<span class="percentage-display">${myDog.meat}%</span>`;
          }
        }
      }
    });
  }
}

startGame();

// En fonction de l'animal choisi -> 

if (dogCharacter && catCharacter != null) {
  dogCharacter.addEventListener('click', function () {
    if (!isDogSelected) {
      isDogSelected = true;
      isCatSelected = false;
      dogCharacter.style.backgroundColor = 'rgb(255, 252, 247)'
      catCharacter.style.backgroundColor = ''
      removeClasses(); // Appel de la fonction removeClasses
      dogCharacter.removeEventListener;
      dogElement = myDog.createDogElement(); // Création de l'élément dogElement
    }
  });

  catCharacter.addEventListener('click', function () {
    if (!isCatSelected) {
      isCatSelected = true;
      isDogSelected = false;
      catCharacter.style.backgroundColor = 'rgb(255, 252, 247)'
      dogCharacter.style.backgroundColor = ''
      removeClasses(); // Appel de la fonction removeClasses
      catCharacter.removeEventListener
      catElement = myCat.createCatElement(); // Création de l'élément catElement

    }
  });
}

//////////////////////////////////////////////////////////////////////////////////
