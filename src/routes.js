import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Person from './pages/others/Person';
import Location from './pages/others/Location';
import Weather from './pages/others/Weather';
import Time from './pages/others/Time';

const createRoutes = () => (
    <BrowserRouter>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/person/:name" component={Person}/>
             <Route path="/location/:name" component={Location}/>
             <Route path="/weather/:name" component={Weather}/>
             <Route path="/time/:time" component={Time}/>
           </Switch>
    </BrowserRouter>
);

export default createRoutes;