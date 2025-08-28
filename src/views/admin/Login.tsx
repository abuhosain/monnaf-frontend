import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/client';

export default function Login() {
  const [email, setEmail] = useState('monnaf@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/admin');
    } catch (e: any) {
      setError(e?.response?.data?.message || e?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <form onSubmit={submit} className="w-full max-w-sm border border-green-400/20 p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <label className="block text-sm mb-1">Email</label>
        <input className="w-full mb-3 p-2 bg-transparent border border-green-400/30 rounded" value={email} onChange={e=>setEmail(e.target.value)} />
        <label className="block text-sm mb-1">Password</label>
        <input type="password" className="w-full mb-4 p-2 bg-transparent border border-green-400/30 rounded" value={password} onChange={e=>setPassword(e.target.value)} />
        {error && <p className="text-red-400 mb-2 text-sm">{error}</p>}
        <button disabled={loading} className="w-full py-2 bg-green-500 text-black rounded font-semibold disabled:opacity-60">{loading ? 'Logging in...' : 'Login'}</button>
      </form>
    </div>
  );
}
