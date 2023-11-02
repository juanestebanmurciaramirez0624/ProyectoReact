import { useForm } from 'react-hook-form';
import { useAuht } from '../../context/authContext';
import { useTicket } from '../../context/ticketContext';

export default function RegisterTicket(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isErrors } = useAuht()
    const { registerTicket } = useTicket()

    const onSubmit = handleSubmit(async (values) => {
        registerTicket(values)
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
                    message: "Nombre del ticket requerido"
                }
            })} className="form-input" placeholder="Nombre ticket" />
            {errors.name && <span className='errors'>{errors.name.message}</span>}
            <input type="text" {...register('description', {
                required:{
                    value: true,
                    message: "Descripcion de. ticket requerida"
                }
            })} className="form-input" placeholder="Descripción" />
            {errors.description && <span className='errors'>{errors.description.message}</span>}
            <button type="submit" className="form-button" >Enviar</button>
        </form>
    )
}