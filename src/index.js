import a from './a.js';
import A from './aClass.js';

console.log('start');
a().then(msg => {
  const newdA = new A();
  const calledA = A();
  console.log(msg, A.aStaticField);
});
