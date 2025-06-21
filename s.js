
  (function () {
    const input = document.getElementById('text-input');
    const btn = document.getElementById('generate-btn');
    const qrCodeContainer = document.querySelector('.qr-code');

    function validateInput(text) {
      return text.trim() !== '';
    }

    function clearQRCode() {
      qrCodeContainer.innerHTML = '';
    }

    // Enable button only if input is valid (not empty)
    input.addEventListener('input', () => {
      if (validateInput(input.value)) {
        btn.disabled = false;
      } else {
        btn.disabled = true;
        clearQRCode();
      }
    });

    btn.addEventListener('click', () => {
      const text = input.value.trim();
      if (!validateInput(text)) return;

      clearQRCode();
      QRCode.toCanvas(text, {
        width: 256,
        margin: 2,
        color: {
          dark: '#4f46e5',   // Indigo
          light: '#f9fafb'   // Light background
        }
      }, (error, canvas) => {
        if (error) {
          qrCodeContainer.textContent = 'Error generating QR code.';
          console.error(error);
          return;
        }
        qrCodeContainer.appendChild(canvas);
      });
    });
  })();