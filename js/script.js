//            Fix string function

// const fixString = (string) => {
//   const temp = string.toLowerCase();
//   return temp[0].toUpperCase() + temp.slice(1)
// }

// console.log(fixString('vALEnTYN'));
// console.log(fixString('lYASkOVskiY'));
// console.log(fixString('ramBO'));

//            Replace function

// const announcement = 'Mr Joe, come to the office! Mr Joe, asap!'
// console.log(announcement.replace('Joe', 'Mike'));
// console.log(announcement.replaceAll('Joe', 'Arnold'));
// console.log(announcement.replaceAll(/Mr/g, 'Doctor'));

// const show = (text) => {
//   return text
// }
// console.log(show(2023));

//    Notes

// const example = () => {
//   let text // Using let - all stays here...function scope...
//  }

//          Touch     

// window.addEventListener('DOMContentLoaded', () => {

//   const box = document.querySelector('.box')

//   box.addEventListener('touchstart', (e) => {
//     e.preventDefault()
//     console.log('Start!');
//   })

//   box.addEventListener('touchend', (e) => {
//     e.preventDefault()
//     console.log('End!');
//   })
// })

const obj = {
  a: 12
}

// console.log(obj);

obj.a = 2023

console.log(obj);
