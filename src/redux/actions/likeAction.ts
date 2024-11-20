import { TOGGLE_LIKE, TOGGLE_DISLIKE } from '@/types/action.types';
import { Movies } from '@/types/movie.type'; // Assume Movies type is defined

export const toggleLike = (movie: Movies) => ({
  type: TOGGLE_LIKE,
  payload: movie,
});

export const toggleDislike = (movie: Movies) => ({
  type: TOGGLE_DISLIKE,
  payload: movie,
});