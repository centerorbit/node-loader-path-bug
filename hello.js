import addon from './build/Release/build-napi-with-cmake.node';
// var addon = require('bindings')('build-napi-with-cmake');

console.log(addon.hello()); // 'world'
