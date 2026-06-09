import { useSearchParams } from 'react-router-dom';
import CartaoFilme from '../components/CartaoFilme';
import { FILMES } from '../data/filmes';
import { useFilmeFiltrado } from '../hooks/useFilmeFiltrado';

const GENEROS = ['Todos', 'Ação', 'Ficção Científica', 'Crime'];

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const busca = searchParams.get('busca') ?? '';
  const genero = searchParams.get('genero') ?? 'Todos';

  const filmesFiltrados = useFilmeFiltrado(FILMES, busca, genero);

  const setBusca = (valor: string) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (valor) next.set('busca', valor);
      else next.delete('busca');
      return next;
    });
  };

  const setGenero = (valor: string) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (valor !== 'Todos') next.set('genero', valor);
      else next.delete('genero');
      return next;
    });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Catálogo de Filmes</h1>
        <p>Explore nossa coleção e descubra seu próximo favorito</p>
      </div>

      <div className="search-wrapper">
        <input
          className="search-input"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar filme..."
        />
      </div>

      <div className="genero-filtros">
        {GENEROS.map(g => (
          <button
            key={g}
            className={`btn-genero ${genero === g ? 'ativo' : ''}`}
            onClick={() => setGenero(g)}
          >
            {g}
          </button>
        ))}
      </div>

      <p className="results-count">
        {filmesFiltrados.length} filme(s) encontrado(s)
        {busca && <> para "<strong>{busca}</strong>"</>}
        {genero !== 'Todos' && <> em <strong>{genero}</strong></>}
      </p>

      <div className="filmes-grid">
        {filmesFiltrados.map(filme => (
          <CartaoFilme key={filme.id} filme={filme} />
        ))}
      </div>

      {filmesFiltrados.length === 0 && (
        <div className="empty-state">
          <span>◈</span>
          <p>Nenhum filme encontrado com esses filtros.</p>
          <button className="btn-home" onClick={() => setSearchParams({})}>
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
}
