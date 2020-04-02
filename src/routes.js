import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './pages/Home';

export default function Routes() {
    return (
        <div>
            <HashRouter basename="/">
                <Route path="/" component={Home} />
            </HashRouter>
        </div>
    );
}