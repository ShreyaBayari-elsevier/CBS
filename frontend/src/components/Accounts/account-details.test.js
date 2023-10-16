import { render, screen, cleanup} from '@testing-library/react'
import AccountDetails from './accountDetails';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

function renderAccountDetails(){
  return render(      
        <MemoryRouter>
            <AccountDetails />
        </MemoryRouter>);
}


describe("Account-Details test suite ", () => {

  it(' should render account ID details correctly', () => {
    const {getByText} = renderAccountDetails();
    expect(getByText('Account ID')).toBeInTheDocument();
  });

  it('should render Account Type details correctly', () => {
    const {getByText} = renderAccountDetails();
    expect(getByText('Account Type')).toBeInTheDocument();
  });

  it('should render First Name details correctly', () => {
    const {getByText} = renderAccountDetails();
    expect(getByText('First Name')).toBeInTheDocument();
  });

  it('should render Second Name component details correctly', () => {
    const {getByText} = renderAccountDetails();
    expect(getByText('Second Name')).toBeInTheDocument();
  });

  it('should render Phone Number component details correctly', () => {
    const {getByText} = renderAccountDetails();
    expect(getByText('Phone Number')).toBeInTheDocument();
  });

  it('should render Address component details correctly', () => {
    const {getByText} = renderAccountDetails();
    expect(getByText('Address')).toBeInTheDocument();
  });

  it('should render Nominee component details correctly', () => {
    const {getByText} = renderAccountDetails();
    expect(getByText('Nominee')).toBeInTheDocument();
  });

  it('should render Nationality component details correctly', () => {
    const {getByText} = renderAccountDetails();
    expect(getByText('Nationality')).toBeInTheDocument();
  });

  it('should render PAN Card Number component details correctly', () => {
    const {getByText} = renderAccountDetails();
    expect(getByText('PAN Card Number')).toBeInTheDocument();
  });

  it('should render Aadhar Number component details correctly', () => {
    const {getByText} = renderAccountDetails();
    expect(getByText('Aadhar Number')).toBeInTheDocument();
  });

  it('should render Balance component details correctly', () => {
    const {getByText} = renderAccountDetails();
    expect(getByText('Balance')).toBeInTheDocument();
  });

});


