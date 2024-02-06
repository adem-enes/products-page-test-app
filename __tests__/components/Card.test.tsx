import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Card from '../../src/components/Card/Card';
import { Provider } from 'react-redux';
import { store } from '../../src/app/store';

const mockProduct = {
    id: '1',
    brand: 'ExampleBrand',
    model: 'ExampleModel',
    name: 'ExampleProduct',
    price: 100,
    image: 'example-image-url',
    description: '',
    createdAt: ''
};

describe('Card Component', () => {
    it('renders product information correctly', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Card product={mockProduct} />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText(`${mockProduct.price} ₺`)).toBeInTheDocument();
        expect(screen.getByText(`${mockProduct.brand} ${mockProduct.model}`)).toBeInTheDocument();
        expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    });
});
