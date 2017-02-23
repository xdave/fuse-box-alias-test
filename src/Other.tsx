import * as React from 'react';
import { browserHistory } from 'react-router';

export const Other = () => (
    <div>
        <h1>Some other stuff</h1>
        <button onClick={e => browserHistory.goBack()}>Go Back</button>
    </div>
);
