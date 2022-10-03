import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET_POST } from '../../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm('password');
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key && login) {
      setKey(key);
      setLogin(login);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET_POST({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resete a senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Salvando...</Button>
        ) : (
          <Button>Salvar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;