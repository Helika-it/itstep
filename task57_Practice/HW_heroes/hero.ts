import {CanTakeDamage} from "./damage" 

class Hero { //class Hero implements CanTakeDamage{
  name: string;
  HP: number;
  XP: number = 0;

  constructor(name: string, HP: number, XP?: number){
    this.name = name;
    this.HP = HP;
    if(XP != undefined)
      this.XP = XP;
  }

    isDead():boolean{
      if(this.HP == 0){
        return true;
      }
      return false;
    }

    isMage():boolean{
      return false;
    }

    isWarrior():boolean{
      return false;
    }

    attack(enemy: CanTakeDamage):void{
      this.XP -= enemy.TakeDamage(1);
    }
  }

export {Hero}