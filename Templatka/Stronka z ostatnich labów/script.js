// Klasa użytkownika
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

// Tablica użytkowników
const users = [];

// Rejestracja
const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Hasła się nie zgadzają!');
    return;
  }

  // Walidacja hasła za pomocą regex
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert('Hasło nie spełnia wymagań!');
    return;
  }

  // Tworzenie obiektu użytkownika
  const user = new User(username, password);

  // Dodawanie użytkownika do tablicy
  users.push(user);

  alert('Rejestracja udana!');
  registrationForm.reset();
});

// Logowanie
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const loginUsername = document.getElementById('login-username').value;
  const loginPassword = document.getElementById('login-password').value;

  // Sprawdzanie czy użytkownik istnieje w tablicy
  const foundUser = users.find(user => user.username === loginUsername && user.password === loginPassword);

  if (foundUser) {
    document.getElementById('username').textContent = loginUsername;
    alert('Logowanie udane!');
    loginForm.reset();
  } else {
    alert('Nieprawidłowy login lub hasło!');
  }
});

// Kalkulator wynagrodzenia
const calculatorForm = document.getElementById('calculator-form');
calculatorForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const salary = parseFloat(document.getElementById('salary').value);
  const hours = parseFloat(document.getElementById('hours').value);

  const result = calculateNetSalary(salary, hours);

  document.getElementById('result').textContent = `Wynagrodzenie netto: ${result} zł`;
});

function calculateNetSalary(salary, hours) {
  // Przykładowa metoda obliczania wynagrodzenia netto
  const netSalary = salary - (salary * 0.2); // Prosta symulacja obliczenia

  return netSalary;
}

// Obsługa kliknięcia na grafikę
const mainImage = document.getElementById('main-image');
mainImage.addEventListener('click', function() {
  // Dowolna animacja
  mainImage.style.transform = 'rotate(360deg)';
  setTimeout(function() {
    mainImage.style.transform = 'rotate(0deg)';
  }, 600);
});
