import { MatchImageSnapshotOptions } from 'jest-image-snapshot';

// jest-image-snapshot custom configuration
export function getJestImageSnapshotConfig(): MatchImageSnapshotOptions {
  return {
    // useful on CI (no need to retrieve the diff image, copy/paste image content from logs)
    dumpDiffToConsole: true,
    // use SSIM to limit false positive
    // https://github.com/americanexpress/jest-image-snapshot#recommendations-when-using-ssim-comparison
    comparisonMethod: 'ssim',
    // anything less than 0.1% difference passes as the same
    // failureThreshold: 0.001,
    // failureThresholdType: 'percent'
  };
}
