"use client"

import './styles.css'
import { useState,useEffect } from "react";
import '../globals.css'

import Link from 'next/link';

export default function Products() {

    const [produtos, setProdutos] = useState([]);
    async function loadUsers() {
        try {
            const { data } = await api.get('/products')
            setProdutos(data)
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
                            <td>Nome</td>
                            <td>Descrição</td>
                            <td>Valor</td>
                        </tr>
                    </tbody>
                    {produtos.map((produto) => {
                        return (
                            <tbody key={produto.id}>
                                <tr >
                                    <td>{produto.nome}</td>
                                    <td>{produto.email}</td>
                                    <td>{produto.cpf}</td>
                                    <td>{produto.datadecadastro}</td>
                                    <Link href={`/products/${produto.id}`}>
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