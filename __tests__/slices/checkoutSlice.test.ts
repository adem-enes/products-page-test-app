import { configureStore } from '@reduxjs/toolkit';
import {
    checkoutSlice, addProduct, removeProduct,
    addProductQty, removeProductQty, updateProductQty
} from '../../src/slices/checkoutSlice';

describe('Checkout Slice Tests', () => {
    const store = configureStore({
        reducer: {
            checkout: checkoutSlice.reducer,
        },
    });

    it('adds a product to the cart correctly', () => {
        store.dispatch(addProduct({
            id: 1, name: 'Test Product', price: 50, image: 'image',
            model: 'model', brand: 'brand', description: 'description', createdAt: 'createdAt'
        }));
        const state = store.getState().checkout;

        expect(state.productsInCart.length).toBe(1);
        expect(state.productsInCart[0].product.id).toBe(1);
        expect(state.productsInCart[0].qty).toBe(1);
        expect(state.totalPrice).toBe(50);
    });

    it('removes a product from the cart correctly', () => {
        store.dispatch(addProduct({
            id: 1, name: 'Test Product', price: 50, image: 'image',
            model: 'model', brand: 'brand', description: 'description', createdAt: 'createdAt'
        }));

        store.dispatch(removeProduct({
            id: 1, name: 'Test Product', price: 50, image: 'image',
            model: 'model', brand: 'brand', description: 'description', createdAt: 'createdAt'
        }));
        const state = store.getState().checkout;

        expect(state.productsInCart.length).toBe(0);
        expect(state.totalPrice).toBe(50);
    });

    it('increases product quantity in the cart correctly', () => {

        store.dispatch(addProduct({
            id: 1, name: 'Test Product', price: 50, image: 'image',
            model: 'model', brand: 'brand', description: 'description', createdAt: 'createdAt'
        }));

        store.dispatch(addProductQty({
            id: 1, name: 'Test Product', price: 50, image: 'image',
            model: 'model', brand: 'brand', description: 'description', createdAt: 'createdAt'
        }));
        const state = store.getState().checkout;

        expect(state.productsInCart[0].qty).toBe(2);
        expect(state.totalPrice).toBe(150);
    });

    it('decreases product quantity in the cart correctly', () => {
        store.dispatch(addProduct({
            id: 1, name: 'Test Product', price: 50, image: 'image',
            model: 'model', brand: 'brand', description: 'description', createdAt: 'createdAt'
        }));
        store.dispatch(addProductQty({
            id: 1, name: 'Test Product', price: 50, image: 'image',
            model: 'model', brand: 'brand', description: 'description', createdAt: 'createdAt'
        }));

        store.dispatch(removeProductQty({
            id: 1, name: 'Test Product', price: 50, image: 'image',
            model: 'model', brand: 'brand', description: 'description', createdAt: 'createdAt'
        }));
        const state = store.getState().checkout;

        expect(state.productsInCart[0].qty).toBe(3);
        expect(state.totalPrice).toBe(200);
    });

    it('updates product quantity in the cart correctly', () => {
        store.dispatch(addProduct({
            id: 1, name: 'Test Product', price: 50, image: 'image',
            model: 'model', brand: 'brand', description: 'description', createdAt: 'createdAt'
        }));
        store.dispatch(addProductQty({
            id: 1, name: 'Test Product', price: 50, image: 'image',
            model: 'model', brand: 'brand', description: 'description', createdAt: 'createdAt'
        }));

        store.dispatch(updateProductQty({
            product: {
                id: 1, name: 'Test Product', price: 50, image: 'image',
                model: 'model', brand: 'brand', description: 'description', createdAt: 'createdAt'
            }, qty: 3
        }));
        const state = store.getState().checkout;

        expect(state.productsInCart[0].qty).toBe(3);
        expect(state.totalPrice).toBe(150);
    });
});
