import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #FFF;

    --gray-50: #F9FAFB;
    --gray-100: #F3F4F6;
    --gray-200: #E5E7EB;
    --gray-300: #D1D5DB;
    --gray-500: #6B7280;
    --gray-700: #374151;
    --gray-800: #1F2937;
    --gray-900: #111827;

    --indigo-100: #E0E7FF;
    --indigo-600: #4F46E5;
    --indigo-700: #4338CA;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--gray-100);
    font-family: Inter, sans-serif;
  }

  body, input, textarea, button {
    font-weight: 500;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: var(--gray-900);
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

`;
