"use client";
import './style.css'
import '../../globals.css'

import api from '@/app/services/api';
import { useState } from 'react';
import Link from 'next/link';

export default function detailUser({ params }) {
    const [form, setForm] = useState([{ nome: '', email: '', cpf: '' }]);

    function handleChangeInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Entrou no handle")
        try {
            const response = await api.patch(`/users/${params.id}`, ...form)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='cotainer-register-user'>
                <header container-header>
                    <h2 className='logo'>Logo</h2>
                    <ul>
                        <Link href={"/users"}><li>Clientes</li></Link>
                        <Link href={"/requests"}><li>Pedidos</li></Link>
                        <Link href={"/products"}><li>Produtos</li></Link>
                    </ul>
                </header>
                <section className='container-section'>
                    <nav className='navigation'>
                        <h2>Detalhes do cliente</h2>
                        <button className='button-navigation'>Salvar</button>
                    </nav>
                    <form onSubmit={handleSubmit} className='container-form'>
                        <div className='options'>
                            <label htmlFor="name">Nome</label>
                            <input value={form.email} onChange={handleChangeInput} type='text' id='name'></input>
                        </div>
                        <div className='options'>
                            <label htmlFor="email">E-mail</label>
                            <input value={form.email} onChange={handleChangeInput} type='e-mail' id='email'></input>
                        </div>
                        <div className='options'>
                            <label htmlFor="cpf">CPF</label>
                            <input value={form.cpf} onChange={handleChangeInput} type='text' id='cpf'></input>
                        </div>
                    </form>
                </section>

            </div>
        </>
    )
}