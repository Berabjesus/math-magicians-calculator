import RRender from 'react-test-renderer';
import Home from '../page/home';

it('renders the Home Page correctly', () => {
  const tree = RRender.create(<Home />).toJSON();

  expect(tree).toMatchSnapshot();
});
