import { Link } from 'react-router-dom';

export default function NaoEncontrado() {
  return (
    <div className="notfound-container">
      <div className="notfound-code">404</div>
      <h2>Página não encontrada</h2>
      <p>A página que você procura não existe.</p>
      <Link to="/" className="btn-home">← Voltar ao Início</Link>
    </div>
  );
}
