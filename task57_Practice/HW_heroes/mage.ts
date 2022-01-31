import {CanTakeDamage} from "./damage";
import {Hero} from "./hero";
import {Spell} from "./spell";

class Mage extends Hero{
  spellbook: Spell[];
  Mana: number;
  
  isMage(): boolean {
      return true;
  }
}

export {Mage}