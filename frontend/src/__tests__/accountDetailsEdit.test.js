import { fireEvent, render, waitFor } from "@testing-library/react"
import axios from 'axios';
import React from 'react';
import { MemoryRouter } from "react-router";
import AccountDetailsEdit from "../components/Accounts/accountDetailsEdit";

describe('AccountDetailsEdit', () => {


    const mockedAccountData={
        acc_id:"acc_3",
        phonum:"479669577",
        address:"Manipal",
        nominee:"John",
    };


    let getByText,getByTestId,getByPlaceholderText,getByLabelText;
    
    beforeEach(()=>{


        localStorage.setItem('userID',JSON.stringify('acc_3'));
        // jest.spyOn(axios,'get').mockResolvedValue({
        //     data:mockedAccountData,
        //     status:200,
        // });
        jest.mock('axios', () => {
            return {
                get: jest.fn().mockResolvedValue({ data: mockedAccountData }),
              //put: jest.fn(),
            };
        });

        const {getByText:getByTextFromRender, getByTestId:getByTestIdFromRender, getByPlaceholderText:getByPlaceholderTextFromRender,getByLabelText:getByLabelTextFromRender }=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);
        getByText=getByTextFromRender;
        getByTestId=getByTestIdFromRender;
        getByPlaceholderText=getByPlaceholderTextFromRender;
        getByLabelText=getByLabelTextFromRender;
    });

    afterEach(()=>{
        localStorage.removeItem('userID')
        getByText=null;
        getByTestId=null;
        getByPlaceholderText=null;
        getByLabelText=null;
    })
    
    it("check rendering of account number label by text",()=>{
        const accNo_label = getByText('Account Number');
        expect(accNo_label).toBeInTheDocument();
    });

    it("check rendering of phone number label by text",()=>{
        const Phone_label=getByText("Phone Number");
        expect(Phone_label).toBeInTheDocument();
    });

    it("check rendering of address label by text",()=>{
        const address_label=getByText('Address');
        expect(address_label).toBeInTheDocument();
    });

    it("check rendering of nominee label by text",()=>{
        const nominee_label=getByText("Nominee");
        expect(nominee_label).toBeInTheDocument();
    });


    it("check rendering of account input field",()=>{
        const accId_input = getByLabelText('acc_id');
        expect(accId_input).toBeInTheDocument();
    });

    it("check rendering of phone number input field",()=>{
        const phoneNum_input = getByLabelText('phone_no');
        expect(phoneNum_input).toBeInTheDocument();
    });

    it("check rendering of address input field",()=>{
        const address_input = getByLabelText('address');
        expect(address_input).toBeInTheDocument();
    });

    it("check rendering of nominee input field",()=>{
        const nominee_input = getByLabelText('nominee');
        expect(nominee_input).toBeInTheDocument();
    });



    it("check account number placeholder",()=>{
        const accNo_placeholder = getByPlaceholderText("Enter Account Number")
        expect(accNo_placeholder).toBeInTheDocument();
    });

    it("check phone number placeholder",()=>{
        const phoneNo_placeholder = getByPlaceholderText("Enter Phone Number")
        expect(phoneNo_placeholder).toBeInTheDocument();
    });

    it("check address placeholder",()=>{
        const address_placeholder = getByPlaceholderText("Enter Address")
        expect(address_placeholder).toBeInTheDocument();
    });

    it("check nominee placeholder",()=>{
        const nominee_placeholder = getByPlaceholderText("Enter Nominee Name")
        expect(nominee_placeholder).toBeInTheDocument();
    });



    it("checks that the initial value of account number is taken from the mocked data",()=>{
        waitFor(()=>expect(getByLabelText("acc_id").value).toBe(mockedAccountData.acc_id));
    });

    it("checks the initial value of phone number from the mocked data",()=>{
        waitFor(()=>expect(getByLabelText("phone_no").value).toBe(mockedAccountData.phonum));
    });

    it("checks the initial value of address from the mocked data",()=>{
        waitFor(()=>expect(getByLabelText("address").value).toBe(mockedAccountData.address));
    });

    it("checks that the initial value of nominee is taken from the mocked data",()=>{
        waitFor(()=>expect(getByLabelText("nominee").value).toBe(mockedAccountData.nominee));
    });


    it("account number field should be disabled",()=>{
        expect(getByLabelText("acc_id")).toBeDisabled();
    });

    it("should change the phone number when the value is changed",()=>{
        fireEvent.change(getByLabelText("phone_no"),{target:{value:'3457875358'}});
        expect(getByLabelText("phone_no").value).toBe('3457875358');
    });

    it("should change the address when the value is changed",()=>{
        fireEvent.change(getByLabelText("address"),{target:{value:'address of abc'}});
        expect(getByLabelText("address").value).toBe("address of abc");
    });

    it("should change the nominee name when the user changes the value",()=>{
        fireEvent.change(getByLabelText("nominee"),{target:{value:"nominee of abc"}});
        expect(getByLabelText("nominee").value).toBe("nominee of abc");
    });



    it("tests the submit button when updation fails",async()=>{
        window.alert = jest.fn()
        axios.put = jest.fn().mockImplementation(()=>{
            return Promise.reject({data:{
                success:false
            }});
        });
        fireEvent.submit(getByText("Submit"));
        await waitFor(()=>{
            expect(window.alert).toHaveBeenCalledWith("Updation failed");
        });
    });

    it("tests the submit button for successful updation",async()=>{
        window.alert=jest.fn();
        axios.put=jest.fn().mockImplementation(()=>{
            return Promise.resolve({data:{
                success:true
            }});
        });
        fireEvent.submit(getByText("Submit"));
        await waitFor(()=>{
            expect(window.alert).toHaveBeenCalledWith("successful")
        });
    });

});

// describe("different one",()=>{
//     it("on click of submit button redirect from edit details page to the view details page",()=>{
//         const component=render(<MemoryRouter><AccountDetailsEdit/></MemoryRouter>);

//         const editbtn=component.getByText("Submit")
//         expect(editbtn).toBeInTheDocument();
//         fireEvent.click(editbtn);
        
//         const component1=render(<MemoryRouter><AccountDetails/></MemoryRouter>);

//         const accinfo=component1.getByLabelText("Account_Information");
//         expect(accinfo).toBeInTheDocument()
//     });
// });



