import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing and shows a loading state', () => {
  const { container } = render(<App />);
  expect(container.querySelector('.spinner-grow')).toBeInTheDocument();
});
