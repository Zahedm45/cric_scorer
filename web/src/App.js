import './App.css';
import Pay from "./client/pages/payment/Pay.js";
import NavigationBar from "./client/components/navigationBar/NavigationBar";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./client/pages/loginPage/LoginPage";
import PlaceOrder from "./client/pages/placeOrder/PlaceOrder";
import AdminDashboard from "./client/components/adminDashboard/dashboard/components/AdminDashboard"
import AboutUsPage from "./client/pages/aboutPage/AboutUsPage"
import ContactPage from "./client/pages/contactPage/ContactPage";
import Home from "./client/pages/homePage/Home";
import PayWrapper from "./client/pages/payment/PayWrapper";
import CustomerForm from "./client/pages/customerForm/CustomerForm";



function App() {
    return (
        <>

            <NavigationBar></NavigationBar>
            <div>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/order"} element={<PlaceOrder/>}/>
                    {/*<Route path={"form"} element={<CustomerForm/>}/>*/}
                    <Route path={"/pay2"} element={<PayWrapper/>}/>
{/*
                    <Route path={"/pay"} element={<Pay></Pay>}/>
*/}
                    <Route path={"/contact"} element={<ContactPage/>}/>
                    <Route path={"/about"} element={<AboutUsPage/>}/>
                    <Route path={"/login"} element= {<LoginPage/>}/>
                    <Route path={"/admin"} element={<AdminDashboard/>}/>
            </Routes>
            </div>

        </>
    );
}
export default App;

