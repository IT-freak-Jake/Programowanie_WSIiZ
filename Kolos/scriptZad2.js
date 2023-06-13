class User {
    constructor(login, email, password) {
      this.login = login;
      this.email = email;
      this.password = password;
    }
  }
  class UserManager {
    constructor() {
      this.users = [];
    }

    addUser(user) {
      this.users.push(user);
    }

    changePassword(login, oldPassword, newPassword) {
      const user = this.users.find(user => user.login === login && user.password === oldPassword);
      if (user) {
        user.password = newPassword;
        console.log(`Zmieniono hasło dla użytkownika ${login}`);
        alert(`Zmieniono hasło dla użytkownika ${login}`);
      } else {
        console.log(`Nie można zmienić hasła. Użytkownik ${login} nie istnieje lub podano nieprawidłowe hasło.`);
        alert(`Nie można zmienić hasła. Użytkownik ${login} nie istnieje lub podano nieprawidłowe hasło.`);
      }
    }
  }

  const userManager = new UserManager();

  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const loginInput = document.getElementById('log-login').value;
      const oldPassInput = document.getElementById('log-old-password').value;
      const newPassInput = document.getElementById('log-new-password').value;
      userManager.changePassword(loginInput, oldPassInput, newPassInput);
      updateUsersTable();
      loginForm.reset();
  });

  const registrationForm = document.getElementById('registration-form');
  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const loginInput = document.getElementById('login');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    const login = loginInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
      alert('Hasła nie są zgodne.');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Hasło nie spełnia wymagań!');
        return;
    }

    const user = new User(login, email, password);
    userManager.addUser(user);
    registrationForm.reset();

    updateUsersTable();
  });

  function updateUsersTable() {
    const usersTableBody = document.getElementById('users-table-body');
    usersTableBody.innerHTML = '';

    userManager.users.forEach(user => {
      const row = document.createElement('tr');
      const loginCell = document.createElement('td');
      const emailCell = document.createElement('td');
      const passwordCell = document.createElement('td');

      loginCell.textContent = user.login;
      emailCell.textContent = user.email;
      passwordCell.textContent = user.password;

      row.appendChild(loginCell);
      row.appendChild(emailCell);
      row.appendChild(passwordCell);

      usersTableBody.appendChild(row);
    });
  }