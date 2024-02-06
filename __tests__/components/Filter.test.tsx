import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from '../../src/components/Filters/Filter';

describe('Filter Component', () => {
    const items = ['Item1', 'Item2', 'Item3'];
    const onFilterMock = jest.fn();
    const removeFilterMock = jest.fn();

    it('renders filter component correctly', () => {
        render(
            <Filter items={items} onFilter={onFilterMock} removeFilter={removeFilterMock} filterName="Test Filter" />
        );

        expect(screen.getByText('Test Filter')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();

        items.forEach((item) => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it('applies and removes filters correctly', () => {
        render(
            <Filter items={items} onFilter={onFilterMock} removeFilter={removeFilterMock} />
        );

        items.forEach((item) => {
            expect(screen.getByText(item)).toBeInTheDocument();
            // expect(screen.getByText(item).closest('label').querySelector('input')).not.toBeChecked();
        });

        fireEvent.change(screen.getByPlaceholderText('Search'), { target: { value: 'Item1' } });
        fireEvent.click(screen.getByLabelText('Item1'));
        expect(onFilterMock).toHaveBeenCalledWith('Item1');

        fireEvent.click(screen.getByLabelText('Item1'));
        expect(removeFilterMock).toHaveBeenCalledWith('Item1');
    });
});
