import { CharacterOptions } from "../types"
import { Character } from "../types"

const dataFile = require('../data.json')

const getCharacterConfiguration = (): CharacterOptions => {
    return dataFile.character
}

const getCharacter = (): Character => {
    return dataFile.defaultCharacter
}

export {
    getCharacter,
    getCharacterConfiguration
}
