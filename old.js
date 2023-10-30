const old = (dari, id) => {
  let from = new Date(`${dari}`);
  let to = new Date();
  if (from.getYear() <= to.getYear()) {
    hasilTahun = to.getYear() - from.getYear();
    hasilTahun *= 12;
    hasilBulan = to.getMonth()+1;
    hasil = hasilTahun-9 + hasilBulan;
    document.getElementById(`${id}`).innerHTML = ` kurang lebih ${hasil} Bulan`;
  }
};

//cara panggil function: old(tanggal lahir, id output)
// contoh: old('19 september 2021', 'Waktu');
// Karya Moh. Solehuddin
// IG: @moh.solehuddin001