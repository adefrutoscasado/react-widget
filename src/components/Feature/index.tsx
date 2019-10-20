import React from 'react'
import logo from './tick.svg'
import cn from 'classnames'

interface Props {
    text?: string;
}

const Feature = ({
    text = '',
}: Props) => {
    
    return (
        <div key={text} className={cn('feature')}>
            <span className={cn('feature_icon')}>
                <img src={logo} alt="tick" />
            </span>
            <span className={cn('feature_text')}>
                {text}
            </span>
        </div>
    )
}

export default Feature;
