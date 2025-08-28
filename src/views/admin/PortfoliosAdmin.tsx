import { useEffect, useState } from 'react';
import { api } from '../../api/client';

export default function PortfoliosAdmin() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.get('/portfolios');
      setItems(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', title);
    form.append('category', category);
    form.append('description', description);
    form.append('link', link);
    if (image) form.append('image', image);
    await api.post('/admin/portfolios', form, { headers: { 'Content-Type': 'multipart/form-data' } });
    setTitle(''); setCategory(''); setDescription(''); setLink(''); setImage(null);
    await load();
  };

  const del = async (id: string) => {
    await api.delete(`/admin/portfolios/${id}`);
    await load();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Portfolios</h1>
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-2 items-end mb-6">
        <div>
          <label className="block text-sm mb-1">Title</label>
          <input className="p-2 bg-transparent border border-green-400/30 rounded w-full" value={title} onChange={e=>setTitle(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">Category</label>
          <input className="p-2 bg-transparent border border-green-400/30 rounded w-full" value={category} onChange={e=>setCategory(e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Description</label>
          <input className="p-2 bg-transparent border border-green-400/30 rounded w-full" value={description} onChange={e=>setDescription(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">Link</label>
          <input className="p-2 bg-transparent border border-green-400/30 rounded w-full" value={link} onChange={e=>setLink(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">Image</label>
          <input type="file" onChange={e=>setImage(e.target.files?.[0] || null)} />
        </div>
        <button className="py-2 px-4 bg-green-500 text-black rounded">Add</button>
      </form>

      {loading ? <p>Loading...</p> : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it: any) => (
            <div key={it._id} className="border border-green-400/20 p-4 rounded">
              {it.imageUrl && <img src={it.imageUrl} alt="" className="w-full h-32 object-cover rounded mb-2"/>}
              <div className="font-semibold">{it.title}</div>
              <p className="text-gray-400 text-sm">{it.category}</p>
              <p className="text-gray-400 text-sm line-clamp-2">{it.description}</p>
              <a href={it.link} target="_blank" className="text-yellow-400 text-sm">Open</a>
              <button onClick={() => del(it._id)} className="mt-2 text-red-400 block">Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
