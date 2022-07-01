import styled from "styled-components"

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: min-content;
    padding: 5px 10px;
`

export const TitleContainer = styled.div`

`

export const SkillsTable = styled.table`
    tbody {
        tr {
            th:first-of-type {
                text-align: left;
                padding-right: 10px;
                font-weight: 300;
            }
            th:last-of-type {
                border: 1px solid black;
                padding: 5px 10px;
                font-weight: 300;
            }
        }
    }
`
