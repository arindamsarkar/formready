import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist/vendor',{recursive:true});
for (const [src,dst] of [['pdf-lib/dist/pdf-lib.min.js','pdf-lib.min.js'],['pdfjs-dist/build/pdf.mjs','pdf.mjs'],['pdfjs-dist/build/pdf.worker.mjs','pdf.worker.mjs'],['fflate/esm/browser.js','fflate.js'],['pdf-lib/LICENSE.md','pdf-lib-LICENSE.md'],['pdfjs-dist/LICENSE','pdfjs-LICENSE'],['fflate/LICENSE','fflate-LICENSE']]) await copyFile('node_modules/'+src,'dist/vendor/'+dst);
