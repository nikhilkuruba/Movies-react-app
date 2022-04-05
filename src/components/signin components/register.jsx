import RegisterBranding from "./registerBranding";
import RegisterForm from "./registerForm";

import Header from './header';

import Footer from './Footer';
import './register.css'; 

function Register(){
    return<div>
         <Header/>
     <div className="second-page">
            <RegisterBranding/>
            <RegisterForm/>
    </div>
    <Footer/>
    </div>
}
export default Register;