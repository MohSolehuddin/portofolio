// simulasi data api
const product = [
  {
    img: "",
    title: "Paket Silver",
    keterangan: "silver"
  },
  {
    img: "",
    title: "Paket Gold",
    keterangan: "Gold"
  },
  {
    img: "",
    title: "Paket Premium",
    keterangan: "Premium"
  },
  {
    img: "",
    title: "Paket Diamond",
    keterangan: "Diamond"
  },
  ]
const portofolio = [
  {
    title: "Number Convertion",
    img: "property/solehuddin.png",
    link: "https://konversi-angka.vercel.app"
  },
   {
    title: "Number Convertion",
    img: "property/solehuddin.png",
    link: "https://konversi-angka.vercel.app"
  },
   {
    title: "Number Convertion",
    img: "property/solehuddin.png",
    link: "https://konversi-angka.vercel.app"
  },
   {
    title: "Number Convertion",
    img: "/property/solehuddin.png",
    link: "https://konversi-angka.vercel.app"
  },
];
const sertifikats = {
  items: [
    {
      title: "JavaScript",
      img: [
        "sertifikat/js/js.webp",
        "sertifikat/js/js2.webp",
        "sertifikat/js/js3.webp",
        ]
    },
    {
      title: "JavaScript",
      img: [
        "sertifikat/js/js.webp",
        "sertifikat/js/js2.webp",
        "sertifikat/js/js3.webp",
        ]
    },
    {
      title: "JavaScript",
      img: [
        "sertifikat/js/js.webp",
        "sertifikat/js/js2.webp",
        "sertifikat/js/js3.webp",
        ]
    },
    {
      title: "JavaScript",
      img: [
        "sertifikat/js/js.webp",
        "sertifikat/js/js2.webp",
        "sertifikat/js/js3.webp",
        ]
    },
    {
      title: "JavaScript",
      img: [
        "sertifikat/js/js.webp",
        "sertifikat/js/js2.webp",
        "sertifikat/js/js3.webp",
        ]
    },
    {
      title: "JavaScript",
      img: [
        "sertifikat/js/js.webp",
        "sertifikat/js/js2.webp",
        "sertifikat/js/js3.webp",
        ]
    },
    {
      title: "JavaScript",
      img: [
        "sertifikat/js/js.webp",
        "sertifikat/js/js2.webp",
        "sertifikat/js/js3.webp",
        ]
    },
    {
      title: "JavaScript",
      img: [
        "sertifikat/js/js.webp",
        "sertifikat/js/js2.webp",
        "sertifikat/js/js3.webp",
        ]
    },
    {
      title: "JavaScript",
      img: [
        "sertifikat/js/js.webp",
        "sertifikat/js/js2.webp",
        "sertifikat/js/js3.webp",
        ]
    },
    {
      title: "JavaScript",
      img: [
        "sertifikat/js/js.webp",
        "sertifikat/js/js2.webp",
        "sertifikat/js/js3.webp",
        ]
    },]
}
// loading function
// Untuk menampilkan loading
function showLoading() {
  const loading = document.getElementById('loading');
  loading.removeAttribute('hidden');
}
// Untuk menyembunyikan loading
function hideLoading() {
  const loading = document.getElementById('loading');
  loading.setAttribute("hidden", "true");
}
// function experient
function exp(){
  let from = new Date("19 September 2021");
  let to = new Date();
  if (from.getYear()<=to.getYear()){
    hasilTahun= to.getYear() - from.getYear();
    hasilTahun *=12;
    hasilBulan = to.getMonth()+1;
    hasil = Math.floor((hasilTahun-9 + hasilBulan)/12);
    document.getElementById("exp").innerHTML = `${hasil}+ year`;
  }
}
// function untuk memperlihatkan sertifikat
function showSertificat() {
  let result = `<section class="container-sertificats">
    <h3 class="sertifikat text-center">sertifikat</h3>`;
  
  // Menggunakan forEach untuk mengulang melalui array 'sertifikat.items'
  sertifikats.items.forEach(element => {
    result += `
      <div class="container-sertificat-items mb-5">
        <h3 class="title-sertificat">
          ${element.title}
        </h3>
        <div class="container-img-sertificat">
    `;
    
    // Menggunakan forEach untuk mengulang melalui array 'element.img'
    element.img.forEach(imgElement => {
      result += `
        <div class="img-sertificat" style="background-image: url('${imgElement}');"></div>
      `;
    });
    result += `
        </div>
      </div>
    `;
  });
  result += `</section>`;
  
  // Pastikan ada elemen dengan ID "OutputSertifikat" di HTML untuk menampilkan hasil
  document.getElementById("output").innerHTML = result;
}

function printPortofolio() {
  showLoading();
  let result= `<section class="container-my-card text-center"><h3 class="title-group-card">portofolio</h3>`;
  let output = document.getElementById("output");
  for (let i in portofolio) {
    result+= `
    <div class="my-card border">
      <img class="img-card" id="img-card" src="${portofolio[i].img}" alt="img card" />
      <div class="title-card">
        <h3>${portofolio[i].title}</h3>
        <a class="show-portofolio" id="show-portofolio" href="${portofolio[i].link}" target="_blank">show</a>
      </div>
    </div>
    `
  }
  hideLoading();
  output.innerHTML = `${result}</section>`;
}
function printProduct() {
  let result = `<section id="my-product" class="container d-flex justify-content-around">
    <h1 class="text-primary text-center" style="font-family: 'Kdam Thmor Pro', sans-serif;">PRODUK</h1>`;
  let output = document.getElementById("output");
  for (let i in product) {
    result+= `
    <div class="m-auto row mb-5 mt-5 justify-content-evenly text-center product${i}" id="productId">
      <div class="col-sm-6">
        <div class=" my-card mt-5 mb-5">
          <img src="${product[i].img}property/solehuddin.png" class="card-img-top" alt="Portofolio">
          <div class="card-body">
            <h5 class="card-title">${product[i].title}</h5>
            <p class="card-text">
              ${product[i].keterangan}
            </p>
            <a href="#" onclick="OrderNow()" class="btn btn-primary">Order Now</a>
          </div>
        </div>
      </div>
      <hr/>
    
    `
  }
  output.innerHTML = `${result}</section>`;
}
function animationScrollReveal(delayValue, array) {
  const scrollAnimation = ScrollReveal(
    {origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: delayValue,
  });
  for (let i in array) {
    delayValue += 100;
    scrollAnimation.reveal(`${array[i]}`, {delay: delayValue});
  }
}
