import { useEffect, useState } from 'react';
import { api } from './client';

export function useTestimonials() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    api.get('/testimonials')
      .then(res => mounted && setData(res.data))
      .catch(e => mounted && setError(e?.message || 'Failed to load'))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, []);

  return { data, loading, error };
}
