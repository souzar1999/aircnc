import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){
    //variável email para login
    const [email, setEmail] = useState('');
    
    //submit para fazer o login na aplicação
    async function handleSubmit(event) {
        event.preventDefault();
        
        //Acessa url passando email e retorna json do usuário criado
        const response = await api.post('/sessions', { email });
        
        const { _id } = response.data;
        
        //Salva ID do usuário criado no localStorage
        localStorage.setItem('user', _id);

        //Vai para o dashboard
        history.push('/dashboard');
    }

    return (
        <>
        <p>
        Oferença <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>
        
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input 
        type="email" 
        id="email" 
        placeholder="Seu melhor e-mail"
        value={ email }
        onChange={ event => setEmail(event.target.value) }
        />
        
        <button className="btn" type="submit">Entrar</button>
        </form>
        </>
        )
    }