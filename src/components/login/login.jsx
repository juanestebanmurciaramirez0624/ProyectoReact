import { useForm } from 'react-hook-form';
import { useAuht } from '../../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { Toaster, toast} from 'sonner'

export default function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, isAuthenticated } = useAuht()
    const onSubmit = handleSubmit((data) => {
        login(data)
    })

    const navigation = useNavigate() 

    useEffect(() => {
        if (isAuthenticated) navigation("/dashboard")
    }, [isAuthenticated])
    return (
        <form className="modal-body">
            <input type="text" 
            {...register('email', {
                required:{
                    value: true,
                    message: "Correo electronico Requerido"
                },
                pattern:{
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
                    message: "Formato no Valido"
                }
            })}
            className="form-input" placeholder="Correo" />
            {errors.email && <span className='errors'>{errors.email.message}</span>}
            <input type="password" {...register('password', {
                required:{
                    value: true,
                    message: "Contraseña Requerida"
                },
                minLength: {
                    value: 6,
                    message: "La contraseña requiere minimo 6 caracteres"
                }
            })} className="form-input" placeholder="Contraseña" />
            {errors.password && <span className='errors'>{errors.password.message}</span>}
            <button type="submit" onClick={onSubmit} className="form-button">Enviar</button>
        </form>
    )
}