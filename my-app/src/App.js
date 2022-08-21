import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import BillDetails from "./Components/BillDetails";
import { createInvoice } from "../createInvoice";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={BillDetails} />
        <Route path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
