function Hanoi(n, a, b, c) {
  if (n > 0) {
    Hanoi(n - 1, a, c, b);
    console.log(`Move ${a} to ${c}`);
    Hanoi(n - 1, b, a, c);
  }
}

Hanoi(3, 1, 2, 3);
