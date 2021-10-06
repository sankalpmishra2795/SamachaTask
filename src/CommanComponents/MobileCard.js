import React from 'react'

export const MobileCard = ({imageUrl}) => {
    console.log("MobileCard",imageUrl )

    return (
        <div>
            <img src={imageUrl} alt="No_image" style={{height:"60vh", width:"70vw"}}></img>
        </div>
    )
}
