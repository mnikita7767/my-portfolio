// Array of greetings in different languages
const greetings = [
  "Hello!",
  "你好!",
  "Hola!",
  "Bonjour!",
  "Ciao!",
  "안녕하세요",
  "مرحبًا",
  "स्वागत है!",
];

let index = 0;
const greetingElement = document.getElementById("greeting");

// Show each greeting once, then stop
const interval = setInterval(() => {
  greetingElement.textContent = greetings[index];
  index++;

  // Stop when all greetings are shown
  if (index === greetings.length) {
    clearInterval(interval);
  }
}, 200); // Faster greeting change

// Hide loader after last greeting (Reduced delay)
setTimeout(() => {
  const loader = document.getElementsByClassName("loader")[0];

  // Add glitch effect before hiding
  loader.classList.add("glitch-effect");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transform = "scale(1.1)";

    setTimeout(() => {
      loader.style.display = "none";

      // Instantly show Profile Container with smoother transition
      const profileContainer =
        document.getElementsByClassName("profile-container")[0];
      profileContainer.style.visibility = "visible";
      profileContainer.style.opacity = "1";
      profileContainer.style.transform = "scale(1)";
    }, 100); // Reduced delay from 300ms to 100ms
  }, 100); // Let glitch effect run for a short time
}, greetings.length * 200); // Adjusted to match greeting duration


