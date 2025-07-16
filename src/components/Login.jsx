import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from "react";
import './styles/Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // <-- nome correto
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await axios.post('http://localhost:3001/login', {
        email,
        password, // <-- nome correto
      });

      // O backend retorna apenas { message: 'Login bem-sucedido' }
      // Então aqui basta checar se o status foi 200
      if (resposta.status === 200) {
        localStorage.setItem('auth', 'true');
        navigate('/dashboard');
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setErro('Credenciais inválidas');
      } else {
        setErro('Erro ao conectar ao servidor');
      }
      console.error(err);
    }
  };

  useEffect(() => {
  if (localStorage.getItem('auth') === 'true') {
    navigate('/dashboard');
  }
}, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>Login:</div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </form>
  );
}

export default Login;
