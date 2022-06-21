import { Background } from "./background";
import { Class } from "./class";
import { God } from "./god";
import { Race } from "./race";
import { Skill } from "./skill";

type Character = {
    name: string;
    race: Race;
    class: Class;
    background: Background;
    god?: God;
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

export type { Character, CharacterOptions }
