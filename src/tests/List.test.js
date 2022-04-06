import React from 'react'
import { screen, cleanup, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import List from '../components/List'

afterEach(cleanup)

test('should equal empty string', () => {
    render(<List />)
    const textId = screen.getByTestId('text-content')
    expect(textId).toHaveTextContent('')
})

test('button should be disabled', () => {
    render(<List />);
    const buttonId = screen.getByRole('button')
    expect(buttonId).toBeDisabled()
})

test('text should equal bob', () => {
    render(<List />)
    fireEvent.change(screen.getByRole('textbox'), {target: { value: 'Bob'}})
    expect(screen.getByTestId('text-content')).toHaveTextContent('Bob')
})

