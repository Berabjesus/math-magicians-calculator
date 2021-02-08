import RRender from 'react-test-renderer';
import Home from '../display/home';

it('renders the Home Page correctly without errors', () => {
  const tree = RRender.create(<Home />).toJSON();

  expect(tree).toMatchSnapshot();
});