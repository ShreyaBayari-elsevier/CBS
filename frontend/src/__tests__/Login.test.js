import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Login from '../components/Login/Login';

test('renders login button', () => {
//   render(<Login />);
    const screen = render(<MemoryRouter><Login/></MemoryRouter>);

  const loginButton = screen.getByTestId('login-button');
  expect(loginButton).toBeInTheDocument();
});
