import { Link } from 'react-router-dom';
import "./navbar.styles.css"

function Navbar() {
  return (
    <header className='navbar'>
        <Link className='navbar__title navbar__item' to="/">Home</Link>
        <Link className='navbar__item' to="/age">Age</Link>
        <Link className='navbar__item' to="/joke">Joke</Link>
        <Link className='navbar__item' to="/planets">Planets</Link>        
        <Link className='navbar__item' to="/tasklist">Task List</Link>        
        <Link className='navbar__item' to="/text">Text</Link>        
        <Link className='navbar__item' to="/profile">Profile</Link>       
    </header>
  )
}

export default Navbar