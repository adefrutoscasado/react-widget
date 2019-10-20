import { useEffect, useState } from 'react';
import useMedia from 'use-media'; 

export const usePromise = (promise: any): [any, boolean, any] => {
    const [data, setData] = useState<object | null>(null);
    const [error, setError] = useState<object | null>(null);
    const [fetching, setFetchingState] = useState<boolean>(true);

    useEffect(
        () => {
            setFetchingState(true);
            promise()
                .then((data: object) => {
                    setData(data);
                    setFetchingState(false);
                })
                .catch((error: object) => {
                    setError(error);
                    setFetchingState(false);
                })
        }, [promise]
    );

    return [data, fetching, error];
}

export const useToggle = (initValue: boolean = false): [boolean, () => void] => {
    const [boolean, setBoolean] = useState<boolean>(initValue);
    const toggle = (): void => { setBoolean(!boolean) };
    return [boolean, toggle];
}

export const mobileMedia = 'only screen and (max-device-width : 480px)'
export const useMobileMedia = () => useMedia(mobileMedia);