import { render, screen } from '@testing-library/react';
import BlogCard from '../../src/components/blogCard';

describe('BlogCard', () => {
    const blog = {
        title: 'Test Title',
        description: 'Test Description',
        thumbnail: 'https://imgix.cosmicjs.com/cb1152e0-ccd3-11ee-a584-65599426e889-Our-Amazing-Adventure.jpg',
        category: 'Test Category',
        date: 'Test Date',
        slug: 'test-slug',
    };

    it('renders the blog thumbnail', () => {
        render(<BlogCard {...blog} />);
        const img = screen.getByRole('img');
        // expect(img).toHaveAttribute('src', blog.thumbnail);
        expect(img).toHaveAttribute('src', `/_next/image?url=${encodeURIComponent(blog.thumbnail)}&w=1080&q=100`);
    });

    it('renders the blog category', () => {
        render(<BlogCard {...blog} />);
        expect(screen.getByText(blog.category)).toBeInTheDocument();
    });

    it('renders the blog date', () => {
        render(<BlogCard {...blog} />);
        expect(screen.getByText(blog.date)).toBeInTheDocument();
    });

    it('renders the blog title', () => {
        render(<BlogCard {...blog} />);
        expect(screen.getByText(blog.title)).toBeInTheDocument();
    });

    it('renders the blog description', () => {
        render(<BlogCard {...blog} />);
        expect(screen.getByText(blog.description)).toBeInTheDocument();
    });

    it('renders the "Read more" link with correct href', () => {
        render(<BlogCard {...blog} />);
        const link = screen.getByRole('link', { name: /read more/i });
        expect(link).toHaveAttribute('href', `blog/${blog.slug}`);
    });

    it('matches the snapshot', () => {
        const { container } = render(<BlogCard {...blog} />);
        expect(container).toMatchSnapshot();
    });

    it('does not render the image if thumbnail is not provided', () => {
        const blogNeg = {
            title: 'Test Title',
            description: 'Test Description',
            category: 'Test Category',
            date: 'Test Date',
            slug: 'test-slug',
        };
        render(<BlogCard {...blogNeg} />);
        expect(screen.queryByRole('img')).toBeInTheDocument();
        const img = screen.queryByRole('img') as HTMLImageElement;
        expect(img.src).toBe('http://localhost/');
    });
    it('renders homepage unchanged', () => {
        const { container } = render(<BlogCard {...blog} />);
        expect(container).toMatchSnapshot()
      });
});