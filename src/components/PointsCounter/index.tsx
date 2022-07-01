import React, { useEffect, useState } from "react"

import {
    PointerCountersContainer,
    LabelContainer,
    InitialPointsContainer,
    ModifiedPointsContainer,
    PointsContainer,
    ModifyPointsContainer,
    ResetButton
} from "./styles"

interface IPointsCounter {
    label: string
    initialPoints: number | undefined
}

const PointsCounter = ({
    label,
    initialPoints
}: IPointsCounter) => {
    const [modifiedPoints, setModifiedPoints] = useState<number>(0)

    useEffect(() => {
        if (initialPoints) {
            setModifiedPoints(initialPoints)
        } else setModifiedPoints(0)
        
    }, [initialPoints])

    const addPoint = () => setModifiedPoints(modifiedPoints + 1)

    const removePoint = () => setModifiedPoints(modifiedPoints - 1)

    const resetPoints = () => setModifiedPoints(initialPoints || 0)

    return (
        <PointerCountersContainer>
            <LabelContainer>{label}</LabelContainer>
            <PointsContainer>
                <InitialPointsContainer>{initialPoints}</InitialPointsContainer>
                <ModifiedPointsContainer>{modifiedPoints}</ModifiedPointsContainer>
                <ModifyPointsContainer>
                    <button onClick={() => addPoint()}>+</button>
                    <button onClick={() => removePoint()}>-</button>
                </ModifyPointsContainer>
            </PointsContainer>
            <ResetButton onClick={() => resetPoints()}>IGUALAR</ResetButton>
        </PointerCountersContainer>
    )
}

export default PointsCounter