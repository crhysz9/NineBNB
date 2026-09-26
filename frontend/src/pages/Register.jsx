import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

const Register = ({ setUser }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const heandleSubmit = async (e) => {

    e.preventDefault();
   
    if (email && password && name) {
      
      try {

        const { data: userDoc } = await axios.post('/users', {
        name,
        email, 
        password,
        });

        setUser(userDoc);
        setRedirect(true);

      } catch (error) {
        alert(`Erro ao cadastrar usuário: ${error.response.data}`)
      }

    } else{
      alert('PREENCHA OS CAMPOS DE NOME, EMAIL E SENHA.')
    }
  };

  if(redirect) return <Navigate to='/'/>;

  return (
    <section className='flex items-center'>
      <div className='mx-auto flex max-w-96 w-full flex-col items-center gap-4'>
        
        <div className='mx-auto flex max-w-96 w-full flex-col items-center'>
              <img 
                className='h-30'
                src="./assets/logo.png" 
                alt="Logo NineBNB"
              />
             <h1 className='text-3xl font-bold text-black'>Seja Bem-vindo!</h1>
             <p><small>Faça seu cadastro aqui.</small></p>
        </div>

        <form className='flex w-full flex-col gap-2' onSubmit={heandleSubmit}>


         <input 
            type="text" 
            placeholder='Digite seu nome.' 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full rounded-full border border-gray-300 px-4 py-2' 
          />

          <input 
            type="email" 
            placeholder='Digite seu email.' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full rounded-full border border-gray-300 px-4 py-2' 
          />

          <input 
            type="password" 
            placeholder='Digite sua senha.' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
