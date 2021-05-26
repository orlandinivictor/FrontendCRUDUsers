import styled from 'styled-components';

export const RegisterContainer = styled.div`
  margin-top: 15rem;
  height: calc(100vh - 15rem);

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 0 14rem;

  div {
    h2 {
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    span {
      font-weight: 400;
      color: var(--gray-500);
    }
  }
`;

export const Form = styled.form`
  background: var(--white);
  color: var(--gray-700);
  padding: 1rem 2rem 1rem 1rem;
  width: 33rem;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1rem;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  span {
    border-radius: 0.5rem;
    grid-area: 4 / 2;

    margin-left: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    .onUserRegister {
      padding: 2px;
      background: var(--indigo-600);
    }
  }

  button {
    padding: 0.65rem 1rem;

    color: var(--white);
    background: var(--indigo-600);
    border: 2px solid var(--white);
    border-radius: 0.4rem;
  }

  .deleteButton {
    margin-right: 0.5rem;
    background: var(--indigo-100);
    color: var(--indigo-700);
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    &[for='age'] {
      margin-left: 8rem;
    }
  }

  input {
    border: 1px solid #ddd;
    padding: 0.65rem 1rem;
    border-radius: 0.375rem;
    margin-top: 0.5rem;

    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    &[name='name'] {
      width: 23rem;
    }
  }
`;
