export type parkingVendor = {
    name: string;
    departureAirport: string;
    map: string;
    features: string[];
}

export type parkingSlot = {
    id: number;
    indoor: boolean;
    insurance: boolean;
    price: string;
}

export type parkingDictionary = {
    [key: string]: string
}

export type parkingResponseI = {
    vendor: parkingVendor,
    parkings: parkingSlot[],
    dictionary: parkingDictionary,
}