export interface MindmapNode {
  id: string;
  title: {
    vi: string;
    en: string;
  };
  content: {
    vi: string;
    en: string;
  };
  fullContent?: {
    vi: string[];
    en: string[];
  };
  image: string;
  caption: {
    vi: string;
    en: string;
  };
  position: { x: number; y: number };
}

export type Language = 'vi' | 'en';
