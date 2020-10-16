import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useFetchButton(actionCreator: () => void) {
    const dispatch = useDispatch();
    const onFetch = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            dispatch(actionCreator());
        }, [dispatch, actionCreator]);

    return [ onFetch ];
}

export type FetchButtonProps = {
    text: string;
    actionCreator: () => void;
}

export function FetchButton(props: FetchButtonProps) {
    const [ onFetch ] = useFetchButton(props.actionCreator);

    return (
        <button onClick={onFetch}>{props.text}</button>
    )
}
