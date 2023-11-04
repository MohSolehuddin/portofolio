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

function TampilkanSertifikat() {
  let nilai = document.getElementById("OptionKompetensi").value;
  function print(Value, url) {
    if (nilai == Value) {
      document.getElementById("OutputSertifikat").innerHTML = `
      <style>
        img.sertifikat{
          margin-bottom: 50px;
          border: 2px solid #00ffff;
          box-shadow: 3px 3px 3px #100fff;
        }
        @media (min-width: 1000px){
          img.sertifikat{
            width: 40%;
          }
        }
      </style>
      <img class="SizeImg  goncangan sertifikat" data-aos="fade-up" src="${url}" alt="${nilai}" width="80%">`;
    }
  }
  function prints(value, url, url2, url3) {
    if (nilai==value){
      document.getElementById("OutputSertifikat").innerHTML = `<style>
          img.sertifikat{
            margin: auto;
            margin-bottom: 50px;
            border: 2px solid #00ffff;
            box-shadow: 3px 3px 3px #100fff;
          }
          @media (min-width: 1000px){
            img.sertifikat{
              width: 40%;
              margin: auto;
            }
          }
        </style>
        <div style="display:flex;flex-wrap:wrap;">
          <img src="${url}" alt="${nilai}" width="80%" class="mb-5 fadeMuncul sertifikat">
          <img src="${url2}" alt="${nilai}" width="80%" class="mb-5 fadeMuncul sertifikat">
          <img src="${url3}" alt="${nilai}" width="80%" class="mb-5 fadeMuncul sertifikat">
        </div>`;
    }
  }
  if (nilai=="BE"){
    document.getElementById("OutputSertifikat").innerHTML = `<style>
        img.sertifikat{
          margin: auto;
          margin-bottom: 50px;
          border: 2px solid #00ffff;
          box-shadow: 3px 3px 3px #100fff;
        }
        @media (min-width: 1000px){
          img.sertifikat{
              width: 40%;
              margin: auto;
            }
          }
        </style>
        <div style="display:flex;flex-wrap:wrap;">
          <img src="sertifikat/backEnd/BE.webp" alt="${nilai}" width="80%" class="mb-5 fadeMuncul sertifikat">
          <img src="sertifikat/backEnd/BE2.webp" alt="${nilai}" width="80%" class="mb-5 fadeMuncul sertifikat">
        </div>`;
    }
  print("HTML","sertifikat/html/html.webp");
  print("CSS","sertifikat/css/css.webp");
  print("Python","sertifikat/py/py.webp");
  prints("JavaScript","sertifikat/js/js.webp", "sertifikat/js/js2.webp", "sertifikat/js/js3.webp")
  prints("aws","sertifikat/aws/aws.webp", "sertifikat/aws/aws2.webp", "sertifikat/aws/aws3.webp")
}
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

function printSkill() {
  let output = document.getElementById("output");
  output.innerHTML =
  `
  <!-- Skill -->
    <section id="Skill" style="height: 60px;"></section>
    <section class="skill text-center mb-5" data-aos="fade-right">
      <div class="card">
        <div class="body-card">
          <h3 class="text-primary" style="font-family: 'Kdam Thmor Pro', sans-serif;">Sertifikat Skill</h3>
          <select name="OptionKompetensi" id="OptionKompetensi" onclick="TampilkanSertifikat()">
            <option value="HTML" onclick="TampilkanSertifikat()">HTML</option>
            <option value="CSS" onclick="TampilkanSertifikat()">CSS</option>
            <option value="JavaScript" onclick="TampilkanSertifikat()">JavaScript</option>
            <option value="Python" onclick="TampilkanSertifikat()">Python</option>
            <option value="BE" onclick="TampilkanSertifikat()">Back End(nodejs)</option>
            <option value="aws" onclick="TampilkanSertifikat()">Dasar aws</option>
          </select>
          <button class="btn-primary" type="submit" onclick="TampilkanSertifikat()">Lihat</button>
        <div id="OutputSertifikat" class="mt-4 goncangan"></div>
        <script type="text/javascript" charset="utf-8">
          TampilkanSertifikat();
        </script>
      </div>
    </div>
  </section>
  `;
}
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
function printProduct() {
  let result = `<section id="my-product" class="container">
    <h1 class="text-primary text-center" style="font-family: 'Kdam Thmor Pro', sans-serif;">PRODUK</h1>`;
  let output = document.getElementById("output");
  for (let i in product) {
    result+= `
    <div class="row mb-5 mt-5 justify-content-evenly text-center product${i}" id="productId">
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