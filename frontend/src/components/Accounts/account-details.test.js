import { render, screen, cleanup} from '@testing-library/react'
import AccountDetails from './accountDetails';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';


describe("Account-Details test suite ", () => {

  let getByText;

  beforeEach(()=>{
    const {getByText:getByTextRender} = render(<MemoryRouter><AccountDetails /></MemoryRouter>);        
    getByText = getByTextRender;
  });

  it(' should render account ID details correctly', () => {
    expect(getByText('Account ID')).toBeInTheDocument();
  });

  it('should render Account Type details correctly', () => {
    expect(getByText('Account Type')).toBeInTheDocument();
  });

  it('should render First Name details correctly', () => {
    expect(getByText('First Name')).toBeInTheDocument();
  });

  it('should render Second Name component details correctly', () => {
    expect(getByText('Second Name')).toBeInTheDocument();
  });

  it('should render Phone Number component details correctly', () => {
    expect(getByText('Phone Number')).toBeInTheDocument();
  });

  it('should render Address component details correctly', () => {
    expect(getByText('Address')).toBeInTheDocument();
  });

  it('should render Nominee component details correctly', () => {
    expect(getByText('Nominee')).toBeInTheDocument();
  });

  it('should render Nationality component details correctly', () => {
    expect(getByText('Nationality')).toBeInTheDocument();
  });

  it('should render PAN Card Number component details correctly', () => {
    expect(getByText('PAN Card Number')).toBeInTheDocument();
  });

  it('should render Aadhar Number component details correctly', () => {
    expect(getByText('Aadhar Number')).toBeInTheDocument();
  });

  it('should render Balance component details correctly', () => {
    expect(getByText('Balance')).toBeInTheDocument();
  });

});


