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
        review: "A definição de perfeição cinematográfica. Cada cena é uma aula de narrativa e atuação histórica.",
        trailer: "sY1S34973zA",
        classification: "18+"
    },
    {
        id: 2,
        title: "Um Sonho de Liberdade",
        genre: "drama",
        year: 1994,
        duration: "2h 22min",
        rating: 9.3,
        poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
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
        review: "Diálogos magistrais e uma estrutura que mudou o cinema. Tarantino em seu estado mais puro.",
        trailer: "s7EdQ4FqbhY",
        classification: "18+"
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
        review: "O romance trágico definitivo. Cameron combina tecnologia de ponta with emoção genuína."
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
        review: "Inovador demais para sua época. Redefiniu os efeitos visuais e a narrativa de ficção científica.",
        trailer: "m8e-FF8MsqU",
        classification: "18+"
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

    // --- ANIMAÇÃO ---
    {
        id: 13,
        title: "Toy Story",
        genre: "animacao",
        year: 1995,
        duration: "1h 21min",
        rating: 9.5,
        poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
        summary: "O mundo secreto dos brinquedos ganha vida quando os humanos não estão presentes.",
        review: "A Pixar mudou a animação para sempre. Uma jornada de amizade que marcou gerações.",
        trailer: "v-PjgYZRPFs",
        classification: "L"
    },
    {
        id: 14,
        title: "O Rei Leão",
        genre: "animacao",
        year: 1994,
        duration: "1h 28min",
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        summary: "Simba deve enfrentar o tio Scar para recuperar seu trono e o ciclo da vida nas Terras do Reino.",
        review: "Obra-prima da Disney. Trilha sonora e visuais que permanecem insuperáveis até hoje.",
        trailer: "lFzVJEksoDY",
        classification: "L"
    },
    {
        id: 15,
        title: "Shrek",
        genre: "animacao",
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
        genre: "animacao",
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
        genre: "animacao",
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
        genre: "animacao",
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
        genre: "animacao",
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
        genre: "animacao",
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
        genre: "animacao",
        year: 2009,
        duration: "1h 36min",
        rating: 8.3,
        poster: "https://image.tmdb.org/t/p/w500/vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg",
        summary: "Um idoso viúvo viaja para a América do Sul em uma casa sustentada por milhares de balões.",
        review: "Emocionante do início ao fim. Um dos roteiros mais sensíveis já feitos pela Pixar."
    },

    // --- SAGA MEU MALVADO FAVORITO ---
    {
        id: 22,
        title: "Meu Malvado Favorito",
        genre: "animacao",
        year: 2010,
        duration: "1h 35min",
        rating: 7.6,
        poster: "https://image.tmdb.org/t/p/w500/jkgrzh9fJ22oe7itaLUChokYOx5.jpg",
        summary: "Um supervilão descobre seu lado gentil após adotar três órfãs e a ajuda de seus Minions.",
        review: "Diversão pura. Os Minions tornaram-se ícones e o humor funciona para todas as idades."
    },
    {
        id: 33,
        title: "Meu Malvado Favorito 2",
        genre: "animacao",
        year: 2013,
        duration: "1h 38min",
        rating: 7.3,
        poster: "https://image.tmdb.org/t/p/w500/rSqIW4d1A0Ep4Ah8I4RSxoqA9sN.jpg",
        summary: "Gru é recrutado por uma organização secreta para combater um novo e poderoso supervilão.",
        review: "Tão divertido quanto o primeiro, com mais destaque para os hilários Minions."
    },
    {
        id: 34,
        title: "Meu Malvado Favorito 3",
        genre: "animacao",
        year: 2017,
        duration: "1h 30min",
        rating: 6.3,
        poster: "https://image.tmdb.org/t/p/w500/csRDFzO95iWLvtH6TgC5dJmM4Pu.jpg",
        summary: "Gru conhece seu irmão gêmeo Dru, que o convida para voltar à vida de crimes.",
        review: "Uma aventura vibrante que expande a família de Gru with muito humor e cores."
    },
    {
        id: 35,
        title: "Meu Malvado Favorito 4",
        genre: "animacao",
        year: 2024,
        duration: "1h 35min",
        rating: 6.9,
        poster: "https://image.tmdb.org/t/p/w500/9NK3yKU3p5aBarCeDPCrJllshQm.jpg",
        summary: "Gru enfrenta novos desafios domésticos enquanto lida com um antigo inimigo que retorna em busca de vingança.",
        review: "A volta triunfal da família mais querida do cinema, com novidades que renovam a série."
    },

    // --- OUTROS INFANTIS ---
    {
        id: 23,
        title: "Formiguinhaz (Antz)",
        genre: "animacao",
        year: 1998,
        duration: "1h 23min",
        rating: 6.6,
        poster: "https://image.tmdb.org/t/p/w500/plM5vyLRiiVrVlLC7bQPVmjSwN2.jpg",
        summary: "Z-4195, uma formiga operária neurótica, tenta quebrar o sistema de sua colônia para conquistar a princesa Bala.",
        review: "Uma animação inteligente com toques de crítica social. Marcou o início da era DreamWorks."
    },
    {
        id: 24,
        title: "O Gato de Botas",
        genre: "animacao",
        year: 2011,
        duration: "1h 30min",
        rating: 6.7,
        poster: "https://image.tmdb.org/t/p/w500/tyAAZ5JP2OsNMYNQKCwt2I95I3L.jpg",
        summary: "Muito antes de conhecer Shrek, o lendário Gato de Botas embarca em uma jornada com Humpty Dumpty e Kitty Pata-Mansa.",
        review: "Divertido e cheio de estilo. O carisma do Gato é o motor desse spin-off fantástico."
    },
    {
        id: 25,
        title: "A Menina e o Porquinho",
        genre: "animacao",
        year: 2006,
        duration: "1h 37min",
        rating: 6.4,
        poster: "https://image.tmdb.org/t/p/w500/5c8JKbiVLWLKMCNior7bfijRYry.jpg",
        summary: "Wilbur, um porquinho especial, faz amizade com uma aranha chamada Charlotte para sobreviver na fazenda.",
        review: "Um clássico emocionante sobre amizade e lealdade. Perfeito para assistir com a família."
    },
    {
        id: 26,
        title: "O Rei da Montanha",
        genre: "animacao",
        year: 2017,
        duration: "1h 44min",
        rating: 6.1,
        poster: "https://image.tmdb.org/t/p/w500/mS33kCNG2j5Wbc8A13kYJ1fTKRc.jpg",
        summary: "Espen, um pobre filho de fazendeiro, embarca em uma jornada perigosa para resgatar a princesa de um troll vilão.",
        review: "Uma aventura nórdica visualmente deslumbrante que traz novos ares para os contos de fadas."
    },
    {
        id: 27,
        title: "Carrossel 2: O Sumiço de Maria Joaquina",
        genre: "animacao",
        year: 2016,
        duration: "1h 32min",
        rating: 5.5,
        poster: "https://image.tmdb.org/t/p/w500/D5L9rLe9rWEA9wNXOtJt2jo1J1.jpg",
        summary: "As crianças da Escola Mundial precisam se unir para encontrar Maria Joaquina, que foi sequestrada por vilões.",
        review: "Continua o sucesso da novela brasileira com muita aventura e lições sobre união."
    },
    {
        id: 28,
        title: "The House of Magic (A Mansão Mágica)",
        genre: "animacao",
        year: 2013,
        duration: "1h 25min",
        rating: 6.3,
        poster: "https://image.tmdb.org/t/p/w500/lUp8mXwhtWhY7awGEhZ5staYXR6.jpg",
        summary: "Um gato abandonado encontra refúgio em uma casa misteriosa cheia de brinquedos vivos e um mágico velhinho.",
        review: "Encantador e criativo. Uma animação europeia que surpreende pela qualidade técnica."
    },
    {
        id: 29,
        title: "Selvagem",
        genre: "animacao",
        year: 2006,
        duration: "1h 22min",
        rating: 5.3,
        poster: "https://image.tmdb.org/t/p/w500/tDnDREbW2eNjd9KvjVKtnNf5A5Y.jpg",
        summary: "Um grupo de animais do zoológico de Nova York viaja para a África para resgatar um leãozinho.",
        review: "Divertido e agitado, segue a linha das grandes aventuras de animais fora de seu habitat."
    },
    {
        id: 30,
        title: "Robôs",
        genre: "animacao",
        year: 2005,
        duration: "1h 31min",
        rating: 6.6,
        poster: "https://image.tmdb.org/t/p/w500/tC9hcesF7QpMFuB6MvQg900VUyX.jpg",
        summary: "Rodney Lataria viaja para a cidade grande para seguir seu sonho de se tornar um inventor e ajudar outros robôs.",
        review: "Visualmente criativo e com uma mensagem inspiradora sobre nunca desistir de seus sonhos."
    },
    {
        id: 31,
        title: "As Aventuras de Robinson Crusoé",
        genre: "animacao",
        year: 2016,
        duration: "1h 31min",
        rating: 5.4,
        poster: "https://image.tmdb.org/t/p/w500/hDd30gFdkZh3U3pf6m4yEFtX41U.jpg",
        summary: "Robinson Crusoé naufraga em uma ilha e faz amizade com um grupo de animais hilários para sobreviver.",
        review: "Uma releitura divertida e colorida do clássico, focada totalmente na diversão para os pequenos."
    },
    {
        id: 32,
        title: "O Caldeirão Mágico",
        genre: "animacao",
        year: 1985,
        duration: "1h 20min",
        rating: 6.4,
        poster: "https://image.tmdb.org/t/p/w500/euAKR1FKFxkS7MCVDVYgdoa15km.jpg",
        summary: "Um jovem camponês deve encontrar um caldeirão mágico antes do maligno Rei Chifrado para salvar o seu mundo.",
        review: "Uma das animações mais sombrias e fascinantes da Disney. Um clássico cult de fantasia."
    },
    // --- NOVIDADES: AÇÃO E COMÉDIA ---
    {
        id: 36,
        title: "CASAMENTO ARMADO",
        genre: "acao",
        year: 2022,
        duration: "1h 40min",
        rating: 6.4,
        poster: "https://image.tmdb.org/t/p/w500/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg",
        summary: "Um casal reúne suas famílias para um destino de casamento, mas a festa é interrompida por piratas que tomam todos como reféns.",
        review: "Uma comédia de ação leve e divertida com Jennifer Lopez e Josh Duhamel."
    },
    {
        id: 37,
        title: "ALERTA VERMELHO",
        genre: "acao",
        year: 2021,
        duration: "1h 58min",
        rating: 6.8,
        poster: "https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
        summary: "Um profiler do FBI une forças com um ladrão de arte para capturar uma criminosa procurada mundialmente.",
        review: "Puro entretenimento blockbuster com o carisma de The Rock, Ryan Reynolds e Gal Gadot."
    },
    {
        id: 38,
        title: "UM CRIME PARA DOIS",
        genre: "acao",
        year: 2020,
        duration: "1h 27min",
        rating: 6.1,
        poster: "img/um crime para dois.jfif",
        summary: "Um casal à beira do término se vê envolvido em um assassinato bizarro e precisa correr para provar sua inocência.",
        review: "Uma comédia romântica com toques de ação que se sustenta pela ótima química dos protagonistas.",
        trailer: "cz7T_v4_A6o",
        classification: "18+"
    },
    {
        id: 39,
        title: "SR. E SRA. SMITH",
        genre: "acao",
        year: 2005,
        duration: "2h 00min",
        rating: 6.5,
        poster: "img/sr. & sra smith.jpg",
        summary: "Um casal entediado descobre que ambos são assassinos secretos trabalhando para agências rivais.",
        review: "Um clássico moderno de ação e sedução que definiu o gênero de comédia de espionagem matrimonial.",
        trailer: "cz7T_v4_A6o",
        classification: "18+"
    },
    {
        id: 40,
        title: "COMO SE FOSSE A PRIMEIRA VEZ",
        genre: "animacao",
        year: 2004,
        duration: "1h 39min",
        rating: 6.8,
        poster: "img/COMO SE FOSSE A PRIMEIRA VEZ.jpg",
        summary: "Um veterinário marinho se apaixona por uma mulher com perda de memória de curto prazo e precisa conquistá-la todos os dias.",
        review: "Uma das comédias românticas mais amadas do cinema, equilibrando humor e momentos emocionantes.",
        trailer: "Q_2AbjYeSMI",
        classification: "L"
    },
    {
        id: 41,
        title: "CABRAS DA PESTE",
        genre: "acao",
        year: 2021,
        duration: "1h 37min",
        rating: 6.2,
        poster: "https://image.tmdb.org/t/p/w500/lTwOhXPVsfv6dJsOcmMEiZceXxP.jpg",
        summary: "Dois policiais atrapalhados de estados diferentes precisam trabalhar juntos para resgatar uma cabra amada no Ceará.",
        review: "Comédia brasileira divertidíssima que homenageia os filmes de 'buddy cop' com muito sotaque e humor local."
    },
    {
        id: 42,
        title: "EM RITMO DE FUGA",
        genre: "acao",
        year: 2017,
        duration: "1h 53min",
        rating: 7.6,
        poster: "https://image.tmdb.org/t/p/w500/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg",
        summary: "Um jovem piloto de fuga usa música para se concentrar e tenta deixar o mundo do crime após conhecer a garota dos seus sonhos.",
        review: "Uma obra-prima de montagem e trilha sonora. Ação pulsante e estilosa."
    },
    {
        id: 43,
        title: "UM TIRA DA PESADA 4: AXEL F",
        genre: "acao",
        year: 2024,
        duration: "1h 58min",
        rating: 6.6,
        poster: "https://image.tmdb.org/t/p/w500/49zBBS5eSCqTj6r0T9kPoijib7E.jpg",
        summary: "Axel Foley retorna a Beverly Hills para proteger sua filha e desvendar uma conspiração criminosa perigosa.",
        review: "Eddie Murphy volta com tudo em um revival que captura perfeitamente a essência dos originais dos anos 80."
    },
    {
        id: 44,
        title: "AS LADRAS",
        genre: "acao",
        year: 2023,
        duration: "1h 55min",
        rating: 6.0,
        poster: "https://image.tmdb.org/t/p/w500/wnLJ7nVObgbAD7cgF87XW1t9JT2.jpg",
        summary: "Duas ladras especialistas em artes decidem realizar um último grande roubo na Córsega antes de se aposentarem.",
        review: "Uma aventura francesa com foco na amizade feminina e planos de assalto inteligentes."
    },
    {
        id: 45,
        title: "TROCO EM DOBRO",
        genre: "acao",
        year: 2020,
        duration: "1h 51min",
        rating: 6.2,
        poster: "https://image.tmdb.org/t/p/w500/fePczipv6ZzDO2uoww4vTAu2Sq3.jpg",
        summary: "Um ex-policial recém-saído da prisão se une a um lutador de MMA principiante para desvendar uma conspiração de assassinato.",
        review: "Ação bruta e humor sarcástico em Boston. Uma ótima parceria entre Mark Wahlberg e Winston Duke."
    },
    {
        id: 46,
        title: "LAGOA AZUL",
        genre: "drama",
        year: 1980,
        duration: "1h 44min",
        rating: 6.8,
        poster: "img/lagoa azul.jpg",
        summary: "Dois náufragos crescem em uma ilha tropical isolada e descobrem o amor enquanto lutam para sobreviver.",
        review: "Um clássico da Sessão da Tarde que marcou uma era com suas paisagens paradisíacas e trilha memorável.",
        trailer: "Y2Sg9SclisM",
        classification: "L"
    },
    {
        id: 47,
        title: "DE VOLTA À LAGOA AZUL",
        genre: "drama",
        year: 1991,
        duration: "1h 42min",
        rating: 5.2,
        poster: "img/de volta a lagoa azul.jfif",
        summary: "O filho dos náufragos originais acaba na mesma ilha, onde também precisa aprender as lições da vida e do amor.",
        review: "Continua a saga romântica na ilha, mantendo o visual deslumbrante que consagrou o primeiro filme.",
        trailer: "Y2Sg9SclisM",
        classification: "L"
    },
    {
        id: 48,
        title: "O AMOR ACONTECE",
        genre: "comedia",
        year: 2003,
        duration: "2h 15min",
        rating: 7.6,
        poster: "img/o amor acontece.jpg",
        summary: "Oito casais lidam com suas vidas amorosas em várias histórias interligadas durante um Natal frenético em Londres.",
        review: "A comédia romântica definitiva. Emocionante, engraçada e cheia de estrelas.",
        trailer: "fOS-HMiOnac",
        classification: "L"
    },
    {
        id: 49,
        title: "AMOR DE ALUGUEL",
        genre: "comedia",
        year: 1987,
        duration: "1h 34min",
        rating: 6.8,
        poster: "img/amor de aluguel.webp",
        summary: "Um jovem nerd paga a garota mais popular da escola para fingir ser sua namorada e ganhar popularidade.",
        review: "Um dos grandes clássicos dos anos 80 sobre amadurecimento e a busca por aceitação.",
        trailer: "0P4A1K6mDtk",
        classification: "L"
    },
    {
        id: 50,
        title: "UM TIRA DA PESADA",
        genre: "acao",
        year: 1984,
        duration: "1h 45min",
        rating: 7.3,
        poster: "img/um tira 1.jpg",
        summary: "Um policial de Detroit viaja para Beverly Hills para investigar o assassinato de seu melhor amigo.",
        review: "O filme que consagrou Eddie Murphy como superestrela. Humor e ação na medida certa.",
        trailer: "oHj6Ynd2Kk0",
        classification: "18+"
    },
    {
        id: 51,
        title: "UM TIRA DA PESADA 2",
        genre: "acao",
        year: 1987,
        duration: "1h 43min",
        rating: 6.5,
        poster: "img/um tira pesada 2.webp",
        summary: "Axel Foley retorna a Los Angeles para ajudar seus amigos Taggart e Rosewood a resolver uma série de crimes.",
        review: "Mais ação, mais tiros e Eddie Murphy ainda mais afiado. Uma sequência digna do original.",
        trailer: "oHj6Ynd2Kk0",
        classification: "18+"
    },
    {
        id: 52,
        title: "UM TIRA DA PESADA 3",
        genre: "acao",
        year: 1994,
        duration: "1h 44min",
        rating: 5.8,
        poster: "img/um tira 3.jpg",
        summary: "Axel Foley segue uma pista sobre assassinos até um parque de diversões temático na Califórnia.",
        review: "Pura diversão em um cenário inusitado. Axel Foley continua sendo o tira mais carismático do cinema.",
        trailer: "oHj6Ynd2Kk0",
        classification: "18+"
    },
    {
        id: 53,
        title: "BONECO DO MAL 1",
        genre: "terror",
        year: 2016,
        duration: "1h 37min",
        rating: 6.0,
        poster: "img/boneco do mal 1.jpg",
        summary: "Uma babá americana é contratada para cuidar de um boneco por um casal de idosos que o tratam como se fosse um filho vivo.",
        review: "Um suspense psicológico intrigante que brinca com o sobrenatural de forma elegante.",
        trailer: "X1U2I0V60hM",
        classification: "18+"
    },
    {
        id: 54,
        title: "BONECO DO MAL 2",
        genre: "terror",
        year: 2020,
        duration: "1h 26min",
        rating: 4.7,
        poster: "img/boneco do mal 2.png",
        summary: "Após uma família se mudar para a Mansão Heelshire, seu filho faz amizade com um boneco realista chamado Brahms.",
        review: "Expande a mitologia do primeiro filme com novos sustos e uma atmosfera sombria.",
        trailer: "X1U2I0V60hM",
        classification: "18+"
    },
    {
        id: 55,
        title: "NÃO SE MEXA",
        genre: "terror",
        year: 2024,
        duration: "1h 32min",
        rating: 6.5,
        poster: "img/nao se mexa.webp",
        summary: "Uma mulher em luto no deserto é injetada com um agente paralisante por um estranho e deve correr antes que seu corpo pare de funcionar.",
        review: "Um thriller de sobrevivência agoniante e minimalista que prende a atenção do início ao fim.",
        trailer: "fOS-HMiOnac",
        classification: "18+"
    },
    {
        id: 56,
        title: "DEIXE-ME ENTRAR",
        genre: "terror",
        year: 2010,
        duration: "1h 56min",
        rating: 7.1,
        poster: "img/deixe-me entrar.jpg",
        summary: "Um menino solitário faz amizade com uma vizinha misteriosa que revela ser uma vampira imortal.",
        review: "Um remake sensível e perturbador que captura a essência sombria da obra original sueca.",
        trailer: "REylU-X7-c4",
        classification: "18+"
    },
    {
        id: 57,
        title: "30 DIAS DE NOITE",
        genre: "terror",
        year: 2007,
        duration: "1h 53min",
        rating: 6.6,
        poster: "img/30 dias e noite.jpg",
        summary: "Em uma cidade do Alasca onde o sol não nasce por um mês, um grupo de vampiros sedentos de sangue ataca a população isolada.",
        review: "Visualmente impactante e visceral. Uma das melhores abordagens modernas do gênero de vampiros.",
        trailer: "C68L-T8978A",
        classification: "18+"
    },
    {
        id: 58,
        title: "Top Gun: Ases Indomáveis",
        genre: "acao",
        year: 1986,
        duration: "1h 50min",
        rating: 6.9,
        poster: "https://image.tmdb.org/t/p/w500/dDrMtnVgtDeecIgNchb9F8JcO5w.jpg",
        summary: "O impetuoso piloto Maverick entra para a escola de elite da Marinha e compete para ser o melhor dos melhores.",
        review: "Um clássico absoluto dos anos 80. A trilha sonora e as cenas de ação aérea são inesquecíveis."
    },
    {
        id: 59,
        title: "Mad Max: Estrada da Fúria",
        genre: "acao",
        year: 2015,
        duration: "2h 00min",
        rating: 8.1,
        poster: "https://image.tmdb.org/t/p/w500/mtgqrSlT47VsmeMVanLTny7BknB.jpg",
        summary: "Em um futuro pós-apocalíptico, Max se une à Imperatriz Furiosa para escapar de um tirano e seu exército.",
        review: "Pura adrenalina visual. George Miller redefine o cinema de ação com uma obra-prima técnica e narrativa.",
        classification: "18+"
    },
    {
        id: 60,
        title: "Furiosa: Uma Saga Mad Max",
        genre: "acao",
        year: 2024,
        duration: "2h 28min",
        rating: 7.6,
        poster: "https://image.tmdb.org/t/p/w500/7qOSKoOAPgemYhBwbJgBWcCxPWZ.jpg",
        summary: "A origem de Furiosa e como ela foi levada do Lugar Verde e sobreviveu em um mundo devastado.",
        review: "Uma expansão magnífica do universo Mad Max. Anya Taylor-Joy entrega uma performance épica e visceral.",
        classification: "18+"
    },
    {
        id: 61,
        title: "Road House (Matador de Aluguel 1)",
        genre: "acao",
        year: 1989,
        duration: "1h 54min",
        rating: 6.7,
        poster: "https://image.tmdb.org/t/p/w500/k4jpv403NHo9LQcFHmKQBLEPwuI.jpg",
        summary: "Um segurança profissional é contratado para limpar o bar mais barulhento do Missouri e enfrenta um empresário corrupto.",
        review: "Patrick Swayze em seu auge. Um filme de ação divertido, com lutas coreografadas e muito estilo oitentista.",
        classification: "18+"
    },
    {
        id: 62,
        title: "Road House (Matador de Aluguel 2024)",
        genre: "acao",
        year: 2024,
        duration: "2h 01min",
        rating: 6.2,
        poster: "https://image.tmdb.org/t/p/w500/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
        summary: "Um ex-lutador do UFC aceita um emprego como segurança em um bar nas Florida Keys e descobre que a ilha não é o que parece.",
        review: "Uma releitura moderna e explosiva com Jake Gyllenhaal. Muita porrada e um clima de ação descompromissada.",
        classification: "18+"
    },
    {
        id: 63,
        title: "Die Hard (Duro de Matar)",
        genre: "acao",
        year: 1988,
        duration: "2h 12min",
        rating: 8.2,
        poster: "https://image.tmdb.org/t/p/w500/2PD0HHoyVVAEUhep9JhlKtgyl8m.jpg",
        summary: "Um policial de Nova York tenta salvar sua esposa e outras pessoas tomadas como reféns por terroristas em um prédio de luxo.",
        review: "O filme de ação perfeito. Bruce Willis criou o herói vulnerável e humano que definiu uma nova era no cinema.",
        classification: "18+"
    },
    {
        id: 64,
        title: "Everything Everywhere All at Once (Tudo em Todo Lugar ao Mesmo Tempo)",
        genre: "acao",
        year: 2022,
        duration: "2h 19min",
        rating: 7.8,
        poster: "https://image.tmdb.org/t/p/w500/bW21kbvqAt2kMGlaU8qY86C8kQE.jpg",
        summary: "Uma imigrante chinesa é envolvida em uma aventura insana onde só ela pode salvar o mundo explorando outros universos.",
        review: "Absolutamente brilhante e criativo. Uma mistura caótica de ação, ficção científica e drama familiar que conquistou o mundo.",
        classification: "18+"
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
        const matchesGenre = currentGenre === 'todos' || 
                             movie.genre === currentGenre || 
                             (currentGenre === 'adulto' && movie.classification === '18+') ||
                             (currentGenre === 'animacao' && movie.classification === 'L');
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
        const badgeClass = movie.classification === '18+' ? 'badge-18' : 'badge-inf';
        const badgeText = movie.classification === '18+' ? '18+' : 'L';
        
        card.innerHTML = `
            <div class="rating-badge ${badgeClass}">${badgeText}</div>
            <div class="video-preview-container"></div>
            <img src="${movie.poster}" alt="${movie.title}">
            <span>${movie.title}</span>
        `;

        let hoverTimer;
        const previewContainer = card.querySelector('.video-preview-container');

        card.addEventListener('mouseenter', () => {
            if (movie.trailer) {
                hoverTimer = setTimeout(() => {
                    previewContainer.innerHTML = `
                        <iframe 
                            src="https://www.youtube.com/embed/${movie.trailer}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${movie.trailer}" 
                            allow="autoplay; encrypted-media">
                        </iframe>`;
                    previewContainer.classList.add('active');
                }, 600); // 600ms de delay para intenção
            }
        });

        card.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimer);
            previewContainer.classList.remove('active');
            setTimeout(() => {
                previewContainer.innerHTML = '';
            }, 500); // Remove o iframe após o fade-out
        });

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
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderMovies();
    });
}

// Efeito de Header no Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- Universal Trailer Logic ---
let currentMovieForTrailer = null;

// Elementos do Trailer
const btnModalTrailerSetup = document.getElementById('btnModalTrailerSetup');
const modalTrailerOptions = document.getElementById('modalTrailerOptions');
const btnModalStartTrailer = document.getElementById('btnModalStartTrailer');

const btnTrailerSetup = document.getElementById('btnTrailerSetup');
const trailerOptions = document.getElementById('trailerOptions');
const btnStartTrailer = document.getElementById('btnStartTrailer');

const universalPlayer = document.getElementById('universalPlayer');
const universalPlayerContainer = document.getElementById('universalPlayerContainer');
const closeUniversal = document.querySelector('.close-universal');

// Função para abrir o modal de detalhes
function openModal(movie) {
    currentMovieForTrailer = movie;
    
    document.getElementById('modalTitle').innerText = movie.title;
    document.getElementById('modalYear').innerText = movie.year;
    document.getElementById('modalDuration').innerText = movie.duration;
    document.getElementById('modalRating').innerText = movie.rating;
    document.getElementById('modalDescription').innerText = movie.summary;
    document.getElementById('modalReview').innerText = movie.review;
    document.getElementById('modalPoster').innerHTML = `<img src="${movie.poster}" alt="${movie.title}" class="modal-img">`;
    
    if (modalTrailerOptions) modalTrailerOptions.classList.remove('show');
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

// Fechar Modal
if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Configuração de Opções (Visual)
const setupOptionButtons = (className) => {
    document.querySelectorAll(className).forEach(btn => {
        btn.addEventListener('click', () => {
            const group = btn.getAttribute('data-opt');
            document.querySelectorAll(`${className}[data-opt="${group}"]`).forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
};

setupOptionButtons('.opt-btn:not(.modal-opt)');
setupOptionButtons('.modal-opt');

// Iniciar Trailer (Universal)
const startTrailer = (trailerId, optionsClass) => {
    if (!trailerId) {
        alert("Trailer não disponível.");
        return;
    }

    const audioBtn = document.querySelector(`${optionsClass}[data-opt="audio"].active`);
    const subsBtn = document.querySelector(`${optionsClass}[data-opt="subs"].active`);
    
    const audio = audioBtn ? audioBtn.getAttribute('data-val') : 'pt';
    const subs = subsBtn ? subsBtn.getAttribute('data-val') : 'on';
    
    const langParam = audio === 'pt' ? 'pt' : 'en';
    const ccParam = subs === 'on' ? '1' : '0';
    
    universalPlayerContainer.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${trailerId}?autoplay=1&controls=1&rel=0&modestbranding=1&cc_load_policy=${ccParam}&hl=${langParam}&vq=hd1080" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
        </iframe>`;
    
    universalPlayer.style.display = 'flex';
    setTimeout(() => universalPlayer.classList.add('show'), 10);
    
    if (modalTrailerOptions) modalTrailerOptions.classList.remove('show');
    if (trailerOptions) trailerOptions.classList.remove('show');
};

// Eventos de Destaque
if (btnTrailerSetup) {
    btnTrailerSetup.addEventListener('click', (e) => {
        e.stopPropagation();
        trailerOptions.classList.toggle('show');
    });
}

if (btnStartTrailer) {
    btnStartTrailer.addEventListener('click', () => {
        startTrailer('sY1S34973zA', '.opt-btn:not(.modal-opt)');
    });
}

// Eventos do Modal
if (btnModalTrailerSetup) {
    btnModalTrailerSetup.addEventListener('click', (e) => {
        e.stopPropagation();
        modalTrailerOptions.classList.toggle('show');
    });
}

if (btnModalStartTrailer) {
    btnModalStartTrailer.addEventListener('click', () => {
        if (currentMovieForTrailer) {
            startTrailer(currentMovieForTrailer.trailer, '.modal-opt');
        }
    });
}

// Fechar Player Universal
if (closeUniversal) {
    closeUniversal.addEventListener('click', () => {
        universalPlayer.classList.remove('show');
        setTimeout(() => {
            universalPlayer.style.display = 'none';
            universalPlayerContainer.innerHTML = '';
        }, 500);
    });
}

// --- Lógica de Navegação e Inicialização ---

const btnVamosLa = document.getElementById('btnVamosLa');
const catalogSection = document.getElementById('catalog');
const heroSection = document.querySelector('.hero');
const catalogIntro = document.getElementById('catalogIntro');
const mainHeader = document.getElementById('mainHeader');

const loadCatalog = () => {
    if (catalogIntro && catalogSection && heroSection && mainHeader) {
        catalogIntro.style.display = 'flex';
        setTimeout(() => {
            catalogIntro.style.display = 'none';
            heroSection.style.display = 'none';
            catalogSection.style.display = 'block';
            mainHeader.classList.remove('hidden-logo');
            window.scrollTo(0, 0);
            renderMovies();
        }, 2000);
    }
};

if (btnVamosLa) {
    btnVamosLa.addEventListener('click', loadCatalog);
}

// Inicialização Geral
renderMovies();

// --- Theme & Settings ---
// (Mantendo lógica de tema e configurações se ainda existirem elementos)
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
}

console.log("MaRecording v4.7 - Sistema de Trailers Consolidado!");

// --- Theme Toggle Logic ---
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

if (themeToggle && sunIcon && moonIcon) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        } else {
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
        }
    });
}

// --- Settings Dropdown Logic ---
const settingsIcon = document.getElementById('settingsIcon');
const settingsMenu = document.getElementById('settingsMenu');

if (settingsIcon && settingsMenu) {
    settingsIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsMenu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!settingsMenu.contains(e.target) && e.target !== settingsIcon) {
            settingsMenu.classList.remove('show');
        }
    });
}

// --- Hero Background Grid Logic ---
const heroBgGrid = document.getElementById('heroBgGrid');

if (heroBgGrid) {
    let gridHtml = '';
    for (let i = 0; i < 100; i++) {
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        const posterUrl = randomMovie.poster.replace('/w500/', '/w300/');
        gridHtml += `<img src="${posterUrl}" alt="Poster" loading="lazy">`;
    }
    heroBgGrid.innerHTML = gridHtml;
}

console.log("MaRecording v4.6 - Sistema Completo & Verificado!");
