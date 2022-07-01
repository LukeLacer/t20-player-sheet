import React from "react"

import {
    InformationContainer,
    DataContainer,
    LabelContainer
} from "./styles"

interface IInformation {
    label: string
    data?: string | number
    labelOnTop?: boolean
}

const Information = ({
    label,
    data,
    labelOnTop = true
}: IInformation) => {
    return (
        <InformationContainer>
            { labelOnTop ? <LabelContainer>{label}</LabelContainer> : null }
            <DataContainer>{data}</DataContainer>
            { !labelOnTop ? <LabelContainer>{label}</LabelContainer> : null }
        </InformationContainer>
    )
}

export default Information