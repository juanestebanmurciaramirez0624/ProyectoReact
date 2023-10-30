import { useForm } from 'react-hook-form';
import { useAuht } from '../../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { singup, isAuthenticated, isErrors } = useAuht()
    const navigation = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigation("/dashboard")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        singup(values)
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
            <input type="text" {...register('fullName', {
                required:{
                    value: true,
                    message: "Nombre completo Requerido"
                }
            })} className="form-input" placeholder="Nombre completo" />
            {errors.fullname && <span className='errors'>{errors.fullname.message}</span>}
            <input type="email" {...register('email', {
                required:{
                    value: true,
                    message: "Correo electronico Requerido"
                },
                pattern:{
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
                    message: "Formato no Valido"
                }
            })} className="form-input" placeholder="Correo" />
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
            })} className="form-input" placeholder="contraseña" />
            {errors.password && <span className='errors'>{errors.password.message}</span>}
            <button type="submit" className="form-button" >Enviar</button>
        </form>
    )
}