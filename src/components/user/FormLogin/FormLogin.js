// import styles from './FormLogin.module.css';
import { useHistory } from "react-router-dom";
import { useRef, useState } from "react";
import {postLoginService} from "../../../services/UserService";

export function FormLogin(props) {

    const passwordLengthRef = useRef();

    const history = useHistory();

    const [form, setForm] = useState({
        name: '',
        password: ''
    });

    const handlerChange = (e) => {
        const {name, value} = e.target;

        setForm( {...form, [name]: value});
        if (name === "password") {
            // const validPassword = /^[A-Za-z\d]+$/;
            const len = 6 - e.target.value.length;
            let text = `Le mot de passe doit encore contenir ${len} caractères`;
            // if (validPassword.test(e.target.value)) { passwordMajRef.current.innerText = ""; }
            if ( len <= 0 ) {
                text = "`Le mot de passe est bon";
            }
            passwordLengthRef.current.innerText = text;
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        function any() {
            return postLoginService(form);
        }
        any().then(res => {
            console.log(res);
            history.push('/');
        });
    };

    return <div>
        <h1>Login</h1>

        <form onSubmit={handleOnSubmit}>
            <div className="message">
                <p>Le mot de passe :<br/></p>
                <p ref={passwordLengthRef}>doit encore contenir 6 caractères</p>
                {/*<p ref={passwordMajRef}>doit contenir 1 Maj</p>*/}
            </div>
            <input type="text" name="name" value={form.name} onChange={handlerChange} placeholder="Entrez votre username" />
            <input type="text" name="password" value={form.password} onChange={handlerChange} placeholder="Entrez votre mot de passe" />
            <button type="submit">Valider</button>
        </form>

    </div>;
}
