import React, { useState } from "react"

import { InputContainer, PlayerSheetContainer } from "./styles"

const PlayerSheet = () => {
    const [classes] = useState([
        { "name": "Arcanista" },
        { "name": "Bárbaro" },
        { "name": "Bardo" },
        { "name": "Bucaneiro" },
        { "name": "Caçador" },
        { "name": "Cavaaleiro" },
        { "name": "Clérigo" },
        { "name": "Druida" },
        { "name": "Guerreiro" },
        { "name": "Inventor" },
        { "name": "Ladino" },
        { "name": "Lutador" },
        { "name": "Nobre" },
        { "name": "Paaladino" }
    ])
    const [backgrounds] = useState([
        { "name": "Acólito" },
        { "name": "Amigo dos Animais" },
        { "name": "Amnésico" },
        { "name": "Aristocrata" },
        { "name": "Artesão" },
        { "name": "Artista" },
        { "name": "Assistente de Laboratório" },
        { "name": "Batedor" },
        { "name": "Capanga" },
        { "name": "Charlatão" },
        { "name": "Circense" },
        { "name": "Criminoso" },
        { "name": "Curandeiro" },
        { "name": "Eremita" },
        { "name": "Escravo" },
        { "name": "Estudioso" },
        { "name": "Fazendeiro" },
        { "name": "Forasteiro" },
        { "name": "Gladiador" },
        { "name": "Guarda" },
        { "name": "Herdeiro" },
        { "name": "Herói Camponês" },
        { "name": "Marujo" },
        { "name": "Mateiro" },
        { "name": "Membro de Guilda" },
        { "name": "Mercador" },
        { "name": "Minerador" },
        { "name": "Nômade" },
        { "name": "Pivete" },
        { "name": "Refugiado" },
        { "name": "Seguidor" },
        { "name": "Selvagem" },
        { "name": "Soldado" },
        { "name": "Taverneiro" },
        { "name": "Trabalhador" }
    ])
    const [races] = useState([
        { "name": "Humano", "size": "Médio" },
        { "name": "Anão", "size": "Médio" },
        { "name": "Dahllan", "size": "Médio" },
        { "name": "Elfo", "size": "Médio" },
        { "name": "Goblin", "size": "Pequeno" },
        { "name": "Lefou", "size": "Médio" },
        { "name": "Minotauro", "size": "Médio" },
        { "name": "Qareen", "size": "Médio" },
        { "name": "Golem", "size": "Médio" },
        { "name": "Hynne", "size": "Pequeno" },
        { "name": "Kliren", "size": "Médio" },
        { "name": "Medusa", "size": "Médio" },
        { "name": "Osteon", "size": "Médio" },
        { "name": "Sereia/Tritão", "size": "Médio" },
        { "name": "Sílfide", "size": "Minúsculo" },
        { "name": "Suraggel", "size": "Médio" },
        { "name": "Trog", "size": "Médio" }
    ])
    const [selectedRace, setSelectedRace] = useState<string>(races[0].name)
    const [selectedBackground, setSelectedBackground] = useState<string>(backgrounds[0].name)
    const [selectedClass, setSelectedClass] = useState<string>(classes[0].name)
    
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
                    races.map(race => {
                        return <option value={race.name}>{race.name}</option>
                    })
                }
            </select>
        </InputContainer>
        <InputContainer>
            <span>Classe</span>
            <select name="Class" id="Class" onChange={(e) => setSelectedClass(e.target.value)}>
                {
                    classes.map(characterClass => {
                        return <option value={characterClass.name}>{characterClass.name}</option>
                    })
                }
            </select>
        </InputContainer>
        <InputContainer>
            <span>Origem</span>
            <select name="Background" id="Background" onChange={(e) => setSelectedBackground(e.target.value)}>
                {
                    backgrounds.map(background => {
                        return <option value={background.name}>{background.name}</option>
                    })
                }
            </select>
        </InputContainer>
    </PlayerSheetContainer>
}

export default PlayerSheet
