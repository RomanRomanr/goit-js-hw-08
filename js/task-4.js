const formReg = document.querySelector('.login-form')
const callback = (event) => {
  event.preventDefault();
  const form = event.target;
  const users = {};
  for (const element of form.elements) {
    if (element.name) {
      users[element.name] = element.value.trim();
    }
  }
  const check = Object.values(users).some((value) => value === "");
  if (check) {
    alert(`All form fields must be filled in`);
    return;
  }

  // const email = form.elements.email.value.trim();
  // const password = form.elements.password.value.trim();
  // if (email === "" || password === "") {
  //     alert(`All form fields must be filled in`);
  //     return;
  // };
  // const user = {
  //     email: email,
  //     password: password,
  // }
    console.log(users);
  form.reset();
}

formReg.addEventListener('submit', callback);