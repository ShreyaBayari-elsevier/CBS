import { render } from '@testing-library/react';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import { MemoryRouter } from 'react-router-dom';


describe("ForgotPassword test suite ", () => {

test("render ForgotPassword component in the document", ()=> {
const component = render(<MemoryRouter><ForgotPassword/></MemoryRouter>);
const childElement = component.getByTestId("Username");
expect(childElement).toBeInTheDocument();
});
})