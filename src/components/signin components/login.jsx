import Branding from "./branding";
import  Signin  from "./signin";

import Header from './header';

import Footer from './Footer';
import './login.css';
  
function Login(){
    return(
        <div>
            <Header/>
        <div className="body">
        <Branding></Branding>
        <Signin></Signin>  
        </div> 
        {/* <Footer/> */}
       <Footer/>
        </div> 
    )
}
export default Login;