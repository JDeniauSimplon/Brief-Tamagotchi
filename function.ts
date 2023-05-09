import { healthPlusButton } from "./script"
import { thirstPlusButton } from "./script"
import { meatPlusButton } from "./script"
import { fishPlusButton } from "./script"
import { healthBarFull } from "./script"
import { thirstBarFull } from "./script"
import { meatBarFull } from "./script"
import { fishBarFull } from "./script"
import { myDog } from "./script"
import { myCat } from "./script"
import { commandInput } from "./script"
import { handleCommandInput } from "./script"
import { isDogSelected } from "./script"
import { isCatSelected } from "./script"
import { returnButton } from "./script"
import { catElement } from "./script"
import { dogElement } from "./script"
import { tamagotchiScreen } from "./script"

// Fonction pour récuperer les boutons des jauges

export function reloadButton() {
    if (healthPlusButton != null) {
      healthPlusButton.addEventListener('click', onHealthPlusClick);
    }
  
    if (thirstPlusButton != null) {
      thirstPlusButton.addEventListener('click', onThirstPlusClick);
    }
  
    if (meatPlusButton != null) {
      meatPlusButton.addEventListener('click', onMeatPlusClick);
    }
  
    if (fishPlusButton != null) {
      fishPlusButton.addEventListener('click', onFishPlusClick);
    }
  }

// Fonction pour associer les valeurs de health,thirst,meat et fish aux width des jauges 

export function link() {
  if (healthBarFull && thirstBarFull && meatBarFull && fishBarFull) {
    healthBarFull.style.width = `${myDog.health}%`;
    thirstBarFull.style.width = `${myDog.thirst}%`;
    meatBarFull.style.width = `${myDog.meat}%`;
    fishBarFull.style.width = `${myCat.fish}%`;
  }
}

//  Fonction pour ajouter un EventListener 'keydown' à commandInput

export function reloadCommandInput() { if (commandInput) {
  commandInput.addEventListener('keydown', handleCommandInput);
  }
}

// Fonction pour executer la commande si la string est correcte

export function executeCommand(command : string) {
  if (command === 'health') {
    onHealthPlusClick();
  } else if (command === 'thirst') {
    onThirstPlusClick();
  } else if (command === 'meat') {
    onMeatPlusClick();
  } else if (command === 'fish') {
    onFishPlusClick();
  }
}

// Fonction de diminution des jauges 

export function decreaseJauges() {
  if (isDogSelected) {
    if (myDog.health > 50) {
      myDog.health -= 10;
    } else if (myDog.health > 15) {
      myDog.health -= 6;
    } else {
      myDog.health -= 2;
    }

    if (myDog.thirst > 50) {
      myDog.thirst -= 10;
    } else if (myDog.thirst > 15) {
      myDog.thirst -= 6;
    } else {
      myDog.thirst -= 2;
    }

    if (myDog.meat > 50) {
      myDog.meat -= 10;
    } else if (myDog.meat > 15) {
      myDog.meat -= 6;
    } else {
      myDog.meat -= 2;
    }

    if (myDog.health < 0) {
      myDog.health = 0;
    } else if (myDog.health > 100) {
      myDog.health = 100;
    }

    if (myDog.thirst < 0) {
      myDog.thirst = 0;
    } else if (myDog.thirst > 100) {
      myDog.thirst = 100;
    }

    if (myDog.meat < 0) {
      myDog.meat = 0;
    } else if (myDog.meat > 100) {
      myDog.meat = 100;
    }

    // Mise à jour des jauges pour le chien
    if (healthBarFull && thirstBarFull && meatBarFull) {
      healthBarFull.style.width = `${myDog.health}%`;
      thirstBarFull.style.width = `${myDog.thirst}%`;
      meatBarFull.style.width = `${myDog.meat}%`;
    }
  }

  if (isCatSelected) {
    if (myCat.health > 50) {
      myCat.health -= 10;
    } else if (myCat.health > 15) {
      myCat.health -= 6;
    } else {
      myCat.health -= 2;
    }

    if (myCat.thirst > 50) {
      myCat.thirst -= 10;
    } else if (myCat.thirst > 15) {
      myCat.thirst -= 6;
    } else {
      myCat.thirst -= 2;
    }

    if (myCat.fish > 50) {
      myCat.fish -= 10;
    } else if (myCat.fish > 15) {
      myCat.fish -= 6;
    } else {
      myCat.fish -= 2;
    }


    if (myCat.health < 0) {
      myCat.health = 0;
    } else if (myCat.health > 100) {
      myCat.health = 100;
    }
    if (myCat.thirst < 0) {
      myCat.thirst = 0;
    } else if (myCat.thirst > 100) {
      myCat.thirst = 100;
    }
    if (myCat.fish < 0) {
      myCat.fish = 0;
    } else if (myCat.fish > 100) {
      myCat.fish = 100;
    }

    // Mise à jour des jauges pour le chat
    if (healthBarFull && thirstBarFull && fishBarFull) {
      healthBarFull.style.width = `${myCat.health}%`;
      thirstBarFull.style.width = `${myCat.thirst}%`;
      fishBarFull.style.width = `${myCat.fish}%`;
    }
  }

  // Mise à jour des pourcentages affichés dans les jauges 
  if (isDogSelected) {
    if (healthBarFull && thirstBarFull && meatBarFull) {
      healthBarFull.innerHTML = `<span class="percentage-display">${myDog.health}%</span>`;
      thirstBarFull.innerHTML = `<span class="percentage-display">${myDog.thirst}%</span>`;
      meatBarFull.innerHTML = `<span class="percentage-display">${myDog.meat}%</span>`;
    }
  }

  else if (isCatSelected) {
    if (healthBarFull && thirstBarFull && fishBarFull) {
      healthBarFull.innerHTML = `<span class="percentage-display">${myCat.health}%</span>`;
      thirstBarFull.innerHTML = `<span class="percentage-display">${myCat.thirst}%</span>`;
      fishBarFull.innerHTML = `<span class="percentage-display">${myCat.fish}%</span>`;
    }
  }
}

// fonction de verification de la valeurs des jauges pour myDog et myCat (jauge === 0)

export function checkJaugesDog() {
  const allJauges = [myDog.health, myDog.thirst, myDog.meat];
  if (allJauges.every(jauge => jauge === 0)) {
      if (dogElement && healthPlusButton && thirstPlusButton && meatPlusButton && returnButton && tamagotchiScreen && commandInput) {
        dogElement.classList.add('spriteDogDead');
        dogElement.classList.remove('spriteDog');
        healthPlusButton.removeEventListener('click', onHealthPlusClick);
        thirstPlusButton.removeEventListener('click', onThirstPlusClick);
        meatPlusButton.removeEventListener('click', onMeatPlusClick);
        commandInput.removeEventListener('keydown', handleCommandInput);
        returnButton.style.display = 'flex';
      }
  }
}
export function checkJaugesCat() {
  const allJauges = [myCat.health, myCat.thirst, myCat.fish];
  if (allJauges.every(jauge => jauge === 0)) {
      if (catElement && healthPlusButton && thirstPlusButton && fishPlusButton && returnButton && tamagotchiScreen && commandInput) {
        catElement.classList.add('spriteCatDead');
        catElement.classList.remove('spriteCat');
        healthPlusButton.removeEventListener('click', onHealthPlusClick);
        thirstPlusButton.removeEventListener('click', onThirstPlusClick);
        fishPlusButton.removeEventListener('click', onFishPlusClick);
        commandInput.removeEventListener('keydown', handleCommandInput);
        returnButton.style.display = 'flex';
      }
  }
}

// fonction pour les boutons associés aux jauges (+10)

export function onHealthPlusClick() {
  if (isDogSelected) {
    if (myDog.health < 100) {
      myDog.health = Math.min(myDog.health + 10, 100);
      healthBarFull?.style.setProperty('width', `${myDog.health}%`);
      if (healthBarFull) {
        healthBarFull.innerHTML = `<span class="percentage-display">${myDog.health}%</span>`;
      }
    }
  }
  else if (isCatSelected) {
    if (myCat.health < 100) {
      myCat.health = Math.min(myCat.health + 10, 100);
      healthBarFull?.style.setProperty('width', `${myCat.health}%`);

      if (healthBarFull) {
        healthBarFull.innerHTML = `<span class="percentage-display">${myCat.health}%</span>`;
      }
    }
  }
}

export function onThirstPlusClick() {
  if (isDogSelected) {
    if (myDog.thirst < 100) {
      myDog.thirst = Math.min(myDog.thirst + 10, 100);
      thirstBarFull?.style.setProperty('width', `${myDog.thirst}%`);
      if (thirstBarFull) {
        thirstBarFull.innerHTML = `<span class="percentage-display">${myDog.thirst}%</span>`;
      }
    }
  }
  else if (isCatSelected) {
    if (myCat.thirst < 100) {
      myCat.thirst = Math.min(myCat.thirst + 10, 100);
      thirstBarFull?.style.setProperty('width', `${myCat.thirst}%`);
      if (thirstBarFull) {
        thirstBarFull.innerHTML = `<span class="percentage-display">${myCat.thirst}%</span>`;
      }
    }
  }
}

export function onMeatPlusClick() {
  if (isDogSelected) {
    if (myDog.meat < 100) {
      myDog.meat = Math.min(myDog.meat + 10, 100);
      meatBarFull?.style.setProperty('width', `${myDog.meat}%`);
      if (meatBarFull) {
        meatBarFull.innerHTML = `<span class="percentage-display">${myDog.meat}%</span>`;
      }
    }
  }
}

export function onFishPlusClick() {
  if (isCatSelected) {
    if (myCat.fish < 100) {
      myCat.fish = Math.min(myCat.fish + 10, 100);
      fishBarFull?.style.setProperty('width', `${myCat.fish}%`);
      if (fishBarFull) {
        fishBarFull.innerHTML = `<span class="percentage-display">${myCat.fish}%</span>`;
      }
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////
