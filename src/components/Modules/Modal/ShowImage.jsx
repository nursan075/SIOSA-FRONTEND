import React, { useState } from 'react'

const ShowImage = ({ data }) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    // console.log(data)
    return (
        <>
            <button
                onClick={() => setIsOpenModal(true)}
                className='text-blue-400 underline'
            >Lihat Gambar
            </button>
            <div className={`modal ${isOpenModal ? 'modal-open' : ''}`}>
                <div className='modal-box w-full max-w-screen-md'>
                    <div className='relative p-4 flex flex-col gap-4'>
                        <button
                            className='absolute -right-0 text-3xl text-red-600 -top-0'
                            onClick={() => setIsOpenModal(false)}
                        >X</button>
                        <h3 className='text-2xl font-black'>Gambar Data {data.name}</h3>
                        {data.images && data.images.length > 0 ? (
                            data.images.map((image) => (
                                <img
                                    key={image._id}
                                    src={image.url}
                                    alt={`Gambar ${data.name}`}
                                    className="w-full h-auto"
                                />
                            ))
                        ) : (
                            <p>Tidak ada gambar tersedia.</p>
                        )}
                    </div>
                </div>
            </div >
        </>

    )
}

export default ShowImage
