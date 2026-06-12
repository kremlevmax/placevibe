import type { Place } from '../types/Place';
import { mockPlaces } from '../data/mockPlaces';

export async function fetchPlaces(): Promise<Place[]> {
  // TODO: заменить на реальный fetch к backend
  return Promise.resolve(mockPlaces);
}