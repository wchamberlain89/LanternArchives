import React from 'react';
import Landing from './Landing';
import { Switch, Route } from 'react-router-dom';

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
