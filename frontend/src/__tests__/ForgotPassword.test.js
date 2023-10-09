

import { render,fireEvent, waitFor } from '@testing-library/react';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';


describe("ForgotPassword test suite ", () => {

test("render username label from ForgotPassword Page", ()=> {
const component = render(<MemoryRouter><ForgotPassword/></MemoryRouter>);
const childElement = component.getByTestId("Username");
expect(childElement).toBeInTheDocument();
});


    

test('Displays alert message on form submission', async() => {
    window.alert = jest.fn();
    axios.put = jest.fn().mockImplementation(()=>{
        return Promise.resolve({data:{
            success:true
        }});
    });
    const { getByTestId } = render(<MemoryRouter><ForgotPassword/></MemoryRouter>);

  
    fireEvent.submit(getByTestId("Reset"));
    await waitFor(()=>{
        // expect(window.alert).toHaveBeenCalledTimes(1);
        expect(window.alert).toHaveBeenCalledWith("Success updating password");
                })
});

test('Displays error message if fields arent filled', async() => {
    window.alert = jest.fn();
    axios.put = jest.fn().mockImplementation(()=>{
        return Promise.reject({data:{
            success:true
        }});
    });
    const { getByTestId } = render(<MemoryRouter><ForgotPassword/></MemoryRouter>);

  
    fireEvent.submit(getByTestId("Reset"));
    await waitFor(()=>{
        // expect(window.alert).toHaveBeenCalledTimes(1);
        expect(window.alert).toHaveBeenCalledWith("Error updating password");
                })
});


});


