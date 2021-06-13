function arithmeticOperations(a,b) {
  console.log(a-b);
  console.log(a*b);
  console.log(a/b);
}

function input(operations,x,y) {
  return operations(x,y);
}

let value = input(arithmeticOperations,6,2);