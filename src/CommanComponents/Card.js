import React from 'react'
import { CardWrapper } from '../StyledComponents'



export const Card = ({imageUrl}) => {
    return (
        <CardWrapper >
            <img src={imageUrl} style={{width:"100%", height:"100%"}} alt="No_Image"></img>
        </CardWrapper>
    )
}
