import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import HomePage from './components/pages/HomePage'
import SignupPage from './components/pages/SignupPage';
import SigninPage from './components/pages/SigninPage';
import {TripGlobalProvider } from './context/tripContext/TripsState'
import TripPage from './components/pages/TripPage';
import { UserGlobalProvider } from './context/userContext/UserState';
import TripsPage from './components/pages/TripsPage';
import ReservationPage from './components/pages/ReservationPage';
import Page404 from './components/pages/Page404';

function App() {

    AOS.init();
  
  return (
    <div className="App">
      <UserGlobalProvider>
        <TripGlobalProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/signup' component={SignupPage}/>
              <Route exact path='/signin' component={SigninPage} />
              <Route exact path='/trip/:id' component={TripPage} />
              <Route exact path='/trips' component={TripsPage} />
              <Route exact path='/reservation/:id' component={ReservationPage} />
              <Route path='/' component={Page404} />
            </Switch>
          </Router>
        </TripGlobalProvider>
      </UserGlobalProvider>
      </div>
  );
}

export default App;
