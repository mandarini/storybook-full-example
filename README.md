# Show React + Vite deep imports and `vite-tsconfig-paths` plugin

Working on the latest version of Nx. Let's focus on the project `rv1`, which is a React application using Vite. It's set up with Storybook, and the `@storybook/builder-vite`.

## `.storybook/main.js` Vite settings

Let's take a look at the [apps/rv1/.storybook/main.js](apps/rv1/.storybook/main.js) file.

```js
...
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [
        viteTsConfigPaths({
          root: '../../../',
        }),
      ],
...
```

Project `rv1` depends on library `rlv1` (React Library using Vite + Storybook with Vite), which depends on `rlv2` which depends on `rlv3` which depends on `ui-rlv4`.

We can take a look at all the `.storybook/main.js` files of these projects, and we can observe that the `root` of the `viteTsConfigPaths` plugin is always relative to the root of the workspace.

Now let's see how this works:

## Install dependencies

Please remember to use Node 16, because the `@storybook/builder-vite` does not work with Node 18.

Run `yarn` to install all dependencies.

## Run Storybook and Build Storybook

We can successfully run and build Storybook for each of these projects. Let's try:

### For `rv1`

```bash
npx nx storybook rv1
```

```bash
npx nx build-storybook rv1
```

### For `rlv1`

```bash
npx nx storybook rlv1
```

```bash
npx nx build-storybook rlv1
```

### For `rlv2`

```bash
npx nx storybook rlv2
```

```bash
npx nx build-storybook rlv2
```

### For `rlv3`

```bash
npx nx storybook rlv3
```

```bash
npx nx build-storybook rlv3
```

### For `ui-rlv4`

```bash
npx nx storybook ui-rlv4
```

```bash
npx nx build-storybook ui-rlv4
```

## Result

All of the above commands run successfully. Which means that the `viteTsConfigPaths` plugin works as expected, and resolves the paths correctly.