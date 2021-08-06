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


function App() {


    return (


        <Router>
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/addService">
                    <AddService></AddService>
                </Route>
                <Route path="/serviceMore/:_id">
                    <ServiceMore></ServiceMore>
                </Route>
                <Route path="/checkOut/:_id">
                    <CheckOut></CheckOut>
                </Route>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="*">
                    <NoMatch></NoMatch>
                </Route>
                
            </Switch>
        </Router>
    );
}

export default App;