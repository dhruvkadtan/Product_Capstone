import React from 'react';
import renderer from 'react-test-renderer';
import { screen,render as renderRtl } from '@testing-library/react';
import  NotFound from './NotFound';

const setup = () => renderRtl(<NotFound/>);

describe('checking render',() => {
  test('render correctly', () => {
    const tree = renderer.create(<NotFound/>)
    expect(tree).toMatchSnapshot();
  })

})

describe('checking dom elements', () => {
  test('Correct heading', () => {
    setup();
    const heading = screen.getByText("Wrong URL")
    expect(heading).toBeInTheDocument();
})
})

