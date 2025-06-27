function changeMainImage(element) {
    document.getElementById("mainImage").src = element.src;
}

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const headerLogin = document.getElementById("header-right-login");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
        // Ubah isi header jadi tombol profil
        headerLogin.innerHTML = `
            <li class="dropdown-wrapper">
                <div class="profile-photo" id="profileBtn">
                    <img src="assets/icon/person-fill.svg" alt="Photo">
                </div>
                <div class="dropdown" id="dropdownMenu">
                    <div class="drop-user">
                        <div class="name">Lele Terbang</div>
                        <div class="email">lele@gmail.com</div>
                    </div>
                    <div class="btn-profile">
                        <div class="drop-inner">
                            <a href="profile.html">Profil</a>
                        </div>
                    </div>
                    <div class="btn-logout" onclick="logout()">
                        <div class="drop-inner">
                            <button onclick="localStorage.setItem('isLoggedIn', 'false'); location.reload();">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        `;
    }

    // Tunggu render selesai
    setTimeout(() => {
        const profileBtn = document.getElementById("profileBtn");
        const dropdownMenu = document.getElementById("dropdownMenu");

        profileBtn.addEventListener("click", () => {
            dropdownMenu.classList.toggle("show");
        });

        // Klik luar untuk tutup
        window.addEventListener("click", (e) => {
            if (!profileBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    }, 10);

});

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".form-pesanan input");
  const lanjutBtn = document.getElementById("lanjutBtn");

  function cekForm() {
    let semuaTerisi = true;
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        semuaTerisi = false;
      }
    });

    if (semuaTerisi) {
      lanjutBtn.disabled = false;
      lanjutBtn.classList.add("active");
    } else {
      lanjutBtn.disabled = true;
      lanjutBtn.classList.remove("active");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("input", cekForm);
  });

  // Saat tombol diklik
  lanjutBtn.addEventListener("click", function () {
    // Sembunyikan step 1
    document.getElementById("pesananInfo").classList.add("hidden");
    // Tampilkan step 2
    document.getElementById("pembayaranContent").classList.remove("hidden");

    // Update header status
    document.getElementById("step1").classList.remove("step-active");
    document.getElementById("step1").classList.add("step-inactive");

    document.getElementById("step2").classList.remove("step-inactive");
    document.getElementById("step2").classList.add("step-active");

    // Update tombol pembayaran
    document.getElementById("lanjutBtn").classList.add("hidden");
    document.getElementById("bayarBtn").classList.remove("hidden");

    // Update header check
    document.getElementById("step-check").classList.remove("hidden");
    document.getElementById("check-mark").classList.add("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const paymentOptions = document.querySelectorAll(".payment-option");
  const lanjutBtn = document.getElementById("bayarBtn");

  let selectedPayment = null;

  paymentOptions.forEach(option => {
    option.addEventListener("click", () => {
      // reset pilihan sebelumnya
      paymentOptions.forEach(opt => opt.classList.remove("selected"));
      option.classList.add("selected");
      selectedPayment = option.alt;

      // aktifkan tombol
      lanjutBtn.disabled = false;
      lanjutBtn.classList.add("active");
    });
  });

  // Lanjut klik logic tetap bisa pakai sebelumnya
  bayarBtn.addEventListener("click", function () {
    if (!selectedPayment) return; // ekstra pengaman
    alert("Metode pembayaran yang dipilih: " + selectedPayment);
    // ...lanjut ke proses atau konfirmasi
  });
});
