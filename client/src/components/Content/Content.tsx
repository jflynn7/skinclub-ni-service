import { PropsWithChildren } from 'react';
import useContent, { ContentItem } from '../../hooks/use-content.hook.ts';

interface ContentProps extends PropsWithChildren {
  contentKey: string;
}
export default function Content(props: ContentProps) {
  const content = useContent(props.contentKey);
  return content.value && <span className={'content-item'}>
    {content.value.contentItems.map((item: ContentItem) => <span key={item.id}>{item.value}<br/></span>)}
  </span>
}
