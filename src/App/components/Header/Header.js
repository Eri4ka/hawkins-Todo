import { ReactComponent as MoonIc } from 'icons/header/moon.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div>Todo App</div>
      <nav className='header-menu'>
        <div className='header-menu__item'>Todo</div>
      </nav>
      <div className='header-icon'>
        <MoonIc />
      </div>
    </header>
  );
};

export default Header;
