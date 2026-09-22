import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className='flex items-center'>
      <div className='mx-auto flex max-w-96 w-full flex-col items-center gap-4'>
        <div className='mx-auto flex max-w-96 w-full flex-col items-center'>
             <h1 className='text-3xl font-bold text-black'>Bem-vindo!</h1>
             <p><small>Faça seu cadastro aqui.</small></p>
        </div>

        <form className='flex w-full flex-col gap-2'>


         <input 
            type="text" 
            placeholder='Digite seu nome.' 
            id='nomeRegisterUser' 
            className='w-full rounded-full border border-gray-300 px-4 py-2' 
          />

          <input 
            type="email" 
            placeholder='Digite seu email.' 
            id='emailRegisterUser' 
            className='w-full rounded-full border border-gray-300 px-4 py-2' 
          />

          <input 
            type="password" 
            placeholder='Digite sua senha.' 
            id='senhalRegisterUser' 
            className='w-full rounded-full border border-gray-300 px-4 py-2' 
          />

          <button className='cursor-pointer w-full rounded-full bg-primary-400 text-white font-semibold px-4 py-2'>
            Cadastrar
          </button>

        </form>

        <p>
          Já tem uma conta?{' '} 
          <Link to='/login' className='underline font-bold'>
          Faça login aqui!
          </Link>
        </p>

      </div>
    </section>
  )
}

export default Register;
