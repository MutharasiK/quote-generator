// List of quotes
const quotes = [
  "Believe in yourself!",
  "You can do it!",
  "Stay positive and strong.",
  "Every day is a second chance.",
  "Push yourself, because no one else will do it for you.",
  "Dream big and dare to fail.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Don’t stop until you’re proud.",
  "Doubt kills more dreams than failure ever will.",
  "You are capable of amazing things.",
  "Don’t limit your challenges; challenge your limits.",
  "If it doesn’t challenge you, it won’t change you.",
  "Stay humble, work hard, be kind.",
  "Focus on the step in front of you, not the whole staircase.",
  "Your only limit is your mind.",
  "Make yourself a priority."
];


// Function to show new quote with animation
function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = `✨ ${quotes[randomIndex]} ✨`;
  const quoteElement = document.getElementById("quote");

  // Trigger animation
  quoteElement.classList.remove("fade"); // remove if already there
  void quoteElement.offsetWidth; // trigger reflow
  quoteElement.classList.add("fade");

  // Update quote text
  quoteElement.innerText = quoteText;
}
