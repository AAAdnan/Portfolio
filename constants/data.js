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
      need: "An Argentinian based short-term loan platform.",
      contribution: "Co-ordinated with a java back-end , and built the front end components of the site using Angular.",
      tech: [ {image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png", text: "Angular"},  {image: "/java.png", text: "Java"}, {image: "bootstrap.png", text: "Bootstrap"}, {image: "html.png", text: "HTML"}],
    },
    {
      title: "Canopie",
      link: "https://www.canopie.app/",
      imgUrl: "/Canopie.png",
      need: "An mental health app to assist mothers",
      contribution: "Built front-end react components.",
      tech: [{ image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png", text: "React"}, {image: "html.png", text: "HTML"}, { image: "apollo.png", text: "Apollo"}, { image: "dgraph.png", text: "Dgraph"}],
    },
    {
      title: "Topnomi",
      link: "https://astronomy-app.vercel.app/",
      imgUrl: "/Topnomi.png",
      need: "App to save night sky photos, interacted with the NASA API in order to produce image of the day astronomy photos",
      contribution: " Used GraphlQl on the back end as well as a new type of cloud database , dgraph, on the back-end.",
      tech: [ {image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png", text: "React"}, { image: "graphql.png", text: "GraphQL"}, { image: "apollo.png", text: "Apollo"}, {image: "dgraph.png", text: "DGraph"}],
      github: "https://github.com/AAAdnan/astronomy-app"
    },
    {
      title: "Orysha",
      link: "https://orysha-ecomm.vercel.app/",
      imgUrl: "/Orysha.png",
      need: "E-commerce store prototype for a Nigerian based artesenal fashion brand.",
      contribution: "Leveraged GraphQL and Apollo to communicate with the front-end and stripe API to process payments.",
      tech: [{ image: "next-square.png", text: "NextJS"}, {image: "graphql.png", text: "GraphQL"}, { image: "apollo.png", text: "Apollo"}, {image: "stripe-square.png", text: "StripeAPI"}],
      github: "https://github.com/AAAdnan/orysha-ecomm"

    },
    {
      title: "Songifye",
      link: "https://songify-72495.firebaseapp.com",
      imgUrl: "/Songifye.png",
      need: "App to search for song lyrics, write and save your own song",
      contribution: "Used a redux store to store search results, react components interact with LyricsAPI to build results.",
      tech: [{ image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png", text: "React"}, {image: "redux.png", text: "Redux"}, {image: "firebase.png", text: "Firebase"}, {image: "styled-components-square.png", text: "Styled"}],
      github: "https://github.com/AAAdnan/songifye"
    },
    {
      title: "Unsplash Album Builder",
      link: "https://unsplashalbumbuilder.web.app/?q=beach",
      imgUrl: "/Unsplash.png",
      need: "An Image Album builder using machine learning in order to find similar images",
      contribution: "Leveraged clarifai API and cypress end-to-end testing in order to build results, as well as Firebase database.",
      tech: [{image: "clarifai.png", text: "Clarifai"}, {image: "firebase.png", text: "Firebase"}, {image: "cypress-square.png", text: "Cypress"}, {image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png", text: "React"}],
    },
    {
      title: "Michelin Search",
      link: "https://play.placeholdertech.in",
      imgUrl: "/MichelinSearch.png",
      need: "App to search for Michelin restaurants worldwide -",
      contribution: "Uses node scraper, Mapbox API, Express, Nunjucks and Postrgres.",
      tech: [{image: "/node.png", text: "NodeJS"}, {image: "/postgres.png", text: "SQL"}, { image: "mapbox.png", text: "Mapbox" } , { image: "tailwind-square.jpg", text: "Tailwind"}],
      github: "https://github.com/AAAdnan/Michelin-Search"
    },
  ],
  about: {
    title:
      "I'm a software developer that loves building products and web applications. I also have a background in financial markets, and have been building algorithmic trading strategies for several years",
    description: [
      `I've been developing full-stack applications for the past five years. I work primarily with React on the front-end side and node on the back-end side.`
    ],
    currentProject: '',
  },
  experience: [
    {
      title: "Freelance Developer",
      year: "2022",
      desc: "Front-end Developer at Canopie, coded several other freelance projects.",
      testimonial: "Adnan was very helpful in the intial design stage - and assisted us in narrowing down our requirements in terms of technology stack. He is an experienced front end developer and an effective communicator and highly skilled particularly with React.",
      contact: "Ann Don Bosco - Co-Founder of Canopie"
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
    "",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/adnan-ahmed-55185256/",
    github: "https://github.com/AAAdnan",
  },
};

export default userData;
