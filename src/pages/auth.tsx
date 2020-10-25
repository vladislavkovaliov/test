import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Redirect } from 'react-router-dom';
import actions from '../modules/routines';
import { selectAuthenticated } from '../modules/auth/selectors';

export default function AuthPage() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectAuthenticated);
    const location = useLocation();
    const onLogin = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        dispatch(actions.auth.login.request());
    }, [dispatch]);


    if (isAuthenticated) {
        const fromLocation = location.state || { from: { pathname: '/' } };

        // @ts-ignore
        return <Redirect to={fromLocation.from.pathname} />;
    }

    return (
        <div>
            <h3>Auth page</h3>
            <button onClick={onLogin}>login</button>
        </div>
    );
}
