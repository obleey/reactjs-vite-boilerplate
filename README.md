# React Tailwindcss Boilerplate build with Vite

This is a [ReactJS](https://reactjs.org) + [Vite](https://vitejs.dev) boilerplate to be used with [Tailwindcss](https://tailwindcss.com). It has a fully functioning [React-Location](https://react-location.tanstack.com/) router, restricted and public routes, functioning [React-Hook-Form](https://react-hook-form.com/) for registering and authentication

## What is inside?

This project uses many tools like:

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [React-Location](https://react-location.tanstack.com/)
- [React-Hook-Form](https://react-hook-form.com/)
- [React-Query](https://react-query.tanstack.com/)
- [Mobx](https://mobx.js.org/README.html)
- [Mobx-persist-store](https://github.com/quarrant/mobx-persist-store)
- [React-generate-cli](https://github.com/arminbro/generate-react-cli)

## Getting Started

### Install

Create the project.

```bash
npx degit obleey/reactjs-vite-boilerplate my-app
```

Access the project directory.

```bash
cd my-app
```

```bash
yarn
```

Serve with hot reload at http://localhost:3000.

```bash
yarn start
```

### Lint

```bash
yarn lint
```

### Build

```bash
yarn build
```

### Test

```bash
yarn test
```

### Generate Component

```bash
npm generate:component componentName
```

will generate a component under the components folder

### Generate Component:shared

```bash
npm generate:component:shared componentName
```

will generate a component under the components/shared folder

### Generate page

```bash
npm generate:page pageName
```

will generate a page under the pages folder

### Start clean

```bash
yarn start:clean
```

will delete yarn.lock file, node_modules, yarn-error.log, run yarn and yarn start

## License

This project is licensed under the MIT License.
