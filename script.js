// simulasi data api
const product = [
  {
    img: "property/solehuddin.png",
    title: "Basic Bundle",
    keterangan: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptatem, delectus quasi quae numquam magnam rerum reiciendis cumque. Voluptatum perferendis facere, autem! Incidunt doloremque ab, fugiat laudantium quasi aut optio.",
    price: "Rp. 1.000.000 - 5.000.000"
  },
  {
    img: "property/solehuddin.png",
    title: "Premium Bundle",
    keterangan: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptatem, delectus quasi quae numquam magnam rerum reiciendis cumque. Voluptatum perferendis facere, autem! Incidunt doloremque ab, fugiat laudantium quasi aut optio.",
    price: "Rp. 5.000.000 - 10.000.000"
  },
  {
    img: "property/solehuddin.png",
    title: "Special Bundle",
    keterangan: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptatem, delectus quasi quae numquam magnam rerum reiciendis cumque. Voluptatum perferendis facere, autem! Incidunt doloremque ab, fugiat laudantium quasi aut optio.",
    price: "Rp. 10.000.000 +"
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
const certificate = {
  items: [
    {
      title: "HTML - alwaysngoding.com",
      img: [
        "sertifikat/html/html.webp",
        ]
    },
    {
      title: "CSS - alwaysngoding.com",
      img: [
        "sertifikat/css/css.webp",
        ]
    },
    {
      title: "JavaScript - alwaysngoding.com",
      img: [
        "sertifikat/jsAlways/js.webp",
        ]
    },
    {
      title: "PHP - alwaysngoding.com",
      img: [
        "sertifikat/php/php.webp",
        ]
    },
    {
      title: "MySql - alwaysngoding.com",
      img: [
        "sertifikat/mysql/mysql.webp",
        ]
    },
    {
      title: "Fundamental Python",
      img: [
        "sertifikat/py/py.webp",
        ]
    },
    {
      title: "Logika Pemrogramman - dicoding.com",
      img: [
        "sertifikat/logikaPemrograman/1.webp",
        "sertifikat/logikaPemrograman/2.webp",
        ]
    },
    {
      title: "MySql - dicoding.com",
      img: [
        "sertifikat/memulaiDasarPemrograman/1.webp",
        "sertifikat/memulaiDasarPemrograman/2.webp",
        "sertifikat/memulaiDasarPemrograman/3.webp",
        "sertifikat/memulaiDasarPemrograman/4.webp",
        ]
    },
    {
      title: "Visualisasi Data - dicoding.com",
      img: [
        "sertifikat/visualisasiData/1.webp",
        "sertifikat/visualisasiData/2.webp",
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
      title: "AWS (Amazon Web Service)",
      img: [
        "sertifikat/aws/aws.webp",
        "sertifikat/aws/aws2.webp",
        ]
    },
    {
      title: "JavaScript (NodeJS - Back End Dev)",
      img: [
        "sertifikat/BE/BE.webp",
        "sertifikat/BE/BE2.webp",
        ]
    },
  ]
}
const programmingSkillSet = {
  items: [
    {
      title: "Vanilla",
      skill: [
        {
          title: "HTML",
          documentation: "https://",
          certificate: "sertifikat/html.pdf",
        },
        {
          title: "CSS",
          documentation: "https://",
          certificate: "sertifikat/css.pdf",
        },
        {
          title: "JavaScript",
          documentation: "https://",
          certificate: "sertifikat/js.pdf",
        },
        {
          title: "PHP",
          documentation: "https://",
          certificate: "sertifikat/php.pdf",
        },
        {
          title: "MySql",
          documentation: "https://",
          certificate: "sertifikat/MySql.pdf",
        },
        {
          title: "Python",
          documentation: "https://",
          certificate: "sertifikat/py.pdf",
        },
        {
          title: "NodeJS",
          documentation: "https://",
          certificate: "sertifikat/node.pdf",
        },
      ]
    },
    {
      title: "Frame Work & Library",
      skill: [
        {
          title: "ReactJs",
          documentation: "https://",
          certificate: null,
        },
        {
          title: "TailwindCss",
          documentation: "https://",
          certificate: null,
        },
        {
          title: "Jquery",
          documentation: "https://",
          certificate: null,
        },
        {
          title: "Boostrap",
          documentation: "https://",
          certificate: null,
        },
        {
          title: "ScrollReveal",
          documentation: "https://",
          certificate: null,
        },
        {
          title: "AOS",
          documentation: "https://",
          certificate: null,
        },
        {
          title: "typed.js",
          documentation: "https://",
          certificate: null,
        },
      ]
    },
    {
      title: "Tools",
      skill: [
        {
          title: "Webpack",
          documentation: "https://",
          certificate: null,
        },
        {
          title: "get Waves",
          documentation: "https://",
          certificate: null,
        },
        {
          title: "ofucate",
          documentation: "https://",
          certificate: null,
        },
        {
          title: "convertio",
          documentation: "https://",
          certificate: null,
        },
        {
          title: "svg repo",
          documentation: "https://",
          certificate: null,
        },
        {
          title: "blob",
          documentation: "https://",
          certificate: null,
        },
        ]
    },
    {
      title: "Knowlage Of Cyber Security Topic",
      skill: [
        {
         title: "sosial engginering",
          documentation: "#",
          certificate: null, 
        },
        {
         title: "Phising",
          documentation: "#",
          certificate: null, 
        },
        {
         title: "Smising",
          documentation: "#",
          certificate: null, 
        },
        {
         title: "XXS",
          documentation: "#",
          certificate: null, 
        },
        {
         title: "JavaScript Injection",
          documentation: "#",
          certificate: null, 
        },
        {
         title: "Sql Injection",
          documentation: "#",
          certificate: null, 
        },
        {
         title: "MITM",
          documentation: "#",
          certificate: null, 
        },
        {
         title: "Brutforce",
          documentation: "#",
          certificate: null, 
        },
        {
         title: "Trojan",
          documentation: "#",
          certificate: null, 
        },
        {
         title: "BackDoor",
          documentation: "#",
          certificate: null, 
        },
        {
         title: "Reverse engginering",
          documentation: "#",
          certificate: null, 
        },
        ]
    }
  ]
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
    document.getElementById("exp").innerHTML = `${hasil}`;
  }
}

// function untuk memperlihatkan sertifikat
function showSkillSet() {
  showLoading();
  let result = `<section class="container-skills">
    <h3>programming skills set</h3>
    <section class="skill-set">
  `;
  // Menggunakan forEach untuk mengulang melalui array 'sertifikat.items'
  programmingSkillSet.items.forEach(element => {
    result += `
    <div class="skill">
      <h3 class="skill-title">${element.title}</h3>
        <ul>
    `;
    // Menggunakan forEach untuk mengulang melalui array 'element.img'
    element.skill.forEach(element => {
      if (element.certificate === null) {
        result += `
          <li class="skillItem"><a href="${element.documentation}">${element.title}</a></li>`;
      } else {
        result += `
          <li class="skillItem"><a href="${element.certificate}" download="certificate-${element.title}.pdf">${element.title}</a></li>`;
      }
    });
    result += `</div>`;
  });
  result += ` </section></section>`;
  hideLoading();
  console.log(result);
  // Pastikan ada elemen dengan ID "OutputSertifikat" di HTML untuk menampilkan hasil
  document.getElementById("output").innerHTML = result;
  setDynamicBackgroundColor();
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
  showLoading();
  let result = `
  <section class="container-product">
    <div class="title-container-product">
      <h3>product</h3>
    </div>
    <div class="container-product-item">`;
  let output = document.getElementById("output");
  for (let i in product) {
    result+= `
    <div class="product-item">
        <h3 class="title">${product[i].title}</h3>
        <img src="${product[i].img}" alt="img product">
        <p>${product[i].keterangan}</p>
        <p class="price">${product[i].price}</p>
        <a href="https://wa.me/6283849079619" class="product-button" id="basic">order</a>
      </div>
    `
  }
  hideLoading();
  result += `</div>
  </section>`
  output.innerHTML = result;
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

// Fungsi untuk menangani warna latar belakang
function setDynamicBackgroundColor() {
  const containers = document.querySelectorAll('.container-img-sertificat');
  containers.forEach(container => {
    if (container.children.length === 1) {
      container.classList.add('single-item');
    }
  });
}