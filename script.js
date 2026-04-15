const movies = [
    // --- DRAMA / CLÁSSICOS ---
    {
        id: 1,
        title: "O Poderoso Chefão",
        genre: "drama",
        year: 1972,
        duration: "2h 55min",
        rating: 9.8,
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        summary: "O patriarca de uma dinastia do crime organizado transfere o controle de seu império para seu filho relutante.",
        review: "A definição de perfeição cinematográfica. Cada cena é uma aula de narrativa e atuação histórica."
    },
    {
        id: 2,
        title: "Um Sonho de Liberdade",
        genre: "drama",
        year: 1994,
        duration: "2h 22min",
        rating: 9.3,
        poster: "https://image.tmdb.org/t/p/w500/6K98CO68pZp9pPc98D9GpxuL9P.jpg",
        summary: "Dois homens presos tornam-se amigos ao longo de vários anos, encontrando redenção através de atos de decência comum.",
        review: "Uma história poderosa sobre esperança e resiliência. O melhor filme de todos os tempos segundo o IMDb."
    },
    {
        id: 3,
        title: "Pulp Fiction",
        genre: "drama",
        year: 1994,
        duration: "2h 34min",
        rating: 8.9,
        poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        summary: "As vidas de assassinos, um boxeador e bandidos se entrelaçam em quatro histórias de violência e redenção.",
        review: "Diálogos magistrais e uma estrutura que mudou o cinema. Tarantino em seu estado mais puro."
    },
    {
        id: 4,
        title: "Casablanca",
        genre: "drama",
        year: 1942,
        duration: "1h 42min",
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
        summary: "Um exilado americano em Casablanca precisa escolher entre o seu amor por uma mulher e ajudar o marido dela a fugir.",
        review: "O romance eterno. O carisma de Bogart e Bergman define o cinema clássico de Hollywood."
    },
    {
        id: 5,
        title: "E o Vento Levou",
        genre: "drama",
        year: 1939,
        duration: "3h 58min",
        rating: 8.1,
        poster: "https://image.tmdb.org/t/p/w500/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
        summary: "A vida de Scarlett O'Hara durante a Guerra Civil Americana e o período de Reconstrução.",
        review: "Um épico colossal. A magnitude da produção ainda impressiona quase um século depois."
    },
    {
        id: 6,
        title: "Titanic",
        genre: "drama",
        year: 1997,
        duration: "3h 14min",
        rating: 7.9,
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        summary: "Uma aristocrata se apaixona por um artista pobre a bordo do luxuoso e azarado R.M.S. Titanic.",
        review: "O romance trágico definitivo. Cameron combina tecnologia de ponta com emoção genuína."
    },

    // --- AÇÃO / SCI-FI ---
    {
        id: 7,
        title: "Matrix",
        genre: "acao",
        year: 1999,
        duration: "2h 16min",
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        summary: "Um hacker aprende sobre a verdadeira natureza de sua realidade e seu papel na guerra contra as máquinas.",
        review: "Inovador demais para sua época. Redefiniu os efeitos visuais e a narrativa de ficção científica."
    },
    {
        id: 8,
        title: "Batman: O Cavaleiro das Trevas",
        genre: "acao",
        year: 2008,
        duration: "2h 32min",
        rating: 9.0,
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        summary: "Batman enfrenta o Coringa, um criminoso anárquico que busca instaurar o caos em Gotham City.",
        review: "O melhor filme de super-herói já feito. A interpretação de Heath Ledger é lendária."
    },
    {
        id: 9,
        title: "Avatar",
        genre: "acao",
        year: 2009,
        duration: "2h 42min",
        rating: 7.9,
        poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        summary: "Um fuzileiro paraplégico em Pandora fica dividido entre ordens e proteger este novo mundo.",
        review: "Um espetáculo visual que mudou o mercado 3D para sempre. Épico em todos os sentidos."
    },
    {
        id: 10,
        title: "Avatar: O Caminho da Água",
        genre: "acao",
        year: 2022,
        duration: "3h 12min",
        rating: 7.6,
        poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        summary: "Jake Sully e Ney'tiri formaram uma família e fazem de tudo para proteger seu lar em Pandora.",
        review: "Tecnologia visual sem precedentes. James Cameron prova ser o mestre dos épicos modernos."
    },
    {
        id: 11,
        title: "Vingadores: Ultimato",
        genre: "acao",
        year: 2019,
        duration: "3h 1min",
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        summary: "Após os eventos de Guerra Infinita, os Vingadores se reúnem para restaurar a ordem no universo.",
        review: "O clímax épico de uma década de Marvel. Emocionante e grandioso para todos os fãs."
    },
    {
        id: 12,
        title: "Star Wars: O Despertar da Força",
        genre: "acao",
        year: 2015,
        duration: "2h 18min",
        rating: 7.8,
        poster: "https://image.tmdb.org/t/p/w500/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
        summary: "Uma nova ameaça surge na galáxia, forçando Han Solo e novos heróis a buscar Luke Skywalker.",
        review: "O retorno triunfal da maior saga espacial. Equilíbrio perfeito entre nostalgia e renovação."
    },

    // --- INFANTIL / ANIMAÇÃO ---
    {
        id: 13,
        title: "Toy Story",
        genre: "infantil",
        year: 1995,
        duration: "1h 21min",
        rating: 9.5,
        poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
        summary: "O mundo secreto dos brinquedos ganha vida quando os humanos não estão presentes.",
        review: "A Pixar mudou a animação para sempre. Uma jornada de amizade que marcou gerações."
    },
    {
        id: 14,
        title: "O Rei Leão",
        genre: "infantil",
        year: 1994,
        duration: "1h 28min",
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        summary: "Simba deve enfrentar o tio Scar para recuperar seu trono e o ciclo da vida nas Terras do Reino.",
        review: "Obra-prima da Disney. Trilha sonora e visuais que permanecem insuperáveis até hoje."
    },
    {
        id: 15,
        title: "Shrek",
        genre: "infantil",
        year: 2001,
        duration: "1h 30min",
        rating: 7.9,
        poster: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
        summary: "Um ogro precisa resgatar uma princesa para recuperar a paz de seu pântano invadido.",
        review: "Genial. Desconstrói os clichês de contos de fadas com inteligência e humor inigualável."
    },
    {
        id: 16,
        title: "Procurando Nemo",
        genre: "infantil",
        year: 2003,
        duration: "1h 40min",
        rating: 8.2,
        poster: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
        summary: "Um peixe-palhaço viaja pelo oceano para encontrar seu filho com a ajuda de Dory.",
        review: "Pura emoção debaixo d'água. Uma animação tecnicamente perfeita e muito divertida."
    },
    {
        id: 17,
        title: "Frozen",
        genre: "infantil",
        year: 2013,
        duration: "1h 42min",
        rating: 7.4,
        poster: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
        summary: "Duas irmãs descobrem o poder do amor em meio a um inverno eterno em Arendelle.",
        review: "Um fenômeno cultural. Modernizou as princesas Disney com uma mensagem empoderadora."
    },
    {
        id: 18,
        title: "Divertida Mente",
        genre: "infantil",
        year: 2015,
        duration: "1h 35min",
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
        summary: "As emoções de uma jovem trabalham juntas para guiá-la através das mudanças de sua vida.",
        review: "Brilhante. Ajuda crianças e adultos a entenderem o papel essencial de cada emoção."
    },
    {
        id: 19,
        title: "Os Incríveis",
        genre: "infantil",
        year: 2004,
        duration: "1h 55min",
        rating: 8.0,
        poster: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
        summary: "Uma família de super-heróis disfarçados é forçada a entrar em ação para salvar o mundo.",
        review: "Ação fantástica que por acaso é animação. A dinâmica familiar é o coração do filme."
    },
    {
        id: 20,
        title: "Encanto",
        genre: "infantil",
        year: 2021,
        duration: "1h 42min",
        rating: 7.2,
        poster: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
        summary: "Uma jovem colombiana precisa salvar a magia de sua família, mesmo sem ter poderes.",
        review: "Vibrante e musical. Uma história linda sobre pertencimento e amor familiar."
    },
    {
        id: 21,
        title: "Up - Altas Aventuras",
        genre: "infantil",
        year: 2009,
        duration: "1h 36min",
        rating: 8.3,
        poster: "https://image.tmdb.org/t/p/w500/vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg",
        summary: "Um idoso viúvo viaja para a América do Sul em uma casa sustentada por milhares de balões.",
        review: "Emocionante do início ao fim. Um dos roteiros mais sensíveis já feitos pela Pixar."
    },
    {
        id: 22,
        title: "Meu Malvado Favorito",
        genre: "infantil",
        year: 2010,
        duration: "1h 35min",
        rating: 7.6,
        poster: "https://image.tmdb.org/t/p/w500/6tEJnof1DKWPnl5lzkjf0FVv7oB.jpg",
        summary: "Um supervilão descobre seu lado gentil após adotar três órfãs e a ajuda de seus Minions.",
        review: "Diversão pura. Os Minions tornaram-se ícones e o humor funciona para todas as idades."
    },
    // --- NOVOS INFANTIS ---
    {
        id: 23,
        title: "Antz (FormiguinhaZ)",
        genre: "infantil",
        year: 1998,
        duration: "1h 23min",
        rating: 6.6,
        poster: "https://image.tmdb.org/t/p/w500/9z3tI8qvQpJ7Xz3n0JVpaz6RtWL.jpg",
        summary: "Z-4195, uma formiga operária neurótica, tenta quebrar o sistema de sua colônia para conquistar a princesa Bala.",
        review: "Uma animação inteligente com toques de crítica social. Marcou o início da era DreamWorks."
    },
    {
        id: 24,
        title: "O Gato de Botas",
        genre: "infantil",
        year: 2011,
        duration: "1h 30min",
        rating: 6.7,
        poster: "https://image.tmdb.org/t/p/w500/7A3hH9dGpkXlYHhHh9c7F5z4F7A.jpg",
        summary: "Muito antes de conhecer Shrek, o lendário Gato de Botas embarca em uma jornada com Humpty Dumpty e Kitty Pata-Mansa.",
        review: "Divertido e cheio de estilo. O carisma do Gato é o motor desse spin-off fantástico."
    },
    {
        id: 25,
        title: "A Menina e o Porquinho",
        genre: "infantil",
        year: 2006,
        duration: "1h 37min",
        rating: 6.4,
        poster: "https://image.tmdb.org/t/p/w500/jfR5N3uKz2Qd6hwMRyY7jH9MuNo.jpg",
        summary: "Wilbur, um porquinho especial, faz amizade com uma aranha chamada Charlotte para sobreviver na fazenda.",
        review: "Um clássico emocionante sobre amizade e lealdade. Perfeito para assistir com a família."
    },
    {
        id: 26,
        title: "O Rei da Montanha",
        genre: "infantil",
        year: 2017,
        duration: "1h 44min",
        rating: 6.1,
        poster: "https://image.tmdb.org/t/p/w500/fD36mscvUjCHfXb5BfV07548oEw.jpg",
        summary: "Espen, um pobre filho de fazendeiro, embarca em uma jornada perigosa para resgatar a princesa de um troll vilão.",
        review: "Uma aventura nórdica visualmente deslumbrante que traz novos ares para os contos de fadas."
    },
    {
        id: 27,
        title: "Carrossel 2: O Sumiço de Maria Joaquina",
        genre: "infantil",
        year: 2016,
        duration: "1h 32min",
        rating: 5.5,
        poster: "https://image.tmdb.org/t/p/w500/yR7N0x0Z8h1NIsDPKySx1VHa4Er.jpg",
        summary: "As crianças da Escola Mundial precisam se unir para encontrar Maria Joaquina, que foi sequestrada por vilões.",
        review: "Continua o sucesso da novela brasileira com muita aventura e lições sobre união."
    },
    {
        id: 28,
        title: "A Mansão Mágica",
        genre: "infantil",
        year: 2013,
        duration: "1h 25min",
        rating: 6.3,
        poster: "https://image.tmdb.org/t/p/w500/zJJ2dG9V7H5PHeTtNKgHdwNwp0.jpg",
        summary: "Um gato abandonado encontra refúgio em uma casa misteriosa cheia de brinquedos vivos e um mágico velhinho.",
        review: "Encantador e criativo. Uma animação europeia que surpreende pela qualidade técnica."
    },
    {
        id: 29,
        title: "Selvagem",
        genre: "infantil",
        year: 2006,
        duration: "1h 22min",
        rating: 5.3,
        poster: "https://image.tmdb.org/t/p/w500/q9qfS6o9FvS6o9FvS6o9Fv.jpg",
        summary: "Um grupo de animais do zoológico de Nova York viaja para a África para resgatar um leãozinho.",
        review: "Divertido e agitado, segue a linha das grandes aventuras de animais fora de seu habitat."
    },
    {
        id: 30,
        title: "Robôs",
        genre: "infantil",
        year: 2005,
        duration: "1h 31min",
        rating: 6.6,
        poster: "https://image.tmdb.org/t/p/w500/ok6n3i7v6czS4EzgmO6ijLJrVN6.jpg",
        summary: "Rodney Lataria viaja para a cidade grande para seguir seu sonho de se tornar um inventor e ajudar outros robôs.",
        review: "Visualmente criativo e com uma mensagem inspiradora sobre nunca desistir de seus sonhos."
    },
    {
        id: 31,
        title: "As Aventuras de Robinson Crusoé",
        genre: "infantil",
        year: 2016,
        duration: "1h 31min",
        rating: 5.4,
        poster: "https://image.tmdb.org/t/p/w500/vV17L977T3yS9SnS6o9FvS6o.jpg",
        summary: "Robinson Crusoé naufraga em uma ilha e faz amizade com um grupo de animais hilários para sobreviver.",
        review: "Uma releitura divertida e colorida do clássico, focada totalmente na diversão para os pequenos."
    },
    {
        id: 32,
        title: "O Caldeirão Mágico",
        genre: "infantil",
        year: 1985,
        duration: "1h 20min",
        rating: 6.4,
        poster: "https://image.tmdb.org/t/p/w500/i5y37n689620yK8i20E5a9gI703.jpg",
        summary: "Um jovem camponês deve encontrar um caldeirão mágico antes do maligno Rei Chifrado para salvar o seu mundo.",
        review: "Uma das animações mais sombrias e fascinantes da Disney. Um clássico cult de fantasia."
    }
];

// Elementos do DOM
const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const genreButtons = document.querySelectorAll('.filter-btn');
const header = document.getElementById('mainHeader');
const modal = document.getElementById('movieModal');
const closeModal = document.querySelector('.close-modal');

// Estado da aplicação
let currentGenre = 'todos';
let searchTerm = '';

// Função para renderizar filmes
function renderMovies() {
    movieGrid.innerHTML = '';
    
    const filteredMovies = movies.filter(movie => {
        const matchesGenre = currentGenre === 'todos' || movie.genre === currentGenre;
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             movie.genre.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesGenre && matchesSearch;
    });

    if (filteredMovies.length === 0) {
        movieGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 5rem; font-size: 1.2rem; color: #666;">Opa! Nenhum filme encontrado.</div>';
        return;
    }

    filteredMovies.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <span>${movie.title}</span>
        `;
        card.addEventListener('click', () => openModal(movie));
        movieGrid.appendChild(card);
    });
}

// Lógica de Filtro por Gênero
genreButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        genreButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentGenre = btn.getAttribute('data-genre');
        renderMovies();
    });
});

// Lógica de Busca
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderMovies();
});

// Efeito de Header no Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Lógica do Modal
function openModal(movie) {
    document.getElementById('modalTitle').innerText = movie.title;
    document.getElementById('modalYear').innerText = movie.year;
    document.getElementById('modalDuration').innerText = movie.duration;
    document.getElementById('modalRating').innerText = movie.rating;
    document.getElementById('modalDescription').innerText = movie.summary;
    document.getElementById('modalReview').innerText = movie.review;
    document.getElementById('modalPoster').innerHTML = `<img src="${movie.poster}" alt="${movie.title}" class="modal-img">`;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Inicialização
renderMovies();
console.log("MaRecording v3.5 - Links de Imagem Verificados pelo Usuário!");
