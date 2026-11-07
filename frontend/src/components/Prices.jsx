import React from 'react'
import { useState } from 'react';

const Prices = () => {

    const [price, setPrice] = useState("");
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [guests, setGuests] = useState("");

    return (
        <div className='flex flex-col gap-1'>

            <h2 className='ml-2 text-2xl font-bold'>Restrições e Preço</h2>

            <div className='grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-6'>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='price' className='ml-2 text-xl font-bold'>Preço</label>

                    <input
                        type="number"
                        placeholder='R$500'
                        className='border border-gray-300 px-4 py-2 rounded-full'
                        value={price}
                        id='price'
                        onClick={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='checkin' className='ml-2 text-xl font-bold'>Checkin</label>

                    <input
                        type="text"
                        placeholder='16:00'
                        className='border border-gray-300 px-4 py-2 rounded-full'
                        value={checkin}
                        id='checkin'
                        onClick={(e) => setCheckin(e.target.value)}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='checkout' className='ml-2 text-xl font-bold'>Checkout</label>

                    <input
                        type="text"
                        placeholder='12:00'
                        className='border border-gray-300 px-4 py-2 rounded-full'
                        value={checkout}
                        id='checkout'
                        onClick={(e) => setCheckout(e.target.value)}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='guests' className='ml-2 text-xl font-bold'>N° Convidados</label>

                    <input
                        type="number"
                        placeholder='6'
                        className='border border-gray-300 px-4 py-2 rounded-full'
                        value={guests}
                        id='guests'
                        onClick={(e) => setGuests(e.target.value)}
                    />

                </div>

            </div>

        </div>
    )
}

export default Prices;