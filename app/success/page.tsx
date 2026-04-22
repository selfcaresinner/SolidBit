import { Suspense } from 'react';
import SuccessClient from './SuccessClient';

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Cargando confirmación...</div>}>
      <SuccessClient />
    </Suspense>
  );
}
