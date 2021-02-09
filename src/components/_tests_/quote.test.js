import RRender from 'react-test-renderer';
import Quote from '../page/quote';

it('renders the Quote Page correctly', () => {
  const tree = RRender.create(<Quote />).toJSON();

  expect(tree).toMatchSnapshot();
});
