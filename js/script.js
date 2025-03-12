// ini file javascript
// ======= 1. Menampilkan "Hi, [Nama]" di Home Page =======
document.addEventListener("DOMContentLoaded", function() {
    let userName = prompt("Masukkan nama Anda:");
    if (userName) {
        document.getElementById("user-name").innerText = "Hi, " + userName + "!";
    }
});

// ======= 2. Validasi Formulir Kontak =======
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah form dikirim otomatis

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Semua kolom harus diisi!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Format email tidak valid!");
            return;
        }

        // Menampilkan data input setelah submit
        displaySubmittedData(name, email, message);
    });
});

// ======= 3. Fungsi Validasi Email =======
function validateEmail(email) {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// ======= 4. Menampilkan Data yang Sudah Diinput =======
function displaySubmittedData(name, email, message) {
    let resultDiv = document.getElementById("form-result");
    resultDiv.innerHTML = `
        <h3>Data yang Dikirim:</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
    resultDiv.style.display = "block"; // Tampilkan hasil input
}