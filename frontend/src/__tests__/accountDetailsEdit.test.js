import { fireEvent, render, waitFor } from "@testing-library/react";
import axios from 'axios';
import React from 'react';
import { MemoryRouter } from "react-router";
import AccountDetails from "../components/Accounts/accountDetails";
import AccountDetailsEdit from "../components/Accounts/accountDetailsEdit";
// jest.mock('axios')
// jest.mock('react-router-dom');
// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'), // Use the actual module for everything else
//     useNavigate: jest.fn(), // Mock the useNavigate hook
//   }));

// Mock localStorage and JSON.parse
// const localStorageMock = {
//     getItem: jest.fn(),
//   };
  
//   global.localStorage = localStorageMock;

describe('AccountDetailsEdit', () => {
    test("on click of submit button redirect from edit details page to the view details page",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        // const editbtn=screen.getByLabelText("subbtn");
        const editbtn=component.getByText("Submit")
        expect(editbtn).toBeInTheDocument();
        fireEvent.click(editbtn);
        
        const component1=render(<MemoryRouter><AccountDetails/></MemoryRouter>);

        const accinfo=component1.getByLabelText("Account_Information");
        expect(accinfo).toBeInTheDocument()
    });
    test("check the rendering of labels and the input fields",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const accNo_label = component.getByText('Account Number');
        expect(accNo_label).toBeInTheDocument();

        const Phone_label=component.getByText("Phone Number");
        expect(Phone_label).toBeInTheDocument();

        const address_label=component.getByText('Address');
        expect(address_label).toBeInTheDocument();

        const nominee_label=component.getByText("Nominee");
        expect(nominee_label).toBeInTheDocument();

        const accId_input = component.getByTestId('acc_id');
        expect(accId_input).toBeInTheDocument();

        const phoneNum_input = component.getByTestId('phonum');
        expect(phoneNum_input).toBeInTheDocument();

        const address_input = component.getByTestId('address');
        expect(address_input).toBeInTheDocument();

        const nominee_input = component.getByTestId('nominee');
        expect(nominee_input).toBeInTheDocument();

        //expect(screen.getByLabelText('acc_no').getAttribute("placeholder")).toBe("Enter Account Number")
    });
    test("testing placeholders",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const accNo_placeholder = component.getByPlaceholderText("Enter Account Number")
        expect(accNo_placeholder).toBeInTheDocument(); 

        const phoneNo_placeholder = component.getByPlaceholderText("Enter Phone Number")
        expect(phoneNo_placeholder).toBeInTheDocument(); 

        const address_placeholder = component.getByPlaceholderText("Enter Address")
        expect(address_placeholder).toBeInTheDocument(); 

        const nominee_placeholder = component.getByPlaceholderText("Enter Nominee Name")
        expect(nominee_placeholder).toBeInTheDocument(); 

    });
    test("test the submit button",async()=>{
        window.alert = jest.fn()
        axios.put = jest.fn().mockImplementation(()=>{
            return Promise.reject({data:{
                success:false
            }});
    })
    const { getByTestId } = render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

  
    fireEvent.submit(getByTestId("submit"));
    await waitFor(()=>{

        expect(window.alert).toHaveBeenCalledWith("Updation failed");
                })

});
});

