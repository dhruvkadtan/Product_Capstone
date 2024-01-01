import React from 'react';
import renderer from 'react-test-renderer';
import  PassReset from './PassReset';
import { screen,render as renderRtl } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const setup = () => renderRtl(<PassReset/>)

describe('checking render',() => {
  test('render correctly', () => {
    const tree = renderer.create(<PassReset/>)
    expect(tree).toMatchSnapshot();
  })

})

describe("checking dom elements", () => {
  
  test('Checking heading', () => {
    setup();
    const heading = screen.getByText("Forgot Password")
    expect(heading).toBeInTheDocument();
  })

  test('checking reset button', () => {
    setup();
    const resButton = screen.getByRole('button', {name: 'Reset'});
        expect(resButton).toBeVisible();
  })

  test('checking back button', () => {
    setup();
    const backButton = screen.getByRole('button', {name: 'Back'});
        expect(backButton).toBeVisible();
  })

  
})
