import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/app/page';

describe('Home', () => {
  it('renders without crashing', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });

  it('renders expected text', () => {
    render(<Home />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
  it('renders homepage unchanged', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  });
});