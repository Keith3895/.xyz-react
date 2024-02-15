import { act, render, screen, waitFor } from '@testing-library/react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Main from './main';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    RouterProvider: jest.fn(),
}));

jest.mock('./components/nav', () => () => <div>NavBar</div>);
jest.mock('./components/footer', () => () => <div>Footer</div>);

describe('Main', () => {
    it('renders NavBar, RouterProvider and Footer', () => {
        render(<Main />);
        expect(screen.getByText('NavBar')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();
        expect(RouterProvider).toHaveBeenCalled();
    });


    it('renders correctly when there are no items', () => {
        const tree = renderer.create(<Main />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});