export default function Login(){
    return (
        <form className="modal-body">
            <input type="email" required className="form-input" placeholder="Correo" />
            <input type="password" required className="form-input" placeholder="Contraseña" />
            <button type="submit" className="form-button" id="login">Enviar</button>
        </form>
    )
}