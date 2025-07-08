// Smooth scroll to a section by ID
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Array of romantic thoughts/memories
  const thoughts = [
    "I'll never forget the way you smiled at me when I gave you those 4 birthday cakes and the cupcake on your birthday.",
    "Our trip to the zoo where we stayed up all day talking nonsense — those were the best conversations.",
    "I gave you a ring on your birthday — you were so happy but also got angry, I still remember that face.",
    "The way you bring me choco lava cake exactly how I like it without me having to ask — small things that mean everything."
  ];
  
  // Show a random thought
  function showRandomThought() {
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    document.getElementById('randomThought').textContent = thoughts[randomIndex];
  }
  
  // Reveal the hidden surprise envelope content
  function revealSurprise() {
    const surprise = document.getElementById('surpriseContent');
    surprise.classList.toggle('revealed');
  
    // Small animation for the envelope
    const envelope = document.querySelector('.envelope');
    if (surprise.classList.contains('revealed')) {
      envelope.style.transform = "translateY(-10px) rotate(-2deg)";
      envelope.style.backgroundImage = "linear-gradient(135deg, #f9d1d1 0%, #f4a7bb 70%)";
    } else {
      envelope.style.transform = "translateY(0) rotate(0)";
      envelope.style.backgroundImage = "linear-gradient(135deg, #f9c6d1 0%, #f4a7bb 100%)";
    }
  }
  
  // Reveal or hide the secret message
  function revealSecretMessage() {
    const message = document.getElementById('secretMessage');
    message.classList.toggle('hidden');
  
    if (message.classList.contains('hidden')) {
      message.innerHTML = '';
    } else {
      message.innerHTML = `
        <p class="mb-3">My Tomato,</p>
        <p class="mb-3">Every moment with you feels like a beautiful dream come true...</p>
        <p class="mb-3">[4 sal dogle pn ke nikal liye or kitne ginega]</p>
        <p>Forever yours Chomu,</p>
        <p class="romantic-font text-lg">[Gullu]</p>
      `;
    }
  }
  
  // Show or hide hidden content inside timeline items
  function showHiddenContent(itemId) {
    const item = document.getElementById(itemId);
    const hiddenContent = item.querySelector('.hidden-content');
    const button = item.querySelector('button');
  
    if (hiddenContent.classList.contains('hidden')) {
      hiddenContent.classList.remove('hidden');
      button.innerHTML = "Show less <span>↑</span>";
    } else {
      hiddenContent.classList.add('hidden');
      button.innerHTML = "Read more <span>→</span>";
    }
  }
  