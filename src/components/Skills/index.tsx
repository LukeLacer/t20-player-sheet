import React from "react"
import { strings } from "../../helpers"
import { Skill, Class } from "../../types"

import {
    SkillsContainer,
    TitleContainer,
    SkillsTable
} from "./styles"

interface ISkills {
    skillList?: Skill[]
    attributes?: any
    classLevels?: Class[]
}

const Skills = ({
    skillList,
    attributes,
    classLevels
}: ISkills) => {
    
    return (
        <SkillsContainer>
            <TitleContainer>{strings.skills.title}</TitleContainer>
            <SkillsTable>
                <tbody>
                    { skillList &&
                        skillList.map((skill, i) => {
                            const skillLabel = skill.name + (skill.armorPenalty ? '+' : '') + (skill.onlyTrained ? '*' : '')
                            let characterLevel = 0
                            classLevels?.forEach((value) => {
                                characterLevel += value.level
                            })
                            const skillValue = 
                                Math.floor((attributes[skill.attributeKey] - 10 ) /2)
                                + (skill.trainement > 0 ? ((skill.trainement - 1) + 2) : 0)
                                + characterLevel
                            return <tr key={i}>
                                <th>
                                    {skillLabel}
                                </th>
                                <th>
                                    { skillValue >= 0 ? '+' + skillValue : '-' + skillValue }
                                </th>
                            </tr>
                        })
                    }
                </tbody>
            </SkillsTable>
        </SkillsContainer>
    )
}

export default Skills