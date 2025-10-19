import React, { useState } from 'react'
import { bodyAtom, dataTemperaturAtom, dateAtom, deAtom, emailStorageAtom, imagesAtom, inputByAtom, nameAtom, ndeAtom, tokenStorageAtom, unitAtom } from '@/jotai/atoms'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import FormInput from '@/components/Modules/Form/FormInputData/FormInput'
import { addDataMulti } from '@/Utils/addData'

const AddTemperatur = () => {
    const [data, setData] = useAtom(dataTemperaturAtom)
    const [name,] = useAtom(nameAtom)
    const [unit,] = useAtom(unitAtom)
    const [de,] = useAtom(deAtom)
    const [nde,] = useAtom(ndeAtom)
    const [body,] = useAtom(bodyAtom)
    const [date,] = useAtom(dateAtom)
    const [images,] = useAtom(imagesAtom)
    const [inputBy,] = useAtom(inputByAtom)
    const [email,] = useAtom(emailStorageAtom)
    const [token,] = useAtom(tokenStorageAtom)
    const [isEdit,] = useState(false)


    const navigate = useNavigate()

    function klikButton() {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('unit', unit);
        formData.append('date', date);
        formData.append('de', de);
        formData.append('nde', nde);
        formData.append('body', body);

        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }

        setData(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await addDataMulti({ url: `data_temperatur/${email}/${token}`, data })

        if (response.status === 201) {
            setTimeout(() => {
                navigate("/database")
            }, 2000)
        }
    }


    return (
        <FormInput
            name={name}
            unit={unit}
            de={de}
            nde={nde}
            body={body}
            oleh={inputBy}
            image={images}
            date={date}
            isEdit={isEdit}
            onSubmit={handleSubmit}
            onClick={klikButton}
            title='Add Data Temperatur'
            tombol="ADD"
        />
    )
}

export default AddTemperatur
