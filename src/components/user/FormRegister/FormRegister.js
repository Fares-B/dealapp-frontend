import { useHistory } from "react-router-dom";
import { useRef, useState } from "react";
import {userNameValid, postRegisterService} from "../../../services/UserService";

export function FormRegister(props) {

    const passwordLengthRef = useRef();
    const passwordEqualRef = useRef();

    const history = useHistory();

    const [form, setForm] = useState({
        name: '',
        password: '',
        passwordVerif: ''
    });

    let errorsForm = false;

    const handlerChange = (e) => {
        const {name, value} = e.target;

        setForm( {...form, [name]: value});

        if (name === "passwordVerif") {
            errorsForm = true;
            let text = "Le mot de passe doit être identique";
            if (form.password === form.passwordVerif) {
                text = "";
                errorsForm = false;
            }
            passwordEqualRef.current.innerText = text;
        }
        if (name === "password") {
            errorsForm = true;
            // const validPassword = /^[A-Za-z\d]+$/;
            const len = 6 - e.target.value.length;
            let text = `Le mot de passe doit encore contenir ${len} caractères`;
            // if (validPassword.test(e.target.value)) { passwordMajRef.current.innerText = ""; }

            if ( len <= 0 ) {
                errorsForm = false;
                text = "`Le mot de passe est bon";
            }
            passwordLengthRef.current.innerText = text;
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        async function any() {
            const valid = JSON.parse(await userNameValid(form));
            if (valid && !errorsForm) {
                return postRegisterService(form);
            }
            return false;
        }
        any().then(res => {
            console.log(res);
            if (res) {
                history.push('/login');
            }
        });
    };

    return <div>
        <h1>Register</h1>
        <a href="/login">Login</a>
        <form onSubmit={handleOnSubmit}>
            <div className="message">
                <p>Le mot de passe :<br/></p>
                <p ref={passwordLengthRef}>doit encore contenir 6 caractères</p>
                <p ref={passwordEqualRef}>doit être identique</p>
            </div>
            <input type="text" name="name" value={form.name} onChange={handlerChange} placeholder="Veuillez choisir un nom d'utilisateur" />
            <input type="text" name="password" value={form.password} onChange={handlerChange} placeholder="Veuillez entrer un mot de passe valable" />
            <input type="text" name="passwordVerif" value={form.passwordVerif} onChange={handlerChange} placeholder="Veuillez confirmer le mot de passe" />
            <button type="submit">Valider</button>
        </form>

    </div>;
}
