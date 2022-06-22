import { render, screen, cleanup } from '@testing-library/react';
import Header from '../components/Header/Header';

describe('Header', () => {

    it('must display an img with the correct src for the header', () => {
        render(<Header></Header>)
        const img = screen.getByAltText('img')
        expect(img).toBeInTheDocument()
        expect(img.src).toContain('url-img')
        expect(img).toHaveAttribute('src', 'url-img')
    })

    it('must display a title for the header', () => {
        render(<Header></Header>)
        const title = screen.queryByText(/header/i)
        expect(title).toBeInTheDocument()
    })

})
