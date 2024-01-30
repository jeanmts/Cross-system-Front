"use client"

import './styles.css'
import { useState, useEffect } from "react";
import '../globals.css'

import Link from 'next/link';

export default function Requests() {

    const [pedidos, setPedidos] = useState([]);
    async function loadUsers() {
        try {
            const { data } = await api.get('/users/requests')
            setPedidos(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadUsers();
    }, [])



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
                <h2>Produtos</h2>
                <button className='button-navigation'>Listar</button>
            </nav>
            <section>
                <table border='1'>
                    <tbody>
                        <tr>
                            <td>Nome do cliente</td>
                            <td>Nome Do Produto</td>
                            <td>Descrição</td>
                            <td>Valor</td>
                        </tr>
                    </tbody>
                    {pedidos.map((pedido) => {
                        return (
                            <tbody key={pedido.id}>
                                <tr >
                                    <td>{pedido.id_cliente}</td>
                                    <td>{pedido.nome}</td>
                                    <td>{pedido.descricao}</td>
                                    <td>{pedido.valor}</td>
                                    <Link href={`/users/requests/${pedido.id}`}>
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