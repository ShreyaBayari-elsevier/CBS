import { render, screen, cleanup} from '@testing-library/react'
import AccountDetails from '../Accounts/accountDetails';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

describe("Account-Details test suite ", () => {

    test('renders account details correctly', () => {
        const mockAccountData = {
          acc_id: 'acc_1',
          acc_type: 'Savings'
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
       
      });

});