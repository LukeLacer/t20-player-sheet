import React from "react"

import { ButtonContainer } from "./styles"

type IButtonProps = {
    children: React.ReactNode
}

const Button = ({
    children
}: IButtonProps) => {
    return <ButtonContainer>{children}</ButtonContainer>
}

export default Button
