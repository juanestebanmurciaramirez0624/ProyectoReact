import { useForm } from 'react-hook-form';
import { useAuht } from '../../context/authContext';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../../context/userContext';
import './updateData.css'

export default function UpdateData(){
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const { singup, isAuthenticated } = useAuht()
    const { getUser, updateUser } = useUser()
    const navigation = useNavigate()
    const params = useParams()
    let location = useLocation()

    useEffect(() => {
        async function loadTicket() {
            if (params.id) {
            const user = await getUser(params.id)
            console.log(user)
            setValue('fullName', user.fullName)
            setValue('documentType', user.documentType)
            setValue('documentNumber', user.documentNumber)
            setValue('email', user.email)
            setValue('password', user.password)
        }else if(location.pathname == '/') {
            if (isAuthenticated) navigation("/dashboard")
        }
    }
        loadTicket()
    }, [isAuthenticated])

    var submit = 'Registrar'

    if (params.id){
        submit = 'Actualizar'
    }

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            updateUser(params.id, data)
        } else {
            singup(data)
        }
    })

    return (
        <form className="UpdateData" onSubmit={onSubmit}>
            <h1 className='TitleProfile'>Actualizar Datos</h1>
            <input type="text" {...register('fullName', {
                required:{
                    value: true,
                    message: "Nombre completo Requerido"
                }
            })} className="form-input" placeholder="Nombre completo" />
            {errors.fullName && <span className='errors'>{errors.fullName.message}</span>}
            <select {...register('documentType', {
                required:{
                    value: true,
                    message: "El tipo de documento es Requerido"
                }
            })} className="form-input">
                <option value=''>Tipo de documento</option>
                <option value="T.I">T.I</option>
                <option value="C.C">C.C</option>
                <option value="C.E">C.E</option>
                <option value="Pasaporte">Pasaporte</option>
            </select>
            {errors.documentType && <span className='errors'>{errors.documentType.message}</span>}
            <input type="number" {...register('documentNumber', {
                required:{
                    value: true,
                    message: "El numero de documento es Requerido"
                }
            })} className='form-input' placeholder='Numero de documento'/>
            {errors.documentNumber && <span className='errors'>{errors.documentNumber.message}</span>}
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
            {location.pathname === `/profile/${params.id}` || location.pathname === '/'     ? (
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
            ): null }
            {errors.password && <span className='errors'>{errors.password.message}</span>}
            <button type="submit" className="form-button margin" >{submit}</button>
        </form>
    )
}