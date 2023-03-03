import { render } from '@testing-library/react';

import UiRlv4 from './ui-rlv4';

describe('UiRlv4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiRlv4 />);
    expect(baseElement).toBeTruthy();
  });
});
