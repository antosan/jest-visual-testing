import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import React from 'react';
import Index from '../../pages';
import { getJestImageSnapshotConfig } from '../snapshotConfig';

const config = getJestImageSnapshotConfig();

it('has no visual regressions', async () => {
  render(<Index />);

  const screenshot = await generateImage();

  expect(screenshot).toMatchImageSnapshot(config);
});
