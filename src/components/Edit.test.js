import React from 'react';
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom";
import  Edit from './Edit';
import { screen,render as renderRtl } from '@testing-library/react';

const setup = () => renderRtl(<Edit/>);

describe("Edit render correctly" , () => {
  test('render correctly', () => {
    const tree = renderer.create(<Edit/>)
    expect(tree).toMatchSnapshot();
  })

 
})
 