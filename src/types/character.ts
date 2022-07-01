import { Background } from "./background";
import { God } from "./god";
import { Race } from "./race";
import { Skill } from "./skill";
import { Class } from "./class";
  
interface Character {
  playersName: string
  name: string
  race: string
  background: string
  class: Class[]
  god: string
  godDevotee: boolean
  attributes: Attributes
  lifePoints: number
  manaPoints: number
  itens: Item[]
  history: string
  skills: Skill[]
}

interface Attributes {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}

interface Item {
  name: string
  category: string
  subcategory?: string
  price: string
  damage?: string
  critic?: string
  range?: string
  weight?: number
  type?: string
  descrition?: string
  defenseBonus?: number
  armorPenalty?: number
  Weigth?: number
}

type CharacterOptions = {
    name: string;
    race: Array<Race>;
    class: Array<Class>;
    background: Array<Background>;
    god?: Array<God>;
    MaxPV: number;
    MaxPM: number;
    defense: number;
    size: string;
    speed: number;
    age: number;
    ethical: string;
    moral: string;
    skills: Array<Skill>;
}

export type { Character, CharacterOptions, Attributes }
