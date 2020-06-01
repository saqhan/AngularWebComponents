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
      title: 'How to quickly turn your podcast into a video script',
      category: 'Blog Post',
      btnText: 'Read Story',
      img: 'https://via.placeholder.com/900',
    },
    {
      id: 2,
      title: 'How to quickly turn your podcast into a video script',
      category: 'Webinar',
      btnText: 'Watch Webinar',
      img: 'https://via.placeholder.com/900',
    },
    {
      id: 3,
      title: 'How to quickly turn your podcast into a video script',
      category: 'Report',
      btnText: 'Read Report ',
      img: 'https://via.placeholder.com/900',
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
}
