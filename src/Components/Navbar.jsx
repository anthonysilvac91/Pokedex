import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

        
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Pokémon', path: '/pokemon' },
    { name: 'Regiones', path: '/regiones' },
  ];

  return (
    <nav>
      <h1>Pokédex</h1>

      <div>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              fontWeight: location.pathname === item.path ? 'bold' : 'normal',
              marginRight: '1rem',
            }}
          >
            {item.name}
          </Link>
        ))}

        <button    
        >
          
        </button>
      </div>
    </nav>
  )
}

export default Navbar