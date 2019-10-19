import React from 'react'
import logo from './tick.svg'

interface Props {
    text?: string;
}

const Feature = ({
    text = '',
}: Props) => {
    
    return (
        <div key={text}>
            <span>
                <img src={logo} alt="tick" />
            </span>
            <span>
                {text}
            </span>
        </div>
    )
}

export default Feature;
