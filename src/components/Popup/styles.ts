import styled from "styled-components"
import { CloseOutline } from "@styled-icons/evaicons-outline"

export const PopupContainer = styled.div`
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.43);
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 10px;
    background: #fff;
    height: min-content;
    width: min-content;
`

export const PopupBackground = styled.div`
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
    top: 50%;
    text-align: end;
`

export const CloseIcon = styled(CloseOutline)`
    height: 20px;
`

export const ContentWrapper = styled.div`
`

export const CloseIconWrapper = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`
