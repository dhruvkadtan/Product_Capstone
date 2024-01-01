import React from 'react';
import renderer from 'react-test-renderer';
import  Chart2 from './chart2';


  test('render correctly', () => {
    const tree = renderer.create(<Chart2/>)
    expect(tree).toMatchSnapshot();
  })


