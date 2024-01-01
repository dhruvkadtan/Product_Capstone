import React from 'react';
import renderer from 'react-test-renderer';
import  Register from './Register';
import { screen,render as renderRtl } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const setup = () => renderRtl(<Register/>);

describe('checking render',() => {
  test('render correctly', () => {
    const tree = renderer.create(<Register/>)
    expect(tree).toMatchSnapshot();
  })
  test('checking reset button', () => {
    setup();
    const resButton = screen.getByRole('button', {name: 'Register'});
        expect(resButton).toBeVisible();
  })


})

