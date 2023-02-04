Vite/Vue/Storybook v7 (beta) Reproduction

Description:
Error when running Storybook instance and saving stories code.

Error displayed in canvas:

```js
TypeError: Cannot read properties of null (reading 'nextSibling')
    at nextSibling (runtime-dom.esm-bundler.js:36:31)
    at removeFragment (runtime-core.esm-bundler.js:6190:20)
    at remove2 (runtime-core.esm-bundler.js:6155:17)
    at unmount (runtime-core.esm-bundler.js:6124:17)
    at unmountComponent (runtime-core.esm-bundler.js:6212:13)
    at unmount (runtime-core.esm-bundler.js:6097:13)
    at unmountComponent (runtime-core.esm-bundler.js:6212:13)
    at unmount (runtime-core.esm-bundler.js:6097:13)
    at patch (runtime-core.esm-bundler.js:5070:13)
    at render2 (runtime-core.esm-bundler.js:6260:13)
``` 
    
