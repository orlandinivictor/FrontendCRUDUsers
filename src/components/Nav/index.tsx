import Link from 'next/link';

import { NavContainer } from './styles';

const Nav = () => {
  return (
    <NavContainer>
      <Link href="/">
        <a>Visualizar</a>
      </Link>

      <Link href="/registerActions/new">
        <a>Novo Cadastro</a>
      </Link>
    </NavContainer>
  );
};

export default Nav;
