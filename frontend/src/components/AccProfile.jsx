import React, { useState } from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const AccProfile = ({ user, setUser }) => {

    const [redirect, setRedirect] = useState(false);

    const logout = async () => {

        try {

            const { data } = await axios.post('/users/logout');
            
            console.log(data);
            setRedirect(true);
            setUser(null);
            
        } catch (error) {
            alert(JSON.stringify(error));
        }

    };

    if (redirect) return <Navigate to='/' />;
    if (!user) return <></>;

    return (
        <div className='flex flex-col gap-4 items-center'>

            <p>Logado como {user.name} ({user.email})</p>
            <button onClick={logout} className='min-w-32 rounded-full bg-primary-400 text-white px-4 py-2 cursos-pointer transition'>
                Sair
            </button>

        </div>
    );
};

export default AccProfile;
