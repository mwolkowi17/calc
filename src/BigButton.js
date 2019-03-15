import React from 'react'

const BigStyle = {
    width:'213px',
    height:'70px',
    border:'solid 1px silver',
    borderRight:'solid 2px silver',
    backgroundColor:'snow',
    position: 'relative',
    left:"0",
    float:'left'
    
}

export const BigButton=(props)=>{
    return(
        <div style = {BigStyle} onClick={props.onClick}>{props.name}</div>
    )
}