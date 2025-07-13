import React from 'react'
import typeColors from '../Utils/TypeColors'

const PokemonCard = ({ name, id, image, types }) => {
   

  return (
     <div className='bg-white p-10'>
      <div className='w-[200PX]'>
        <img src={image} alt={name} />
      </div>
      
      <p className='text-gray-500 mb-4'>N.º {id}</p>
      <h3 className='text-2xl font-bold mb-2'>{name}</h3>
      <ul className='flex gap-2 text-white'>
        {types.map((type) => (
        <li 
            style={{ backgroundImage: typeColors[type] }}
            className='bg- px-2 w-20 text-center py-1 text-white' 
            key={type}>
                
            {type}
                
        </li>
        ))}
      </ul>
      
    </div>
  )
}

export default PokemonCard

