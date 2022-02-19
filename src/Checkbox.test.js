import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import { Checkbox } from './Checkbox'


test("Selecting check box", () => {
    const { getByLabelText } = render(< Checkbox />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const checkbox = getByLabelText(/not checked/);

    fireEvent.click(checkbox);

    expect(checkbox.checked).toEqual(true);
})