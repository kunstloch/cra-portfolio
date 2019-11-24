import React from 'react';

let data = {
  portfolio: [
    {
      name: 'PrayNow',
      info: 'social media mobile webapp',
      description: `Next.js, set up Database with GraphCMS, connecting Cloudinary for hosting images, authorization and authentication implementing Auth0
`,
      imgurl: require('./project-1.jpg')
    },
    {
      name: 'Ecommerce Webstore',
      info: ' ',
      description: `Next.js, TypeScript, data fetching, using cookies, styled components, setting up and connecting to PostgreSQL database, using state hooks`,
      imgurl: require('./project-2.jpg')
    },
    {
      name: 'Sentiment Analysis',
      info: 'program to analyze mood of text',
      description: `Node.js, use of an API`,
      imgurl: require('./project-3.jpg')
    }
  ]
};

export default function Porfolio() {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-thirds cf">
            {data.portfolio &&
              data.portfolio.map((item, index) => {
                return (
                  <div className="columns portfolio-item" key={index}>
                    <div className="item-wrap">
                      <a href="#add-project-link">
                        <h3>
                          <span>{item.name}</span>
                        </h3>
                        {/* <h4>{item.info}</h4> */}
                        <img src={`${item.imgurl}`} className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h4>Used Technologies:</h4>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
