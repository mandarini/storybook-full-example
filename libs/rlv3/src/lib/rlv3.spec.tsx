import { render } from '@testing-library/react';

import Rlv3 from './rlv3';

describe('Rlv3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rlv3 />);
    expect(baseElement).toBeTruthy();
  });
});
