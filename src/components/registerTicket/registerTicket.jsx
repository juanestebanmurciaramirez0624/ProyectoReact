import { useForm } from 'react-hook-form';
import { useAuht } from '../../context/authContext';
import { useTicket } from '../../context/ticketContext';
import { useParams } from 'react-router-dom';
import { useService } from '../../context/serviceContext';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function RegisterTicket({ updateTickets }){
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const { isErrors } = useAuht()
    const { registerTicket, getTicket, updateTicket } = useTicket()
    const [minDate, setMinDate] = useState('');
    const { isService } = useService()
    const params = useParams()

    useEffect(() => {
        async function loadTicket() {
            if (params.id) {
            const ticket = await getTicket(params.id)
            setValue('name', ticket.name)
            setValue('subject', ticket.subject)
            setValue('description', ticket.description)
            setValue('service', ticket.service)
            setValue('date', ticket.date)
        }
    }
        loadTicket()
        const today = new Date().toISOString().split('T')[0];
        setMinDate(today);
    })

    var submit = 'Registrar'

    if (params.id){
        submit = 'Actualizar'
    }

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            updateTicket(params.id, data)
            updateTickets()
        } else {
            registerTicket(data)
            updateTickets()
        }
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
                    message: "Nombre del ticket Requerido"
                }
            })} className="form-input" placeholder="Nombre ticket" />
            {errors.name && <span className='errors'>{errors.name.message}</span>}
            <input type="text" {...register('subject', {
                required:{
                    value: true,
                    message: "Asunto del ticket Requerido"
                }
            })} className="form-input" placeholder="Asunto ticket" />
            {errors.subject && <span className='errors'>{errors.subject.message}</span>}
            <input type="text" {...register('description', {
                required:{
                    value: true,
                    message: "Descripcion del ticket Requerida"
                }
            })} className="form-input" placeholder="Descripción" />
            {errors.description && <span className='errors'>{errors.description.message}</span>}
            <select {...register('service', {
                required:{
                    value: true,
                    message: "Servicio Requerido"
                }
            })} className="form-input">
                <option value=''>Servicio</option>
                {
                    isService.map(isService => (
                        <option key={isService._id} value={isService._id}>{isService.name}</option>
                    ))
                }
            </select>
            {errors.service && <span className='errors'>{errors.service.message}</span>}
            <input type="date" {...register('date', {
                required:{
                    value: true,
                    message: "Fecha del ticket Requerida"
                },
                validate: (value) => {
                    return value >= minDate || 'Fecha no disponible '
                }
            })} className="form-input" placeholder="Fecha del ticket" />
            {errors.date && <span className='errors'>{errors.date.message}</span>}
            <button type="submit" className="form-button" >{submit}</button>
        </form>
    )
}