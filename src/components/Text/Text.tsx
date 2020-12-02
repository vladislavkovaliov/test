import React, { useEffect, useState } from 'react';
import { webSocketBus } from '../../modules/rootStore';

export function Text() {
    const [text, setText] = useState(null);

    useEffect(() => {
        webSocketBus.onValue((payload) => {
            console.log(payload);
            const { data } = payload;

            setText(data.timeout);
        })
    }, [text]);

    return (<div>
        {text}
    </div>)
}