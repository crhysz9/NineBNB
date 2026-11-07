import React, { use, useState } from 'react'
import Perks from './Perks';
import Prices from './Prices';

const NewPlace = () => {

    const [title, setTitle] = useState("");
    const [city, setCity] = useState("");
    const [photos, setPhotos] = useState("");
    const [description, setDescription] = useState("");
    const [extras, setExtras] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className='w-full px-8 flex flex-col gap-6'>

            <div className='flex flex-col gap-1'>

                <label htmlFor='title' className='ml-2 text-2xl font-bold'>Título</label>

                <input
                    type="text"
                    placeholder='Digite o título do seu anúncio.'
                    className='border border-gray-300 px-4 py-2 rounded-full'
                    value={title}
                    id='title'
                    onClick={(e) => setTitle(e.target.value)}
                />

            </div>

            <div className='flex flex-col gap-1'>

                <label htmlFor='city' className='ml-2 text-2xl font-bold'>Cidade e País</label>

                <input
                    type="text"
                    placeholder='Digite a cidade e país do seu anuncio.'
                    className='border border-gray-300 px-4 py-2 rounded-full'
                    value={city}
                    id='city'
                    onClick={(e) => setCity(e.target.value)}
                />

            </div>

            <div className='flex flex-col gap-1'>

                <label htmlFor='photos' className='ml-2 text-2xl font-bold'>Fotos</label>

                <div className='flex gap-2'>

                    <input
                        type="text"
                        placeholder='Digite o link da imagem do lugar do seu anuncio.'
                        className='border border-gray-300 px-4 py-2 rounded-full grow'
                        id='photos'
                        value={photos}
                        onClick={(e) => setPhotos(e.target.value)}
                    />
                    <button className='transition hover:bg-gray-200 cursor-pointer border border-gray-300 px-4 py-2 rounded-full bg-gray-300 font-semibold'>Enviar Foto</button>

                </div>

                <div className='grid grid-cols-5 gap-4 mt-2'>

                    <label htmlFor="file" className='text-gray-800 items-center justify-center flex gap-2 aspect-square border border-gray-300 rounded-2xl'>
                        <input type="file" id="file" className='hidden' />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                        </svg>

                        Upload
                    </label>

                </div>

            </div>

            <div className='flex flex-col gap-1'>

                <label htmlFor='description' className='ml-2 text-2xl font-bold'>Descrição</label>

                <textarea
                    placeholder='Digite a descrição do seu anúncio.'
                    className='border border-gray-300 px-4 py-2 rounded-2xl h-36 resize-none'
                    value={description}
                    id='description'
                    onClick={(e) => setDescription(e.target.value)}
                />

            </div>

            <Perks />

            <div className='flex flex-col gap-1'>

                <label htmlFor='extras' className='ml-2 text-2xl font-bold'>Informações Extras</label>

                <textarea
                    placeholder='Digite informações extras do seu anúncio.'
                    className='border border-gray-300 px-4 py-2 rounded-2xl h-36 resize-none'
                    value={extras}
                    id='extras'
                    onClick={(e) => setExtras(e.target.value)}
                />

            </div>

            <Prices />

            <button 
            className='hover:bg-primary-500 min-w-44 rounded-full bg-primary-400 text-white px-4 py-2 cursos-pointer transition text-center'>
                Salvar Informações
            </button>
        </form>
    )
}

export default NewPlace;
