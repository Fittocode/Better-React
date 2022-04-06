import React from 'react'
import { screen, cleanup, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Form from '../components/Form'

afterEach(cleanup)

it('should call onChange callback handler', () => {
    const onChange = jest.fn()

    render(<Form text='' handleChange={onChange}  />)

    fireEvent.change(screen.getByRole('textbox'), {target: {value: 'JavaScript'}})

    expect(onChange).toHaveBeenCalledTimes(1)
})

