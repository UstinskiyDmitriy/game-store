import { TCardData } from "../interfaces/cardInterface";

const CARD_DATA: TCardData[] = [
  {
    id: 1,
    image: "/witcher.jpg",
    about_header_img: "/witcher_about.png",
    title: "The Witcher 3",
    year: "2017",
    ganre: ["RPG"],
    isonline: "offline",
    site: "https://www.thewitcher.com/ua/ru/witcher3#home",
    platforms: ["PC", "PS4", "PS5", "XONE", "XBOX", "Nintendo"],
    developer: "CD Project Red",
    description:
      "Вы — Геральт из Ривии, наемный убийца чудовищ. Вы путешествуете по миру, в котором бушует война и на каждом шагу подстерегают чудовища. Вам предстоит выполнить заказ и найти Цири — Дитя Предназначения, живое оружие, способное изменить облик этого мира.",
    rate: 9,
    steam: 'https://store.steampowered.com/app/292030/Vedmak_3_Dikaya_Oxota/',
    price: 'Бесплатно'
  },
  {
    id: 2,
    image: "/cs.jpg",
    about_header_img: "/cs_about.jpg",
    title: "Counter-Strike 2",
    year: "2023",
    ganre: ["Shooter"],
    isonline: "online",
    site: "https://www.counter-strike.net/cs2",
    developer: "Valve",
    platforms: ["PC", "Windows"],
    description:
      "Counter-Strike: Global Offensive — новая часть популярной серии многопользовательских шутеров. Игра включает в себя новые карты, персонажей и оружие, а также улучшенную версию классической составляющей франшизы.",
    rate: 7,
    steam: 'https://store.steampowered.com/app/730/CounterStrike_2/',
    price: 'Бесплатно',
    },
  {
    id: 3,
    image: "/dota.jpg",
    about_header_img: "/dota2_about.jpg",
    title: "Dota 2",
    year: "2013",
    ganre: ["MOBA", "Action/RPG"],
    isonline: "online",
    developer: "Valve",
    platforms: ["PC", "Windows"],
    site: "https://www.dota2.com/home",
    description:
      "Многопользовательская командная игра в жанре MOBA. Dota 2 — независимое продолжение карты-модификации DotA для Warcraft 3 от студии Valve, в которой две команды по пять человек сражаются друг с другом. Каждый игрок управляет одним героем с уникальными способностями и стилем игры.",
    rate: 7.2,
    steam: 'https://store.steampowered.com/app/570/Dota_2/',
    price: 'Бесплатно'
    },
  {
    id: 4,
    image: "/GTA.jpg",
    about_header_img: "/gta_about.jpg",
    title: "GTA V",
    year: "2013",
    ganre: ["Shooter", "Open World"],
    isonline: "online",
    developer: "Rockstar Games",
    platforms: ["PS4", "PS5", "XBox One", "XBoxe 360", "PC"],
    site: "https://www.rockstargames.com/fr/gta-v",
    description:
      "В центре пятой части сразу трое героев — Майкл, Франклин и Тревор. В Grand Theft Auto 5 есть все, за то мы так любим эту серию: и криминальная драма, и огромный, проработанный до мелких деталей игровой мир и неограниченная свобода действия.",
    rate: 8,
    steam: 'https://store.steampowered.com/agecheck/app/271590/?l=russian',
    price: 3000
    },
  {
    id: 5,
    image: "/liers-bar.jpg",
    about_header_img: "/liers_about.jpg",
    title: "Lier's Bar",
    year: "2024",
    ganre: ["Настольная", "Шутер"],
    isonline: "online",
    developer: "Curve Animation",
    platforms: ["PC"],
    site: "https://www.liarsbar.net/ru",
    description:
      'Погрузись в многопользовательский онлайн-экшен в сомнительном баре, где игры опасны, как и его посетители. Садись за стол из 4 человек и проверь свои навыки в "Костях Лжецов" и "Карточной Колоде Лжецов", где ложь и блеф — ключ к победе. Готов провести ночь в Liars Bar?',
    rate: 6.5,
    price: 600,
    steam: 'https://store.steampowered.com/app/3097560/Liars_Bar?snr=1_7_15__13'
    },
  {
    id: 6,
    image: "/pubg.jpg",
    about_header_img: "/pubg_about.jpg",
    title: "PUBG: Battlegrounds",
    year: "2017",
    ganre: ["Королевская битва", "Шутер"],
    isonline: "online",
    developer: "Pubg Corp.",
    platforms: ["PC", "Android", "IOS", "PS4", "XBox One"],
    site: "https://pubg.com/ru/main",
    description:
      "PLAYERUNKNOWN'S BATTLEGROUNDS - это шутер в котором выигрывает последний оставшийся в живых участник. Начиная игру ни с чем, вы должны раздобыть оружие и припасы чтобы бороться за первое место и стать последним героем.",
    rate: 5.8,
    price: 'Бесплатно',
    steam:'https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS?snr=1_7_15__13',
    },
];

export default CARD_DATA;
