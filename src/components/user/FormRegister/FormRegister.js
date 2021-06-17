import { useHistory } from "react-router-dom";
import { useState } from "react";
import {userNameValid, postRegisterService} from "../../../services/UserService";
import {LockClosedIcon} from "@heroicons/react/solid";

export function FormRegister(props) {

    // const passwordLengthRef = useRef();
    // const passwordEqualRef = useRef();

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
            // let text = "Le mot de passe doit être identique";
            if (form.password === form.passwordVerif) {
                // text = "";
                errorsForm = false;
            }
            // passwordEqualRef.current.innerText = text;
        }
        if (name === "password") {
            errorsForm = true;
            // const validPassword = /^[A-Za-z\d]+$/;
            const len = 6 - e.target.value.length;
            // let text = `Le mot de passe doit encore contenir ${len} caractères`;
            // if (validPassword.test(e.target.value)) { passwordMajRef.current.innerText = ""; }

            if ( len <= 0 ) {
                errorsForm = false;
                // text = "`Le mot de passe est bon";
            }
            // passwordLengthRef.current.innerText = text;
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


    return <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

        {/*        <div className="message">*/}
        {/*            <p>Le mot de passe :<br/></p>*/}
        {/*            <p ref={passwordLengthRef}>doit encore contenir 6 caractères</p>*/}
        {/*            /!*<p ref={passwordMajRef}>doit contenir 1 Maj</p>*!/*/}
        {/*        </div>*/}
        <div className="max-w-md w-full space-y-8">
            <div>
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Créez votre compte</h2>
                {/*<p className="mt-2 text-center text-sm text-gray-600">*/}
                {/*    Or{' '}*/}
                {/*    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">*/}
                {/*        start your 14-day free trial*/}
                {/*    </a>*/}
                {/*</p>*/}
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleOnSubmit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="username" className="sr-only">
                            Nom d'utilisateur
                        </label>
                        <input
                            id="username"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handlerChange}
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Nom d'utilisateur"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Mot de passe
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handlerChange}
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Mot de passe"
                        />
                    </div>
                    <div>
                        <label htmlFor="passwordVerif" className="sr-only">
                            Vérification du mot de passe
                        </label>
                        <input
                            id="passwordVerif"
                            name="passwordVerif"
                            type="password"
                            value={form.passwordVerif}
                            onChange={handlerChange}
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Mot de passe de vérification"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end">
                    <div className="text-sm">
                        <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Vous avez déjà un compte ?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
                        S'enregistrer
                    </button>
                </div>
            </form>
        </div>
    </div>;
}
