//1
function forLoop(array) {
  for ( let i = 0; i < 25; i++) {
    if ( i === 1) {
      array.push(`I am 1 strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

//2
function whileLoop(n) {
  let countdown = 0;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return 'done'
}
