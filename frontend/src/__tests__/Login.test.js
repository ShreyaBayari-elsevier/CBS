import { render } from '@testing-library/react';
import Login from '../components/Login/Login';
import { MemoryRouter } from 'react-router-dom';


describe("Login test suite ", () => {

    test("render Login component in the document", ()=> {
    const component = render(<MemoryRouter><Login/></MemoryRouter>);
    const childElement = component.getByTestId("Password");
    expect(childElement).toBeInTheDocument();
    });
    })