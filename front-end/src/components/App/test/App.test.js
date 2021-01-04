import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App.jsx';

describe('App', () => {
  beforeEach(() => {
    jest.spyOn(Date.prototype, 'toLocaleTimeString').mockImplementation(() => '3:33 pm');
  });

  test('renders learn react link', () => {
    render(<App />);
    const textElement = screen.getByText(/3:33 pm/i);
    expect(textElement).toHaveTextContent('3:33 pm');
    expect(textElement).toBeInTheDocument();
  });
});
