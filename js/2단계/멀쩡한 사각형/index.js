function solution(w, h) {
  const gdc = function (n, m) {
    if (n % m === 0) {
      return m;
    }

    return gdc(m, n % m);
  };

  return w * h - (w + h - gdc(w, h));
}

solution(3, 4);
