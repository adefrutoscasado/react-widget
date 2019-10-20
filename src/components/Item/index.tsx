import React from 'react'
import cn from 'classnames'
import { dispatchOnBookParking } from './../../services/eventService'
import { useMobileMedia } from './../../utils'
import { parkingSlot } from './../../models'

interface Props {
    id: number;
    data: parkingSlot;
    dictionary: {
        [key: string]: string
    };
}

const Item = ({
    id,
    data,
    dictionary = {},
}: Props) => {
    
    const isMobile: boolean = useMobileMedia()

    const handleOnBookItem = (): void => {
        dispatchOnBookParking(id)
    }
    const getFeatureLiteral = (isIncluded: boolean, postiveKey: string, negativeKey: string): string => {
        return isIncluded ? dictionary[postiveKey] : dictionary[negativeKey]
    }

    const { indoor, insurance } = data
    const spaceLiteral = getFeatureLiteral(indoor, 'indoorSpace', 'outdoorSpace')
    const insuranceLiteral = getFeatureLiteral(insurance, 'insuranceIncluded', 'insuranceExcluded')

    const features: string[] = [spaceLiteral, insuranceLiteral]

    return (
        <div className={cn('catalog_item', isMobile && 'mobile')}>
            <div>
                <ul>
                    {features.map((f: string) => <li>{f}</li>)}
                </ul>
            </div>
            <div className={cn('center')}>
                <button onClick={handleOnBookItem} className={cn('button', 'first')}>
                    Book parking
                </button>
            </div>
        </div>
    )
}

export default Item;
