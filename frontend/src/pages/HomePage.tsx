import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import type { Place } from '../types/Place';
import { fetchPlaces } from '../api/placesApi';
import { PlaceCard } from '../components/PlaceCard';

export function HomePage() {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    fetchPlaces().then(setPlaces);
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Placevibe
      </Typography>
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </Container>
  );
}