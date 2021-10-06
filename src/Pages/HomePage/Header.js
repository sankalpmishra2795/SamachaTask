import React from 'react'
import { HeaderContaner, HeaderInputBox, HeaderInputBoxWrapper, HeaderWrapper } from '../../StyledComponents'


export const Header = () => {
    return (
        <HeaderWrapper  >
            <HeaderContaner >
                <img src="logo2.jpeg" alt="no_Image" style={{height:"6vh"}} ></img>
                <HeaderInputBoxWrapper style={{display:"flex"}}>
                    <HeaderInputBox />  
                    <img alt="no_Image" src="searchIcon.png" style={{height:"4vh", paddingTop:'2px'}} ></img>
                </HeaderInputBoxWrapper>
            </HeaderContaner>
        </HeaderWrapper>
    )
}
