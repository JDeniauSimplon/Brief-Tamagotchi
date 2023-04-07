import { Animal } from "./Animal";

// Export de la classe enfant Cat

export class Cat extends Animal {

    fish: number;

    constructor(health: number, thirst: number, fish: number) {
        super(health, thirst);
        this.fish = fish;
    }
   
    createCatElement(): HTMLElement {
        const catElement = document.createElement('div');
        catElement.classList.add('spriteCat');
        // ajoutez d'autres propriétés CSS à l'élément pour positionner correctement le tamagotchi dans l'écran de jeu
        catElement.style.display = 'flex';
        document.getElementById('tamagotchiScreen')?.appendChild(catElement);
        return catElement;
    } 
}