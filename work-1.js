const THIS_IS_GLOBAL = global;

function first(a, b) {
  let local = 1;
  this.value = 100;

  console.log(THIS_IS_GLOBAL);
  console.log("this가 가리키는 이상한 객체 :", this);

  function inner() {
    console.log("this가 가리키는 이상한 객체 :", this);

    console.log("this로 접근한 전역객체 키 :", this.value);
    console.log("전역객체 키 : ", THIS_IS_GLOBAL.value);

    console.log(local);

    return this.value;
  }

  return inner() + a + b;
}

const firstExample = first(1, 2);
console.log(firstExample);
