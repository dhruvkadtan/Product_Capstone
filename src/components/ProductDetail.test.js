import React from 'react';
import renderer from 'react-test-renderer';
import  ProductDetail from './ProductDetail';

import { screen,render as renderRtl } from '@testing-library/react';

const setup = () => renderRtl(<ProductDetail/>);

describe('cheking renders correctly',() => {
  test('render correctly', () => {
    const tree = renderer.create(<ProductDetail/>)
    expect(tree).toMatchSnapshot();
  })

})
