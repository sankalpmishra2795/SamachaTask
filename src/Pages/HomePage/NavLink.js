import React from 'react'
import { NavLinkChild, NavLinkContaner, NavLinkContanerWrapper } from '../../StyledComponents'





export const NavLink = () => {

    

    return (
        <NavLinkContaner  >
            <NavLinkContanerWrapper >
                <NavLinkChild  >All</NavLinkChild>
                <NavLinkChild  >Coronavirus</NavLinkChild>
                <NavLinkChild >India</NavLinkChild>
                <NavLinkChild >World</NavLinkChild>
                <NavLinkChild >Business</NavLinkChild>
                <NavLinkChild >Science & Tech</NavLinkChild>
                <NavLinkChild >Politics</NavLinkChild>
                <NavLinkChild >Sports</NavLinkChild>
                <NavLinkChild >Trivia</NavLinkChild>
                <NavLinkChild >More</NavLinkChild>
            </NavLinkContanerWrapper>
        </NavLinkContaner>
    )
}
