import React from 'react';
import renderer from 'react-test-renderer';
import  About from './About';
import { screen,render as renderRtl } from '@testing-library/react';

const setup = () => renderRtl(<About/>)

describe('App',() => {
  test('render correctly', () => {
    const tree = renderer.create(<About/>)
    expect(tree).toMatchSnapshot();
  })

})

describe("checking dom elements", () => {
  test('Correct slide1 heading', () => {
    setup();
    const heading = screen.getByText("Welcome to D-Systems")
    expect(heading).toBeInTheDocument();
})

test('Correct slide2 heading', () => {
  setup();
  const heading = screen.getByText("Product Details Can be viewed without Sign in")
  expect(heading).toBeInTheDocument();
})
test('Correct slide3 heading', () => {
  setup();
  const heading = screen.getByText("To add, edit, delete Please SignIn first")
  expect(heading).toBeInTheDocument();
})
test('Correct slide4 heading', () => {
  setup();
  const heading = screen.getByText("Products views and price analysis can be done through analysis")
  expect(heading).toBeInTheDocument();
})
})