import {render} from '@test';
import React from 'react';
import 'react-native';
import ShowdownScreen from './showdown';

describe('Showdown Screen', () => {
  it('Given any, When I am at "Showdown Screen", Then I should see "Showdown"', async () => {
    const component = render(<ShowdownScreen.Component />);
    expect(component.getByText('Showdown')).toBeDefined();
  });
});
