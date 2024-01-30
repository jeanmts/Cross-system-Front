"use client";
import './style.css'
import '../globals.css'
import Link from 'next/link';
import { React, useState } from "react";
import { format } from "date-fns";
import api from '../services/api';
import { useRouter } from 'next/navigation'

export default function Register() {
    const router = useRouter();

    const [form, setForm] = useState([{ nome: '', email: '', senha: '', cpf: '' }]);

    function handleChangeInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (!form.nome || !form.email || !form.senha || !form.cpf) {
                return
            }
            const response = await api.post('/register', {
                ...form, dataDeCadastro: format(new Date(), "dd-MM-yyyy")
            })
            router.push('/sign-in')
        } catch (error) {
            console.log(error)
        }
    }
    return (<>
        <div className='container-register'>
            <header>
                <h2>Logo</h2>
            </header>
            <main className='container-main'>
                <h1>LOGO</h1>
                <div className='container-form'>
                    <h5>Cadastro</h5>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='nome'>Nome</label>
                        <input id='nome' type="text" value={form.nome || ''} onChange={handleChangeInput}></input>
                        <label htmlFor='email'>E-mail</label>
                        <input id='email' type="email" value={form.email || ''} onChange={handleChangeInput}></input>
                        <label htmlFor='senha'>Senha</label>
                        <input id='senha' type="password" value={form.senha || ''} onChange={handleChangeInput}></input>
                        <label htmlFor='cpf'>CPF</label>
                        <input id='cpf' type="text" value={form.cpf || ''} onChange={handleChangeInput}></input>
                        <Link href='/sign-in' className='button-register'>Voltar</Link>
                        <button className='button-login'>Cadastrar</button>
                    </form>
                </div>
            </main>
        </div>
    </>);
}