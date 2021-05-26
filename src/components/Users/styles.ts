import styled from 'styled-components';

export const UsersContainer = styled.div`
  margin-top: 5rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 14rem;

  table {
    width: 100%;

    color: var(--gray-500);
    font-size: 0.75rem;

    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    border-radius: 0.5rem;
    border-collapse: collapse;

    tr {
      background: var(--white);

      &:nth-child(odd) {
        background: var(--gray-50);
      }

      th {
        background: var(--white);
        padding: 0.75rem 1.5rem;
        text-align: left;
        font-weight: 400;
      }

      td {
        padding: 0.75rem 1.5rem;

        h3 {
          font-weight: 500;
        }

        a {
          display: flex;
          justify-content: center;

          text-decoration: none;
          color: var(--indigo-600);
        }
      }
    }

    thead {
      th {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem 0.5rem 0 0;

        font-size: 0.65rem;
      }
    }

    tfoot {
      th {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0 0 0.5rem 0.5rem;

        div {
          display: flex;
          align-items: center;
          justify-content: space-between;

          a {
            margin-left: 0.5rem;
            padding: 0.5rem 1rem;

            text-decoration: none;
            font-weight: 500;
            color: var(--gray-800);

            border: 2px solid rgba(0, 0, 0, 0.1);
            border-radius: 0.5rem;
          }
        }
      }
    }
  }
`;
