import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RootLayout from '../src/app/layout';


jest.mock('../components/nav', () => () => <div>NavBar</div>);
jest.mock('../components/footer', () => () => <div>Footer</div>);

describe('RootLayout', () => {
    it('renders without crashing', () => {
      const { container } = render(<RootLayout>Test</RootLayout>);
      expect(container).toBeInTheDocument();
    });

  it('renders NavBar, Footer and children', () => {
    render(<RootLayout>Test</RootLayout>);

    expect(screen.getByText('NavBar')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});