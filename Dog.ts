import { Animal } from "./Animal";

// Export de la classe enfant Dog

export class Dog extends Animal {

    meat: number;
    
    constructor(health: number, thirst: number, meat: number) {
        super(health, thirst);
        this.meat = meat;
    }

    createDogElement(): HTMLElement {
        const dogElement = document.createElement('div');
        dogElement.classList.add('spriteDog');
        // ajoutez d'autres propriétés CSS à l'élément pour positionner correctement le tamagotchi dans l'écran de jeu
        dogElement.style.display = 'flex';
        document.getElementById('tamagotchiScreen')?.appendChild(dogElement);
        return dogElement;
    }
}

