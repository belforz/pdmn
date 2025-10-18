import { createClient } from 'pexels';

const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;


export const client = createClient(PEXELS_API_KEY);
