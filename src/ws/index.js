import * as Bacon from 'baconjs';
import { T } from 'ramda';

import config from '../config';

function tag(label) {
    return function(data) {
        return { label, data };
    };
}

export const createBinder = (fromBinder, wss, openMapper, messageMapper) => {
    return fromBinder((sink) => {
        wss.onopen = (args) => sink(openMapper(args));
        wss.onmessage = ({ data }) => {
            sink(massageMapper(data))
        };
    });
}

export const massageMapper = (data) => JSON.parse(data);

export const initBacon = () => {
    const wss30 = new WebSocket(config.ws.stream30.url);
    const wss31 = new WebSocket(config.ws.stream31.url);

    const stream30 = createBinder(Bacon.fromBinder, wss30, T, massageMapper);
    const stream31 = createBinder(Bacon.fromBinder, wss31, T, massageMapper);

    return Bacon.mergeAll(
        stream30.map(tag(config.ws.stream30.label)),
        stream31.map(tag(config.ws.stream31.label)),
    );
};
