import { IMoviePopularItem } from './IMoviePopularItem';

export interface IMoviePopularResult {
  page: number;
  results: IMoviePopularItem[];
  total_pages: number;
  total_results: number;
}
