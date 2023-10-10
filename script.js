document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('qr-input');
    const generateButton = document.getElementById('generate-button');
    const qrcodeContainer = document.getElementById('qrcode');

    generateButton.addEventListener('click', function () {
        const text = input.value;
        if (text.trim() !== '') {
            qrcodeContainer.innerHTML = '';
            const qrcode = new QRCode(qrcodeContainer, text);
        }
    });
});
