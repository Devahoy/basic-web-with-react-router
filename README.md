Basic Web with React Router
---

## Format code with Prettier

#### 1. Add `.eslintrc`

```bash
{
  "extends": ["react-app", "standard"],
  "rules": {
    "space-before-function-paren": 0
  }
}
```

#### 2. Install dependencies

```bash
yarn add prettier standard eslint eslint-config-react-app eslint-config-standard eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
```

#### 3. Add script to `package.json`

```
scripts: {
  "prettier": "./node_modules/.bin/prettier --semi=false --single-quote=true --write src/*"
}
```

#### 4. Run prettier

```
yarn prettier
```