import React from 'react'
import { HeaderMobileWraper } from '../../StyledComponents'




export const HeaderMobile = () => {
    return (
        <HeaderMobileWraper>
            <img src="logo.jpeg" alt="No_image" style={{height:"5vh"}} ></img>
               <img src="searchIcon.png" alt="No_image"  style={{height:"5vh", display:"flex"}} ></img>
        </HeaderMobileWraper>
    )
}
