import React, { useEffect, useState } from 'react';

export const usePromise = (promise: any): [any, boolean, any] => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [fetching, setFetchingState] = useState<boolean>(true);

    useEffect(
        () => {
            setFetchingState(true);
            promise()
                .then((data: any) => {
                    setData(data);
                    setFetchingState(false);
                })
                .catch((error: any) => {
                    setError(error);
                    setFetchingState(false);
                })
        }, [promise]
    );

    return [ data, fetching, error ];
}

export const useToggle = (initValue: boolean = false): [boolean, () => void] => {
    const [boolean, setBoolean] = useState<boolean>(initValue);
    const toggle = (): void => {setBoolean(!boolean)};
    return [boolean, toggle];
}