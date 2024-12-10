function foo(a, b) {
  if (Object.is(a, b)) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); // false
console.log(foo(0, -0)); // false

//Alternative solution using Number.isNaN
function foo2(a,b){
  if(Number.isNaN(a) && Number.isNaN(b)) return true; //for NaN
  if(a===b) return true; //for other cases
  return false;
}
console.log(foo2(NaN, NaN)); // true
console.log(foo2(0,-0));//true