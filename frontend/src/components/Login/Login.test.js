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

  
  
  it('should check if the login button is working', async () => {
    
    const alertMock = jest.spyOn(window, 'alert');  // Mock the alert function to capture its calls
    const axiosGetMock = jest.spyOn(axios, 'get');   // Mock the Axios get method to simulate a successful response (status: 200)
    axiosGetMock.mockResolvedValue({
      status: 200, 
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
     
      expect(alertMock).toHaveBeenCalledWith('Logged in');    // Assert that the alert function was called with the expected message
    });
  
    
    alertMock.mockRestore();
    axiosGetMock.mockRestore();
  });


});
