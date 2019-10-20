import React from 'react';
import cn from 'classnames'
import Feature from './../Feature'
import Item from './../Item'
import { parkingSlot } from './../../models'
import { useMobileMedia } from './../../utils'

interface Props {
    title?: string;
    image?: string;
    list?: string[]
    items?: parkingSlot[]
    dictionary: {
        [key: string]: string
    };
}

const Body = ({
    title = '',
    image = '',
    list = [],
    items = [],
    dictionary = {},
}: Props) => {

    const isMobile = useMobileMedia()

    return (
        <div className={cn('body')}>
            <div className={cn('body_title')}>
                {title}
            </div>
            <div className={cn('body_content', isMobile && 'mobile')}>
                <div className={cn('body_content_image', isMobile && 'mobile')}>
                    <img src={image}></img>
                </div>
                <div className={cn('body_content_list')}>
                    {list.map((f: string) => <Feature text={f} />)}
                </div>
            </div>
            <div className={cn('catalog', isMobile && 'mobile')}>
                {items.map((item: parkingSlot) => <Item id={item.id} data={item} dictionary={dictionary} />)}
            </div>
        </div>
    );
}

export default Body;
