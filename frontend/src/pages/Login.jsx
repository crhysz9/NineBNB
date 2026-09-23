import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();
   
    if (email && password) {
      
      try {

        const { data: userDoc } = await axios.post('/users/login', {
        email, 
        password,
        });
        console.log(userDoc);

      } catch (error) {
        alert(`Erro ao logar: ${error.response.data}`)
      }

    } else{
      alert('PREENCHA OS CAMPOS DE EMAIL E SENHA.')
    }

  }

  return (
    <section className='flex items-center'>
      <div className='mx-auto flex max-w-96 w-full flex-col items-center gap-4'>
        <h1 className='text-3xl font-bold text-black'>Faça seu login</h1>

        <form className='flex w-full flex-col gap-2' onSubmit={handleSubmit}>

          <input 
            type="email" 
            placeholder='Digite seu email.'  
            className='w-full rounded-full border border-gray-300 px-4 py-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input 
            type="password" 
            placeholder='Digite sua senha.'
            className='w-full rounded-full border border-gray-300 px-4 py-2' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='cursor-pointer w-full rounded-full bg-primary-400 text-white font-semibold px-4 py-2'>
            Login
          </button>

        </form>

        <p>
          Ainda não tem conta?{' '} 
          <Link to='/register' className='underline font-bold'>
          Cadastre-se aqui!
          </Link>
        </p>

      </div>
    </section>
  )
}

export default Login;
