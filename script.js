const usersDatabase = [
  { username: "usuario", password: "senha" }
];

const appointmentsDatabase = [];

// Função para fazer login
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = usersDatabase.find(user => user.username === username && user.password === password);

  if (user) {
      showPage("agendamento");
  } else {
      alert("Credenciais inválidas. Tente novamente.");
  }
}

// Função para exibir uma determinada página
function showPage(pageId) {
  const sections = document.querySelectorAll("section");
  
  sections.forEach(section => {
      if (section.id === pageId) {
          section.style.display = "block";
      } else {
          section.style.display = "none";
      }
  });
}

// Função para fazer agendamento
function submitAppointment() {
  const clientName = document.getElementById("clientName").value;
  const appointmentDate = document.getElementById("appointmentDate").value;

  const appointment = {
      client: clientName,
      date: appointmentDate
  };

  appointmentsDatabase.push(appointment);

  alert("Agendamento realizado com sucesso!");
}

// Event listeners
document.getElementById("loginButton").addEventListener("click", login);
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
  event.preventDefault();
  submitAppointment();
});