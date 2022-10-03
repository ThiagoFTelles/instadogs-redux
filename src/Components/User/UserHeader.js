import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './UserHeader.module.css';
import UserHeaderNav from './UserHeaderNav';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/user/statistics':
        setTitle('Estatísticas');
        break;
      case '/user/post':
        setTitle('Poste uma foto');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
