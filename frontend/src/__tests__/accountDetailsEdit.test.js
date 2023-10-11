import { fireEvent, render, waitFor } from "@testing-library/react";
import axios from 'axios';
import React from 'react';
import { MemoryRouter } from "react-router";
import AccountDetails from "../components/Accounts/accountDetails";
import AccountDetailsEdit from "../components/Accounts/accountDetailsEdit";

describe('AccountDetailsEdit', () => {

    test("check rendering of account number label",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const accNo_label = component.getByText('Account Number');
        expect(accNo_label).toBeInTheDocument();
    });

    test("check rendering of phone number label",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const Phone_label=component.getByText("Phone Number");
        expect(Phone_label).toBeInTheDocument();
    });

    test("check rendering of address label",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const address_label=component.getByText('Address');
        expect(address_label).toBeInTheDocument();
    });

    test("check rendering of nominee label",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const nominee_label=component.getByText("Nominee");
        expect(nominee_label).toBeInTheDocument();
    });

    test("check rendering of account input field",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const accId_input = component.getByTestId('acc_id');
        expect(accId_input).toBeInTheDocument();
    });

    test("check rendering of phone number input field",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const phoneNum_input = component.getByTestId('phonum');
        expect(phoneNum_input).toBeInTheDocument();
    });

    test("check rendering of address input field",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const address_input = component.getByTestId('address');
        expect(address_input).toBeInTheDocument();
    });

    test("check rendering of nominee input field",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const nominee_input = component.getByTestId('nominee');
        expect(nominee_input).toBeInTheDocument();
    });

    test("check account number placeholder",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const accNo_placeholder = component.getByPlaceholderText("Enter Account Number")
        expect(accNo_placeholder).toBeInTheDocument();
    });

    test("check phone number placeholder",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const phoneNo_placeholder = component.getByPlaceholderText("Enter Phone Number")
        expect(phoneNo_placeholder).toBeInTheDocument();
    });

    test("check address placeholder",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const address_placeholder = component.getByPlaceholderText("Enter Address")
        expect(address_placeholder).toBeInTheDocument();
    });

    test("check nominee placeholder",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const nominee_placeholder = component.getByPlaceholderText("Enter Nominee Name")
        expect(nominee_placeholder).toBeInTheDocument();
    });

    test("on click of submit button redirect from edit details page to the view details page",()=>{
        const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

        const editbtn=component.getByText("Submit")
        expect(editbtn).toBeInTheDocument();
        fireEvent.click(editbtn);
        
        const component1=render(<MemoryRouter><AccountDetails/></MemoryRouter>);

        const accinfo=component1.getByLabelText("Account_Information");
        expect(accinfo).toBeInTheDocument()
    });

    test("test the submit button when updation fails",async()=>{
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
    
    test("test the submit button for successful updation",async()=>{
        window.alert=jest.fn();
        axios.put=jest.fn().mockImplementation(()=>{
            return Promise.resolve({data:{
                success:true
            }});
        })
        const {getByTestId} = render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);
        fireEvent.submit(getByTestId("submit"));
        await waitFor(()=>{
            expect(window.alert).toHaveBeenCalledWith("successful")
        })
    })
});

