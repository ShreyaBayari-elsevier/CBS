// import ShallowRenderer from 'react-test-renderer/shallow';

import { render,fireEvent, waitFor, getByText,getByTestId } from '@testing-library/react';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';


describe("ForgotPassword test suite ", () => {

test("render username label from ForgotPassword Page", ()=> {
const component = render(<MemoryRouter><ForgotPassword/></MemoryRouter>);
const childElement = component.getByTestId("Username");
expect(childElement).toBeInTheDocument();
});




// describe("ForgotPassword test suite", ()=>{
//     const mockAlert = jest.fn();
//     jest.mock(window, ()=>({
//         alert:mockAlert,
//     }));
//     test("render ForgotPassword component in the document", async ()=>{
//         const {getByText,getByTestId} = render(<MemoryRouter><ForgotPassword/></MemoryRouter>);
//         const button = getByText("Reset Password");
//         const form = getByTestId("Reset");
//         // expect(childElement).toBeInTheDocument();
        
//         fireEvent.click(form);

//         await waitFor(()=>{
//             expect(mockAlert).toHaveBeenCalledWith("Success updating password");
//         })
//         });
    
// });


    // test("submits",async ()=>{
    // // const onSubmit = jest.fn();
    // const {getByTestId,getByText} = render(<MemoryRouter><ForgotPassword/></MemoryRouter>);
    // fireEvent.submit(getByTestId("Reset"));
    // // expect(onSubmit).toHaveBeenCalledWith("Success updating password");
    // await waitFor(() => getByText("Success updating password"));
    // expect(getByText("Success updating password")).toBeInTheDocument();

    // jest.spyOn(window, 'alert').mockImplementation(() => {});
    

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

 
//   expect(window.alert).toHaveBeenCalledWith("Success updating password");
//   expect(window.alert).toHaveBeenCalledTimes(1);

 
//   window.alert.mockRestore();
});


});
// });

