import React, { useEffect, useState } from "react"

import {
    AttributesInformationContainer,
    BaseValueContainer,
    LabelContainer,
    ModifierContainer
} from "./styles"

interface IAttributeInformation {
    label: string
    baseValue: number | undefined
}

const AttributeInformation = ({
    label,
    baseValue
}: IAttributeInformation) => {
    const [modifierValue, setModifierValue] = useState<number>(0)

    useEffect(() => {
        if (baseValue) {
            setModifierValue(Math.floor((baseValue - 10)/2))
        } else setModifierValue(0)
        
    }, [baseValue])
    

    return (
        <AttributesInformationContainer>
            <LabelContainer>{label}</LabelContainer>
            <ModifierContainer>{modifierValue >= 0 ? '+' : '-'}{modifierValue}</ModifierContainer>
            <BaseValueContainer>{baseValue}</BaseValueContainer>
        </AttributesInformationContainer>
    )
}

export default AttributeInformation