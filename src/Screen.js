import React from 'react'

const ScreenStyle = {
    width: '284px',
    height: '70px',
    border: 'solid 2px silver',
    backgroundColor: 'darkslategray',
    color: 'gainsboro',
    position: 'relative',
    textAlign:'right',
    
    
}

export class Screen extends React.Component{
    render() {
        return(
            <div style={ScreenStyle}>
            <p style={{marginRight:"12px", fontSize:'24px'}}>{this.props.name}</p>
            </div>
        )
    }
}