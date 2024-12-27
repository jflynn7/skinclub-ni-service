import { useState, useEffect } from 'react';

export interface Content {
  contentKey: string;
  contentItems: ContentItem[]
}

export interface ContentItem {
  value: string;
  id: string;
}

const cache = new Map();

const useContent = (contentKey: string): { value: Content|null, loading: boolean, error: string} => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchMeta = async () => {
      setLoading(true);
      setError('');

      if (cache.has(contentKey)) {
        // If we have the value in cache, set it directly
        setValue(cache.get(contentKey));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/api/content/${contentKey}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        cache.set(contentKey, data.payload); // Assuming response has a .value property
        setValue(data.payload);
      } catch (err) {
        setError((err as { message: string }).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeta();

    return;
  }, [contentKey]);

  return { value, loading, error };
};

export default useContent;
