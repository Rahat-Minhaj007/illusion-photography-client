import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import AddService from './components/AddService/AddService';
import ServiceMore from './components/ServiceMore/ServiceMore';
import CheckOut from './components/CheckOut/CheckOut';
import { createContext, useEffect, useState } from 'react';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';
import ManageService from './components/ManageService/ManageService';
import ManageOrders from './components/ManageOrders/ManageOrders';
import Loader from 'react-loader-spinner';
import Wedding from './components/Home/Wedding/Wedding';

export const UserContext = createContext();


function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        setTimeout(() => setSpinner(false), 3000)
    }, []);

    return (

        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

            <Router>
                {
                    spinner && <Loader className='spinner'
                        type="Grid"
                        color="black"
                        height={80}
                        width={80}
                        timeout={4000}
                    />
                }

                {
                    !spinner &&

                    <Switch>
                        
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <PrivateRoute path="/addService">
                            <AddService></AddService>
                        </PrivateRoute>
                        <Route path="/serviceMore/:_id">
                            <ServiceMore></ServiceMore>
                        </Route>
                        <Route path="/wedding">
                            <Wedding></Wedding>
                        </Route>
                        <PrivateRoute path="/checkOut/:_id">
                            <CheckOut></CheckOut>
                        </PrivateRoute>
                        <PrivateRoute path="/order">
                            <Order></Order>
                        </PrivateRoute>
                        <PrivateRoute path="/manageService">
                            <ManageService></ManageService>
                        </PrivateRoute>
                        <PrivateRoute path="/manageOrder">
                            <ManageOrders></ManageOrders>
                        </PrivateRoute>

                        <Route path="/login">
                            <LogIn></LogIn>
                        </Route>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="*">
                            <NoMatch></NoMatch>
                        </Route>

                    </Switch>}
            </Router>

        </UserContext.Provider>
    );
}

export default App;