document.getElementById("register-button").addEventListener("click", function (e) {
    e.preventDefault();

    var nama = document.getElementById("register-nama").value;
    var panggilan = document.getElementById("register-panggilan").value;
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;

    if (nama && panggilan && email && password) {
    } else {
      alert("Harap isi semua kolom dengan benar.");
    }
  });
