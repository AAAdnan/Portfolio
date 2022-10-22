const userData = {
  githubUsername: "AAAdnan",
  name: "Adnan Ahmed",
  designation: "Full-Stack Developer",
  avatarUrl: "/avatar.png",
  email: "adnan.ahmed01@gmail.com",
  projects: [
    {
      title: "OK Creditos",
      link: "https://www.okcreditos.com.ar/",
      imgUrl: "/OKCreditos.png",
      description: "Argentinian short-term loan platform, built with Angular.",
      tech: [ {image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png", text: "Angular"},  {image: "/java.png", text: "Java"}, {image: "bootstrap.png", text: "Boostrap"}, {image: "html.png", text: "HTML"}],
    },
    {
      title: "Canopie",
      link: "https://www.canopie.app/",
      imgUrl: "/Canopie.png",
      description: "Early motherhood healthcare app.",
      tech: [{ image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png", text: "React"}, {image: "html.png", text: "HTML"}, { image: "apollo.png", text: "Apollo"}, { image: "dgraph.png", text: "Dgraph"}],
    },
    {
      title: "Topnomi",
      link: "https://astronomy-app.vercel.app/",
      imgUrl: "/Topnomi.png",
      description: "App used to save night sky photos, track the ISS and search for astronomical photos. Uses graphql cloud database dgraph on the backend",
      tech: [ {image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png", text: "React"}, { image: "graphql.png", text: "GraphQL"}, { image: "apollo.png", text: "Apollo"}, {image: "dgraph.png", text: "DGraph"}],
    },
    {
      title: "Orysha",
      link: "https://orysha-ecomm.vercel.app/",
      imgUrl: "/Orysha.png",
      description: "A Prototype of an e-commerce store for Nigerian based artesanal fashion. Uses graphql and apollo to communicate with the front-end and stripe API to process payments.",
      tech: [{ image: "next-square.png", text: "NextJS"}, {image: "graphql.png", text: "GraphQL"}, { image: "apollo.png", text: "Apollo"}, {image: "stripe-square.png", text: "StripeAPI"}],

    },
    {
      title: "Songifye",
      link: "https://songify-72495.firebaseapp.com",
      imgUrl: "/Songifye.png",
      description: "App to search for song lyrics, write and save your own songs, using a firebase database and a redux store.",
      tech: [{ image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png", text: "React"}, {image: "redux.png", text: "Redux"}, {image: "firebase.png", text: "Firebase"}, {image: "styled-components-square.png", text: "Styled Components"}],
    },
    {
      title: "Unsplash Album Builder",
      link: "https://unsplashalbumbuilder.web.app/?q=beach",
      imgUrl: "/Unsplash.png",
      description: "An Image Album builder using machine learning in order to find similar images, uses clarifai API and cypress end-to-end testing.",
      tech: [{image: "clarifai.png", text: "ClarifaiAPI"}, {image: "firebase.png", text: "Firebase"}, {image: "cypress-square.png", text: "Cypress"}, {image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png", text: "React"}],
    },
    {
      title: "Michelin Search",
      link: "https://play.placeholdertech.in",
      imgUrl: "/MichelinSearch.png",
      description: "App to search for Michelin restaurants worldwide - uses node scraper, Mapbox API, Express, Nunjucks and Postrgres.",
      tech: [{image: "/node.png", text: "NodeJS"}, {image: "/postgres.png", text: "POSTGRES"}, { image: "mapbox.png", text: "Mapbox" } , { image: "tailwind-square.jpg", text: "Tailwind"}],
    },
  ],
  about: {
    title:
      "I'm a software developer that loves building products and web applications. I also have a background in financial markets, and have been building algorithmic trading strategies for several years",
    description: [
      `I've been developing full-stack applications for the past five years. I work primarily with React on the front-end side and node on the back-end side.`
    ],
    currentProject: '',
    currentProjectUrl: "https://tailwindmasterkit.com",
  },
  experience: [
    {
      title: "Freelance Developer",
      year: "2022",
      desc: "Front-end Developer at Canopie, coded several other freelance projects.",
    },
    {
      title: "Professional Trader",
      year: "2020-2022",
      desc: "Built several algorithmic trading strategies, utilising node.js across the forex, crypto and equity markets",
    },
    {
      title: "Front End Developer",
      company: "Globallogic",
      year: "2018-2020",
      companyLink: "https://www.globallogic.com/",
      desc: "Worked in Buenos Aires Argentina as a Front End developer. Build a payment loans platform using Angular. Built bespoke components using React for e-learning platform EverFi.",
    },
    {
      title: "Coding Bootcamp",
      company: "Le Wagon",
      year: "2017",
      companyLink: "https://www.lewagon.com/",
      desc: "Completed a web development bootcamp using Ruby and Rails - coded and released an app in 8 weeks. ",
    },
    {
      title: "Financial Analyst",
      company: "Lloyds Banking Group, National Australia Bank and Barclays Bank",
      year: "2010-2016",
      companyLink: "https://www.barclays.co.uk/",
      desc: "Worked across various corporate financial analyst roles, analysing company balance sheets and producing models. Also worked as a derivative structurer in sales and trading.",
    },
    {
      title: "Economics Major",
      company: "London School of Economics",
      year: "2010",
      companyLink: "https://www.lse.ac.uk/",
      desc: "Studied economics - macro, micro and financial markets. ",
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1xmE3BOmgM7TAOOgVp36xQIQvYDntDYoo/view?usp=sharing",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/adnan-ahmed-55185256/",
    github: "https://github.com/AAAdnan",
  },
};

export default userData;
