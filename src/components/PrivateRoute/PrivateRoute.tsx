import React, { useCallback } from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuthenticated } from '../../modules/auth/selectors';

export type PrivateRouteProps = {
    children: JSX.Element,
    path: string,
    exact: boolean,
};

export function PrivateRoute({
    children,
    ...rest
}: PrivateRouteProps) {
    const isAuthenticated = useSelector(selectAuthenticated);
    const render = useCallback(({ location }) => {
        return isAuthenticated
            ? children
            : (<Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
            />)
    }, [children, isAuthenticated]);

    return (
        <Route
            {...rest}
            render={render}
        />
    );
}
