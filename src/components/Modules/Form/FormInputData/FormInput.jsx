import React, { useEffect } from 'react'
import FormLayout from '../FormLayot'
import { useAtom } from 'jotai'
import { getData } from '@/Utils/getData'
import { bodyAtom, dateAtom, deAtom, emailStorageAtom, imagesAtom, inputByAtom, nameAtom, ndeAtom, tokenStorageAtom, unitAtom, } from '@/jotai/atoms'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const FormInput = (props) => {
    const [, setName] = useAtom(nameAtom)
    const [, setUnit] = useAtom(unitAtom)
    const [, setDe] = useAtom(deAtom)
    const [, setNde] = useAtom(ndeAtom)
    const [, setBody] = useAtom(bodyAtom)
    const [, setDate] = useAtom(dateAtom)
    const [, setImages] = useAtom(imagesAtom)
    const [, setInputBy] = useAtom(inputByAtom)
    const [email,] = useAtom(emailStorageAtom)
    const [token,] = useAtom(tokenStorageAtom)

    useEffect(() => {
        getData({ url: `me/${email}/${token}` }).then(result => setInputBy(result._id))
    })

    return (
        <FormLayout
            title={props.title}>
            <div className='flex justify-center w-full'>
                <div className='flex flex-col w-full max-w-screen-md h-full mr-2 shadow shadow-slate-300 p-2 mb-4'>
                    <form
                        onSubmit={props.onSubmit}
                        className='flex flex-col gap-10'>
                        <div className='flex flex-row gap-4 justify-between'>
                            <div className='flex flex-col gap-2 w-full'>
                                <div
                                    className='form-control'>
                                    <label className='label font-bold'>Nama Peralatan</label>
                                    <input
                                        className='input input-bordered w-full'
                                        type='text'
                                        required
                                        placeholder='Nama Peralatan'
                                        value={props.name ? props.name : ""}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className='label font-bold'>Unit #</label>
                                    <select className='select select-bordered w-full ' type='text'
                                        value={props.unit}
                                        onChange={(e) => setUnit(e.target.value)}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                <div
                                    className='form-control'>
                                    <label className='label font-bold'>Waktu</label>
                                    <DatePicker
                                        className='w-full bg-slate-200 rounded-box ring-400 h-12'
                                        showTimeSelect
                                        dateFormat='Pp'
                                        placeholderText="Select a date"
                                        selected={props.date ? new Date(props.date) : null}
                                        timeIntervals={1}
                                        onChange={(date) => setDate(date)} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <div className='form-control'>
                                    <label className='label font-bold'>DE (°C)</label>
                                    <input
                                        className='input input-bordered w-full'
                                        required
                                        type='text' placeholder='DE'
                                        value={props.de ? props.de : ""}
                                        onChange={(e) => setDe(e.target.value)}
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className='label font-bold'>NDE (°C)</label>
                                    <input
                                        required
                                        className='input input-bordered w-full'
                                        type='text' placeholder='NDE'
                                        value={props.nde ? props.nde : ""}
                                        onChange={(e) => setNde(e.target.value)}
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className='label font-bold'>Body (°C)</label>
                                    <input
                                        required
                                        className='input input-bordered w-full'
                                        type='text' placeholder='Body'
                                        value={props.body ? props.body : ""}
                                        onChange={(e) => setBody(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-center'>
                            <input
                                multiple
                                className='sm:w-full border border-xl bg-red-100 shadow-md border-md'
                                type='file'
                                onChange={(e) => setImages(e.target.files)}
                            />
                        </div>


                        <div className='flex justify-center mt-4'>
                            <button
                                onClick={props.onClick}
                                className='btn btn-sm md:btn-md btn-primary'
                            >{props.tombol}</button>
                        </div>
                    </form>
                </div>
            </div>
        </FormLayout >

    )
}

export default FormInput
