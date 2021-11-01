import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Ride from './Components/Ride/Ride';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import RideDetail from './Components/RideDetail/RideDetail';
import Gallery from './Components/Gallery/Gallery';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';
import MyRide from './Components/MyRide/MyRide';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import AddNewRide from './Components/AddNewRide/AddNewRide';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/rides">
              <Ride></Ride>
            </Route>
            <PrivateRoute path="/ridedetail/:rideId">
              <RideDetail></RideDetail>
            </PrivateRoute>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/myride">
              <MyRide></MyRide>
            </PrivateRoute>
            <PrivateRoute path="/manageallorders">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/addnewride">
              <AddNewRide></AddNewRide>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
