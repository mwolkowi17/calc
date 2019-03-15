import React from 'react';

const ButtonStyle = {
    width:'70px',
    height:'70px',
    border:'solid 1px silver',
    float:'left',
    backgroundColor:'coral',
    position:'relative'
}

export const Button=(props)=>{
    return(
        <div style={ButtonStyle} onClick={props.onClick}>{props.name}</div>
    )
}