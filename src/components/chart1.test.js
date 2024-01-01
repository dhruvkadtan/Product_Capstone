import React from 'react';
import renderer from 'react-test-renderer';
import  Chart1 from './chart2';


  test('render correctly', () => {
    const tree = renderer.create(<Chart1/>)
    expect(tree).toMatchSnapshot();
  })


