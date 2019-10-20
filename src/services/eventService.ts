
export const dispatchOnBookProduct = ({id, type} : {id: number, type: string}) => {
    dispatchEvent(new CustomEvent('onBookItem', {bubbles: true, detail: {id, type}}))
}

export const dispatchOnBookParking = (id: number) => {
    dispatchOnBookProduct({id, type: 'parking'})
}
