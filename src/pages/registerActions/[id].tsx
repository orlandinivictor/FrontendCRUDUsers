/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, createRef } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import NotificationSystem from 'react-notification-system';

import api from '../../services/api';
import isValidCpf from '../../utils/isValidCpf';

import { Form, RegisterContainer } from '../../styles/registerActions/styles';

type User = {
  _id: string;
  name: string;
  age: string;
  marital: string;
  cpf: string;
  city: string;
  state: string;
};

type UserProps = {
  data: User;
};

export default function registerActions({ data }: UserProps) {
  const notificationSystem = createRef<any>();
  const [name, setName] = useState(data.name || '');
  const [age, setAge] = useState(data.age || '');
  const [marital, setMarital] = useState(data.marital || '');
  const [cpf, setCpf] = useState(data.cpf || '');
  const [city, setCity] = useState(data.city || '');
  const [state, setState] = useState(data.state || '');

  const validateForm = () => {
    const errors = [];

    if (name.length < 3 || name.length > 200) {
      errors.push('Nome precisa ser entre 3 e 200 caracteres');
    }

    if (!age.length || isNaN(+age)) {
      errors.push('Idade precisa ser um número');
    }

    if (marital.length < 8 || marital.length > 13) {
      errors.push('Estado civil precisa estar na lista de estados');
    }
    const newCpf = new isValidCpf(cpf);

    if (cpf.length !== 14 || !newCpf.validate()) {
      errors.push('CPF precisa ser válido');
    }

    if (!city.length) {
      errors.push('Cidade precisa ser preenchida');
    }

    if (!state.length) {
      errors.push('Estado precisa ser preenchido');
    }

    return errors;
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const notification: any = notificationSystem.current;

    try {
      await api.get(`/delete/${data._id}`);
      notification.addNotification();
    } catch (err) {
      notification.addNotification({
        message: 'Erro no servidor',
        level: 'error',
      });
      console.log(err);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const notification: any = notificationSystem.current;

    const user = {
      name,
      age,
      marital,
      cpf,
      city,
      state,
    };

    const errors = validateForm();
    if (errors.length) {
      errors.map((error) => {
        notification.addNotification({
          message: error,
          level: 'error',
        });
      });
      return;
    }

    try {
      if (!errors.length) {
        const res = await api.post(`/edit/${data._id}`, user);
        notification.addNotification({
          message: 'Usuário editado com sucesso',
          level: 'success',
        });
        console.log(res);
      }
    } catch (err) {
      notification.addNotification({
        message: 'Erro no servidor',
        level: 'error',
      });
      console.log(err);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const notification: any = notificationSystem.current;

    const user = {
      name,
      age,
      marital,
      cpf,
      city,
      state,
    };

    const errors = validateForm();
    if (errors.length) {
      errors.map((error) => {
        notification.addNotification({
          message: error,
          level: 'error',
        });
      });
      return;
    }

    try {
      if (!errors.length) {
        const res = await api.post('/register', user);
        notification.addNotification({
          message: 'Usuário cadastrado com sucesso',
          level: 'success',
        });
        console.log(res);
      }
    } catch (err) {
      notification.addNotification({
        message: 'Erro no servidor',
        level: 'error',
      });
      console.log(err);
    }
  };

  return (
    <RegisterContainer>
      <NotificationSystem ref={notificationSystem} />
      <div>
        <h2>Informações Pessoais</h2>
        <span>Adicione aqui as informações da nova pessoa.</span>
      </div>

      <Form>
        <label>
          Nome
          <input
            name="name"
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="age">
          Idade
          <input
            type="number"
            placeholder="18"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Estado Civil
          <input
            type="text"
            list="maritallist"
            placeholder="Escolha um"
            value={marital}
            onChange={(e) => setMarital(e.target.value)}
          />
          <datalist id="maritallist">
            <option>Solteiro(a)</option>
            <option>Casado(a)</option>
            <option>Separado(a)</option>
            <option>Divorciado(a)</option>
            <option>Viúvo(a)</option>
          </datalist>
        </label>
        <label>
          CPF
          <input
            type="text"
            placeholder="123.456.789-10"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>
        <label>
          Cidade
          <input
            type="text"
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label>
          Estado
          <input
            type="text"
            list="state"
            placeholder="Estado"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          <datalist id="state">
            <option>AC</option>
            <option>AL</option>
            <option>AP</option>
            <option>AM</option>
            <option>BA</option>
            <option>CE</option>
            <option>DF</option>
            <option>ES</option>
            <option>GO</option>
            <option>MA</option>
            <option>MT</option>
            <option>MS</option>
            <option>MG</option>
            <option>PA</option>
            <option>PB</option>
            <option>PR</option>
            <option>PE</option>
            <option>PI</option>
            <option>RJ</option>
            <option>RN</option>
            <option>RS</option>
            <option>RO</option>
            <option>RR</option>
            <option>SC</option>
            <option>SP</option>
            <option>SE</option>
            <option>TO</option>
          </datalist>
        </label>

        {data._id ? (
          <span>
            <button
              type="button"
              className="deleteButton"
              onClick={handleDelete}
            >
              Excluir Pessoa
            </button>
            <button type="button" onClick={handleEdit}>
              Alterar
            </button>
          </span>
        ) : (
          <span className="onUserRegister">
            <button type="button" onClick={handleCreate}>
              Cadastrar
            </button>
          </span>
        )}
      </Form>
    </RegisterContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/');

  const paths = data.map((user) => {
    return {
      params: {
        id: String(user.id),
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params;
  let data;

  if (id !== 'new') {
    const UserData = await api.get(`/user/${id}`);
    data = UserData.data;
  } else {
    data = {};
  }

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24, // 24hours
  };
};
