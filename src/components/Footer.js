import React from 'react';

let data = {
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alexanderscherer/',
      className: 'fa fa-linkedin'
    },
    {
      name: 'github',
      url: 'https://github.com/kunstloch',
      className: 'fa fa-github'
    },
    {
      name: 'xing',
      url: 'https://www.xing.com/app/startpage',
      className: 'fa fa-twitter'
    }
  ]
};

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {data.socialLinks &&
              data.socialLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>
                    <i className={item.className} />
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div id="go-top">
          <a title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
}
