import React from 'react'
import { NavLinkChildMobile , NavMobileWraper} from '../../StyledComponents'


export const NavLinkMobile = () => {
    return (
        <NavMobileWraper >
            <NavLinkChildMobile >All</NavLinkChildMobile>
            <NavLinkChildMobile>Deep Dives</NavLinkChildMobile>
            <NavLinkChildMobile>India</NavLinkChildMobile>
            <NavLinkChildMobile>World</NavLinkChildMobile>
            <NavLinkChildMobile>Business</NavLinkChildMobile>
        </NavMobileWraper>
    )
}
