const fixString = (string) => {
  const temp = string.toLowerCase();
  return temp[0].toUpperCase() + temp.slice(1)
} 

console.log(fixString('vALEnTYN'));
console.log(fixString('lYASkOVskiY'));