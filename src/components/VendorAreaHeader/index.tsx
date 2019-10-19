import React from 'react'

interface Props {
    text?: string;
    onClickShowMore?: () => void
}

const VendorAreaHeader = ({
    text = '',
    onClickShowMore = () => {}
}: Props) => {
    
    return (
        <div>
            <span>
                {text}
            </span>
            <span onClick = {onClickShowMore}>
                Mostra detaggli
            </span>
        </div>
    )
}

export default VendorAreaHeader;
