import { Link } from 'react-router-dom';
import { Filme } from '../types/filme';
import { useFavoritos } from '../context/FavoritosContext';

interface Props { filme: Filme }

const POSTER_GRADIENTS: Record<string, { gradient: string; symbol: string }> = {
  'The Matrix':      { gradient: 'linear-gradient(160deg, #003300 0%, #00ff41 40%, #001a00 100%)', symbol: '⬡' },
  'Inception':       { gradient: 'linear-gradient(160deg, #1a0533 0%, #6d28d9 50%, #0d0d2b 100%)', symbol: '◈' },
  'Interstellar':    { gradient: 'linear-gradient(160deg, #000510 0%, #0a2463 50%, #1b4332 100%)', symbol: '○' },
  'The Dark Knight': { gradient: 'linear-gradient(160deg, #0d0d0d 0%, #1a1a1a 50%, #2d1b00 100%)', symbol: '◆' },
  'Pulp Fiction':    { gradient: 'linear-gradient(160deg, #2d1b00 0%, #92400e 50%, #1c0a00 100%)', symbol: '◇' },
};

export default function CartaoFilme({ filme }: Props) {
  const { toggleFavorito, isFavorito } = useFavoritos();
  const favorito = isFavorito(filme.id);
  const poster = POSTER_GRADIENTS[filme.titulo] ?? {
    gradient: 'linear-gradient(160deg, #1e1b4b 0%, #312e81 50%, #0f0f1a 100%)',
    symbol: '▣',
  };

  return (
    <div className="card">
      <div className="card-poster" style={{ background: poster.gradient }}>
        <div className="card-poster-inner">
          <span style={{
            fontSize: '5rem',
            opacity: 0.08,
            color: '#fff',
            fontFamily: 'monospace',
            userSelect: 'none',
          }}>
            {poster.symbol}
          </span>
        </div>
        <button
          className={`btn-favorito ${favorito ? 'ativo' : ''}`}
          onClick={() => toggleFavorito(filme.id)}
          title={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          aria-label={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {favorito ? '❤️' : '🤍'}
        </button>
        <span className="card-poster-label">{filme.ano}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{filme.titulo}</h3>
        <div className="card-meta">
          <span className="card-genre">{filme.genero}</span>
        </div>
        <Link to={`/filme/${filme.id}`} className="card-link">
          Ver detalhes →
        </Link>
      </div>
    </div>
  );
}
