
function Helloworld(x) {
  if (Number.isInteger( x )) {

    return 'Hello World';
  }
  return 'Goodbye';
}

console.log(Helloworld( 2));

console.log(Helloworld(true));
