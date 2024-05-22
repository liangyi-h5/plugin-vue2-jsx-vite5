import terser from '@rollup/plugin-terser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'fs'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const pkg = JSON.parse(readFileSync(path.join(__dirname, './package.json'), 'utf-8'))
const dependencies = (res) => {
	return Object.keys(res.dependencies || {})
}

const pkgdependencies = dependencies(pkg)

const generateBuildPathUrl = (url = '') => {
	return `dist/${url}`
}

export default {
	external: id => pkgdependencies.includes(id),
	input: 'src/index.js',
	output: [
		{
			file: generateBuildPathUrl('lib/index.js'),
			format: 'cjs',
			plugins: [terser()]
		},
		{
			file: generateBuildPathUrl('esm/index.js'),
			format: 'es',
			name: 'version',
			plugins: [terser()]
		}
	],
	sourcemap: true,
}