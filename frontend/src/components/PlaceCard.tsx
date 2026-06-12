import { Card, CardContent, Typography } from '@mui/material';
import type { Place } from '../types/Place';

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{place.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {place.description}
        </Typography>
      </CardContent>
    </Card>
  );
}