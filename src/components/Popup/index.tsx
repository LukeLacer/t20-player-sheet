import React from "react"

import { PopupContainer, PopupBackground, CloseIcon, ContentWrapper, CloseIconWrapper } from "./styles"

type IPopupProps = {
    children: React.ReactNode,
    isOpen?: boolean;
}

const Popup = ({
    children,
    isOpen = true
}: IPopupProps) => {
    return isOpen
    ? <PopupBackground>
        <PopupContainer>
            <CloseIconWrapper>
                <CloseIcon/>
            </CloseIconWrapper>
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </PopupContainer>
    </PopupBackground> : null
}

export default Popup
