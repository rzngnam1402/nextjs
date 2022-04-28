import { Route, Switch } from 'react-router-dom'

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <AllMeetups />
        </Route>
        <Route path='/new-meetup' exact>
          <NewMeetup />
        </Route>
        <Route path='/favorites' exact>
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
