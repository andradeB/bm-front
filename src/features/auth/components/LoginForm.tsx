import { useState, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks';
import { loginAsync } from '../slice';

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.auth.status);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginAsync({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="border p-2 w-full"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Usuário"
      />
      <input
        className="border p-2 w-full"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={status === 'loading'}
      >
        Entrar
      </button>
    </form>
  );
}
