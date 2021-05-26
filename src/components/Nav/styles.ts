import styled from 'styled-components';

export const NavContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;

  height: 4rem;

  padding-left: 14rem;

  background: var(--gray-800);

  a {
    text-decoration: none;
    color: var(--gray-300);
    font-weight: 600;

    &:first-of-type {
      background-color: var(--gray-900);
      color: var(--white);
      padding: 0.8rem;
      border-radius: 0.375rem;
      margin-right: 1rem;
    }
  }
`;
