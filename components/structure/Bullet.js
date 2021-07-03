import React from 'react'

export default function Bullet(props) {
    const size = props.size || 5
    const color = props.color || '#ccc'
    const style = props.style || {}

    style.width = size;
    style.height = size;
    style.borderRadius = '50%';
    style.backgroundColor = color;

    return (
        <div className="Bullet" style={style}/>
    )
}
