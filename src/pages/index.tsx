/* eslint-disable react-hooks/exhaustive-deps */
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import api from '../services/api';
import { UsersContainer } from '../styles/index/indexstyles';

type User = {
  _id: string;
  name: string;
  age: number;
  marital: string;
  cpf: number;
  city: string;
  state: string;
};

type HomeProps = {
  users: User[];
};

export default function Home({ users }: HomeProps) {
  const [page, setPage] = useState(0);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  const initialIndex = page * 6;
  const lastIndex =
    page + 1 < Math.ceil(users.length / 6) ? 6 * (page + 1) : users.length;
  const usersArray = users.slice(initialIndex, lastIndex);
  const [actualUsers, setActualUsers] = useState(usersArray);

  useEffect(() => {
    setActualUsers(usersArray);

    if (page + 1 < Math.ceil(users.length / 6)) {
      setHasNext(true);
    } else {
      setHasNext(false);
    }

    if (page >= 1) {
      setHasPrev(true);
    } else {
      setHasPrev(false);
    }
  }, [page]);

  return (
    <div>
      <Head>
        <title>Teste Softwrap</title>
      </Head>

      <UsersContainer>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>IDADE</th>
              <th>ESTADO CIVIL</th>
              <th>CPF</th>
              <th>CIDADE</th>
              <th>ESTADO</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {actualUsers.map((user, index) => {
              return (
                <tr key={index}>
                  <td>
                    <h3>{user.name}</h3>
                  </td>
                  <td>{user.age}</td>
                  <td>{user.marital}</td>
                  <td>{user.cpf}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  <td>
                    <Link href={`/registerActions/${user._id}`}>
                      <a>Editar</a>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            <tr>
              <th colSpan={7}>
                <div>
                  <span>
                    Mostrando {initialIndex || 1} até{' '}
                    {hasNext ? lastIndex : users.length} de {users.length}{' '}
                    resultados.
                  </span>
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        hasPrev && setPage(page - 1);
                      }}
                    >
                      Anterior
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        hasNext && setPage(page + 1);
                      }}
                    >
                      Próximo
                    </button>
                  </div>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </UsersContainer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/');

  return {
    props: {
      users: data,
    },
  };
};
