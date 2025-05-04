const audio = document.getElementById('audioPlayer');
const img = document.getElementById('birthdayImage');
const textContainer = document.getElementById('textContainer');
const typingText = document.getElementById('typingText');

const message = `selamat ulang tahun yaa sayanggg! ngga kerasa kamu sudah 20 tahun. waktu cepat banget ya? di usia baru ini, aku cuma ingin kamu tahu betapa bangganya aku sama semua hal yang udah kamu lewati dan capai. semoga hari-harimu ke depan dipenuhi tawa, semangat baru, dan banyak kejutan indah yaa. terus jadi kamu yang hangat, kuat, dan selalu penuh cinta, yaa. aku selalu di sini, nemenin setiap langkahmu. love you always dinduss. dan hari ini, aku ngga cuma merayakan ulang tahunmu, tapi juga bersyukur karena dunia pernah menghadirkan kamu buat akuu.

di setiap hari yang telah kita lewati, aku makin yakin kalau kamu adalah sosok yang pantas dicintai tanpa batas. kamu bawa ketenangan di tengah sibuknya dunia, dan kamu jadi alasan kenapa aku selalu ingin jadi versi terbaik dari diriku. semoga di usia 20 ini, semua yang kamu harapkan pelan-pelan datang menghampiri. aku tahu perjalananmu masih panjang, tapi kamu nggak harus menjalaninya sendiri. aku ada, bukan cuma buat hari ini, tapi juga buat hari-hari yang belum kita temui. terima kasih karena udah jadi kamu. dan terima kasih karena milih aku untuk ada di hidupmu.

From : cowomu yang ganteng pake bangett, sabar, pengertian, baik, rajin menabung, dan tidak sombong 💚.`;

// Typewriter sound
const typeSound = new Audio('typewriter.mp3');
typeSound.loop = true;
typeSound.volume = 0.3;

// Backup loop (in case 'loop = true' fails smoothly)
typeSound.addEventListener('ended', () => {
  typeSound.currentTime = 0;
  typeSound.play();
});

function typeWriter(text, element, speed = 70) {
  let i = 0;

  function typing() {
    if (i < text.length) {
      const char = text[i];
      element.innerHTML += (char === '\n') ? '<br><br>' : char;
      typingText.scrollIntoView({ behavior: 'smooth', block: 'end' });
      i++;
      setTimeout(typing, speed);
    } else {
      typeSound.pause();
      typeSound.currentTime = 0;
    }
  }

  typeSound.play();
  typing();
}

audio.addEventListener('play', () => {
  img.classList.add('show');

  setTimeout(() => {
    textContainer.classList.add('show');
    typeWriter(message, typingText, 70);
  }, 2000);
});
