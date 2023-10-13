import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Transactions from '../../components/Transaction/Transactions';
import { MemoryRouter } from 'react-router-dom';
import Funds from '../../components/Transaction/TransferFunds';

describe('Transactions ', () => {

  it('should render TransferFund component on click of TransferFunds button ', () => {

    const {getByLabelText} = render(
                                    <MemoryRouter>
                                      <Transactions/>
                                    </MemoryRouter>
                                  );
    const {getByText} = render(
                                <MemoryRouter>
                                  <Funds/>
                                </MemoryRouter>
                              );
    const addTransferButton = getByLabelText('addButton');
    expect(addTransferButton).toBeInTheDocument();

    fireEvent.click(addTransferButton);
    
    const transferFund = getByText('Transfer Funds');
    expect(transferFund).toBeInTheDocument();
});
});
