import FlexDemo from './FlexDemo';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Demo', () => {
  it('should switch tab when clicking tab title', async () => {
    render(<FlexDemo />);

    expect(screen.queryByText('Panel Three')).toBe(null);
    fireEvent.click(screen.getByText('Three'));

    expect(screen.getByText('Panel Three')).toBeVisible();
  });
});
