import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, } from 'react-router-dom';
import actions from '../modules/routines';
import { selectAuthenticated } from '../modules/auth/selectors';

export default function AuthPage() {
    const dispatch = useDispatch();
    const onLogin = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        dispatch(actions.auth.login.request());
    }, [dispatch]);
    const isAuthenticated = useSelector(selectAuthenticated);
    const history = useHistory();
    const location = useLocation();

    if (isAuthenticated) {
        const fromLocation = location.state || { from: { pathname: '/' } };
        // @ts-ignore
        history.push(fromLocation.from);
    }

    return (
        <div>
            <h3>Auth page</h3>
            <button onClick={onLogin}>login</button>
        </div>
    );
}
