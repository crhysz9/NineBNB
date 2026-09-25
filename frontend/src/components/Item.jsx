import React from 'react'

const Item = () => {

    const heandleClick = (e) => {
        e.preventDefault();
    }
    
  return (
    <a href='/' className='flex flex-col gap-3' onClick={heandleClick}>
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3bPl0QCf-CRwVTCobrcbG9rAKRkwUlYKfFJs7x_2kw&s=10" 
        alt="Imagem da casa"
        className='aspect-square object-cover rounded-2xl'
        />
        <div>
            <h3 className='text-xl font-semibold'>
                Juazeiro do Norte, Ceará
            </h3>
            <p className='truncate text-gray-600'>
                Casa filezinha, no jeito de você curtir a noite, o dia, a tarde, madrugada ( com moderaçãokkkkk), cuida papai vem que é tua.
            </p>
            <p>
                <span className='font-semibold'>R$ 550</span> por noite
            </p>
        </div>
    </a>
  )
}

export default Item
