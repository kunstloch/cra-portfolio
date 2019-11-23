import React from 'react';
import linkedInLogo from './linkedinLogo1.png';
import githubLogo from './githublogo1.png';
import xingLogo from './xinglogo1.png';

let data = {
  name: 'Alexander Scherer',
  role: 'Frontend Developer and Data Scientist',
  roleDescription: '.',
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alexanderscherer/',
      className: 'fa fa-linkedin',
      image: linkedInLogo
    },
    {
      name: 'github',
      url: 'https://github.com/kunstloch',
      className: 'fa fa-github',
      image: githubLogo
    },
    {
      name: 'xing',
      url: 'https://www.xing.com/profile/Alexander_SchererSokolowski',
      className: 'fa fa-xing',
      image: xingLogo
    }
  ]
};

export default function Header() {
  return (
    <>
      <header id="home">
        <nav id="nav-wrap">
          <ul id="nav" className="nav">
            <li className="current">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#portfolio">Projects</a>
            </li>
            <li>
              <a href="#testimonials">Contact</a>
            </li>
            <li>
              <a href="#contact">Inprint</a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{data.name}</h1>

            <h3>
              Web Developer <span>with Sales Background</span>
              {/* I am a {data.role}.{data.roleDescription} */}
            </h3>
            <hr />

            <ul className="social">
              {data.socialLinks &&
                data.socialLinks.map(item => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank">
                        {/* {item.name} */}
                        <img
                          src={item.image}
                          height="50"
                          width="50"
                          alt="social platform logo"
                        />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          {/* <a href="#about">
            <i className="icon-down-circle"></i>
          </a> */}
        </p>
      </header>
    </>
  );
}
