import React, { useEffect, useState } from "react"
import { getCharacterConfiguration } from "../../service"
import { Race } from "../../types"
import { Background } from "../../types"
import { Class } from "../../types"

import { InputContainer, PlayerSheetContainer } from "./styles"

const PlayerSheet = () => {
    const [classes, setClasses] = useState<Array<Class>>([])
    const [backgrounds, setBackgrounds] = useState<Array<Background>>([])
    const [races, setRaces] = useState<Array<Race>>([])
    const [selectedRace, setSelectedRace] = useState<string>(races[0]?.name)
    const [selectedBackground, setSelectedBackground] = useState<string>(backgrounds[0]?.name)
    const [selectedClass, setSelectedClass] = useState<string>(classes[0]?.name)

    useEffect(() => {
        const characterConfiguration = getCharacterConfiguration()
        setRaces(characterConfiguration.race)
        setBackgrounds(characterConfiguration.background)
        setClasses(characterConfiguration.class)
    }, [])
    
    
    return <PlayerSheetContainer>
        <div>Raça: {selectedRace}</div>
        <div>Classe: {selectedClass}</div>
        <div>Origem: {selectedBackground}</div>
        <InputContainer>
            <span>Personagem</span>
            <input type="text" id="Name" placeholder="Nome"/>
        </InputContainer>
        <InputContainer>
            <span>Raça</span>
            <select name="Race" id="Race" onChange={(e) => setSelectedRace(e.target.value)}>
                {
                    races.map((race, i) => {
                        return <option key={i} value={race.name}>{race.name}</option>
                    })
                }
            </select>
        </InputContainer>
        <InputContainer>
            <span>Classe</span>
            <select name="Class" id="Class" onChange={(e) => setSelectedClass(e.target.value)}>
                {
                    classes.map((characterClass, i) => {
                        return <option key={i} value={characterClass.name}>{characterClass.name}</option>
                    })
                }
            </select>
        </InputContainer>
        <InputContainer>
            <span>Origem</span>
            <select name="Background" id="Background" onChange={(e) => setSelectedBackground(e.target.value)}>
                {
                    backgrounds.map((background, i) => {
                        return <option key={i} value={background.name}>{background.name}</option>
                    })
                }
            </select>
        </InputContainer>
    </PlayerSheetContainer>
}

export default PlayerSheet
