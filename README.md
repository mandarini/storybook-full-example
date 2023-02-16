# Test `sb automigrate`

This is a Nx workspace which contains the following projects:

- A [Next.js application](apps/nextapp) with [Storybook configuration](apps/nextapp/.storybook/main.js)
- An [Angular application](apps/ngapp) with [Storybook configuration](apps/ngapp/.storybook/main.js)
- A [React + Vite application](apps/rv1) with [Storybook configuration](apps/rv1/.storybook/main.js)
- A [React + Webpack application](apps/rw1) with [Storybook configuration](apps/rw1/.storybook/main.js)
- A [Web Components + Vite application](apps/wv1) with [Storybook configuration](apps/wv1/.storybook/main.js)
- A [Web Components + Webpack application](apps/ww1) with [Storybook configuration](apps/ww1/.storybook/main.js)

The whole project is using the latest version of Nx and Storybook version `6.5.16`.

## Install dependencies

Run `yarn` to install all dependencies.

## Try to migrate

I try to migrate Storybook using `sb automigrate` using my local Storybook build like this:

```
sb automigrate --config-dir="apps/nextapp/.storybook"
```

As an example, I am first trying to migrate the Next.js application.

I get a message saying that "No migrations were applicable to your project".
