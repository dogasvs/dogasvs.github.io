alert('Bir gün, Alice adında genç bir kız, ormanda dolaşırken birden karşısına bir yol ayrımı çıktı. Önünde iki farklı yol vardı: biri sağa doğru ilerliyordu ve güneş ışığıyla aydınlanmış gibiydi, diğeri ise sol tarafa doğru karanlık bir ormana giriyordu. Alice, hangi yolu seçeceğine karar vermek için düşündü.');

let yol = prompt(' a- Güneş ile aydınlatılmış yol mu? \n b- Karanlık yol mu?').toLowerCase();

if (yol === 'a') {
  alert('Alice, güneşin ışığına doğru ilerledi ve neşeli bir şekilde yola koyuldu. Sağ yol boyunca rengarenk çiçekler ve melodik kuş sesleri eşliğinde ilerledi. Bir süre sonra, şirin bir kulübe gördü.');
  let kulübe = prompt(' a- Kulübeye girsin \n b- kulübeye girmesin').toLowerCase();

  if (kulübe === 'a') {
    alert('Alice, şirin kulübenin dışını incelediğinde, pespembe boyalı duvarların etrafını saran menekşelerin güzelliği karşısında büyülendi. Bu manzara, kulübenin yaşlı bir teyzeye ait olabileceğini düşündürdü. Yavaş adımlarla kulübeye doğru ilerlerken, burnuna mis gibi kurabiye kokusu geldi. Heyecanla kulübenin kapısına yaklaştı ve nazikçe kapıyı çaldı. Kapı açıldığında, içeriden tatlı bir tebessümle bir yaşlı teyze belirdi. Teyzenin elinde bir tepsi dolusu taze kurabiye vardı. "Hoş geldin, sevgili!" dedi teyze gülümseyerek. "Benim adım Eliza. Ne getirdi seni bu yana?" Alice, içeri adım attı ve Eliza\'nın davetini kabul etti. Teyzenin sıcak ve samimi davranışlarıyla rahatladı. Birlikte çay içip kurabiyelerden yediler ve uzun uzun sohbet ettiler. Zamanın nasıl geçtiğini fark etmeden, gün batımına doğru Eliza\'nın kulübesinden ayrıldı. Eliza, ona vedalaşırken, "Her zaman buraya hoş geldin, sevgili Alice. Unutma ki dostluğumuz ve bu kulübenin kapısı sana her zaman açık olacak" dedi. Alice, Eliza\'nın sıcaklığı ve dostluğuyla kalbinin ısındığını hissederek ormandan ayrıldı. Eve bugün yaşadılarını annesine anlatma hayali ile yola koyuldu. Alice tüm olanları annesine tüm heyecanı ile anlattı.');
    let anne = prompt('a- Annesi kızsın \n b- Annesi kızmasın').toLowerCase();

     if (anne === 'a') {
      alert('Alice, annesine kulübeye girdiğini ve teyzeyle vakit geçirdiğini anlattığında, annesi biraz şaşırdı ve yabancı birinin evine girip annesini beklettiği için ona kızdı. "Özür dilerim annecim. Seni beklettiğim için üzgünüm. Ben de içeride biraz vakit geçirmek istemiştim. Ama seni kırmak istemezdim. Annesi, Alice\'in açıklamasını dinledi ama içten içe kızgındı. "Beni bekletmek yerine benimle eve dönmeliydin," dedi. Alice, annesinin kızgınlığını anladı ve özür diledi. "Haklısın, anne. Bir daha böyle bir şey yapmayacağım. Affet beni." Annesi Alice \'in özrünü kabul etti, ama hala kızgınlıkla doluydu. Eve dönerken, annesiyle konuşmak ve duygularını ifade etmek,  Alice \'in öfkesini hafifletti ve annesiyle arasındaki bağı güçlendirdi.')
     }

     else if (anne === 'b') {
      alert('Alice, annesine eve döndüklerinde teyzesiyle tanıştığını ve birlikte güzel vakit geçirdiklerini anlattı. Annesi, Alice\'in yeni biriyle tanışmasından çok sevindi, ancak aynı zamanda kızının daha temkinli olmasını da söyledi. "Canım kızım, yeni insanlarla tanışmak harika bir deneyimdir, ama her zaman dikkatli olmalısın. Tanımadığın insanlara güvenmek yerine öncelikle içgüdülerine güvenmeyi unutma. Senin güvende olman benim için çok önemli. Alice, annesinin tavsiyesini dikkate aldı ve yeni insanlarla tanışırken daha dikkatli olacağını söyledi. Annesiyle birlikte, kulübeden ayrılıp evlerine doğru yol aldılar. Yolda, Alice içinde teyzesiyle geçirdiği keyifli zamanın mutluluğunu ve annesinin sevgisini hissetti.')
     }
    
     else {
      alert('Geçersiz seçim! Lütfen "a" veya "b" şeklinde belirtiniz.');
    }
     
  }
  else if (kulübe === 'b') {
    alert('Alice, şirin kulübenin dışını incelediğinde, pespembe boyalı duvarların etrafını saran menekşelerin güzelliği karşısında büyülendi. Ancak, kulübeye yaklaşırken, ormanda dolaşan elinde bir balta taşıyan bir adamın siluetini fark etti. Bu görüntü Alice\'i korkuttu ve doğal olarak içeri girmekten vazgeçti.Adamın yaklaşmasını beklemek yerine, hızla oradan uzaklaşmaya karar verdi. Hızlı adımlarla kulübenin yanından geçti ve ormanın derinliklerine doğru yol aldı. Her adımında kalbi hızla çarpıyor ve bir an önce güvenli bir yere ulaşmak istiyordu. Uzun bir yolculuktan sonra, nihayet ormandan çıkıp güvenli bir yer bulduğunda rahatladı. Eve dönerken, yaşadığı korku dolu anları düşündü ve bir daha asla o ormana gitmeyeceğine karar verdi. Alice, eve vardığında içinde hala bir endişe hissediyordu, ancak aynı zamanda bu deneyimin ona dikkatli olmanın ve çevresindeki tehlikelere karşı uyanık olmanın önemini öğrettiğini fark etti. ')
  } 
  else {
    alert('Geçersiz seçim! Lütfen "a" veya "b" şeklinde belirtiniz.');
  }
} 

else if (yol === 'b') {
  alert('Alice, merakla sol yolu seçti ve karanlık ormana adım attı. Hemen karanlık ve gizemli bir atmosferle karşılaştı. Yol boyunca garip sesler duydu ve tedirgin olmaya başladı. Derin ormanda ilerledikçe, bir kuyunun başında durdu. Kuyunun içinden garip bir ses duydu ve aşağı bakmak istedi.');
  let kuyu = prompt(' a- kuyuya baksın. \n b- kuyuya bakmasın.').toLowerCase();

  if (kuyu === 'a') {
    alert('Alice, merakla kuyuya bakmaya karar verdi ve dikkatlice aşağıya eğildi. Kuyunun içinde, altın bir ışık parıldıyordu ve tuhaf bir şekilde, içinden mutluluk ve huzur yayılıyordu. Alice, içgüdülerine güvenerek kuyunun içine doğru bir adım attı. Kuyunun içinde, Alice\'e gülümseyen bir peri olduğunu gördü. Peri, ona güvenle gülümsedi ve ona bir dilek hakkı verdi. Alice, şaşkınlıkla ve sevinçle dileğini söyledi. Peri, dileğini bir şartla kabul etti Alice\'in onu gördüğünü kimseye söylememeliydi. Alice hiç düşünmeden kabul edince peri Alice\'in dileğini gerçekleştirdi. Alice olanlara inanamıyordu. O kuyudan çıktığında hayatının tamamen değiştiğini hissediyordu. Bir peri gördüğünü annesine anlatmadan nasıl duracaktı. Düşünceli bir şekilde evin yoluna koyuldu. ');
    let sır = prompt('a- Annesine anlatsın \n b- Annesine anlatmasın').toLowerCase();

          if (sır === 'a') {
           alert('Alice\'in içindeki sır tutma duygusu, onu biraz üzse de, perinin verdiği şartı yerine getirmek için doğru olanı yaptığına inanıyordu. Eve dönüş yolculuğu boyunca, peri ile yaşadığı deneyimi düşündü ve içten bir tebessümle yola devam ettiEve vardığında, annesi merakla onu karşıladı ve ne gördüğünü sordu. Alice, peri hakkında annesine anlatmayı çok istiyordu, ancak perinin verdiği şartı hatırladı. Sonunda, peri ile yaptığı anlaşmayı hatırlayarak sessiz kalmaya karar verdi ve annesine gördüğü şeyin sadece bir rüya olduğunu söyledi.')
        }

          else if (sır === 'b') {
           alert('Alice, eve döndüğünde heyecan içindeydi. Anne odadayken, hemen annesinin yanına gidip periyi gördüğünü anlattı. Annesi, başından sonuna kadar dikkatle dinledi ve sonunda sessizce gülümsedi."Canım kızım, senin hayal gücün gerçekten çok canlı!" dedi annesi nazikçe. "Ama biliyor musun, bazen rüyalarımız gerçeğe dönüşebilir. Bu yüzden, seninle birlikte o kuyuya gidelim ve periyi birlikte görelim." Alice şaşkınlıkla annesine bakarken, annesi ona gülümsedi. Birlikte kuyuya gittiler ve Alice annesine periyi gösterdi. Ancak, kuyunun içinde sadece parıldayan altın bir ışık vardı. Alice, periyi gerçekten gördüğüne dair şüpheler yaşamaya başladı. Belki de gerçekten sadece bir rüyaydı. Ancak, annesi ona sarıldı ve "Hayal gücünün sınırlarını zorlamaya devam et, canım kızım. Kim bilir, belki bir gün gerçekten bir periyle karşılaşırsın!" dedi.')
        }
    
          else {
           alert('Geçersiz seçim! Lütfen "a" veya "b" şeklinde belirtiniz.');
        }
   } 

  else if (kuyu === 'b') {
    alert('Alice, içgüdülerine güvenerek kuyuya bakmaktan vazgeçti ve oradan hızla uzaklaştı. Yolu boyunca dikkatli adımlarla ilerledi ve nihayet ormandan çıkıp güneşin ışığında rahatladı. Eve dönerken, yaşadığı deneyimlerden aldığı dersleri düşündü ve içgüdülerine her zaman güvenmenin önemini bir kez daha anladı.');
  }   

  else {
    alert('Geçersiz seçim! Lütfen "a" veya "b" şeklinde belirtiniz.');
  }
}

else {
  alert('Geçersiz seçim! Lütfen "a" veya "b" şeklinde belirtiniz.');
}
