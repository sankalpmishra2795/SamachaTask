import React from 'react'

export const ExtaCard = ({imageUrl, className}) => {
    return (
        <div className='extraCard'>
            <img className={`extraCard ${className}`} src={imageUrl} alt="No_image" style={{height:"100%", width:"100%"}}></img>
        </div>
    )
}
