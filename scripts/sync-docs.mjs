import { cp, mkdir, rm } from 'node:fs/promises'

const distDir = 'dist'
const docsDir = 'docs'

await rm(docsDir, { recursive: true, force: true })
await mkdir(docsDir, { recursive: true })
await cp(distDir, docsDir, { recursive: true })

console.log('Synced dist -> docs')