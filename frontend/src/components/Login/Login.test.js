import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from '../Login/Login';
import axios from "axios";



describe('Login Component', () => {
  let alertMock;
  let axiosGetMock;

  // Reusable function to render the Login component
  const renderLoginComponent = () => render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  beforeEach(() => {
    alertMock = jest.spyOn(window, 'alert');
    axiosGetMock = jest.spyOn(axios, 'get');
  });

  afterEach(() => {
    alertMock.mockRestore();
    axiosGetMock.mockRestore();
  });

  it('should render login button', () => {
    const screen = renderLoginComponent();
    const loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();
  });

  it('should render login when the button is not clicked', () => {
    const screen = renderLoginComponent();
    const loginHeader = screen.getByText('Login', { selector: 'h2' });
    const loginButton = screen.getByTestId('login-button');
    expect(loginHeader).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('should check if the login button is working', async () => {
    // Simulate a successful response from Axios
    axiosGetMock.mockResolvedValue({
      status: 200,
      data: {
        success: true,
      },
    });

    const { getByTestId } = renderLoginComponent();
    // Simulate a click on the login button
    fireEvent.click(getByTestId('login-button'));

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('Logged in');
    });
  });
});
