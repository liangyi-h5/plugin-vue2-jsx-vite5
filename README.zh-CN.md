# plugin-vue2-jsx-vite5
兼容 vite5+ vue2 jsx 语法的插件

vue version >= 2.7
## ⚠️
<span style="background: yellow;padding: 6px 6px;">官方的 @vitejs/plugin-vue2-jsx 已经不维护了</span>

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
