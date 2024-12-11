function calc() {
    let name = prompt("Ismingizni kiriting:");
    let a = +prompt("Hozirgi yilni kiriting:");
    let b = +prompt("Tug'ilgan yilingizni kiriting:");
    let age = a - b;
    return name + ',yoshingiz ' + age;
  }
  let result = calc();
  alert(result);