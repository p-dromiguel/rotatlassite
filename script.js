// Lista de destinos com coordenadas, nomes e descrições
const destinos = [
    {
        nome: 'Rio de Janeiro',
        lat: -22.9068, 
        lng: -43.1729, 
        descricao: 'O <a href="https://www.visitbrasil.com/pt/destinos/rio-de-janeiro.html" target="_blank">Rio de Janeiro</a> é famoso por suas belas praias, como Copacabana e Ipanema, além do icônico Cristo Redentor e o Pão de Açúcar. Não perca também o vibrante Carnaval, que é uma das maiores festas do mundo.'
    },
    {
        nome: 'Paris',
        lat: 48.8566, 
        lng: 2.3522, 
        descricao: '<a href="https://en.parisinfo.com/" target="_blank">Paris</a>, a Cidade Luz, é mundialmente conhecida por sua cultura, arte e gastronomia. Visite a Torre Eiffel, o Museu do Louvre, e a majestosa Catedral de Notre-Dame. Desfrute de um passeio romântico às margens do rio Sena.'
    },
    {
        nome: 'Tóquio',
        lat: 35.6895, 
        lng: 139.6917, 
        descricao: 'A vibrante <a href="https://www.gotokyo.org/en/" target="_blank">Tóquio</a> é uma fusão única de tradição e modernidade. Explore o bairro histórico de Asakusa e o templo Senso-ji, ou mergulhe na eletrizante vida urbana de Shibuya e Shinjuku. Não deixe de visitar o Palácio Imperial.'
    },
    {
        nome: 'Sydney',
        lat: -33.8688, 
        lng: 151.2093, 
        descricao: '<a href="https://www.sydney.com/" target="_blank">Sydney</a> é famosa pela <a href="https://www.sydneyoperahouse.com/" target="_blank">Ópera de Sydney</a> e pela icônica <a href="https://www.australia.com/en/places/sydney-and-surrounds/guide-to-bondi-beach.html" target="_blank">Bondi Beach</a>. Além disso, explore o Royal Botanic Garden e faça uma travessia pela Harbour Bridge para uma vista panorâmica da cidade.'
    },
    {
        nome: 'Nova York',
        lat: 40.7128, 
        lng: -74.0060, 
        descricao: 'Conheça <a href="https://www.nycgo.com/" target="_blank">Nova York</a>, a cidade que nunca dorme. Visite a Estátua da Liberdade, explore o Central Park e caminhe pela famosa Times Square. Para os amantes da arte, o Metropolitan Museum of Art é uma parada obrigatória.'
    },
    {
        nome: 'Londres',
        lat: 51.5074, 
        lng: -0.1278, 
        descricao: 'Londres é uma mistura fascinante de história e modernidade. Explore o <a href="https://www.hrp.org.uk/tower-of-london/" target="_blank">Tower of London</a>, caminhe ao longo do <a href="https://www.visitlondon.com/things-to-do/place/432783-thames-path" target="_blank">rio Tâmisa</a> e veja a troca da guarda no Palácio de Buckingham. Não perca o British Museum e o London Eye.'
    },
    {
        nome: 'Roma',
        lat: 41.9028, 
        lng: 12.4964, 
        descricao: 'A capital italiana, <a href="https://www.turismoroma.it/en" target="_blank">Roma</a>, oferece uma viagem através da história. Visite o icônico <a href="https://www.coopculture.it/en/colosseo-e-shop.cfm" target="_blank">Coliseu</a>, explore o Fórum Romano e a impressionante Basílica de São Pedro no Vaticano. Termine seu passeio jogando uma moeda na Fontana di Trevi.'
    },
    {
        nome: 'Buenos Aires',
        lat: -34.6037, 
        lng: -58.3816, 
        descricao: '<a href="https://turismo.buenosaires.gob.ar/en" target="_blank">Buenos Aires</a> é famosa por seu charme europeu, tango e arquitetura neoclássica. Não perca o bairro colorido de La Boca, a histórica Casa Rosada, e o sofisticado bairro da Recoleta, onde fica o famoso cemitério.'
    },
    {
        nome: 'Cairo',
        lat: 30.0444, 
        lng: 31.2357, 
        descricao: 'A capital do Egito, <a href="https://www.egypt.travel/en" target="_blank">Cairo</a>, é a porta de entrada para as majestosas Pirâmides de Gizé e a Grande Esfinge. Visite também o Museu Egípcio para ver a famosa máscara de Tutancâmon e outras relíquias faraônicas. O Rio Nilo, que atravessa a cidade, oferece cruzeiros inesquecíveis.'
    },
    {
        nome: 'Bangkok',
        lat: 13.7563, 
        lng: 100.5018, 
        descricao: '<a href="https://www.tourismthailand.org/About-Thailand/Destination/Bangkok" target="_blank">Bangkok</a>, a vibrante capital da Tailândia, é conhecida por seus templos ornamentados, como o Grand Palace e o Templo do Buda de Esmeralda. Explore os mercados de rua exóticos e a vida noturna animada. Não perca um passeio pelos canais, chamados de "Venice of the East".'
    }
];

// Inicializar o mapa com Leaflet.js
let map = L.map('map').setView([40.7128, -74.0060], 5);  // Mapa centralizado em Nova York

// Adiciona o layer do OpenStreetMap ao mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Função que move o mapa para um destino aleatório e exibe a descrição
function surpreendaMe() {
    const destinoAleatorio = destinos[Math.floor(Math.random() * destinos.length)];

    // Mover o mapa para o destino aleatório
    map.setView([destinoAleatorio.lat, destinoAleatorio.lng], 8);

    // Mostrar o nome do destino abaixo da mensagem original
    document.getElementById('nome-destino').innerHTML = `Que tal ir para ${destinoAleatorio.nome}?`;

    // Mostrar o texto descritivo do destino abaixo do nome
    document.getElementById('texto-gerado').innerHTML = destinoAleatorio.descricao;
}

destinos.forEach(destino => {
    let marker = L.marker([destino.lat, destino.lng]).addTo(map);

    marker.bindPopup(`
        <strong>${destino.nome}</strong><br>
        ${destino.descricao}
    `);
});