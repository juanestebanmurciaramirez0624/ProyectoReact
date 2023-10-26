export default function SignUp(){
    return (
        <form className="modal-body">
            <input type="text" id="name" required className="form-input" placeholder="Nombre completo" />
            <input type="email" id="email" required className="form-input" placeholder="Correo" />
            <input type="password" id="menssage" required className="form-input" placeholder="contraseña" />
            <button type="submit" className="form-button" id="login">Enviar</button>
        </form>
    )
}