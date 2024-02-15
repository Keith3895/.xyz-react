import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ReactGA from 'react-ga4';



jest.mock('react-ga4');

describe('App', () => {
  beforeEach(() => {
    (ReactGA.initialize as jest.Mock).mockClear();
  });

  it('initializes Google Analytics', () => {
    render(<App />);
    expect(ReactGA.initialize).toHaveBeenCalledWith('G-XT4B2SFEKK');
  });

  it('renders the Main component', () => {
    render(<App />);
    const header = screen.getByRole('banner');
    const nav = screen.getByRole('navigation');
    expect(header).toBeInTheDocument();
    expect(nav).toBeInTheDocument();

  });
});