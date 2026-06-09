import { useMemo } from 'react';
import { Filme } from '../types/filme';

export function useFilmeFiltrado(filmes: Filme[], busca: string, genero: string): Filme[] {
  return useMemo(() => {
    return filmes.filter(f => {
      const matchBusca = f.titulo.toLowerCase().includes(busca.toLowerCase());
      const matchGenero = genero === 'Todos' || f.genero === genero;
      return matchBusca && matchGenero;
    });
  }, [filmes, busca, genero]);
}
