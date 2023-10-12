import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Login from '../Login/Login';
import axios from "axios";


describe('Test Suit', () => {

  
  it ('should renders login button', () => {
    const screen = render(<MemoryRouter><Login/></MemoryRouter>);

    const loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();
  });

  it('should renders login when the button is not clicked', () => {
    const screen = render(<MemoryRouter><Login/></MemoryRouter>);
        
    const loginHeader = screen.getByText('Login', { selector: 'h2' });
    expect(loginHeader).toBeInTheDocument();
        
    const loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();
  });

  
  
  test('should check if the login button is working', async () => {
    // Mock the alert function to capture its calls
    const alertMock = jest.spyOn(window, 'alert');
  
    // Mock the Axios get method to simulate a successful response (status: 200)
    const axiosGetMock = jest.spyOn(axios, 'get');
    axiosGetMock.mockResolvedValue({
      status: 200, // Simulate a successful response status
      data: {
        success:true,
      },
    });
  
    const { getByTestId } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  
    // Simulate a click on the login button
    fireEvent.click(getByTestId("login-button")); // Adjust the selector to match your component
  
    // Wait for any asynchronous operations to complete
    await waitFor(() => {
      // Assert that the alert function was called with the expected message
      expect(alertMock).toHaveBeenCalledWith('Logged in');
    });
  
    // Restore the original alert function and Axios get method after the test
    alertMock.mockRestore();
    axiosGetMock.mockRestore();
  });


});
