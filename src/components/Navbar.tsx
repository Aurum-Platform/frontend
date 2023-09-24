import { Link } from 'react-router-dom';
import '../static/css/navbar.css';
import ether_icon from '../static/img/ether.png';
import { Connect } from '../backend/Connect';


export function Navbar() {
  return (
    <div className='navbar'>
      <div className='left_nav'>
        <img src={ether_icon} alt='' />
        <a href='/'>Aurum</a>
      </div>
      <div className='right_nav'>
        <button>
          <Link to='/lend' className='lend_nav'>Lending</Link>
        </button>
        <button>
          <Link to='/borrow' className='borrow_nav'>Borrowing</Link>
        </button>
        <button>
          <Link to='/portfolio' className='portfolio_nav'>Portfolio</Link>
        </button>
        <Connect />
      </div>
    </div>
  );
}