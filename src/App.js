
import React, { useEffect } from "react"
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";

const promise = loadStripe("pk_test_51Leb29SIQTttHTNw1pIsvMkMAv51cIxS6MBOfWaFIA08tzXKuGId126He9baSuUfcGP2IbbyTrecZsXYMRyH9bNx00CqcqkpZM");


function App() {
  
  const [{ user }, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("[USER] ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);



  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/orders" 
              element={<div>
                        <Header />
                        <Orders />
                        </div>
                        }/>

        <Route path="/login" 
              element={<div>
                        <Login />
                        <h1>log in is working</h1>
                        </div>}/>
        <Route path="/checkout" 
              element={<div>
                        <Header />
                        <Checkout />
                        </div>}/>

                        <Route path="/payment" 
                element={<div>
                          <Header />
                          <Elements stripe={promise}>
                          <Payment />
                          </Elements> 
                          </div>} />

          <Route path="/" 
                element={<div>
                          <Header />
                          <Home />
                          <Footer /> 
                          </div>} />
            
          
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
