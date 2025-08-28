import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };
  return (
    <div className="min-h-screen bg-black text-white flex">
      <aside className="w-64 border-r border-green-400/20 p-4 space-y-3">
        <h2 className="text-xl font-bold mb-4">Admin</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/admin/skills" className="hover:text-green-400">Skills</Link>
          <Link to="/admin/services" className="hover:text-green-400">Services</Link>
          <Link to="/admin/portfolios" className="hover:text-green-400">Portfolios</Link>
          <Link to="/admin/testimonials" className="hover:text-green-400">Testimonials</Link>
        </nav>
        <button onClick={logout} className="mt-6 text-red-400 hover:text-red-300">Logout</button>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
