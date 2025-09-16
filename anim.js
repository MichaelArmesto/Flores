// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea con inicio y fin en segundos
var lyricsData = [
  { text: "Não consigo olhar no fundo dos seus olhos", start: 12 },
  { text: "E enxergar as coisas que me deixam no ar", start: 16 },
  { text: "Me deixam no ar", start: 21 },
  { text: "As várias fases, estações que me levam com o vento", start: 24 },
  { text: "E o pensamento bem devagar", start: 29 },
  { text: "Outra vez eu tive que fugir", start: 36 },
  { text: "Tive que correr, pra não me entregar", start: 41 },
  { text: "Às loucuras que me levam até você", start: 48 },
  { text: "Me fazem esquecer que eu não posso chorar", start: 53, end: 60 },

  { text: "Olhe bem no fundo dos meus olhos", start: 69 },
  { text: "E sinta a emoção que nascerá quando você me olhar", start: 73 },
  { text: "O universo conspira a nosso favor", start: 81 },
  { text: "A consequência do destino é o amor", start: 84 },
  { text: "Pra sempre vou te amar", start: 87 },

  { text: "Mas talvez, você não entenda?'", start: 93 },
  { text: "Essa coisa de fazer o mundo acreditar", start: 97 },
  { text: "Que o meu amor", start: 104 },
  { text: "Não será passageiro", start: 107 },
  { text: "Te amarei de janeiro a janeiro", start: 111 },

  { text: "Até o mundo acabar", start: 113 },
  { text: "Até o mundo acabar", start: 118 },
  { text: "Até o mundo acabar", start: 123 },
  { text: "Até o mundo acabar", start: 129 },

  { text: "Mas talvez, você não entenda?", start: 138 },
  { text: "Essa coisa de fazer o mundo acreditar", start: 142 },
  { text: "Que o meu amor", start: 149 },
  { text: "Não será passageiro", start: 151 },
  { text: "Te amarei de janeiro a janeiro", start: 154 },

  { text: "Até o mundo acabar", start: 158 },
  { text: "Até o mundo acabar", start: 163 },
  { text: "Até o mundo acabar", start: 169 },
  { text: "Até o mundo acabar", start: 175 },

  { text: "De janeiro a janeiro", start: 184 },
];

// Calcular automáticamente el end de cada línea usando la siguiente
for (let i = 0; i < lyricsData.length; i++) {
  let current = lyricsData[i];
  let next = lyricsData[i + 1];

  // Only auto-assign end if it's not already defined
  if (!current.end) {
    current.end = next ? next.start - 0.5 : audio.duration;
  }
}

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => time >= line.start && time <= line.end
  );

  if (currentLine) {
    // efecto fade-in al aparecer
    var fadeInDuration = 0.5; // segundos
    var opacity = Math.min(1, (time - currentLine.start) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 200); // chequea 5 veces por segundo para mayor precisión

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

// Llama a la función después de 216 segundos (216,000 ms)
setTimeout(ocultarTitulo, 216000);
