import { useForm } from 'react-hook-form';
import { useAuht } from '../../context/authContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useService } from '../../context/serviceContext';
import { useEffect } from 'react';

export default function RegisterService(){
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const { isErrors } = useAuht()
    const { registerService, getService, updateService } = useService()
    const navigation = useNavigate()
    const params = useParams()

    useEffect(() => {
        async function loadTicket() {
            if (params.id) {
            const service = await getService(params.id)
            console.log(service)
            setValue('name', service.name)
            setValue('description', service.description)
            setValue('category', service.category)
            setValue('price', service.price.$numberDecimal)
        }
    }
        loadTicket()
    })

    var submit = 'Registrar'

    if (params.id){
        submit = 'Actualizar'
    }

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            updateService(params.id, data)
        } else {
            registerService(data)
        }
        navigation('/service')
    })

    return (
        <form className="modal-body" onSubmit={onSubmit}>
            {
                isErrors.map((error, i) => (
                    <div key={i}>
                        {error}
                    </div>
                ))
            }
            <input type="text" {...register('name', {
                required:{
                    value: true,
                    message: "Nombre del servicio Requerido"
                }
            })} className="form-input" placeholder="Nombre del Servicio" />
            {errors.name && <span className='errors'>{errors.name.message}</span>}
            <input type="text" {...register('description', {
                required:{
                    value: true,
                    message: "La descripción del servicio es Requerida"
                }
            })} className="form-input" placeholder="Descripción del servicio" />
            {errors.description && <span className='errors'>{errors.description.message}</span>}
            <select {...register('category', {
                required:{
                    value: true,
                    message: "La Categoria del servicio es Requerida"
                }
            })} className="form-input">
                <option>Categoria del servicio</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Salud">Salud</option>
                <option value="Educación">Educación</option>
            </select>
            {errors.category && <span className='errors'>{errors.category.message}</span>}
            <input type="number" {...register('price', {
                required:{
                    value: true,
                    message: "El precio del servicio es Requerido"
                }
            })} className="form-input" placeholder='Precio del servicio'/>
            {errors.price && <span className='errors'>{errors.price.message}</span>}
            <button type="submit" className="form-button" >{submit}</button>
        </form>
    )
}