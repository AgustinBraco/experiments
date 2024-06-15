import { Link } from 'react-router-dom';

export const Home = () => (
  <main id="Home">
    <div className="HomeLinks">
      <Link to="/presupuesto" className="HomeLink" target="_self">
        Crear presupuesto
      </Link>

      <Link to="/parallax" className="HomeLink" target="_self">
        Parallax
      </Link>
    </div>
  </main>
);
