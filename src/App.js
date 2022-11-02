import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Signin from "./container/signin";
import Forgotpwd from "./container/forgotpwd";
import Signup from "./container/signup";
import SelectPlan from "./container/selectPlan";
import PaymentInfo from "./container/paymentInfo";
import Landing from "./container/landing";

import QRCodes from "./container/qrcodes";
import Users from "./container/users";
import CreateCampaign from "./container/createCampaign";
import CreateTeam from "./container/createTeam";
import CreateUser from "./container/createUser";
import Profile from "./container/profile";
import ChangePassword from "./container/changePassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgotpwd" element={<Forgotpwd />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/selectplan" element={<SelectPlan />} />
        <Route path="/paymentinfo" element={<PaymentInfo />} />
        <Route path="/landing" element={<Landing />} />

        <Route path="/profile" element={<Landing content={<Profile />}/>} />
        <Route path="/changepassword" element={<Landing content={<ChangePassword />}/>}/>

        <Route path="/qrcodes" element={<Landing content={<QRCodes />} />} />
        <Route path="/users" element={<Landing content={<Users />}/>} />
        <Route path="/createcampaign" element={<Landing content={<CreateCampaign />} />} />
        <Route path="/createteam" element={<Landing content={<CreateTeam />} />} />
        <Route path="/createuser" element={<Landing content={<CreateUser />} />} />
      </Routes>
    </Router> 
  );
}

export default App;
