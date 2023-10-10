import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Login from '../Login/Login';

describe('Test Suit',() => {


test('renders login button', () => {
//   render(<Login />);
    const screen = render(<MemoryRouter><Login/></MemoryRouter>);

  const loginButton = screen.getByTestId('login-button');
  expect(loginButton).toBeInTheDocument();
});

// test('renders nothing if the button is not clicked',() => {
//     const screen = render(<MemoryRouter><Login/></MemoryRouter>);
//     const outputElement = screen.getByText('nothing',{exact: false});
//     expect(outputElement).toBeInTheDocument();
    test('renders login when button is not clicked', () => {
        const screen = render(<MemoryRouter><Login/></MemoryRouter>);
        
        const loginHeader = screen.getByText('Login', { selector: 'h2' });
        expect(loginHeader).toBeInTheDocument();
        
        const loginButton = screen.getByTestId('login-button');
        expect(loginButton).toBeInTheDocument();
      });
      
});
// });