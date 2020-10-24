function powerSet(op, ip) {
  if (ip.length === 0) {
    op ? console.log(op) : console.log('" "');
    return;
  }
  let op1 = op;
  let op2 = op + ip[0];
  ip = ip.slice(1);
  powerSet(op1, ip);
  powerSet(op2, ip);
}

powerSet("", "123");
