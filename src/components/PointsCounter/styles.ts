import styled from "styled-components"

export const PointerCountersContainer = styled.div`
    margin: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LabelContainer = styled.div`
    margin: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.5rem;
`

export const InitialPointsContainer = styled.div`
    border: 3px solid burlywood;
    padding: 8px;
    position: relative;
    left: -10px;
    background-color: white;
`

export const ModifiedPointsContainer = styled.div`
    padding: 11px 0;
`

export const PointsContainer = styled.div`
    padding: -3px;
    border: 2px solid black;
    display: flex;
    justify-content: space-between;
    width: 100px;
`

export const ModifyPointsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    left: 15px;
    button {
        width: 20px;
        background-color: white;
        border: 1px solid #555;
        cursor: pointer;
    }
`

export const ResetButton = styled.button`
    background-color: transparent;
    font-size: 0.8rem;
    padding: 0 10px;
    cursor: pointer;
    position: relative;
    top: -2px;
`
