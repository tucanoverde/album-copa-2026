// Estrutura oficial Panini FIFA World Cup 2026 — 980 figurinhas
// 48 seleções × 20 + 20 especiais
// Nomes oficiais: Diamond Cards Online + Panini Brasil + Scanini

const ALBUM = {
  meta: { name: 'Panini FIFA World Cup 2026', totalStickers: 980, version: '2.0' },

  special: [
    { code: 'PANINI', label: 'Logo Panini' },
    { code: 'FWC 1', label: 'Troféu FIFA World Cup' },
    { code: 'FWC 2', label: 'Uruguai 1930' },
    { code: 'FWC 3', label: 'Itália 1934' },
    { code: 'FWC 4', label: 'Itália 1938' },
    { code: 'FWC 5', label: 'Uruguai 1950' },
    { code: 'FWC 6', label: 'Alemanha 1954' },
    { code: 'FWC 7', label: 'Brasil 1958' },
    { code: 'FWC 8', label: 'Brasil 1962' },
    { code: 'FWC 9', label: 'Inglaterra 1966' },
    { code: 'FWC 10', label: 'Brasil 1970' },
    { code: 'FWC 11', label: 'Alemanha 1974' },
    { code: 'FWC 12', label: 'Argentina 1978' },
    { code: 'FWC 13', label: 'Itália 1982' },
    { code: 'FWC 14', label: 'Argentina 1986' },
    { code: 'FWC 15', label: 'Alemanha 1990' },
    { code: 'FWC 16', label: 'Brasil 1994' },
    { code: 'FWC 17', label: 'França 1998' },
    { code: 'FWC 18', label: 'Brasil 2002' },
    { code: 'FWC 19', label: 'Campeões 2006-2022' },
  ],

  groups: [
    { id: 'A', name: 'Grupo A', teams: ['MEX', 'RSA', 'KOR', 'CZE'] },
    { id: 'B', name: 'Grupo B', teams: ['CAN', 'BIH', 'QAT', 'SUI'] },
    { id: 'C', name: 'Grupo C', teams: ['BRA', 'MAR', 'HAI', 'SCO'] },
    { id: 'D', name: 'Grupo D', teams: ['USA', 'PAR', 'AUS', 'TUR'] },
    { id: 'E', name: 'Grupo E', teams: ['GER', 'CUW', 'CIV', 'ECU'] },
    { id: 'F', name: 'Grupo F', teams: ['NED', 'JPN', 'SWE', 'TUN'] },
    { id: 'G', name: 'Grupo G', teams: ['BEL', 'EGY', 'KSA', 'NZL'] },
    { id: 'H', name: 'Grupo H', teams: ['ESP', 'CPV', 'IRN', 'URU'] },
    { id: 'I', name: 'Grupo I', teams: ['FRA', 'SEN', 'IRQ', 'NOR'] },
    { id: 'J', name: 'Grupo J', teams: ['ARG', 'ALG', 'AUT', 'JOR'] },
    { id: 'K', name: 'Grupo K', teams: ['POR', 'COD', 'UZB', 'COL'] },
    { id: 'L', name: 'Grupo L', teams: ['ENG', 'CRO', 'GHA', 'PAN'] },
  ],

  teams: {
    MEX: { name: 'México', flag: '🇲🇽', primary: '#006847', accent: '#ce1126' },
    RSA: { name: 'África do Sul', flag: '🇿🇦', primary: '#007749', accent: '#ffb612' },
    KOR: { name: 'Coreia do Sul', flag: '🇰🇷', primary: '#cd2e3a', accent: '#0047a0' },
    CZE: { name: 'Chéquia', flag: '🇨🇿', primary: '#11457e', accent: '#d7141a' },
    CAN: { name: 'Canadá', flag: '🇨🇦', primary: '#d52b1e', accent: '#ffffff' },
    BIH: { name: 'Bósnia e Herzegovina', flag: '🇧🇦', primary: '#002f6c', accent: '#fecb00' },
    QAT: { name: 'Catar', flag: '🇶🇦', primary: '#8a1538', accent: '#ffffff' },
    SUI: { name: 'Suíça', flag: '🇨🇭', primary: '#da291c', accent: '#ffffff' },
    BRA: { name: 'Brasil', flag: '🇧🇷', primary: '#009c3b', accent: '#ffdf00' },
    MAR: { name: 'Marrocos', flag: '🇲🇦', primary: '#c1272d', accent: '#006233' },
    HAI: { name: 'Haiti', flag: '🇭🇹', primary: '#00209f', accent: '#d21034' },
    SCO: { name: 'Escócia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', primary: '#0065bd', accent: '#ffffff' },
    USA: { name: 'Estados Unidos', flag: '🇺🇸', primary: '#bf0a30', accent: '#002868' },
    PAR: { name: 'Paraguai', flag: '🇵🇾', primary: '#d52b1e', accent: '#0038a8' },
    AUS: { name: 'Austrália', flag: '🇦🇺', primary: '#012169', accent: '#ffcd00' },
    TUR: { name: 'Türkiye', flag: '🇹🇷', primary: '#e30a17', accent: '#ffffff' },
    GER: { name: 'Alemanha', flag: '🇩🇪', primary: '#000000', accent: '#dd0000' },
    CUW: { name: 'Curaçao', flag: '🇨🇼', primary: '#002b7f', accent: '#f9e814' },
    CIV: { name: 'Costa do Marfim', flag: '🇨🇮', primary: '#f77f00', accent: '#009e60' },
    ECU: { name: 'Equador', flag: '🇪🇨', primary: '#ffd100', accent: '#003893' },
    NED: { name: 'Países Baixos', flag: '🇳🇱', primary: '#ae1c28', accent: '#21468b' },
    JPN: { name: 'Japão', flag: '🇯🇵', primary: '#bc002d', accent: '#ffffff' },
    SWE: { name: 'Suécia', flag: '🇸🇪', primary: '#006aa7', accent: '#fecc00' },
    TUN: { name: 'Tunísia', flag: '🇹🇳', primary: '#e70013', accent: '#ffffff' },
    BEL: { name: 'Bélgica', flag: '🇧🇪', primary: '#ed2939', accent: '#fae042' },
    EGY: { name: 'Egito', flag: '🇪🇬', primary: '#ce1126', accent: '#000000' },
    KSA: { name: 'Arábia Saudita', flag: '🇸🇦', primary: '#006c35', accent: '#ffffff' },
    NZL: { name: 'Nova Zelândia', flag: '🇳🇿', primary: '#012169', accent: '#c8102e' },
    ESP: { name: 'Espanha', flag: '🇪🇸', primary: '#aa151b', accent: '#f1bf00' },
    CPV: { name: 'Cabo Verde', flag: '🇨🇻', primary: '#003893', accent: '#cf2027' },
    IRN: { name: 'Irã', flag: '🇮🇷', primary: '#239f40', accent: '#da0000' },
    URU: { name: 'Uruguai', flag: '🇺🇾', primary: '#0038a8', accent: '#fcd116' },
    FRA: { name: 'França', flag: '🇫🇷', primary: '#0055a4', accent: '#ef4135' },
    SEN: { name: 'Senegal', flag: '🇸🇳', primary: '#00853f', accent: '#fdef42' },
    IRQ: { name: 'Iraque', flag: '🇮🇶', primary: '#ce1126', accent: '#000000' },
    NOR: { name: 'Noruega', flag: '🇳🇴', primary: '#ba0c2f', accent: '#00205b' },
    ARG: { name: 'Argentina', flag: '🇦🇷', primary: '#74acdf', accent: '#f6b40e' },
    ALG: { name: 'Argélia', flag: '🇩🇿', primary: '#006233', accent: '#d21034' },
    AUT: { name: 'Áustria', flag: '🇦🇹', primary: '#ed2939', accent: '#ffffff' },
    JOR: { name: 'Jordânia', flag: '🇯🇴', primary: '#007a3d', accent: '#ce1126' },
    POR: { name: 'Portugal', flag: '🇵🇹', primary: '#006600', accent: '#ff0000' },
    COD: { name: 'R.D. Congo', flag: '🇨🇩', primary: '#007fff', accent: '#f7d618' },
    UZB: { name: 'Uzbequistão', flag: '🇺🇿', primary: '#1eb53a', accent: '#0099b5' },
    COL: { name: 'Colômbia', flag: '🇨🇴', primary: '#fcd116', accent: '#003893' },
    ENG: { name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', primary: '#ce1124', accent: '#012169' },
    CRO: { name: 'Croácia', flag: '🇭🇷', primary: '#ff0000', accent: '#012169' },
    GHA: { name: 'Gana', flag: '🇬🇭', primary: '#ce1126', accent: '#fcd116' },
    PAN: { name: 'Panamá', flag: '🇵🇦', primary: '#005293', accent: '#d21034' },
  },

  // Roster oficial: 18 jogadores + escudo (1) + foto time (13)
  // Fonte: Diamond Cards Online checklist
  rosters: {
    MEX: ['Escudo','Luis Malagón','Johan Vasquez','Jorge Sánchez','Cesar Montes','Jesus Gallardo','Israel Reyes','Diego Lainez','Carlos Rodriguez','Edson Alvarez','Orbelin Pineda','Marcel Ruiz','Foto Time','Érick Sánchez','Hirving Lozano','Santiago Giménez','Raúl Jiménez','Alexis Vega','Roberto Alvarado','Cesar Huerta'],
    RSA: ['Escudo','Ronwen Williams','Sipho Chaine','Aubrey Modiba','Samukele Kabini','Mbekezeli Mbokazi','Khulumani Ndamane','Siyabonga Ngezana','Khuliso Mudau','Nkosinathi Sibisi','Teboho Mokoena','Thalente Mbatha','Foto Time','Bathasi Aubaas','Yaya Sithole','Sipho Mbule','Lyle Foster','Iqraam Rayners','Mohau Nkota','Oswin Appollis'],
    KOR: ['Escudo','Hyeon-woo Jo','Seung-Gyu Kim','Min-jae Kim','Yu-min Cho','Young-woo Seol','Han-beom Lee','Tae-seok Lee','Myung-jae Lee','Jae-sung Lee','In-beom Hwang','Kang-in Lee','Foto Time','Seung-ho Paik','Jens Castrop','Dongg-yeong Lee','Gue-sung Cho','Heung-min Son','Hee-chan Hwang','Hyeon-Gyu Oh'],
    CZE: ['Escudo','Matej Kovar','Jindrich Stanek','Ladislav Krejci','Vladimir Coufal','Jaroslav Zeleny','Tomas Holes','David Zima','Michal Sadilek','Lukas Provod','Lukas Cerv','Tomas Soucek','Foto Time','Pavel Sulc','Matej Vydra','Vasil Kusej','Tomas Chory','Vaclav Cerny','Adam Hlozek','Patrik Schick'],
    CAN: ['Escudo','Dayne St.Clair','Alphonso Davies','Alistair Johnston','Samuel Adekugbe','Riche Larvea','Derek Cornelius','Moïse Bombito','Kamal Miller','Stephen Eustáquio','Ismaël Koné','Jonathan Osorio','Foto Time','Jacob Shaffelburg','Mathieu Choinière','Niko Sigur','Tajon Buchanan','Liam Millar','Cyle Larin','Jonathan David'],
    BIH: ['Escudo','Nikola Vasilj','Amer Dedic','Sead Kolasinac','Tarik Muharemovic','Nihad Mujakic','Nikola Katic','Amir Hadziahmetovic','Benjamin Tahirovic','Armin Gigovic','Ivan Sunjic','Ivan Basic','Foto Time','Dzenis Burnic','Esmir Bajraktarevic','Amar Memic','Ermedin Demirovic','Edin Dzeko','Samed Bazdar','Haris Tabakovic'],
    QAT: ['Escudo','Meshaal Barsham','Sultan Albrake','Lucas Mendes','Homam Ahmed','Boualem Khoukhi','Pedro Miguel','Tarek Salman','Mohamed Al-Mannai','Karim Boudiaf','Assim Madibo','Ahmed Fatehi','Foto Time','Mohammed Waad','Abdulaziz Hatem','Hassan Al-Haydos','Edmilson Junior','Akram Hassan Afif','Ahmed Al Ganehi','Almoez Ali'],
    SUI: ['Escudo','Gregor Kobel','Yvon Mvogo','Manuel Akanji','Ricardo Rodriguez','Nico Elvedi','Aurèle Amenda','Silvan Widmer','Granit Xhaka','Denis Zakaria','Remo Freuler','Fabian Rieder','Foto Time','Ardon Jashari','Johan Manzambi','Michel Aebischer','Breel Embolo','Ruben Vargas','Dan Ndoye','Zeki Amdouni'],
    BRA: ['Escudo','Alisson','Bento','Marquinhos','Éder Militão','Gabriel Magalhães','Danilo','Wesley','Lucas Paquetá','Casemiro','Bruno Guimarães','Luiz Henrique','Foto Time','Vinicius Júnior','Rodrygo','João Pedro','Matheus Cunha','Gabriel Martinelli','Raphinha','Estêvão'],
    MAR: ['Escudo','Yassine Bounou','Munir El Kajoui','Achraf Hakimi','Noussair Mazraoui','Nayef Aguerd','Romain Saiss','Jawad El Yamiq','Adam Masina','Sofyan Amrabat','Azzedine Ounahi','Eliesse Ben Seghir','Foto Time','Bilal El Khannouss','Ismael Saibari','Youssef En-Nesyri','Abde Ezzalzouli','Soufiane Rahimi','Brahim Diaz','Ayoub El Kaabi'],
    HAI: ['Escudo','Johny Placide','Carlens Arcus','Martin Expérience','Jean-Kevin Duverne','Ricardo Adé','Duke Lacroix','Garven Metusala','Hannes Delcroix','Leverton Pierre','Danley Jean Jacques','Jean-Ricner Bellegarde','Foto Time','Christopher Attys','Derrick Etienne Jr','Josue Casimir','Ruben Providence','Duckens Nazon','Louicius Deedson','Frantzdy Pierrot'],
    SCO: ['Escudo','Angus Gunn','Jack Hendry','Kieran Tierney','Aaron Hickey','Andrew Robertson','Scott McKenna','John Souttar','Anthony Ralston','Grant Hanley','Scott McTominay','Billy Gilmour','Foto Time','Lewis Ferguson','Ryan Christie','Kenny McLean','John McGinn','Lyndon Dykes','Che Adams','Ben Gannon-Doak'],
    USA: ['Escudo','Matt Freese','Chris Richards','Tim Ream','Mark McKenzie','Alex Freeman','Antonee Robinson','Tyler Adams','Tanner Tessmann','Weston McKennie','Christian Roldan','Timothy Weah','Foto Time','Diego Luna','Malik Tillman','Christian Pulisic','Brenden Aaronson','Ricardo Pepi','Haji Wright','Folarin Balogun'],
    PAR: ['Escudo','Roberto Fernandez','Orlando Gill','Gustavo Gomez','Fabián Balbuena','Juan José Cáceres','Omar Alderete','Junior Alonso','Mathías Villasanti','Diego Gomez','Damián Bobadilla','Andres Cubas','Foto Time','Matias Galarza Fonda','Julio Enciso','Alejandro Romero Gamarra','Miguel Almirón','Ramon Sosa','Angel Romero','Antonio Sanabria'],
    AUS: ['Escudo','Mathew Ryan','Joe Gauci','Harry Souttar','Alessandro Circati','Jordan Bos','Aziz Behich','Cameron Burgess','Lewis Miller','Milos Degenek','Jackson Irvine','Riley McGree','Foto Time','Aiden O\'Neill','Connor Metcalfe','Patrick Yazbek','Craig Goodwin','Kusini Yengi','Nestory Irankunda','Mohamed Touré'],
    TUR: ['Escudo','Ugurcan Cakir','Mert Muldur','Zeki Celik','Abdulkerim Bardakci','Caglar Soyuncu','Merih Demiral','Ferdi Kadioglu','Kaan Ayhan','Ismail Yuksek','Hakan Calhanoglu','Orkun Kokcu','Foto Time','Arda Guler','Irfan Can Kahveci','Yunus Akgun','Can Uzun','Baris Alper Yilmaz','Kerem Akturkoglu','Kenan Yildiz'],
    GER: ['Escudo','Marc-André ter Stegen','Jonathan Tah','David Raum','Nico Schlotterbeck','Antonio Rüdiger','Waldemar Anton','Ridle Baku','Maximilian Mittelstadt','Joshua Kimmich','Florian Wirtz','Felix Nmecha','Foto Time','Leon Goretzka','Jamal Musiala','Serge Gnabry','Kai Havertz','Leroy Sané','Karim Adeyemi','Nick Woltemade'],
    CUW: ['Escudo','Eloy Room','Armando Obispo','Sherel Floranus','Jurien Gaari','Joshua Brenet','Roshon Van Eijma','Shurandy Sambo','Livano Comenencia','Godfried Roemeratoe','Juninho Bacuna','Leandro Bacuna','Foto Time','Tahith Chong','Kenji Gorre','Jearl Margaritha','Jurgen Locadia','Jeremy Antonisse','Gervane Kastaneer','Sontje Hansen'],
    CIV: ['Escudo','Yahia Fofana','Ghislain Konan','Wilfried Singo','Odilon Kossounou','Evan Ndicka','Willy Boly','Emmanuel Agbadou','Ousmane Diomande','Franck Kessie','Seko Fofana','Ibrahim Sangare','Foto Time','Jean-Philippe Gbamin','Amad Diallo','Sébastien Haller','Simon Adingra','Yan Diomande','Evann Guessand','Oumar Diakite'],
    ECU: ['Escudo','Hernán Galíndez','Gonzalo Valle','Piero Hincapié','Pervis Estupiñán','Willian Pacho','Ángelo Preciado','Joel Ordóñez','Moisés Caicedo','Alan Franco','Kendry Páez','Pedro Vite','Foto Time','John Yeboah','Leonardo Campana','Gonzalo Plata','Nilson Angulo','Alan Minda','Kevin Rodriguez','Enner Valencia'],
    NED: ['Escudo','Bart Verbruggen','Virgil van Dijk','Micky van de Ven','Jurriën Timber','Denzel Dumfries','Nathan Aké','Jeremie Frimpong','Jan Paul van Hecke','Tijjani Reijnders','Ryan Gravenberch','Teun Koopmeiners','Foto Time','Frenkie de Jong','Xavi Simons','Justin Kluivert','Memphis Depay','Donyell Malen','Wout Weghorst','Cody Gakpo'],
    JPN: ['Escudo','Zion Suzuki','Henry Heroki Mochizuki','Ayumu Seko','Junnosuke Suzuki','Shogo Taniguchi','Tsuyoshi Watanabe','Kaishu Sano','Yuki Soma','Ao Tanaka','Daichi Kamada','Takefusa Kubo','Foto Time','Ritsu Doan','Keito Nakamura','Takumi Minamino','Shuto Machino','Junya Ito','Koki Ogawa','Ayase Ueda'],
    SWE: ['Escudo','Victor Johansson','Isak Hien','Gabriel Gudmundsson','Emil Holm','Victor Nilsson Lindelöf','Gustaf Lagerbielke','Lucas Bergvall','Hugo Larsson','Jesper Karlström','Yasin Ayari','Mattias Svanberg','Foto Time','Daniel Svensson','Ken Sema','Roony Bardghji','Dejan Kulusevski','Anthony Elanga','Alexander Isak','Viktor Gyökeres'],
    TUN: ['Escudo','Bechir Ben Said','Aymen Dahmen','Yan Valery','Montassar Talbi','Yassine Meriah','Ali Abdi','Dylan Bronn','Ellyes Skhiri','Aïssa Laïdouni','Ferjani Sassi','Mohamed Ali Ben Romdhane','Foto Time','Hannibal Mejbri','Elias Achouri','Elias Saad','Hazem Mastouri','Ismael Gharbi','Sayfallah Ltaief','Naim Sliti'],
    BEL: ['Escudo','Thibaut Courtois','Arthur Theate','Timothy Castagne','Zeno Debast','Brandon Mechele','Maxim De Cuyper','Thomas Meunier','Youri Tielemans','Amadou Onana','Nicolas Raskin','Alexis Saelemaekers','Foto Time','Hans Vanaken','Kevin De Bruyne','Jérémy Doku','Charles De Ketelaere','Leandro Trossard','Loïs Openda','Romelu Lukaku'],
    EGY: ['Escudo','Mohamed El Shenawy','Mohamed Hany','Mohamed Hamdy','Yasser Ibrahim','Khaled Sobhi','Ramy Rabia','Hossam Abdelmaguid','Ahmed Fatouh','Marwan Attia','Zizo','Hamdy Fathy','Foto Time','Mohamed Lasheen','Emam Ashour','Osama Faisal','Mohamed Salah','Mostafa Mohamed','Trezeguet','Omar Marmoush'],
    KSA: ['Escudo','Nawaf Alaqidi','Abdulrahman Al-Sanbi','Saud Abdulhamid','Nawaf Bouwashl','Jihad Thakri','Moteb Al-Harbi','Hassan Altambakti','Musab Aljuwayr','Ziyad Aljohani','Abdullah Alkhaibari','Nasser Aldawsari','Foto Time','Saleh Abu Alshamat','Marwan Alsahafi','Salem Aldawsari','Abdulrahman Al-Aboud','Feras Akbrikan','Saleh Alshehri','Abdullah Al-Hamdan'],
    NZL: ['Escudo','Max Crocombe','Alex Paulsen','Michael Boxall','Liberato Cacace','Tim Payne','Tyler Bindon','Francis de Vries','Finn Surman','Joe Bell','Sarpreet Singh','Ryan Thomas','Foto Time','Matthew Garbett','Marko Stamenić','Ben Old','Chris Wood','Elijah Just','Callum McCowatt','Kosta Barbarouses'],
    ESP: ['Escudo','Unai Simón','Robin Le Normand','Aymeric Laporte','Dean Huijsen','Pedro Porro','Dani Carvajal','Marc Cucurella','Martín Zubimendi','Rodri','Pedri','Fabián Ruiz','Foto Time','Mikel Merino','Lamine Yamal','Dani Olmo','Nico Williams','Ferran Torres','Álvaro Morata','Mikel Oyarzabal'],
    CPV: ['Escudo','Vozinha','Logan Costa','Pico','Diney','Steven Moreira','Wagner Pina','João Paulo','Yannick Semedo','Kevin Pina','Patrick Andrade','Jamiro Monteiro','Foto Time','Deroy Duarte','Garry Rodrigues','Jovane Cabral','Ryan Mendes','Dailon Livramento','Willy Semedo','Bebé'],
    IRN: ['Escudo','Alireza Beiranvand','Morteza Pouraliganji','Ehsan Hajsafi','Milad Mohammadi','Shojae Khalilzadeh','Ramin Rezaeian','Hossein Kanaani','Sadegh Moharrami','Saleh Hardani','Saeed Ezatolahi','Saman Ghoddos','Foto Time','Omid Noorafkan','Roozbeh Cheshmi','Mohammad Mohebi','Sardar Azmoun','Mehdi Taremi','Alireza Jahanbakhsh','Ali Gholizadeh'],
    URU: ['Escudo','Sergio Rochet','Santiago Mele','Ronald Araujo','José María Giménez','Sebastian Caceres','Mathias Olivera','Guillermo Varela','Nahitan Nandez','Federico Valverde','Giorgian De Arrascaeta','Rodrigo Bentancur','Foto Time','Manuel Ugarte','Nicolás de la Cruz','Maxi Araújo','Darwin Núñez','Federico Viñas','Rodrigo Aguirre','Facundo Pellistri'],
    FRA: ['Escudo','Mike Maignan','Theo Hernandez','William Saliba','Jules Koundé','Ibrahima Konaté','Dayot Upamecano','Lucas Digne','Aurélien Tchouaméni','Eduardo Camavinga','Manu Koné','Adrien Rabiot','Foto Time','Michael Olise','Ousmane Dembélé','Bradley Barcola','Désiré Doué','Kingsley Coman','Hugo Ekitike','Kylian Mbappé'],
    SEN: ['Escudo','Edouard Mendy','Yehvann Diouf','Moussa Niakhaté','Abdoulaye Seck','Ismail Jakobs','El Hadji Malick Diouf','Kalidou Koulibaly','Idrissa Gana Gueye','Pape Matar Sarr','Pape Gueye','Habib Diarra','Foto Time','Lamine Camara','Sadio Mané','Ismaïla Sarr','Boulaye Dia','Iliman Ndiaye','Nicolas Jackson','Krépin Diatta'],
    IRQ: ['Escudo','Jalal Hassan','Rebin Sulaka','Hussein Ali','Akam Hashem','Merchas Doski','Zaid Tahseen','Manaf Younis','Zidane Iqbal','Amir Al-Ammari','Ibrahim Bayesh','Ali Jasim','Foto Time','Youssef Amyn','Aymen Hussein','Marko Farji','Osama Rashid','Ali Al-Hamadi','Aymen Hussein','Mohanad Ali'],
    NOR: ['Escudo','Ørjan Nyland','Julian Ryerson','Leo Østigård','Kristoffer Vassbakk Ajer','Marcus Holmgren Pedersen','David Møller Wolfe','Torbjørn Heggem','Morten Thorsby','Martin Ødegaard','Sander Berge','Andreas Schjelderup','Foto Time','Patrick Berg','Erling Haaland','Alexander Sørloth','Aron Dønnum','Jørgen Strand Larsen','Antonio Nusa','Oscar Bobb'],
    ARG: ['Escudo','Emiliano Martínez','Nahuel Molina','Cristian Romero','Nicolás Otamendi','Nicolás Tagliafico','Leonardo Balerdi','Enzo Fernández','Alexis Mac Allister','Rodrigo De Paul','Exequiel Palacios','Leandro Paredes','Foto Time','Nico Paz','Franco Mastantuono','Nico González','Lionel Messi','Lautaro Martínez','Julián Álvarez','Giuliano Simeone'],
    ALG: ['Escudo','Alexis Guendouz','Ramy Bensebaini','Youcef Atal','Rayan Aït-Nouri','Mohamed Amine Tougai','Aïssa Mandi','Ismael Bennacer','Houssem Aouar','Hicham Boudaoui','Ramiz Zerrouki','Nabil Bentaleb','Foto Time','Farès Chaïbi','Riyad Mahrez','Saïd Benrahma','Anis Hadj Moussa','Amine Gouiri','Baghdad Bounedjah','Mohamed Amoura'],
    AUT: ['Escudo','Alexander Schlager','Patrick Pentz','David Alaba','Kevin Danso','Philipp Lienhart','Stefan Posch','Phillipp Mwene','Alexander Prass','Xaver Schlager','Marcel Sabitzer','Konrad Laimer','Foto Time','Florian Grillitsch','Nicolas Seiwald','Romano Schmid','Patrick Wimmer','Christoph Baumgartner','Michael Gregoritsch','Marko Arnautović'],
    JOR: ['Escudo','Yazeed Abulaila','Ihsan Haddad','Mohammad Abu Hashish','Yazan Al-Arab','Abdallah Nasib','Saleem Obaid','Mohammad Abualnadi','Ibrahim Saadeh','Nizar Al-Rashdan','Noor Al-Rawabdeh','Mohannad Abu Taha','Foto Time','Amer Jamous','Mousa Al-Tamari','Yazan Al-Naimat','Mahmoud Al-Mardi','Ali Olwan','Mohammad Abu Zrayq','Ibrahim Sabra'],
    POR: ['Escudo','Diogo Costa','José Sá','Rúben Dias','João Cancelo','Diogo Dalot','Nuno Mendes','Gonçalo Inácio','Bernardo Silva','Bruno Fernandes','Rúben Neves','Vitinha','Foto Time','João Neves','Cristiano Ronaldo','Francisco Trincão','João Félix','Gonçalo Ramos','Pedro Neto','Rafael Leão'],
    COD: ['Escudo','Lionel Mpasi','Aaron Wan-Bissaka','Axel Tuanzebe','Arthur Masuaku','Chancel Mbemba','Joris Kayembe','Charles Pickel','Ngal\'ayel Mukau','Edo Kayembe','Samuel Moutoussamy','Noah Sadiki','Foto Time','Théo Bongonda','Meschack Elia','Yoane Wissa','Brian Cipenga','Fiston Mayele','Cédric Bakambu','Nathanaël Mbuku'],
    UZB: ['Escudo','Utkir Yusupov','Farrukh Sayfiev','Sherzod Nasrullaev','Umar Eshmurodov','Husniddin Aliqulov','Rustamjon Ashurmatov','Khojiakbar Alijonov','Abdukodir Khusanov','Odiljon Hamrobekov','Otabek Shukurov','Jamshid Iskanderov','Foto Time','Azizbek Turgunboev','Khojimat Erkinov','Eldor Shomurodov','Oston Urunov','Jaloliddin Masharipov','Igor Sergeev','Abbosbek Fayzullaev'],
    COL: ['Escudo','Camilo Vargas','David Ospina','Dávinson Sánchez','Yerry Mina','Daniel Muñoz','Johan Mojica','Jhon Lucumí','Santiago Arias','Jefferson Lerma','Kevin Castaño','Richard Ríos','Foto Time','James Rodríguez','Juan Fernando Quintero','Jorge Carrascal','Jhon Arias','Jhon Córdoba','Luis Suárez','Luis Díaz'],
    ENG: ['Escudo','Jordan Pickford','John Stones','Marc Guéhi','Ezri Konsa','Trent Alexander-Arnold','Reece James','Dan Burn','Jordan Henderson','Declan Rice','Jude Bellingham','Cole Palmer','Foto Time','Morgan Rogers','Anthony Gordon','Phil Foden','Bukayo Saka','Harry Kane','Marcus Rashford','Ollie Watkins'],
    CRO: ['Escudo','Dominik Livaković','Duje Ćaleta-Car','Joško Gvardiol','Josip Stanišić','Luka Vušković','Josip Šutalo','Kristijan Jakić','Luka Modrić','Mateo Kovačić','Martin Baturina','Lovro Majer','Foto Time','Mario Pašalić','Petar Sučić','Ivan Perišić','Marco Pašalić','Ante Budimir','Andrej Kramarić','Franjo Ivanović'],
    GHA: ['Escudo','Lawrence Ati Zigi','Tariq Lamptey','Mohammed Salisu','Alidu Seidu','Alexander Djiku','Gideon Mensah','Caleb Yirenkyi','Abdul Issahaku Fatawu','Thomas Partey','Salis Abdul Samed','Kamaldeen Sulemana','Foto Time','Mohammed Kudus','Iñaki Williams','Jordan Ayew','Andre Ayew','Joseph Paintsil','Osman Bukari','Antoine Semenyo'],
    PAN: ['Escudo','Orlando Mosquera','Luis Mejía','Fidel Escobar','Andrés Andrade','Michael Amir Murillo','Eric Davis','José Córdoba','César Blackman','Cristian Martínez','Aníbal Godoy','Adalberto Carrasquilla','Foto Time','Édgar Bárcenas','Carlos Harvey','Ismael Díaz','José Fajardo','Cecilio Waterman','José Luis Rodríguez','Alberto Quintero'],
  },
};

function stickerLabel(teamCode, n) {
  const roster = ALBUM.rosters[teamCode];
  return roster ? roster[n - 1] : `#${n}`;
}

function allStickers() {
  const list = [];
  for (const s of ALBUM.special) list.push({ section: 'ESP', code: s.code, label: s.label });
  for (const g of ALBUM.groups) {
    for (const teamCode of g.teams) {
      for (let n = 1; n <= 20; n++) {
        list.push({
          section: g.id, team: teamCode, code: `${teamCode} ${n}`, n,
          label: stickerLabel(teamCode, n),
        });
      }
    }
  }
  return list;
}

// ====================================================================
// USUÁRIOS FIXOS (login com senha)
// ====================================================================
const USERS = {
  gafe:  { key: 'gafe',  name: 'Gabriela & Felipe', emoji: '👫', color: '#e91e63', password: 'gafe123' },
  lucas: { key: 'lucas', name: 'Lucas',             emoji: '⚽', color: '#2196f3', password: 'lucas123' },
  jp:    { key: 'jp',    name: 'João Pedro',        emoji: '🦁', color: '#ff9800', password: 'jp123' },
  rafa:  { key: 'rafa',  name: 'Rafa',              emoji: '🚀', color: '#9c27b0', password: 'rafa123' },
};

// ====================================================================
// PENALIDADES (castigos divertidos pra última colocada do bolão)
// ====================================================================
const PENALIDADES = {
  fase_grupos: [
    { id: 'p1',  emoji: '🎤', titulo: 'Cantar funk no jantar de família', desc: 'Tem que ser de pé e com coreografia' },
    { id: 'p2',  emoji: '🍦', titulo: 'Pagar sorvete pros 3 ganhadores',  desc: 'No sabor que cada um escolher' },
    { id: 'p3',  emoji: '🧽', titulo: 'Lavar louça por 3 dias seguidos',   desc: 'Sem reclamar e sem deixar pra mãe' },
    { id: 'p4',  emoji: '🥒', titulo: 'Comer brigadeiro com mostarda',     desc: 'Um colher cheia. Gravado em vídeo!' },
    { id: 'p5',  emoji: '🤠', titulo: 'Falar com sotaque texano 1 dia',    desc: '24h sem sair do personagem' },
    { id: 'p6',  emoji: '👕', titulo: 'Usar camisa do time rival no almoço de domingo', desc: 'Foto obrigatória pro grupo' },
    { id: 'p7',  emoji: '🕺', titulo: 'Dancinha do TikTok no shopping',     desc: 'Pelo menos 30 segundos no meio do corredor' },
    { id: 'p8',  emoji: '📞', titulo: 'Ligar pra avó cantando parabéns',    desc: 'Em qualquer dia que não seja aniversário dela' },
  ],
  fase_final: [
    { id: 'pf1', emoji: '🍕', titulo: 'Pagar uma pizza inteira pros ganhadores', desc: 'Tamanho família, sabor escolhido pelos vencedores' },
    { id: 'pf2', emoji: '🎬', titulo: 'Pagar o cinema (+pipoca) pros 3',        desc: 'Filme escolhido pelo vencedor do bolão' },
    { id: 'pf3', emoji: '🤡', titulo: 'Ir fantasiado de palhaço no shopping',   desc: 'Maquiagem completa, andar por 30 minutos' },
    { id: 'pf4', emoji: '🎂', titulo: 'Bolo na cara — vídeo pra família toda',  desc: 'O vencedor escolhe a hora' },
    { id: 'pf5', emoji: '🐔', titulo: 'Imitar galinha por 1 minuto no jantar',  desc: 'Cocoricó completo. Quem rir mais ganha' },
  ],
};

// ====================================================================
// CALENDÁRIO OFICIAL — 104 jogos FIFA World Cup 2026
// Fonte: openfootball/worldcup.json (domínio público)
// Times mapeados pros códigos de 3 letras do álbum
// ====================================================================
const TEAM_MAP = {
  'Mexico': 'MEX', 'South Africa': 'RSA', 'South Korea': 'KOR', 'Czech Republic': 'CZE',
  'Canada': 'CAN', 'Bosnia & Herzegovina': 'BIH', 'Qatar': 'QAT', 'Switzerland': 'SUI',
  'Brazil': 'BRA', 'Morocco': 'MAR', 'Haiti': 'HAI', 'Scotland': 'SCO',
  'USA': 'USA', 'Paraguay': 'PAR', 'Australia': 'AUS', 'Turkey': 'TUR',
  'Germany': 'GER', 'Curaçao': 'CUW', 'Ivory Coast': 'CIV', 'Ecuador': 'ECU',
  'Netherlands': 'NED', 'Japan': 'JPN', 'Sweden': 'SWE', 'Tunisia': 'TUN',
  'Belgium': 'BEL', 'Egypt': 'EGY', 'Iran': 'IRN', 'New Zealand': 'NZL',
  'Spain': 'ESP', 'Cape Verde': 'CPV', 'Saudi Arabia': 'KSA', 'Uruguay': 'URU',
  'France': 'FRA', 'Senegal': 'SEN', 'Iraq': 'IRQ', 'Norway': 'NOR',
  'Argentina': 'ARG', 'Algeria': 'ALG', 'Austria': 'AUT', 'Jordan': 'JOR',
  'Portugal': 'POR', 'DR Congo': 'COD', 'Uzbekistan': 'UZB', 'Colombia': 'COL',
  'England': 'ENG', 'Croatia': 'CRO', 'Ghana': 'GHA', 'Panama': 'PAN',
};

// Lista crua dos jogos (será populada via fetch ou hard-coded abaixo)
const MATCHES = [
  // ============ FASE DE GRUPOS (72 jogos) ============
  { id: 1,  round: 'group', group: 'A', date: '2026-06-11', time: '13:00', tz: 'UTC-6', t1: 'MEX', t2: 'RSA', city: 'Mexico City' },
  { id: 2,  round: 'group', group: 'A', date: '2026-06-11', time: '20:00', tz: 'UTC-6', t1: 'KOR', t2: 'CZE', city: 'Guadalajara' },
  { id: 3,  round: 'group', group: 'B', date: '2026-06-12', time: '15:00', tz: 'UTC-4', t1: 'CAN', t2: 'BIH', city: 'Toronto' },
  { id: 4,  round: 'group', group: 'D', date: '2026-06-12', time: '18:00', tz: 'UTC-7', t1: 'USA', t2: 'PAR', city: 'Los Angeles' },
  { id: 5,  round: 'group', group: 'B', date: '2026-06-13', time: '12:00', tz: 'UTC-7', t1: 'QAT', t2: 'SUI', city: 'San Francisco' },
  { id: 6,  round: 'group', group: 'C', date: '2026-06-13', time: '18:00', tz: 'UTC-4', t1: 'BRA', t2: 'MAR', city: 'New York/NJ' },
  { id: 7,  round: 'group', group: 'C', date: '2026-06-13', time: '21:00', tz: 'UTC-4', t1: 'HAI', t2: 'SCO', city: 'Boston' },
  { id: 8,  round: 'group', group: 'D', date: '2026-06-13', time: '21:00', tz: 'UTC-7', t1: 'AUS', t2: 'TUR', city: 'Vancouver' },
  { id: 9,  round: 'group', group: 'E', date: '2026-06-14', time: '12:00', tz: 'UTC-5', t1: 'GER', t2: 'CUW', city: 'Houston' },
  { id: 10, round: 'group', group: 'F', date: '2026-06-14', time: '15:00', tz: 'UTC-5', t1: 'NED', t2: 'JPN', city: 'Dallas' },
  { id: 11, round: 'group', group: 'E', date: '2026-06-14', time: '19:00', tz: 'UTC-4', t1: 'CIV', t2: 'ECU', city: 'Philadelphia' },
  { id: 12, round: 'group', group: 'F', date: '2026-06-14', time: '20:00', tz: 'UTC-6', t1: 'SWE', t2: 'TUN', city: 'Monterrey' },
  { id: 13, round: 'group', group: 'H', date: '2026-06-15', time: '12:00', tz: 'UTC-4', t1: 'ESP', t2: 'CPV', city: 'Atlanta' },
  { id: 14, round: 'group', group: 'G', date: '2026-06-15', time: '12:00', tz: 'UTC-7', t1: 'BEL', t2: 'EGY', city: 'Seattle' },
  { id: 15, round: 'group', group: 'H', date: '2026-06-15', time: '18:00', tz: 'UTC-4', t1: 'KSA', t2: 'URU', city: 'Miami' },
  { id: 16, round: 'group', group: 'G', date: '2026-06-15', time: '18:00', tz: 'UTC-7', t1: 'IRN', t2: 'NZL', city: 'Los Angeles' },
  { id: 17, round: 'group', group: 'I', date: '2026-06-16', time: '15:00', tz: 'UTC-4', t1: 'FRA', t2: 'SEN', city: 'New York/NJ' },
  { id: 18, round: 'group', group: 'I', date: '2026-06-16', time: '18:00', tz: 'UTC-4', t1: 'IRQ', t2: 'NOR', city: 'Boston' },
  { id: 19, round: 'group', group: 'J', date: '2026-06-16', time: '20:00', tz: 'UTC-5', t1: 'ARG', t2: 'ALG', city: 'Kansas City' },
  { id: 20, round: 'group', group: 'J', date: '2026-06-16', time: '21:00', tz: 'UTC-7', t1: 'AUT', t2: 'JOR', city: 'San Francisco' },
  { id: 21, round: 'group', group: 'K', date: '2026-06-17', time: '12:00', tz: 'UTC-5', t1: 'POR', t2: 'COD', city: 'Houston' },
  { id: 22, round: 'group', group: 'L', date: '2026-06-17', time: '15:00', tz: 'UTC-5', t1: 'ENG', t2: 'CRO', city: 'Dallas' },
  { id: 23, round: 'group', group: 'L', date: '2026-06-17', time: '19:00', tz: 'UTC-4', t1: 'GHA', t2: 'PAN', city: 'Toronto' },
  { id: 24, round: 'group', group: 'K', date: '2026-06-17', time: '20:00', tz: 'UTC-6', t1: 'UZB', t2: 'COL', city: 'Mexico City' },
  // Matchday 2 (rodada 2 dos grupos)
  { id: 25, round: 'group', group: 'A', date: '2026-06-18', time: '12:00', tz: 'UTC-4', t1: 'CZE', t2: 'RSA', city: 'Atlanta' },
  { id: 26, round: 'group', group: 'B', date: '2026-06-18', time: '12:00', tz: 'UTC-7', t1: 'SUI', t2: 'BIH', city: 'Los Angeles' },
  { id: 27, round: 'group', group: 'B', date: '2026-06-18', time: '15:00', tz: 'UTC-7', t1: 'CAN', t2: 'QAT', city: 'Vancouver' },
  { id: 28, round: 'group', group: 'A', date: '2026-06-18', time: '19:00', tz: 'UTC-6', t1: 'MEX', t2: 'KOR', city: 'Guadalajara' },
  { id: 29, round: 'group', group: 'C', date: '2026-06-19', time: '18:00', tz: 'UTC-4', t1: 'SCO', t2: 'MAR', city: 'Boston' },
  { id: 30, round: 'group', group: 'D', date: '2026-06-19', time: '12:00', tz: 'UTC-7', t1: 'USA', t2: 'AUS', city: 'Seattle' },
  { id: 31, round: 'group', group: 'C', date: '2026-06-19', time: '20:30', tz: 'UTC-4', t1: 'BRA', t2: 'HAI', city: 'Philadelphia' },
  { id: 32, round: 'group', group: 'D', date: '2026-06-19', time: '20:00', tz: 'UTC-7', t1: 'TUR', t2: 'PAR', city: 'San Francisco' },
  { id: 33, round: 'group', group: 'F', date: '2026-06-20', time: '12:00', tz: 'UTC-5', t1: 'NED', t2: 'SWE', city: 'Houston' },
  { id: 34, round: 'group', group: 'E', date: '2026-06-20', time: '16:00', tz: 'UTC-4', t1: 'GER', t2: 'CIV', city: 'Toronto' },
  { id: 35, round: 'group', group: 'E', date: '2026-06-20', time: '19:00', tz: 'UTC-5', t1: 'ECU', t2: 'CUW', city: 'Kansas City' },
  { id: 36, round: 'group', group: 'F', date: '2026-06-20', time: '22:00', tz: 'UTC-6', t1: 'TUN', t2: 'JPN', city: 'Monterrey' },
  { id: 37, round: 'group', group: 'H', date: '2026-06-21', time: '12:00', tz: 'UTC-4', t1: 'ESP', t2: 'KSA', city: 'Atlanta' },
  { id: 38, round: 'group', group: 'G', date: '2026-06-21', time: '12:00', tz: 'UTC-7', t1: 'BEL', t2: 'IRN', city: 'Los Angeles' },
  { id: 39, round: 'group', group: 'H', date: '2026-06-21', time: '18:00', tz: 'UTC-4', t1: 'URU', t2: 'CPV', city: 'Miami' },
  { id: 40, round: 'group', group: 'G', date: '2026-06-21', time: '18:00', tz: 'UTC-7', t1: 'NZL', t2: 'EGY', city: 'Vancouver' },
  { id: 41, round: 'group', group: 'I', date: '2026-06-22', time: '17:00', tz: 'UTC-4', t1: 'FRA', t2: 'IRQ', city: 'Philadelphia' },
  { id: 42, round: 'group', group: 'J', date: '2026-06-22', time: '12:00', tz: 'UTC-5', t1: 'ARG', t2: 'AUT', city: 'Dallas' },
  { id: 43, round: 'group', group: 'I', date: '2026-06-22', time: '20:00', tz: 'UTC-4', t1: 'NOR', t2: 'SEN', city: 'New York/NJ' },
  { id: 44, round: 'group', group: 'J', date: '2026-06-22', time: '20:00', tz: 'UTC-7', t1: 'JOR', t2: 'ALG', city: 'San Francisco' },
  { id: 45, round: 'group', group: 'K', date: '2026-06-23', time: '12:00', tz: 'UTC-5', t1: 'POR', t2: 'UZB', city: 'Houston' },
  { id: 46, round: 'group', group: 'L', date: '2026-06-23', time: '16:00', tz: 'UTC-4', t1: 'ENG', t2: 'GHA', city: 'Boston' },
  { id: 47, round: 'group', group: 'L', date: '2026-06-23', time: '19:00', tz: 'UTC-4', t1: 'PAN', t2: 'CRO', city: 'Toronto' },
  { id: 48, round: 'group', group: 'K', date: '2026-06-23', time: '20:00', tz: 'UTC-6', t1: 'COL', t2: 'COD', city: 'Guadalajara' },
  // Matchday 3 (rodada 3 dos grupos)
  { id: 49, round: 'group', group: 'A', date: '2026-06-24', time: '19:00', tz: 'UTC-6', t1: 'CZE', t2: 'MEX', city: 'Mexico City' },
  { id: 50, round: 'group', group: 'A', date: '2026-06-24', time: '19:00', tz: 'UTC-6', t1: 'RSA', t2: 'KOR', city: 'Monterrey' },
  { id: 51, round: 'group', group: 'B', date: '2026-06-24', time: '12:00', tz: 'UTC-7', t1: 'SUI', t2: 'CAN', city: 'Vancouver' },
  { id: 52, round: 'group', group: 'B', date: '2026-06-24', time: '12:00', tz: 'UTC-7', t1: 'BIH', t2: 'QAT', city: 'Seattle' },
  { id: 53, round: 'group', group: 'C', date: '2026-06-24', time: '18:00', tz: 'UTC-4', t1: 'SCO', t2: 'BRA', city: 'Miami' },
  { id: 54, round: 'group', group: 'C', date: '2026-06-24', time: '18:00', tz: 'UTC-4', t1: 'MAR', t2: 'HAI', city: 'Atlanta' },
  { id: 55, round: 'group', group: 'D', date: '2026-06-25', time: '19:00', tz: 'UTC-7', t1: 'TUR', t2: 'USA', city: 'Los Angeles' },
  { id: 56, round: 'group', group: 'D', date: '2026-06-25', time: '19:00', tz: 'UTC-7', t1: 'PAR', t2: 'AUS', city: 'San Francisco' },
  { id: 57, round: 'group', group: 'E', date: '2026-06-25', time: '16:00', tz: 'UTC-4', t1: 'CUW', t2: 'CIV', city: 'Philadelphia' },
  { id: 58, round: 'group', group: 'E', date: '2026-06-25', time: '16:00', tz: 'UTC-4', t1: 'ECU', t2: 'GER', city: 'New York/NJ' },
  { id: 59, round: 'group', group: 'F', date: '2026-06-25', time: '18:00', tz: 'UTC-5', t1: 'JPN', t2: 'SWE', city: 'Dallas' },
  { id: 60, round: 'group', group: 'F', date: '2026-06-25', time: '18:00', tz: 'UTC-5', t1: 'TUN', t2: 'NED', city: 'Kansas City' },
  { id: 61, round: 'group', group: 'G', date: '2026-06-26', time: '20:00', tz: 'UTC-7', t1: 'EGY', t2: 'IRN', city: 'Seattle' },
  { id: 62, round: 'group', group: 'G', date: '2026-06-26', time: '20:00', tz: 'UTC-7', t1: 'NZL', t2: 'BEL', city: 'Vancouver' },
  { id: 63, round: 'group', group: 'H', date: '2026-06-26', time: '19:00', tz: 'UTC-5', t1: 'CPV', t2: 'KSA', city: 'Houston' },
  { id: 64, round: 'group', group: 'H', date: '2026-06-26', time: '18:00', tz: 'UTC-6', t1: 'URU', t2: 'ESP', city: 'Guadalajara' },
  { id: 65, round: 'group', group: 'I', date: '2026-06-26', time: '15:00', tz: 'UTC-4', t1: 'NOR', t2: 'FRA', city: 'Boston' },
  { id: 66, round: 'group', group: 'I', date: '2026-06-26', time: '15:00', tz: 'UTC-4', t1: 'SEN', t2: 'IRQ', city: 'Toronto' },
  { id: 67, round: 'group', group: 'J', date: '2026-06-27', time: '21:00', tz: 'UTC-5', t1: 'ALG', t2: 'AUT', city: 'Kansas City' },
  { id: 68, round: 'group', group: 'J', date: '2026-06-27', time: '21:00', tz: 'UTC-5', t1: 'JOR', t2: 'ARG', city: 'Dallas' },
  { id: 69, round: 'group', group: 'K', date: '2026-06-27', time: '19:30', tz: 'UTC-4', t1: 'COL', t2: 'POR', city: 'Miami' },
  { id: 70, round: 'group', group: 'K', date: '2026-06-27', time: '19:30', tz: 'UTC-4', t1: 'COD', t2: 'UZB', city: 'Atlanta' },
  { id: 71, round: 'group', group: 'L', date: '2026-06-27', time: '17:00', tz: 'UTC-4', t1: 'PAN', t2: 'ENG', city: 'New York/NJ' },
  { id: 72, round: 'group', group: 'L', date: '2026-06-27', time: '17:00', tz: 'UTC-4', t1: 'CRO', t2: 'GHA', city: 'Philadelphia' },
  // ============ MATA-MATA (32 jogos, com placeholders até definir) ============
  { id: 73, round: 'r32', date: '2026-06-28', time: '12:00', tz: 'UTC-7', t1: '2A', t2: '2B', city: 'Los Angeles' },
  { id: 74, round: 'r32', date: '2026-06-29', time: '16:30', tz: 'UTC-4', t1: '1E', t2: '3A/B/C/D/F', city: 'Boston' },
  { id: 75, round: 'r32', date: '2026-06-29', time: '19:00', tz: 'UTC-6', t1: '1F', t2: '2C', city: 'Monterrey' },
  { id: 76, round: 'r32', date: '2026-06-29', time: '12:00', tz: 'UTC-5', t1: '1C', t2: '2F', city: 'Houston' },
  { id: 77, round: 'r32', date: '2026-06-30', time: '17:00', tz: 'UTC-4', t1: '1I', t2: '3C/D/F/G/H', city: 'New York/NJ' },
  { id: 78, round: 'r32', date: '2026-06-30', time: '12:00', tz: 'UTC-5', t1: '2E', t2: '2I', city: 'Dallas' },
  { id: 79, round: 'r32', date: '2026-06-30', time: '19:00', tz: 'UTC-6', t1: '1A', t2: '3C/E/F/H/I', city: 'Mexico City' },
  { id: 80, round: 'r32', date: '2026-07-01', time: '12:00', tz: 'UTC-4', t1: '1L', t2: '3E/H/I/J/K', city: 'Atlanta' },
  { id: 81, round: 'r32', date: '2026-07-01', time: '17:00', tz: 'UTC-7', t1: '1D', t2: '3B/E/F/I/J', city: 'San Francisco' },
  { id: 82, round: 'r32', date: '2026-07-01', time: '13:00', tz: 'UTC-7', t1: '1G', t2: '3A/E/H/I/J', city: 'Seattle' },
  { id: 83, round: 'r32', date: '2026-07-02', time: '19:00', tz: 'UTC-4', t1: '2K', t2: '2L', city: 'Toronto' },
  { id: 84, round: 'r32', date: '2026-07-02', time: '12:00', tz: 'UTC-7', t1: '1H', t2: '2J', city: 'Los Angeles' },
  { id: 85, round: 'r32', date: '2026-07-02', time: '20:00', tz: 'UTC-7', t1: '1B', t2: '3E/F/G/I/J', city: 'Vancouver' },
  { id: 86, round: 'r32', date: '2026-07-03', time: '18:00', tz: 'UTC-4', t1: '1J', t2: '2H', city: 'Miami' },
  { id: 87, round: 'r32', date: '2026-07-03', time: '20:30', tz: 'UTC-5', t1: '1K', t2: '3D/E/I/J/L', city: 'Kansas City' },
  { id: 88, round: 'r32', date: '2026-07-03', time: '13:00', tz: 'UTC-5', t1: '2D', t2: '2G', city: 'Dallas' },
  { id: 89,  round: 'r16', date: '2026-07-04', time: '17:00', tz: 'UTC-4', t1: 'W74', t2: 'W77', city: 'Philadelphia' },
  { id: 90,  round: 'r16', date: '2026-07-04', time: '12:00', tz: 'UTC-5', t1: 'W73', t2: 'W75', city: 'Houston' },
  { id: 91,  round: 'r16', date: '2026-07-05', time: '16:00', tz: 'UTC-4', t1: 'W76', t2: 'W78', city: 'New York/NJ' },
  { id: 92,  round: 'r16', date: '2026-07-05', time: '18:00', tz: 'UTC-6', t1: 'W79', t2: 'W80', city: 'Mexico City' },
  { id: 93,  round: 'r16', date: '2026-07-06', time: '14:00', tz: 'UTC-5', t1: 'W83', t2: 'W84', city: 'Dallas' },
  { id: 94,  round: 'r16', date: '2026-07-06', time: '17:00', tz: 'UTC-7', t1: 'W81', t2: 'W82', city: 'Seattle' },
  { id: 95,  round: 'r16', date: '2026-07-07', time: '12:00', tz: 'UTC-4', t1: 'W86', t2: 'W88', city: 'Atlanta' },
  { id: 96,  round: 'r16', date: '2026-07-07', time: '13:00', tz: 'UTC-7', t1: 'W85', t2: 'W87', city: 'Vancouver' },
  { id: 97,  round: 'qf',  date: '2026-07-09', time: '16:00', tz: 'UTC-4', t1: 'W89', t2: 'W90', city: 'Boston' },
  { id: 98,  round: 'qf',  date: '2026-07-10', time: '12:00', tz: 'UTC-7', t1: 'W93', t2: 'W94', city: 'Los Angeles' },
  { id: 99,  round: 'qf',  date: '2026-07-11', time: '17:00', tz: 'UTC-4', t1: 'W91', t2: 'W92', city: 'Miami' },
  { id: 100, round: 'qf',  date: '2026-07-11', time: '20:00', tz: 'UTC-5', t1: 'W95', t2: 'W96', city: 'Kansas City' },
  { id: 101, round: 'sf',  date: '2026-07-14', time: '14:00', tz: 'UTC-5', t1: 'W97', t2: 'W98', city: 'Dallas' },
  { id: 102, round: 'sf',  date: '2026-07-15', time: '15:00', tz: 'UTC-4', t1: 'W99', t2: 'W100', city: 'Atlanta' },
  { id: 103, round: '3rd', date: '2026-07-18', time: '17:00', tz: 'UTC-4', t1: 'L101', t2: 'L102', city: 'Miami' },
  { id: 104, round: 'final', date: '2026-07-19', time: '15:00', tz: 'UTC-4', t1: 'W101', t2: 'W102', city: 'New York/NJ' },
];

const ROUND_NAMES = {
  group: 'Fase de Grupos', r32: 'Oitavas (R32)', r16: 'Oitavas (R16)',
  qf: 'Quartas', sf: 'Semifinal', '3rd': 'Disputa 3º lugar', final: '🏆 FINAL',
};

const BOLAO_REGRAS = {
  pts_placar_exato: 5,
  pts_vencedor: 3,
  pts_diff_gols: 2, // se acertou a diferença mas placar diferente
  multiplicador_r32_r16: 2,
  multiplicador_qf_sf: 3,
  multiplicador_final: 5,
  prazo_palpite: 'Até o início do jogo. Depois trava.',
};

function teamLabel(code) {
  if (ALBUM.teams[code]) return ALBUM.teams[code].name;
  if (ALBUM.teams[code] && ALBUM.teams[code].flag) return ALBUM.teams[code].flag + ' ' + ALBUM.teams[code].name;
  return code; // placeholder tipo "1A", "W74"
}

function teamFlag(code) {
  return ALBUM.teams[code] ? ALBUM.teams[code].flag : '⚽';
}

function multiplicadorJogo(m) {
  if (m.round === 'final') return BOLAO_REGRAS.multiplicador_final;
  if (m.round === 'sf' || m.round === 'qf') return BOLAO_REGRAS.multiplicador_qf_sf;
  if (m.round === 'r32' || m.round === 'r16' || m.round === '3rd') return BOLAO_REGRAS.multiplicador_r32_r16;
  return 1;
}

function pontosPalpite(palpite, real, m) {
  if (!real || real.h == null || real.a == null) return 0;
  if (!palpite || palpite.h == null || palpite.a == null) return 0;
  const mult = multiplicadorJogo(m);
  // placar exato
  if (palpite.h === real.h && palpite.a === real.a) return BOLAO_REGRAS.pts_placar_exato * mult;
  // vencedor
  const winP = palpite.h === palpite.a ? 'X' : (palpite.h > palpite.a ? '1' : '2');
  const winR = real.h === real.a ? 'X' : (real.h > real.a ? '1' : '2');
  if (winP === winR) {
    // checa diferença de gols
    if ((palpite.h - palpite.a) === (real.h - real.a)) return BOLAO_REGRAS.pts_diff_gols * mult + BOLAO_REGRAS.pts_vencedor * mult;
    return BOLAO_REGRAS.pts_vencedor * mult;
  }
  return 0;
}

if (typeof window !== 'undefined') {
  window.ALBUM = ALBUM;
  window.USERS = USERS;
  window.PENALIDADES = PENALIDADES;
  window.MATCHES = MATCHES;
  window.TEAM_MAP = TEAM_MAP;
  window.ROUND_NAMES = ROUND_NAMES;
  window.BOLAO_REGRAS = BOLAO_REGRAS;
  window.stickerLabel = stickerLabel;
  window.allStickers = allStickers;
  window.teamLabel = teamLabel;
  window.teamFlag = teamFlag;
  window.pontosPalpite = pontosPalpite;
  window.multiplicadorJogo = multiplicadorJogo;
}
