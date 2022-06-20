import React from "react"

import { ButtonContainer } from "./styles"

type IButtonProps = {
    children: React.ReactNode
}

const Button: React.FC<IButtonProps> = ({
    children
}) => {
    return <ButtonContainer>{children}</ButtonContainer>
}

export default Button
