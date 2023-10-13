import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Funds from '../../components/Transaction/TransferFunds';
import axios from 'axios';

describe('TransferFunds ', () => {
    let getByLabelText,getByText;

    beforeEach(()=>{
        const {getByLabelText:getByLabelTextRender , getByText:getByTextRender} = render(<MemoryRouter> <Funds/> </MemoryRouter>);        
        getByLabelText = getByLabelTextRender;
        getByText = getByTextRender;
    });
    
    afterEach(()=>{
        getByLabelText = null;
        getByText = null;
    })

    it('should render FromAccount Input ', () => {
        expect(getByLabelText('fromAcc')).toBeInTheDocument();
    });

    it('should render ToAccount Input ', () => {
        expect(getByLabelText('toAcc')).toBeInTheDocument();
    });

    it('should render ConfirmToAccount Input ', () => {
        expect(getByLabelText('confirmToAcc')).toBeInTheDocument();
    });

    it('should render Amount Input ', () => {
        expect(getByLabelText('amount')).toBeInTheDocument();
    });

    it('should render TransactionID Input ', () => {
        expect(getByLabelText('transId')).toBeInTheDocument();
    });

    it('should render dateTime Input ', () => {
        expect(getByLabelText('dateTime')).toBeInTheDocument();
    });

    it('should render Transaction category Input ', () => {
        expect(getByLabelText('transCat')).toBeInTheDocument();
    });

    it('should change FromAccount Input value', () => {
            fireEvent.change(getByLabelText('fromAcc'), { target: { value: 'acc_1' } });
            expect(getByLabelText('fromAcc').value).toBe('acc_1');
    });
    
    it('should change ToAccount Input value', () => {
            fireEvent.change(getByLabelText('toAcc'), { target: { value: 'acc_2' } });
            expect(getByLabelText('toAcc').value).toBe('acc_2');
    });

    it('should change ConfirmToAccount Input value', () => {
            fireEvent.change(getByLabelText('confirmToAcc'), { target: { value: 'acc_2' } });
            expect(getByLabelText('confirmToAcc').value).toBe('acc_2');
    });

    it('should change Amount Input value', () => {
            fireEvent.change(getByLabelText('amount'), { target: { value: 100 } });
            expect(Number(getByLabelText('amount').value)).toBe(100);
    });

    it('should change TransactionID Input value', () => {
            fireEvent.change(getByLabelText('transId'), { target: { value: '100' } });
            expect(getByLabelText('transId').value).toBe('100');
    });

    it('should change dateTime Input value', () => {
            fireEvent.change(getByLabelText('dateTime'), { target: { value: '2023-09-22T19:48' } });
            expect(getByLabelText('dateTime').value).toBe('2023-09-22T19:48');
    });

    it('should change Transaction category Input value', () => {
            fireEvent.change(getByLabelText('transCat'), { target: { value: 'UPI' } });
            expect(getByLabelText('transCat').value).toBe('UPI');
    });

    it('should submit form on button click',async ()=>{
        window.alert = jest.fn();
        axios.post = jest.fn().mockImplementation(()=>{
            return Promise.resolve({
                    status:200,
            });
        });
        
        fireEvent.change(getByLabelText('fromAcc'), { target: { value: 'acc_1' } });
        fireEvent.change(getByLabelText('toAcc'), { target: { value: 'acc_2' } });
        fireEvent.change(getByLabelText('confirmToAcc'), { target: { value: 'acc_2' } });
        fireEvent.change(getByLabelText('amount'), { target: { value: 100 } });
        fireEvent.change(getByLabelText('transId'), { target: { value: '100' } });
        fireEvent.change(getByLabelText('dateTime'), { target: { value: '2023-09-22T19:48' } });
        fireEvent.change(getByLabelText('transCat'), { target: { value: 'UPI' } });

        fireEvent.click(getByText('Submit'));
        
        await waitFor(()=>{
            expect(window.alert).toHaveBeenCalledWith("Success");
        });

    });

});

