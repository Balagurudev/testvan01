export interface Service {
  title: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  author: string;
  role: string;
  company: string;
  text: string;
}

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  size: 'small' | 'medium' | 'large';
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}