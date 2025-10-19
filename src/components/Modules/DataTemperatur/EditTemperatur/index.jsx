import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { bodyAtom, dataTemperaturAtom, dateAtom, deAtom, emailStorageAtom, imagesAtom, nameAtom, ndeAtom, tokenStorageAtom, unitAtom } from '@/jotai/atoms'
import { useNavigate, useParams } from 'react-router-dom'
import FormInput from '../../Form/FormInputData/FormInput'
import { getDataById } from '@/Utils/getDataById'
import { updateData } from '@/Utils/editData'

const EditTemperatur = () => {
    const [data, setData] = useAtom(dataTemperaturAtom)
    const [name, setName] = useAtom(nameAtom)
    const [unit, setUnit] = useAtom(unitAtom)
    const [de, setDe] = useAtom(deAtom)
    const [nde, setNde] = useAtom(ndeAtom)
    const [body, setBody] = useAtom(bodyAtom)
    const [date, setDate] = useAtom(dateAtom)
    const [email,] = useAtom(emailStorageAtom)
    const [token,] = useAtom(tokenStorageAtom)
    const [images, setImages] = useAtom(imagesAtom)
    const [nameTitle, setNameTitle] = useState('')
    const [isEdit,] = useState(true)


    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getDataById({ url: `data_temperatur/${email}/${token}/${id}` }).then(result => {
            setName(result.name)
            setNameTitle(result.name)
            setUnit(result.unit)
            setDe(result.de)
            setNde(result.nde)
            setBody(result.body)
            setDate(result.date)
            setImages(result.images)
        })
    }, [])


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

    const handleUpdate = async (e) => {
        e.preventDefault()
        const response = await updateData({ url: `data_temperatur/${email}/${token}/${id}`, data })

        if (response.status === 200) {
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
            date={date}
            images={images}
            onSubmit={handleUpdate}
            onClick={klikButton}
            isEdit={isEdit}
            tombol="Update"
            title={`Edit Data ${nameTitle}`}
        />
    )
}

export default EditTemperatur
