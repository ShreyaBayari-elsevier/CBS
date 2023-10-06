// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import Button from './Button';

// describe('Button Component', () => {
//   it('should render a button with the correct label', () => {
//     const label = 'Click me';
//     const { getByText } = render(<Button label={label} />);

//     const button = getByText(label);
//     expect(button).toBeInTheDocument();
//   });

//   it('should call the onClick function when clicked', () => {
//     const label = 'Click me';
//     const onClickMock = jest.fn();
//     const { getByText } = render(<Button label={label} onClick={onClickMock} />);

//     const button = getByText(label);
//     fireEvent.click(button);

//     expect(onClickMock).toHaveBeenCalled();
//   });
// });
