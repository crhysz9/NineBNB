import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AccProfile from '../components/AccProfile';

const Account = ({ user, setUser }) => {

    const { subpage } = useParams();

    const buttonClass = (button) => {

        let finalClass = "rounded-full hover:bg-primary-400 hover:text-white px-4 py-2 cursos-pointer transition";

        if(button === subpage) finalClass += " bg-primary-400 text-white";

        return finalClass;
    }

    return(
        <section className='p-8'>
            <div className='max-w-7xl mx-auto flex flex-col gap-8 items-center'>

                <div className='flex gap-2'>
                    <Link to='/account/profile' className={buttonClass("profile")}>Perfil</Link>
                    <Link to='/account/bookings' className={buttonClass("bookings")}>Reservas</Link>
                    <Link to='/account/places' className={buttonClass("places")}>Lugares</Link>
                </div>

                <div>   
                    {subpage === 'profile' && <AccProfile user={user} setUser={setUser}/>}
                </div>
                
            </div>
        </section>
    )
}

export default Account;
