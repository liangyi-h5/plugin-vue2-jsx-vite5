# plugin-vue2-jsx-vite5
Plug-in compatible with vite5 vue2 jsx syntax

vue version >= 2.7
## ⚠️
<span style="background: yellow;padding: 6px 6px;">The official @vitejs/plugin-vue2-jsx is no longer maintained</span>

## Installation
```
npm plugin-vue2-jsx-vite5
```

## Usage

vite.config.js
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import vue2Jsx from 'plugin-vue2-jsx-vite5'
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    vue2Jsx()
  ]
})

```
