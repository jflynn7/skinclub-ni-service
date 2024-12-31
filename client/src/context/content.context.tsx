import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { fetchData, postData } from '@/services/http.service';
import { Content } from '@/types/content.type';

interface ContentContextType {
  contentItems?: Content[];
  loading?: boolean;
  error?: string | null;
  fetchContent?: (contentKey: string) => Promise<void>;
  updateContent: (updatedContent: Content) => Promise<void>;
  useContentItem: (contentKey: string) => Content | undefined;
}

const ContentContext = createContext<ContentContextType>({
  updateContent: () => Promise.resolve(),
  useContentItem: () => undefined,
});

export const ContentProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [contentItems, setContentItems] = useState([] as Content[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchContent = async () => {
    setLoading(true);
    fetchData<Content[]>(
      'http://localhost:3000/api/content/all',
      (data: Content[]) => {
        setLoading(false);
        setContentItems(data);
      },
      (error: Error) => {
        setLoading(false);
        setError(error.message);
      }
    );
  };

  const useContentItem = (contentKey: string): Content | undefined => {
    return contentItems?.find((content: Content) => content.contentKey === contentKey);
  };

  const updateContent = async (updatedContent: Content) => {
    postData<Content>(
      `http://localhost:3000/api/content/${updatedContent.contentKey}/set`,
      updatedContent,
      () => fetchContent(),
      (error) => {
        setLoading(false);
        setError(error.message);
      }
    );
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <ContentContext.Provider
      value={{ contentItems, loading, error, updateContent, useContentItem, fetchContent }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  return useContext(ContentContext);
};
