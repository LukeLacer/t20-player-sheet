import React, { useEffect, useState } from "react"
import { Information } from "../../components"
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
        </CharacterContainer>
    )
}

export default PlayerSheet