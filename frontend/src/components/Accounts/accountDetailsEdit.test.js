import { fireEvent, render, screen } from "@testing-library/react";
import React from 'react';
import { MemoryRouter } from "react-router";
import AccountDetails from "./accountDetails"
import AccountDetailsEdit from "./accountDetailsEdit"
// jest.mock('axios');
// jest.mock('react-router-dom');
// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'), // Use the actual module for everything else
//     useNavigate: jest.fn(), // Mock the useNavigate hook
//   }));

describe('AccountDetailsEdit', () => {
    test("dedirect to view details page on click of submit button",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        // const editbtn=screen.getByLabelText("subbtn");
        const editbtn=component.getByText("Submit")
        expect(editbtn).toBeInTheDocument();
        fireEvent.click(editbtn);
        
        const component1=render(<MemoryRouter><AccountDetails/></MemoryRouter>);

        const accinfo=component1.getByLabelText("Account_Information");
        expect(accinfo).toBeInTheDocument()
    });
    test("check for the rendering of labels and the input fields",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const labelElement1 = component.getByText('Account Number');
        expect(labelElement1).toBeInTheDocument();

        const labelElement2=component.getByText("Phone Number");
        expect(labelElement2).toBeInTheDocument();

        const labelElement3=component.getByText('Address');
        expect(labelElement3).toBeInTheDocument();

        const labelElement4=component.getByText("Nominee");
        expect(labelElement4).toBeInTheDocument();

        const labelElement5 = component.getByTestId('acc_id');
        expect(labelElement5).toBeInTheDocument();

        const labelElement6 = component.getByTestId('phonum');
        expect(labelElement6).toBeInTheDocument();

        const labelElement7 = component.getByTestId('address');
        expect(labelElement7).toBeInTheDocument();

        const labelElement8 = component.getByTestId('nominee');
        expect(labelElement8).toBeInTheDocument();
    })

});

 // const labelElement5=component.getByTestId("acc_id");
        // expect(labelElement5).toBeInTheDocument();

        // const labelElement6=component.getByPlaceholderText("Enter Account Number")
        // expect(labelElement6).toBeInTheDocument();

        // screen.queryByPlaceholderText(/Enter Account Number/i)
        // screen.queryByPlaceholderText(/Enter Phone Number/i)
        // screen.queryByPlaceholderText(/Enter Address/i)
        // screen.queryByPlaceholderText(/Enter Nominee Name/i)
        // const submitButton=getByText.querySelector('.btn.btn-primary');
        // expect(submitButton).toBeInTheDocument();