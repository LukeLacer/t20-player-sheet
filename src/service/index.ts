import { CharacterOptions } from "../types";

const dataFile = require('../data.json');

const getCharacterConfiguration = (): CharacterOptions => {
    return dataFile.character
}

export {
    getCharacterConfiguration
}
