"use client";

import './style.css'
import '../globals.css'
import 'primeicons/primeicons.css';
import api from '../services/api';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Users() {
    const [clientes, setClientes] = useState([]);
    async function loadUsers() {
        try {
            const {data} = await api.get('/users')
        setClientes(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        loadUsers();
    },[])
    
    return (
        <>
            <header className='container-header'>
                <h2 className='logo'>Logo</h2>
                <ul>
                    <Link href={"/users"}><li>Clientes</li></Link>
                    <Link href={"/requests"}><li>Pedidos</li></Link>
                    <Link href={"/products"}><li>Produtos</li></Link>
                </ul>
            </header>
            <nav className='navigation'>
                <h2>Clientes</h2>
                <button className='button-navigation'>Listar</button>
            </nav>
            <section>
                <table border='1'>
                    <tbody>
                        <tr>
                            <td>Nome</td>
                            <td>Email</td>
                            <td>CPF</td>
                            <td>Data de cadastro</td>
                        </tr>
                    </tbody>
                    {clientes.map((cliente) => {
                        return (
                            <tbody key={cliente.id}>
                                <tr >
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.datadecadastro}</td>
                                  <Link href={`/users/${cliente.id}`}>
                                   <td><i className="pi pi-spin pi-cog" style={{ fontSize: '1rem' }}></i></td>
                                  </Link> 
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </section>
        </>


    )

}



