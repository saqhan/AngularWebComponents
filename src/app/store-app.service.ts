import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreAppService {

  constructor() {}

  public sum(
    a1: number,
    b1: number
  ): number {
    return a1 + b1;
  };


  blogCarouselMock = [
    {
      id: 1,
      title: 'How to optimize your Facebook & Instagram video ads for success',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.',
      img: 'https://via.placeholder.com/900',
      category: 'Blog Post',
      btnText: 'Read Story',
      main: true,
      lenta: false,
    },
    {
      id: 2,
      title: 'Explore instagram Video: How to convert..',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
      img: 'https://via.placeholder.com/900',
      category: 'Report',
      btnText: 'Read Report',
      main: false,
      lenta: true,
    },
    {
      id: 3,
      title: 'Explore instagram Video: How to convert.',
      subTitle: 'Lorem ipsum dolor sit amet.',
      img: 'https://via.placeholder.com/900',
      category: 'Blog Post',
      btnText: 'Read Story',
      main: false,
      lenta: true,
    },
    {
      id: 4,
      title: 'Explore instagram Video: How to convert.',
      subTitle: 'Lorem ipsum dolor sit amet.',
      img: 'https://via.placeholder.com/900',
      category: 'Webinar',
      btnText: 'Read Story',
      main: false,
      lenta: true,
    },
    {
      id: 5,
      title: 'Last News instagram Video',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.',
      img: 'https://via.placeholder.com/900',
      category: 'Report',
      btnText: 'Read Report',
      main: false,
      lenta: true,
    },
    {
      id: 6,
      title: 'Last News instagram Video',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.',
      img: 'https://via.placeholder.com/900',
      category: 'Report',
      btnText: 'Read Report',
      main: false,
      lenta: true,
    },
    {
      id: 7,
      title: 'Last News instagram Video',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.',
      img: 'https://via.placeholder.com/900',
      category: 'Report',
      btnText: 'Read Report',
      main: false,
      lenta: true,
    },
  ];

  getBlog() {
    return this.blogCarouselMock;
  }

  blogPost = [
    {
      id: 1,
      title: 'How to quickly turn your podcast into a video script',
      img: 'https://via.placeholder.com/900',
      category: 'Report',
      btnText: 'Read Story',
    },
    {
      id: 2,
      title: 'How to quickly turn your podcast into a video script',
      img: 'https://via.placeholder.com/900',
      category: 'Blog Post',
      btnText: 'Read Story',
    },
    {
      id: 3,
      title: 'How to quickly turn your podcast into a video script',
      img: 'https://via.placeholder.com/900',
      category: 'Webinar',
      btnText: 'Read Story',
    },
  ];

  getBlogPost() {
    return this.blogPost;
  }

  popularNews = [
    {
      id: 1,
      title: "How to quickly turn your podcast into a video script",
      category: "Blog Post",
      btnText: "Read Story",
      img: "https://via.placeholder.com/900x600?text=Popular",
    },
    {
      id: 2,
      title: "How to quickly turn your podcast into a video script",
      category: "Webinar",
      btnText: "Watch Webinar",
      img: "https://via.placeholder.com/500x500?text=Popular",
    },
    {
      id: 3,
      title: "How to quickly turn your podcast into a video script",
      category: "Report",
      btnText: "Read Report ",
      img: "https://via.placeholder.com/500x500?text=Popular",
    },
  ];

  getPopularNews() {
    return this.popularNews;
  }

  events = [
    {
      id: 1,
      title: 'The Basic: Structuring Your Video Marketing Strategy',
      category: 'Webinar',
      btnText: 'Watch Webinar',
      img: 'https://via.placeholder.com/900',
      date: '24 Jun',
    },
    {
      id: 2,
      title: 'How to quickly turn your podcast into a video script',
      category: 'Webinar',
      btnText: 'Watch Webinar',
      img: 'https://via.placeholder.com/900',
      date: '',
    },
    {
      id: 3,
      title: 'The Basic: Structuring Your Video Marketing Strategy',
      category: 'Webinar',
      btnText: 'Watch Webinar',
      img: 'https://via.placeholder.com/900',
      date: '24 Jun',
    },
  ];

  getEvents() {
    return this.events;
  }

  banner = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid asperiores.\n',
      btnText: 'Explore Report',
      img: 'https://via.placeholder.com/300x400?text=Banner',
    },
  ];

  getBanner() {
    return this.banner;
  }

  authors = [
    {
      id: 1,
      firstName: 'Saqhan Abaev',
      img: 'https://via.placeholder.com/900',
      position: 'Founder',
      instagram: 'www.instagram.com',
      vkontacte: 'https://vk.com/saqhan',
    },
  ];

  getAuthor() {
    return this.authors;
  }

  breadCrumbs = [
    {
      homeLink: 'Home',
      homeUrlLink: '/',
      currentLink: 'Item News',
      currentUrlLink: '/',
      allLink: 'All',
      allUrlLink: '/',
      nameLink: 'Another',
      nameUrlLink: '/',
    },
  ];

  getBreadCrumbs() {
    return this.breadCrumbs;
  }

  NewsStore = [
    {
      id: 1,
      title: 'Annoucing V2.7 Release',
      subTitle:
        'At Froala, our mission has always been about pushing web editing beyond its conceived limits—this vision has served as the guiding philosophy for all Froala releases from Version 1.x to',
      img: 'https://via.placeholder.com/500',
      author: 'Saqhan Abaev',
      date: '20 Апр 2020',
      btnText: 'Keep Readeing',
      category: 'Editor',
    },
    {
      id: 2,
      title: 'Doing Wonders With Images In the Froala Editor',
      subTitle:
        'At Froala, our mission has always been about pushing web editing beyond its conceived limits—this vision has served as the guiding philosophy for all Froala releases from Version 1.x to',
      img: 'https://via.placeholder.com/500',
      author: 'Saqhan Abaev',
      date: '20 Апр 2019',
      btnText: 'Keep Readeing',
      category: 'Editor',
    },
    {
      id: 3,
      title: 'Using Multiple Froala Editors On a Single Webpage',
      subTitle:
        'At Froala, our mission has always been about pushing web editing beyond its conceived limits—this vision has served as the guiding philosophy for all Froala releases from Version 1.x to',
      img: 'https://via.placeholder.com/500',
      author: 'Saqhan Abaev',
      date: '20 Апр 2020',
      btnText: 'Keep Readeing',
      category: 'Editor',
    },
    {
      id: 4,
      title: 'Annoucing V2.7 Release',
      subTitle:
        'At Froala, our mission has always been about pushing web editing beyond its conceived limits—this vision has served as the guiding philosophy for all Froala releases from Version 1.x to',
      img: 'https://via.placeholder.com/500',
      author: 'Saqhan Abaev',
      date: '20 Апр 2020',
      btnText: 'Keep Readeing',
      category: 'Editor',
    },
  ];

  getNewsStore() {
    return this.NewsStore;
  }
  //chat data

  mainUser = [
    {
      id: 1,
      name: "Эм, виртуальный помощник",
      message: "Во тьме ночной при свете дня, тут сообщение пишу я",
      img: "https://via.placeholder.com/500x500?text=Admin",
      date: "24 Апр, 15:50",
    },
  ];

  getMainUser() {
    return this.mainUser;
  }

  messages = [
    {
      id: 1,
      name: "Константин Михалков",
      message: "Я ответственно заявляю, что в верстке есть большие",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "24 Апр 15:20",
      position: "",
    },
    {
      id: 2,
      name: "Зинедин Зидан",
      message: "Конфликтный гештальт: бессознательное или восприятие?",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "24 Апр 15:20",
      position: "Тренер",

    },
    {
      id: 3,
      name: "Владимир Путин",
      message: "Предсознательное стабильно. Рефлексия вызывает стимул. Эскапизм осознаёт импульс. ",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "30 Окт 15:20",
      position: "Президент",
    },
    {
      id: 4,
      name: "Психоз изменяем",
      message: "Мышление, например, однородно иллюстрирует стимул.",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "24 Апр 15:20",
      position: "",
    },
    {
      id: 5,
      name: "Батька",
      message: "Конфликтный гештальт: бессознательное или восприятие?",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "24 Апр 15:20",
      position: "Президент",
    },
    {
      id: 6,
      name: "Маргарита",
      message: "Психоз изменяем. Конформизм понимает психоз.",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "24 Апр 15:20",
      position: "",
    },
    {
      id: 7,
      name: "Никита фролков",
      message: "Спасибо, оплатили!",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "24 Апр 15:20",
      position: "",
    },
    {
      id: 8,
      name: "Михаэль Шумахер",
      message: "Мышление, например, однородно иллюстрирует стимул.",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "24 Апр 15:20",
      position: "Водитель",
    },
    {
      id: 9,
      name: "Филипп Лам",
      message: "Конфликтный гештальт: бессознательное или восприятие?",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "24 Апр 15:20",
      position: "Футболист",
    },
    {
      id: 10,
      name: "Френсис",
      message: "Конфликтный гештальт: бессознательное или восприятие?",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "24 Апр 15:20",
      position: "",
    },
    {
      id: 11,
      name: "Френсис",
      message: "Конфликтный гештальт: бессознательное или восприятие?",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "24 Апр 15:20",
      position: "",
    },
    {
      id: 12,
      name: "Филипп Лам",
      message: "Конфликтный гештальт: бессознательное или восприятие?",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "24 Апр 15:20",
      position: "Футболист",
    },  {
      id: 13,
      name: "Маргарита",
      message: "Психоз изменяем. Конформизм понимает психоз.",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "24 Апр 15:20",
      position: "",
    },
    {
      id: 14,
      name: "Никита фролков",
      message: "Спасибо, оплатили!",
      img: "https://via.placeholder.com/500x500?text=User",
      date: "24 Апр 15:20",
      position: "",
    },
  ];
  getMessages() {
    return this.messages;
  }

  menu = [
    {
      id: 'home-menu',
      name: 'Home'
    },
    {
      id: 'second-page',
      name: 'Second Page'
    },
    {
      id: 'list-items',
      name: 'List Items'
    },
    {
      id: 'list-items',
      name: 'Online Chat'
    },


  ];

  getMenu(){
    return this.menu;
  }

  logoUrl = 'https://saqhan.github.io/wibbitz/assets/img/logo.jpg';
  getLogoUrl(){
    return this.logoUrl;
  }

  footerItems = [
    {
      title: "Solutions",
      links: [
        { name: "Marketing", id: "MarketingId" },
        { name: "Social Media", id: "SocialId" },
        { name: "Agencies", id: "AgenciesId" },
        { name: "Internal", id: "InternalId" },
        { name: "How to optimize", id: "HowId" },
      ],
    },
    {
      title: "Pricing",
      links: [
        { name: "Lorem ", id: "LoremId " },
        { name: "Alias ", id: "AliasId " },
        { name: "Choose ", id: "ChooseId " },
        { name: "Language", id: "LanguageId" },
      ],
    },
    {
      title: "Resources",
      links: [

        { name: "Normal ", id: "NormalId " },
        { name: "Month ", id: "MonthId " },
        { name: "Time ", id: "TimeId ",
          links: [
            {name: 'Absolutely', id: 'AbsolutelyId' },
            {name: 'Search', id: 'SearchId' },
          ] },
        { name: "Ready ", id: "ReadyId " },
      ],
    },
    {
      title: "Component ",
      links: [
        { name: "FooterValue ", id: "FooterValueId " },
        { name: "Items ", id: "ItemsId " },
        { name: "Saqhan ", id: "SaqhanId " },
        { name: "Intocode ", id: "IntocodeId " },
        { name: "Other ", id: "OtherId ",
          links: [
            {name: 'Footer', id: 'FooterId' },
            {name: 'Header', id: 'HeaderId' },
          ] },
      ],
    }
  ];

  getFooterItems (){
    return this.footerItems;
  }

  footerInfo = {title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid asperiores.'}

  getFooterInfo() {
    return this.footerInfo;
  }
  bannerPopular = {
    title: "Storyteller Circle Event Series",
    nameLink: "Read Webinar",
    img: "https://via.placeholder.com/900x900?text=Banner",
  };

  getBannerPopular() {
    return this.bannerPopular;
  }
  subscribeText = "Subscribe";


  getSubscribeText(){
    return this.subscribeText;
  }

  subscribeBlockText = {
    btnText: "Subscribe",
    title: "Ready to take a test drive",
    subTitle:
      "We`ll help you elevate your video content strategy. Prices strating from $49 a month.",
    nameLink: "See pricing",
  };

  getSubscribeBlockText(){
    return this.subscribeBlockText;
  }

  secondTitle = {
    category: 'Trends & Fashion',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    authorName: 'Saqhan Abaev',
    date: '7 Июнь, 2020',
    img: 'https://via.placeholder.com/600x600?text=Title',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut, corporis distinctio doloribus eius expedita fugiat fugit, in ipsum, laudantium mollitia necessitatibus quibusdam quo rem totam? Adipisci expedita iste quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut, corporis distinctio doloribus eius expedita fugiat fugit, in ipsum, laudantium mollitia necessitatibus quibusdam quo rem totam? Adipisci expedita iste quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut, corporis distinctio doloribus eius expedita fugiat fugit, in ipsum, laudantium mollitia necessitatibus quibusdam quo rem totam? Adipisci expedita iste quo.",
  }

  getSecondTitle(){
    return this.secondTitle;
  }

  quoteText = {
    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
  }

  getQuoteText(){
    return this.quoteText;
  }

  // subscribeText = "Subscribe";
  //
  //
  // getSubscribeText(){
  //   return this.subscribeText;
  // }
  //
  // subscribeBlockText = {
  //   btnText: "Subscribe",
  //   title: "Ready to take a test drive",
  //   subTitle:
  //     "We`ll help you elevate your video content strategy. Prices strating from $49 a month.",
  //   nameLink: "See pricing",
  // };
  //
  // getSubscribeBlockText(){
  //   return this.subscribeBlockText;
  // }

}
