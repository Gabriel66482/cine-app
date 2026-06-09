import { useNavigate, useParams } from 'react-router-dom';
import { FILMES } from '../data/filmes';

const BANNER_GRADIENTS: Record<string, string> = {
  'The Matrix':      'linear-gradient(160deg, #003300 0%, #00ff41 40%, #001a00 100%)',
  'Inception':       'linear-gradient(160deg, #1a0533 0%, #6d28d9 50%, #0d0d2b 100%)',
  'Interstellar':    'linear-gradient(160deg, #000510 0%, #0a2463 50%, #1b4332 100%)',
  'The Dark Knight': 'linear-gradient(160deg, #0d0d0d 0%, #1a1a1a 50%, #2d1b00 100%)',
  'Pulp Fiction':    'linear-gradient(160deg, #2d1b00 0%, #92400e 50%, #1c0a00 100%)',
};

export default function DetalheFilme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const filme = FILMES.find(f => f.id === Number(id));

  if (!filme) return <p style={{ textAlign: 'center', marginTop: '4rem', color: '#94a3b8' }}>Filme não encontrado.</p>;

  const gradient = BANNER_GRADIENTS[filme.titulo] ?? 'linear-gradient(160deg, #1e1b4b 0%, #312e81 100%)';

  return (
    <div className="detalhe-container">
      <button className="btn-voltar" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className="detalhe-card">
        <div className="detalhe-banner" style={{ background: gradient }} />
        <div className="detalhe-content">
          <h1 className="detalhe-title">{filme.titulo}</h1>
          <div className="detalhe-badges">
            <span className="badge badge-year">{filme.ano}</span>
            <span className="badge badge-genre">{filme.genero}</span>
            <span className="badge badge-dur">{filme.duracao} min</span>
          </div>
          <p className="detalhe-sinopse-label">Sinopse</p>
          <p className="detalhe-sinopse">{filme.sinopse}</p>
        </div>
      </div>
    </div>
  );
}
