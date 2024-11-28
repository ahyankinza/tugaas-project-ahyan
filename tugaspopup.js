        function showDialog() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                document.getElementById('popup').style.display = 'flex';
                return false; // Mencegah form dari submit
            }
            return true; // Jika tidak ada username/password, lanjutkan submit
        }

        function confirmLogin() {
            // Logika untuk login bisa ditambahkan di sini
            alert('Login berhasil!');
            document.getElementById('loginForm').submit(); // Melanjutkan submit form
        }

        function closeDialog() {
            document.getElementById('popup').style.display = 'none';
        }