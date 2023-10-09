import { render, screen, cleanup} from '@testing-library/react'
import AccountDetails from '../Accounts/accountDetails';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

describe("Account-Details test suite ", () => {

    test('renders account details correctly', () => {
        const mockAccountData = {
          acc_id: "ACC005",
          acc_type: "Savings",
          firstname: "Meera",
          lastname: "Patil",
          phonum: 9876543214,
          address: "202 Cedar Street, Bangalore",
          nominee: "Avinash Patil",
          nationality: "Indian",
          pannum: "XYZAB9012C",
          aadhar: 777788889999,
          balance: 9500.00  
        };
      
        // Mock localStorage.getItem to return a user ID
        jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => JSON.stringify({ userID: 'acc_1' }));
      
        // Mock axios.get to return mockAccountData
        jest.spyOn(axios, 'get').mockResolvedValue({ data: mockAccountData });
      
        const { getByText } = render(      
            <MemoryRouter>
                <AccountDetails />
            </MemoryRouter>);
      
        // Assert that the component renders expected account details
        expect(getByText('Account ID')).toBeInTheDocument();
        expect(getByText('Account Type')).toBeInTheDocument();
        expect(getByText('First Name')).toBeInTheDocument();
        expect(getByText('Second Name')).toBeInTheDocument();
        expect(getByText('Phone Number')).toBeInTheDocument();
        expect(getByText('Address')).toBeInTheDocument();
        expect(getByText('Nominee')).toBeInTheDocument();
        expect(getByText('Nationality')).toBeInTheDocument();
        expect(getByText('PAN Card Number')).toBeInTheDocument();
        expect(getByText('Aadhar Number')).toBeInTheDocument();
        expect(getByText('Balance')).toBeInTheDocument();
        
       
      });

});