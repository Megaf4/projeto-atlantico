'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResetarPage() {
  const router = useRouter();
  const [status, setStatus] = useState('Resetando...');

  useEffect(() => {
    // Limpa o localStorage
    localStorage.clear();
    setStatus('✅ localStorage limpo!');
    
    // Redireciona após 2 segundos
    setTimeout(() => {
      setStatus('🔄 Redirecionando para /teste...');
      setTimeout(() => {
        router.push('/teste');
      }, 1000);
    }, 2000);
  }, [router]);

  return (
    <div className="min-h-screen bg-dark text-white flex items-center justify-center">
      <div className="bg-primary p-12 rounded-2xl text-center max-w-md">
        <div className="text-6xl mb-6">🔄</div>
        <h1 className="text-3xl font-bold mb-4 text-accent">{status}</h1>
        <p className="text-lg text-gray-300">
          O modal de idiomas vai aparecer novamente...
        </p>
      </div>
    </div>
  );
}
