function solution(n) {
  let dp = [];
  dp.push(1);
  dp.push(2);
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
  }

  return dp[n - 1];
}
