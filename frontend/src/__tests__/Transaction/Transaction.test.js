import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Transactions from '../../components/Transaction/Transactions';
import { MemoryRouter } from 'react-router-dom';
import Funds from '../../components/Transaction/TransferFunds';

describe('Transaction ', () => {
test('TransferFunds component should render when user clicks on TransferFunds button ', () => {

   render(
    <MemoryRouter>
      <Transactions/>
      <Funds/>
    </MemoryRouter>
  );
  //To verify that we are in Transaction component by checking existence of TransferFunds button (By using label)
  const addTransferButton = screen.getByLabelText('addButton');
  expect(addTransferButton).toBeInTheDocument();

  //Click the link to navigate to the TransferFund component
  fireEvent.click(addTransferButton);
  
  //To verify that we have navigated to the TransferFund component by rendering the Text "Transfer Funds"
  const transferFund = screen.getByText('Transfer Funds');
  expect(transferFund).toBeInTheDocument();
});
});
