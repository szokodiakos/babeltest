export default async function a() {
  const obj = { one: 1, two: 2 };
  const aObj = await b(obj);
  return aObj;
}

async function b(obj) {
  return Promise.resolve({ ...obj, three: 3 });
}
