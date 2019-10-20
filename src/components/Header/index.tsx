import React from 'react'
import cn from 'classnames'

interface Props {
    text?: string;
    onClickShowMore?: () => void;
    isOpen: boolean;
}

const Header = ({
    text = '',
    onClickShowMore = () => {},
    isOpen,
}: Props) => {
    
    return (
        <div className={cn('card_header')}>
            <div>
                {text}
            </div>
            <div onClick = {onClickShowMore}>
                <div className={cn('center')}>
                    Logo
                </div>
                <div className={cn('brandColor', 'center', 'clickable')}>
                    {isOpen ? 'Nascondi dettagli' : 'Mostra dettagli'}
                </div>
            </div>
        </div>
    )
}

export default Header;
