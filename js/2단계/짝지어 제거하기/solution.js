function solution(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s = s.split(s[i] + s[i + 1]).join("");
      i = -1;
    }
  }

  return s.length === 0 ? 1 : 0;
}
