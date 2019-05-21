import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing/index';

import Error404 from './Error404';

function App(){
  return (
    <div>
      <Switch>
        <Route path="/" component={Landing}/>
        <Route component={Error404}/>
      </Switch>

    </div>
  );
}

export default App;
