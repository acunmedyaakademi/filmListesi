let filmAdd = document.querySelector(".filmAdd");
let action = document.querySelector(".action");
let adventure = document.querySelector(".adventure");
let comedy = document.querySelector(".comedy");
let animation = document.querySelector(".animation");
let romantic = document.querySelector(".romantic");
let clearLocal = document.querySelector(".clearLocal");

let filmArray = [];

if (typeof localStorage.filmArray !== "undefined") {
  filmArray = JSON.parse(localStorage.filmArray);
  addData.disabled = true;
} else {
  addData.disabled = false;
}

handleRender();

addData.addEventListener("click", function () {
  filmArray = [
    {
      id: 1,
      adi: "Hızlı ve Öfkeli",
      konusu:
        "Bir grup sokak yarışçısı, büyük bir soygun için bir araya gelir.",
      kategori: "aksiyon",
      puani: 7.8,
      gorsel: "https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg",
    },
    {
      id: 2,
      adi: "Mad Max: Fury Road",
      konusu:
        "Çorak bir arazide hayatta kalmaya çalışan bir grup insanın mücadelesi.",
      kategori: "aksiyon",
      puani: 8.1,
      gorsel:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTcJ1ccuPNUs2shOwUbjlR6RGMqi0H4UnO9W_lj572bjyJ67QUWaLgz5o76bHM68um04N7mWtvfgjJkAb-4IESLfuXUNv_FLmMoW8EZFA",
    },
    {
      id: 3,
      adi: "Avengers: Endgame",
      konusu:
        "Süper kahramanlar, evreni tehdit eden bir düşmanı yenmek için bir araya gelir.",
      kategori: "aksiyon",
      puani: 9.2,
      gorsel: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
    },
    {
      id: 4,
      adi: "John Wick",
      konusu: "Eski bir suikastçı, intikam almak için geri döner.",
      kategori: "aksiyon",
      puani: 8.6,
      gorsel: "https://tr.web.img4.acsta.net/pictures/23/03/09/13/58/2006576.jpg",
    },
    {
      id: 5,
      adi: "Terminatör 2: Kıyamet Günü",
      konusu: "Bir cyborg, insanlığı korumak için geçmişe gönderilir.",
      kategori: "aksiyon",
      puani: 8.9,
      gorsel: "https://upload.wikimedia.org/wikipedia/tr/6/66/Terminator2_film_posteri.jpg",
    },
    {
      id: 6,
      adi: "Die Hard",
      konusu:
        "Bir polis memuru, teröristlerin ele geçirdiği bir binayı kurtarmaya çalışır.",
      kategori: "aksiyon",
      puani: 8.4,
      gorsel: "https://m.media-amazon.com/images/I/819cf1ZR2WL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 7,
      adi: "Gladyatör",
      konusu:
        "Roma İmparatorluğu'nda bir general, ihanetin intikamını almak için gladyatör olur.",
      kategori: "aksiyon",
      puani: 9.0,
      gorsel: "https://upload.wikimedia.org/wikipedia/tr/thumb/8/8d/Gladiator_ver1.jpg/220px-Gladiator_ver1.jpg",
    },
    {
      id: 8,
      adi: "Hızlı ve Öfkeli 7",
      konusu:
        "Dominic Toretto ve ekibi, düşmanlarına karşı mücadele ederken aile bağlarını korumaya çalışır.",
      kategori: "aksiyon",
      puani: 7.9,
      gorsel: "https://image.kanald.com.tr/i/kanald/100/0x0/5da5a790ae784910f8c79f46.jpg",
    },
    {
      id: 9,
      adi: "Kara Şövalye",
      konusu:
        "Batman, Joker'in Gotham şehrini kaosa sürüklemesini engellemeye çalışır.",
      kategori: "aksiyon",
      puani: 8.8,
      gorsel: "https://upload.wikimedia.org/wikipedia/tr/4/4d/Kara_%C5%9E%C3%B6valye_TR_film_afi%C5%9Fi.jpg",
    },
    {
      id: 10,
      adi: "Mission: Impossible - Fallout",
      konusu:
        "Ethan Hunt, dünyayı tehdit eden bir felaketi önlemek için zamana karşı yarışır.",
      kategori: "aksiyon",
      puani: 9.4,
      gorsel: "https://m.media-amazon.com/images/I/91EtQD0P0dL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 11,
      adi: "Aşk ve Gurur",
      konusu:
        "19. yüzyıl İngiltere'sinde aşk ve sosyal sınıf farklılıkları arasında geçen bir hikaye.",
      kategori: "romantik",
      puani: 9.3,
      gorsel: "https://upload.wikimedia.org/wikipedia/tr/0/03/A%C5%9Fk_ve_Gurur_%282005%29_-_film_afi%C5%9Fi.jpg",
    },
    {
      id: 12,
      adi: "Notting Hill",
      konusu:
        "Bir kitap satıcısı, dünya çapında ünlü bir aktris ile beklenmedik bir ilişkiye başlar.",
      kategori: "romantik",
      puani: 9.1,
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7acwGU9AN4sPhAeOyhq_7ny4iSysJIfV2dA&s",
    },
    {
      id: 13,
      adi: "Titanik",
      konusu:
        "Gerçek bir olaya dayanan, farklı sosyal sınıflardan gelen iki gencin dramatik aşk hikayesi.",
      kategori: "romantik",
      puani: 9.5,
      gorsel: "https://play-lh.googleusercontent.com/560-H8NVZRHk00g3RltRun4IGB-Ndl0I0iKy33D7EQ0cRRwH78-c46s90lZ1ho_F1so",
    },
    {
      id: 14,
      adi: "Aşk Tesadüfleri Sever",
      konusu: "İstanbul'da geçen, tesadüflerle şekillenen bir aşk hikayesi.",
      kategori: "romantik",
      puani: 8.8,
      gorsel: "https://upload.wikimedia.org/wikipedia/tr/9/91/A%C5%9Fk_Tesad%C3%BCfleri_Sever_Film_Afi%C5%9Fi.jpg",
    },
    {
      id: 15,
      adi: "La La Land",
      konusu:
        "Los Angeles'ta bir müzisyen ve bir oyuncunun yollarının kesiştiği modern bir aşk hikayesi.",
      kategori: "romantik",
      puani: 9.2,
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-m_xezOJD54hcEScm7cCJlBWNS8-GdmMt4g&s",
    },
    {
      id: 16,
      adi: "Aşk Listesi",
      konusu:
        "Bir kadın, gençliğinde yazdığı aşk listesini hayata geçirmeye çalışırken gerçek aşkı bulur.",
      kategori: "romantik",
      puani: 8.9,
      gorsel: "https://tiyatrolar.com.tr/files/activity/a/ask-listesi/image/ask-listesi.jpg",
    },
    {
      id: 17,
      adi: "Before Sunrise",
      konusu:
        "İki yabancının Viyana'da tanışıp bir gün geçirirken yaşadıkları derin bağlantı.",
      kategori: "romantik",
      puani: 8.7,
      gorsel: "https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    },
    {
      id: 18,
      adi: "The Notebook",
      konusu:
        "Bir aşk hikayesi ve Alzheimer hastalığının getirdiği zorluklarla başa çıkma mücadelesi.",
      kategori: "romantik",
      puani: 9.0,
      gorsel: "https://m.media-amazon.com/images/I/91iSa-QndoL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 19,
      adi: "500 Days of Summer",
      konusu:
        "Bir adam, idealize ettiği kadınla olan ilişkisinin gerçek yüzüyle yüzleşir.",
      kategori: "romantik",
      puani: 8.5,
      gorsel: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p193428_p_v8_bb.jpg",
    },
    {
      id: 20,
      adi: "Pride and Prejudice",
      konusu: "Jane Austen'in klasik romanından uyarlanan bir aşk hikayesi.",
      kategori: "romantik",
      puani: 9.4,
      gorsel: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/f/s/1/pride-prejudice-original-imagy32ephewfga2.jpeg?q=90&crop=false",
    },
    {
      id: 21,
      adi: "Çılgın Hırsız",
      konusu:
        "Bir süper kötü, hırsızlık yaparak dünyayı ele geçirmeye çalışırken, küçük bir kız onun kalbini çalar.",
      kategori: "komedi",
      puani: 8.7,
      gorsel: "https://upload.wikimedia.org/wikipedia/tr/7/77/%C3%87%C4%B1lg%C4%B1n_H%C4%B1rs%C4%B1z.jpg",
    },
    {
      id: 22,
      adi: "The Hangover",
      konusu:
        "Bir bekarlığa veda partisi sonrası, ertesi gününü hatırlamayan bir grup adamın komik macerası.",
      kategori: "komedi",
      puani: 8.9,
      gorsel: "https://m.media-amazon.com/images/I/91pvafw44bL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 23,
      adi: "Superbad",
      konusu:
        "İki ergen, son okul partisine gitmeden önce son kez eğlenmeye çalışır.",
      kategori: "komedi",
      puani: 8.5,
      gorsel: "https://m.media-amazon.com/images/I/61nHD0I77KL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 24,
      adi: "Ferris Bueller's Day Off",
      konusu:
        "Bir lise öğrencisi, okulu terk edip Chicago'da maceralara atılır.",
      kategori: "komedi",
      puani: 8.3,
      gorsel: "https://m.media-amazon.com/images/I/912w0OVXbbL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 25,
      adi: "Deadpool",
      konusu:
        "Bir anti-kahraman, geçmişindeki düşmanla intikam almak için dövüşürken komik olaylar yaşar.",
      kategori: "komedi",
      puani: 8.6,
      gorsel: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDD02B809D3240532CA4CA1D8428986EBA7ABFFA703FFD61CE49C743D34FFD12/scale?width=506&amp;aspectRatio=2.00&amp;format=webp",
    },
    {
      id: 26,
      adi: "Step Brothers",
      konusu:
        "İki yetişkin adam, ebeveynleri evlendikten sonra aynı evde yaşamak zorunda kalır.",
      kategori: "komedi",
      puani: 8.4,
      gorsel: "https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
      id: 27,
      adi: "The Grand Budapest Hotel",
      konusu:
        "Bir otel müdürü ve genç bir çırak, bir sanat eserinin çalınmasını araştırır.",
      kategori: "komedi",
      puani: 9.1,
      gorsel: "https://m.media-amazon.com/images/S/pv-target-images/f530ad6a1c7dddcc5046fe7b845038dec5efb8b82fb927cfdf446f21094c7e72.jpg",
    },
    {
      id: 28,
      adi: "Zoolander",
      konusu:
        "Bir moda modeli, beyin yıkama planını keşfeder ve komik olaylar yaşar.",
      kategori: "komedi",
      puani: 7.9,
      gorsel: "https://m.media-amazon.com/images/M/MV5BNzFmYjdlNDYtMTUxZi00NjdmLTkzN2MtNGZkYmE5YzRjYWQ3XkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_.jpg",
    },
    {
      id: 29,
      adi: "Anchorman: The Legend of Ron Burgundy",
      konusu:
        "Bir haber spikeri, yeni gelen bir kadın meslektaşıyla rekabet ederken komik olaylar yaşar.",
      kategori: "komedi",
      puani: 8.2,
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3z7jxBuXBg7EQu5t8gkfn147ArDYyLi5OZA&s",
    },
    {
      id: 30,
      adi: "Dumb and Dumber",
      konusu:
        "İki saf arkadaş, kayıp bir çantayı sahibine geri götürmek için komik bir yolculuğa çıkar.",
      kategori: "komedi",
      puani: 8.1,
      gorsel: "https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
      id: 31,
      adi: "Toy Story",
      konusu: "Oyuncakların gizli hayatını anlatan animasyon filmi.",
      kategori: "animasyon",
      puani: 8.3,
      gorsel: "https://play-lh.googleusercontent.com/3okXk_l5sg9RYC2SOBzPt-Q5hWFDbd3RAyezQ-xha_ZpvibUlopqgwyjzTHWy9b4MXD926VUuRlTfgOlPGBv",
    },
    {
      id: 32,
      adi: "Finding Nemo",
      konusu: "Bir baba balık, kaybolan oğlunu bulmak için okyanusu geçer.",
      kategori: "animasyon",
      puani: 8.6,
      gorsel: "https://play-lh.googleusercontent.com/Hbjq38g7CisnRnYSZBbnEefbADR4bLGF6q2JL6AIm4CVab0DOLD9P7MzAxswZsUWbPQc",
    },
    {
      id: 33,
      adi: "Shrek",
      konusu:
        "Bir dev, krallığını kurtarmak için bir prensesi kurtarmak zorunda kalır.",
      kategori: "animasyon",
      puani: 8.5,
      gorsel: "https://play-lh.googleusercontent.com/OYz7f_yXWhyhpLO_6d-65nqCKDD47MLdCXJFhJZven7V-Kg83AF4yi01o76uaod-M28C",
    },
    {
      id: 34,
      adi: "The Lion King",
      konusu:
        "Bir aslan yavrusu, babasının ölümünden sonra krallığını geri almak için büyür.",
      kategori: "animasyon",
      puani: 8.8,
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8aYfMr4p0covDTF8cyJof1HBllI_vOKj_RA&s",
    },
    {
      id: 35,
      adi: "Up",
      konusu:
        "Yaşlı bir adam, evini balonlarla uçurarak büyük bir maceraya atılır.",
      kategori: "animasyon",
      puani: 8.7,
      gorsel: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
    },
    {
      id: 36,
      adi: "Frozen",
      konusu:
        "Bir kız kardeş, buz güçlerine sahip kız kardeşini kurtarmak için yola çıkar.",
      kategori: "animasyon",
      puani: 8.4,
      gorsel: "https://cdn.kobo.com/book-images/1d587be8-f07a-4c07-ab17-b54bab5418b1/1200/1200/False/frozen-junior-novel.jpg",
    },
    {
      id: 37,
      adi: "Despicable Me",
      konusu:
        "Bir süper kötü, üç yetim kızı evlat edinir ve dünyayı ele geçirme planları değişir.",
      kategori: "animasyon",
      puani: 8.5,
      gorsel: "https://m.media-amazon.com/images/I/61f1bYNLpKL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 38,
      adi: "Moana",
      konusu:
        "Genç bir kız, halkını kurtarmak için okyanusta büyük bir yolculuğa çıkar.",
      kategori: "animasyon",
      puani: 8.6,
      gorsel: "https://m.media-amazon.com/images/I/71RgCh-pLWL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 39,
      adi: "Zootopia",
      konusu:
        "Bir tavşan polis ve bir tilki, büyük bir komployu ortaya çıkarmak için birlikte çalışır.",
      kategori: "animasyon",
      puani: 8.4,
      gorsel: "https://m.media-amazon.com/images/S/pv-target-images/0ecb745d03d6656e19c12acc7fe9f7a7ba6336a0f2d2c202aff94a8335f00aae.jpg",
    },
    {
      id: 40,
      adi: "Coco",
      konusu:
        "Bir çocuk, ölüler diyarında büyük büyükbabasının sırrını keşfeder.",
      kategori: "animasyon",
      puani: 9.2,
      gorsel: "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
    },
    {
      id: 41,
      adi: "The Shawshank Redemption",
      konusu:
        "Haksız yere müebbet hapse mahkum edilen bir adamın özgürlük mücadelesi.",
      kategori: "dram",
      puani: 9.3,
      gorsel: "https://m.media-amazon.com/images/S/pv-target-images/d26b48f88d5398cad86d2fd26d32b258d43e51d4e2f949c3848be69a1e147446.jpg",
    },
    {
      id: 42,
      adi: "Forrest Gump",
      konusu: "Düşük IQ'ya sahip bir adamın olağanüstü yaşam hikayesi.",
      kategori: "dram",
      puani: 9.0,
      gorsel: "https://m.media-amazon.com/images/S/pv-target-images/2d0c9e38968936e6711c7fb2bc7895b82d8bb9178b5a854e14dffa4b17b88487.jpg",
    },
    {
      id: 43,
      adi: "Schindler's List",
      konusu:
        "Bir işadamının, II. Dünya Savaşı sırasında binlerce Yahudi'nin hayatını kurtarma hikayesi.",
      kategori: "dram",
      puani: 9.4,
      gorsel: "https://m.media-amazon.com/images/I/81+H4lZVw+L._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 44,
      adi: "The Godfather",
      konusu: "Bir İtalyan mafya ailesinin başına geçen bir adamın hikayesi.",
      kategori: "dram",
      puani: 9.2,
      gorsel: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      id: 45,
      adi: "One Flew Over the Cuckoo's Nest",
      konusu:
        "Bir adam, akıl hastanesine yattıktan sonra hastaların özgürlüğü için savaşır.",
      kategori: "dram",
      puani: 8.9,
      gorsel: "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 46,
      adi: "12 Years a Slave",
      konusu:
        "Özgür bir adam, kaçırılıp köle olarak satıldıktan sonra hayatta kalma mücadelesi verir.",
      kategori: "dram",
      puani: 8.8,
      gorsel: "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 47,
      adi: "Gladiator",
      konusu:
        "Roma İmparatorluğu'nda bir general, ihanetin intikamını almak için gladyatör olur.",
      kategori: "dram",
      puani: 9.0,
      gorsel: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    },
    {
      id: 48,
      adi: "The Green Mile",
      konusu: "Bir gardiyan, doğaüstü güçlere sahip bir mahkumla tanışır.",
      kategori: "dram",
      puani: 8.9,
      gorsel: "https://m.media-amazon.com/images/I/71Q6YhYVSKL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 49,
      adi: "The Pursuit of Happyness",
      konusu:
        "Bir baba, oğlu ile birlikte zorluklara karşı mücadele ederek başarıya ulaşmaya çalışır.",
      kategori: "dram",
      puani: 8.5,
      gorsel: "https://miro.medium.com/v2/resize:fit:526/1*xPDU77PNoUy3YcQ7ISsg_A.jpeg",
    },
    {
      id: 50,
      adi: "A Beautiful Mind",
      konusu:
        "Bir matematik dehasının, şizofreni ile mücadelesi ve başarı hikayesi.",
      kategori: "dram",
      puani: 8.8,
      gorsel: "https://tr.web.img3.acsta.net/pictures/bzp/03/28384.jpg",
    },
  ];

  save();
  handleRender();
  addData.disabled = true;
});

function handleRender() {
  action.innerHTML = "";
  adventure.innerHTML = "";
  comedy.innerHTML = "";
  romantic.innerHTML = "";
  animation.innerHTML = "";

  filmArray.sort(function (a, b) {
    return a.puani - b.puani;
  });

  filmArray.reverse();

  for (let i = 0; i < filmArray.length; i++) {
    if (filmArray[i].kategori === "aksiyon") {
      action.innerHTML += `<div class="filmBox">
     <div class = "tittle">
      <h2>${filmArray[i].adi}</h2>
      <p>${filmArray[i].puani}</p>
      </div>
      <div class = "text">
      <p>${filmArray[i].konusu}</p>
      <img src="${filmArray[i].gorsel}" alt="" />
      </div>
      </div>
  `;
    } else if (filmArray[i].kategori === "dram") {
      adventure.innerHTML += `<div class="filmBox">
     <div class = "tittle">
      <h2>${filmArray[i].adi}</h2>
      <p>${filmArray[i].puani}</p>
      </div>
      <div class = "text">
      <p>${filmArray[i].konusu}</p>
      <img src="${filmArray[i].gorsel}" alt="" />
      </div>
      </div>
  `;
    } else if (filmArray[i].kategori === "komedi") {
      comedy.innerHTML += `<div class="filmBox">
     <div class = "tittle">
      <h2>${filmArray[i].adi}</h2>
      <p>${filmArray[i].puani}</p>
      </div>
      <div class = "text">
      <p>${filmArray[i].konusu}</p>
      <img src="${filmArray[i].gorsel}" alt="" />
      </div>
      </div>
  `;
    } else if (filmArray[i].kategori === "romantik") {
      romantic.innerHTML += `<div class="filmBox">
     <div class = "tittle">
      <h2>${filmArray[i].adi}</h2>
      <p>${filmArray[i].puani}</p>
      </div>
      <div class = "text">
      <p>${filmArray[i].konusu}</p>
      <img src="${filmArray[i].gorsel}" alt="" />
      </div>
      </div>
  `;
    } else if (filmArray[i].kategori === "animasyon") {
      animation.innerHTML += `<div class="filmBox">
     <div class = "tittle">
      <h2>${filmArray[i].adi}</h2>
      <p>${filmArray[i].puani}</p>
      </div>
      <div class = "text">
      <p>${filmArray[i].konusu}</p>
      <img src="${filmArray[i].gorsel}" alt="" />
      </div>
      </div>
  `;
    } else {
      null;
    }
  }
}

function handleAddFilm(e) {
  e.preventDefault();
  let formData = new FormData(filmAdd);
  let formObj = Object.fromEntries(formData);

  filmArray.push({
    id: filmArray.length + 1,
    adi: formObj.name,
    konusu: formObj.summary,
    kategori: formObj.category,
    puani: Number(formObj.rating),
    gorsel: formObj.file,
  });

  save();
  handleRender();
  filmAdd.reset();
}

filmAdd.addEventListener("submit", handleAddFilm);

function save() {
  localStorage.filmArray = JSON.stringify(filmArray);
}

function handleClear() {
  localStorage.clear();
  action.innerHTML = "";
  comedy.innerHTML = "";
  romantic.innerHTML = "";
  adventure.innerHTML = "";
  animation.innerHTML = "";
  filmArray = [];
  handleRender();
  filmAdd.reset();
  addData.disabled = false;
}

clearLocal.addEventListener("click", handleClear);
