import React from 'react'

export default function NotFound() {

    const style ={
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center",
        minHeight: "60vh"
    }
    return (
        <div style={style}>
            <h2>404</h2>
            <div style={{fontSize: '1.6em'}}>Page Not Found</div>
        </div>
    )
}
