import React, { useEffect, useState } from "react"
import { 
    Information,
    AttributeInformation,
    PointsCounter,
    Skills
} from "../../components"
import { strings } from "../../helpers"
import { getCharacter } from "../../service"
import { Character } from "../../types"

import {
    CharacterContainer,
    Line
} from "./styles"

const PlayerSheet = () => {
    const [character, setCharacter] = useState<Character>()
    const [classLabel, setClassLabel] = useState<string>()
    const [defense, setDefense] = useState<number>(10)
    const playerSheetLabels = strings.playerSheet


    useEffect(() => {
        setCharacter(getCharacter())
    }, [])

    useEffect(() => {
        let newClassLabel = ''
        character?.class.forEach((value) => {
            newClassLabel = newClassLabel.length === 0
                ? newClassLabel.concat(`${value.name} de ${value.level}º Nível`)
                : newClassLabel.concat(` e ${value.name} de ${value.level}º Nível`)
        })
        setClassLabel(newClassLabel)


    }, [character])

    return (
        <CharacterContainer>
            <Line>
                <Information labelOnTop={false} label={playerSheetLabels.name} data={character?.name} />
                <Information label={playerSheetLabels.playersName} data={character?.playersName} />
            </Line>
            <Line>
                <Information labelOnTop={false} label={playerSheetLabels.race} data={character?.race} />
                <Information labelOnTop={false} label={playerSheetLabels.background} data={character?.background} />
                <Information labelOnTop={false} label={playerSheetLabels.class} data={classLabel} />
                <Information labelOnTop={false} label={playerSheetLabels.god} data={character?.god} />
            </Line>
            <Line>
                <AttributeInformation label={playerSheetLabels.strength} baseValue={character?.attributes.strength} />
                <AttributeInformation label={playerSheetLabels.dexterity} baseValue={character?.attributes.dexterity} />
                <AttributeInformation label={playerSheetLabels.constitution} baseValue={character?.attributes.constitution} />
                <AttributeInformation label={playerSheetLabels.intelligence} baseValue={character?.attributes.intelligence} />
                <AttributeInformation label={playerSheetLabels.wisdom} baseValue={character?.attributes.wisdom} />
                <AttributeInformation label={playerSheetLabels.charisma} baseValue={character?.attributes.charisma} />
            </Line>
            <Line>
                <PointsCounter label={playerSheetLabels.lifePoints} initialPoints={character?.lifePoints} />
                <PointsCounter label={playerSheetLabels.manaPoints} initialPoints={character?.manaPoints} />
                <Information labelOnTop={true} label={playerSheetLabels.defense} data={defense} />
            </Line>
            <Skills skillList={character?.skills} attributes={character?.attributes} />
            
        </CharacterContainer>
    )
}

export default PlayerSheet