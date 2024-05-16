alert('Hoşgeldiniz');
let hamle = prompt('lütfen bir eleman seçin. \n a-Taş \n b-Kağıt \n c-Makas');

let hareketler = ['Taş', 'Kağıt', 'Makas'];
let rastgeleSayi = Math.round(Math.random() * 2);
let bilgisayarHamlesi = hareketler[rastgeleSayi]; 
alert('Bilgisayarın hamlesi: ' + bilgisayarHamlesi);
// console.log(bilgisayarHamlesi);

if (hamle === 'a') {
  if (bilgisayarHamlesi === 'Taş') {
    alert('Berabere kaldınız');
  }

  else if (bilgisayarHamlesi === 'Kağıt') {
   alert('Kaybettiniz');
  }
  
  else if (bilgisayarHamlesi === 'Makas') {
    alert('Kazandınız');
  }

  else {
    alert('Lütfen geçerli bir hamle seçiniz ');
  }
}

else if (hamle === 'b') {
  if (bilgisayarHamlesi === 'Taş') {
    alert('Kazandınız');
  }

  else if (bilgisayarHamlesi === 'Kağıt') {
   alert('Berabere kaldınız');
  }
  
  else if (bilgisayarHamlesi === 'Makas') {
    alert('Kaybettiniz');
  }

  else {
    alert('Lütfen geçerli bir hamle seçiniz ');
  }
}

else if (hamle === 'c') {
  if (bilgisayarHamlesi === 'Taş') {
    alert('Kaybettiniz');
  }

  else if (bilgisayarHamlesi === 'Kağıt') {
   alert('Kazandınız');
  }
  
  else if (bilgisayarHamlesi === 'Makas') {
    alert('Berabere kaldınız');
  }

  else {
    alert('Lütfen geçerli bir hamle seçiniz ');
  }
}

else {
  alert('Lütfen geçerli bir hamle seçiniz ');
}
