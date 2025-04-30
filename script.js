const audio = document.getElementById('audioPlayer');
const img = document.getElementById('birthdayImage');
const textContainer = document.getElementById('textContainer');
const typingText = document.getElementById('typingText');

const message = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio error earum non perferendis sunt, quo repudiandae necessitatibus cum velit, doloribus debitis itaque est dolorum dolor iure dolore omnis! Nihil expedita nesciunt ullam doloribus non nemo, doloremque at quae suscipit dignissimos eaque, aliquid autem officiis recusandae consequuntur fugiat voluptates quia ea dicta mollitia. Et nobis aliquid expedita quas aspernatur corporis optio.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dolorem in atque odit eaque omnis facere commodi possimus asperiores voluptas aliquam delectus, aperiam beatae pariatur, itaque nam cum sequi? Temporibus.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere labore commodi cupiditate ipsa sunt blanditiis?`;

function typeWriter(text, element, speed = 25) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text[i] === '\n' ? '<br><br>' : text[i];
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

audio.addEventListener('play', () => {
  // Tampilkan gambar
  img.classList.add('show');

  // Setelah 2 detik, tampilkan teks dan mulai ketik
  setTimeout(() => {
    textContainer.classList.add('show');
    typeWriter(message, typingText, 25);
  }, 2000);
});
