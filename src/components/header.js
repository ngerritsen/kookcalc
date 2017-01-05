import Inferno from 'inferno';
import '../styles/header.scss';

export default function Header() {
  return <header className="header">
    <h1 className="header__title">
      <strong>Kook</strong>calc
    </h1>
  </header>;
}
