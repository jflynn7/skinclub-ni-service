export interface Content {
  contentKey: string;
  contentTitle: string;
  contentItems: ContentItem[];
}

export interface ContentItem {
  value: string;
  id?: string | null;
  contentOrder: number;
}
