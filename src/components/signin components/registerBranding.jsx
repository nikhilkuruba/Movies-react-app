import {Link} from 'react-router-dom';
import './registerBranding.css'

function RegisterBranding(){
    return(
        <div className='reg-branding'>
        <div className='reg-main-heading'>
        <h1 className="reg-brand">NETFLIX
        <p className="reg-caption">Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
        </h1>
         
        </div>
        
        <div className='reg-register-button'>
        <p className="reg-account">Already Have Account?</p>

        <Link to='/'><input className='reg-btn' type="submit" value="Sign In" /></Link>
        </div>
        <div className='rectt'>
            
            </div>
        
        </div>
    )
}
export default RegisterBranding;