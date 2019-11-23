import React from 'react';
import alexscherer from './alexscherer2.jpg';
import linkedin from './linkedin.png';
import github from './github.png';

let data = {
  testimonials: [
    {
      description: 'This is a sample testimonial',
      name: 'Some technical person'
    },
    {
      description: 'This is a sample testimonial',
      name: 'Some technical person'
    }
  ]
};

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <img
              id="profileimagecontact"
              src={alexscherer}
              alt="alexander scherer profile"
              width="120px"
            />
            <h1>
              <span>Alexander Scherer-Sokolowski</span>
            </h1>
          </div>
          <div className="ten columns flex-container">
            <div className="flexslider">
              <div>
                Feel free to contact me for any work or suggestions below
              </div>
              <p>
                <a
                  href="http://www.linkedin.com/in/alexanderscherer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="linkedin logo" />
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/kunstloch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="github logo" />
                </a>
              </p>

              <p></p>
              {/* <ul className="slides">
                {data.testimonials &&
                  data.testimonials.map((item, index) => {
                    return (
                      <li key={index}>
                        <blockquote>
                          <p>{item.description}</p>
                          <cite>{item.name}</cite>
                        </blockquote>
                      </li>
                    );
                  })}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
