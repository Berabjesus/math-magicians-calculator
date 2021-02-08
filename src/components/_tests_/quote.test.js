import RRender from 'react-test-renderer';
import Quote from '../display/quote';

it('renders the Quote Page correctly without errors', () => {
  const tree = RRender.create(<Quote />).toJSON();

  expect(tree).toMatchSnapshot();
});
