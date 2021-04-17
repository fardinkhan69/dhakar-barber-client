
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Addservice from './components/Dashboard/Addservice/Addservice';
import Addtestimonial from './components/Dashboard/Addtestimonial/Addtestimonial';
import Login from './components/Shared/Login/Login';
import Manageservice from './components/Dashboard/Manageservice/Manageservice';
import Booking from './components/Booking/Booking/Booking';
import BookedAppointments from './components/Booking/BookedAppointments/BookedAppointments';
import Appointments from './components/Dashboard/Appointments/Appointments';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {

  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <PrivateRoute path="/addService">
            <Addservice></Addservice>
          </PrivateRoute>
          
          <PrivateRoute path="/addTestimonial">
            <Addtestimonial></Addtestimonial>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/allAppointments">
            <Appointments></Appointments>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <Manageservice></Manageservice>
          </PrivateRoute>
          <PrivateRoute path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/booked">
            <BookedAppointments></BookedAppointments>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
