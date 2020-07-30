import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton.js';

it('expect to add +1 after user clicks button', () => {
    const btn = shallow(<CounterButton />);
    expect(btn.state('count')).toEqual(0);
    btn.find('button').simulate('click');
    expect(btn.state('count')).toEqual(1);
})
