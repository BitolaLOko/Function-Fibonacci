let argumento = 0;

for (let i = 2; i < process.argv.length; i++) {
  argumento += Number(process.argv[i]);
}

function loop(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n + 2; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    console.log(fib[i - 2]);
  }
}

loop(argumento);

function recursiva(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }

  return recursiva(n - 1) + recursiva(n - 2);
}

console.log(recursiva(argumento));
