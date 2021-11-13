import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from 'pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home genres={[]} />);

    const heading = screen.getByText(/My Todo List/i);

    expect(heading).toBeInTheDocument();
  });
});
