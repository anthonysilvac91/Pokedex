import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Icon } from '@iconify/react';

const Navbar = () => {

        
  const location = useLocation();

  const navItems = [
    { name: 'Pokedex', path: '/pokedex' },
    { name: 'Regiones', path: '/regiones' },
  ];

  return (
    <nav className='flex gap-2 justify-between items-center bg-white px-10'>
    <div className='w-[150px]'>
        <img className='w-100%' src={logo} alt="logo_pokemon" />
    </div>
      <div className='flex justify-center items-center'>
        
        {navItems.map((item) => (
            
          <Link className='text-2xl flex items-center gap-2'
            key={item.path}
            to={item.path}
            style={{
              fontWeight: location.pathname === item.path ? 'bold' : 'bold',
              marginRight: '1rem',
              color: location.pathname === item.path ? '#FFCB05' : 'black',
               textShadow: location.pathname === item.path
      ? `
        -1.5px -1.5px 0 #3B4CCA,
         1.5px -1.5px 0 #3B4CCA,
        -1.5px  1.5px 0 #3B4CCA,
         1.5px  1.5px 0 #3B4CCA
      `
      : 'none',
              
            }}
          ><Icon icon="mdi:pokeball" width={24} color='red'/>
            {item.name}
          </Link>
        ))}

        
      </div>
      <button>  DARKMODE  </button>
    </nav>
  )
}

export default Navbar