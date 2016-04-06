class A {
  aField = 'aField';
  static aStaticField = 'aStaticField';

  constructor() {
    console.log('Hi from constructor', this.aField);
  }

  call constructor() {
    console.log('Hi from non new constructor');
  }
}

export default A;
