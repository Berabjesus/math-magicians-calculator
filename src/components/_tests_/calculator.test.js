import RRender from 'react-test-renderer';
import Calculator from '../page/calculator';

it('renders the Calculator Page correctly without errors', () => {
  const tree = RRender.create(<Calculator />).toJSON();

  expect(tree).toMatchSnapshot();
});
