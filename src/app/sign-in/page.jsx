"use client";

import './style.css'
import '../globals.css'
import Link from 'next/link';
import { React, useState } from "react";
import { useRouter } from 'next/navigation'
import api from '../services/api';

export default function SignIn() {
    const router = useRouter();

    const [form, setForm] = useState({ email: "", senha: "" })
    
    function handleInputValue(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            if (!form.email || !form.senha) {
                return
            }
            const response = await api.post('/sign-in', {
                ...form
            })
            router.push('/users')
        } catch (error) {
            console.log(error)
        }
    }

    return (<>
        <div className='container-signIn'>
            <header>
                <h2>Logo</h2>
            </header>
            <main className='container-main'>
                <h1>LOGO</h1>
                <div className='container-form'>
                    <h5>Login</h5>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input name='email' type="email" value={form.email} onChange={handleInputValue}></input>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" value={form.senha} onChange={handleInputValue}></input>
                        <div className='container-button'>
                            <Link href='/register' className='button-register'>Cadastrar</Link>
                            <button className='button-login'>Entrar</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    </>);
}