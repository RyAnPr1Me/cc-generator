document.addEventListener('DOMContentLoaded', function () {
  const generateBtn = document.getElementById('generateBtn');
  generateBtn.addEventListener('click', function () {
    fetch('/api/generate-card?type=VISA')
      .then(response => response.json())
      .then(data => {
        document.getElementById('cardOutput').innerHTML = `
          Card: ${data.cardNumber} <br>
          Expiry: ${data.expiry} <br>
          CVV: ${data.cvv}
        `;
      });
  });
});
