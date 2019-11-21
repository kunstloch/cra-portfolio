import React from 'react';

let data = {
  portfolio: [
    {
      name: 'PrayNow',
      description: 'social media mobile webapp',
      imgurl: require('./project-1.jpg')
    },
    {
      name: 'ToDo List',
      description: 'React ToDo List',
      imgurl: require('./project-2.jpg')
    },
    {
      name: 'Sentiment Analysis',
      description: 'node.js program to analyze mood of text',
      imgurl: require('./project-3.jpg')
    }
  ]
};

export default function Porfolio() {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work</h1>
          <div id="portfolio-wrapper" className="bgrid-thirds cf">
            {data.portfolio &&
              data.portfolio.map((item, index) => {
                return (
                  <div className="columns portfolio-item" key={index}>
                    <div className="item-wrap">
                      <a href="#add-project-link">
                        <img src={`${item.imgurl}`} className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
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
