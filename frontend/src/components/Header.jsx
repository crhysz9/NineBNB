import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ user }) => {
    return (
        <header className='shadow-md'>
            <div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px8 py-4'>
                <Link to='/' className='flex items-center'>
                    <img
                        className='h-10'
                        src="https://cdn-icons-png.flaticon.com/512/3840/3840773.png"
                        alt="Logo NineBNB"
                    />
                    <p className='text-2xl font-bold text-primary-400'>NineBNB</p>
                </Link>

                <Link to='/' className='hidden lg:flex items-center border border-gray-300 pr-4 pl-6 py-2 rounded-full shadow-md'>
                    <p className='pr-4 border-r border-r-gray-300'>Qualquer Lugar</p>
                    <p className='px-4 border-r border-r-gray-300'>Qualquer Semana</p>
                    <p className='px-4'>Hóspedes</p>
                    <div className='bg-primary-400 rounded-full p-2 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </Link>

                <Link to={user ? 'account' : '/login'} className='flex items-center border border-gray-300 pr-4 pl-6 py-2 rounded-full shadow-md gap-2'>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-600">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-600">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>

                    {user ? <p className='sm:max-w-32 max-w-20 truncate text-gray-600'>{user.name}</p> : <></>}

                </Link>

            </div>
        </header>
    )
}

export default Header
