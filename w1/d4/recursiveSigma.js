const recursiveSigma = (n) => {
  const int = parseInt(n);

  if (isNaN(int)) {
    return null;
  }

  if (int < 1) {
    return 0;
  }

  return int + recursiveSigma(int - 1);
};

console.log(recursiveSigma(5));
