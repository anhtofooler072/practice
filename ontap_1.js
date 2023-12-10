// let multiply = 1;
// function checkPrime(a, b) {
//   // from a to b print all prime numbers but don't use isPrime function
//   for (let i = a; i <= b; i++) {
//     let isPrime = true;
//     for (let j = 2; j * j <= i; j++) {
//       if (i % j == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime && i > 1) {
//       console.log(i);
//       multiply *= i;
//     }
//   }
// }

// function printPrime() {
//   let a = Number(document.getElementById("number1").value);
//   let b = Number(document.getElementById("number2").value);
//   // check if a and b are number greater than 0
//   if (a < 0 || b < 0) {
//     alert("Please enter number greater than 0");
//     return false;
//   }
//   // print all prime numbers between form a to
//   checkPrime(a, b);
//   console.log(multiply);
//   alert(multiply);
//   multiply = 0;
//   location.reload();
// }

// function ktSNT(number) {
//   if (number < 2) {
//     return false;
//   }
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }


function drawStar () {
    let a = Number(document.querySelector("#number1").value);
    // draw acecending number of star
    for (let i = 1; i <= a; i++) {
        let star = "";
        for (let j = 1; j <= i; j++) {
            star += "*";
        }
        console.log(star);
    }

    // draw acecending number of star but mirror it to the left
    for (let i = 1; i <= a; i++) {
        let star = "";
        for (let j = 1; j <= a - i; j++) {
            star += " ";
        }
        for (let j = 1; j <= i; j++) {
            star += "*";
        }
        console.log(star);
    }

    for (let i = 1; i <= a; i++) {
        let star="";

}
}