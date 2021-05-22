# Visual Regression Testing using Jest

This repo is a playground to test how visual regression testing can be done with Jest. Most of this stuff is experimental but works pretty well already.

Visual Regression Testing is hard. Most of the documentation out in the wild recommends using some sort of CI regression testing service which use AI / Machine Learning to get over the different OS/Fonts/Animations/GPU issues. This can get quite complicated.

Jest tests run in a `jsdom` environment are much faster than full-blown e2e tests and when testing things like 3D models, it can be really nice if we can easily compare screenshots of the images and make sure that everything still works are expected.

## Acknowledgements

- [Automated visual regression testing with Jest](https://blog.logrocket.com/automated-visual-regression-testing-with-jest/)
- [jsdom-screenshot](https://github.com/dferber90/jsdom-screenshot)
- [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot)
- [jest-transform-css](https://github.com/dferber90/jest-transform-css)
- [awesome-regression-testing](https://github.com/mojoaxel/awesome-regression-testing)
- [Automated visual regression testing with TypeScript, Playwright, Jest and Jest Image Snapshot](https://medium.com/nerd-for-tech/automated-visual-regression-testing-with-typescript-playwright-jest-and-jest-image-snapshot-86db6f3364f5)

## Run Locally

```bash
git clone git@github.com:antosan/jest-visual-regression.git
cd jest-visual-regression
npm install
```

## Running Tests

```bash
npm run test
```

or in watch mode

```bash
npm run test:watch
```
