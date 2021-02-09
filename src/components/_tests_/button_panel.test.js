import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonPanel from '../calculator/button_panel';

const handleClick = () => ({ total: '0', next: '0', operation: 'x' });

describe('Button Panel', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ButtonPanel clickHandler={handleClick} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('creates a Button Panel component', () => {
    render(<ButtonPanel clickHandler={handleClick} />);
    const element = screen.getByText('0');
    expect(element).toBeInTheDocument();
  });
});