import './style/navbar.css';
import{Link} from 'react-router-dom';
function Navbar(){
    return (
             <section className="page-header">
            <h3 className="heading">NETFLIX</h3>
            <div className='list'>
            <Link to='/discover/popular' className='list-element'>Popular Movies</Link>
            <Link to='/discover/latest' className='list-element'>Latest Movies</Link>
            <Link to='/discover/favorite' className='list-element'>Favorite Movies</Link>
            <Link  to='/' className='list-element-signin'>Log Out</Link>
            </div>
</section>       
    )
        
}
export default Navbar;