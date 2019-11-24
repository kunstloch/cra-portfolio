import React from 'react';
import profilePic from './profilePic.jpg';

let data = {
  name: 'Alexander Scherer-Sokolowski',
  aboutme: `I am currently a pre-final year student at The LNM Institute of Information Technology and pursuing my B.Tech from here. I am a self taught Full Stack Web Developer, currently diving deeper into Machine Learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.`,
  address: 'Austria',
  website: 'alex.scherer@gmx.at'
};

export default function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilePic} alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          {/* <p>{data.aboutme}</p> */}
          <p>
            After 15 successful years in b2b sales and business development -
            from cold calling to project implementation in the area of SaaS
            platforms - it was time for me to focus on something I have been
            interested in all along: to be able to understand online products
            "behind the scenes" and actively influence how they are built.
          </p>
          <p>
            In an intensive web development boot camp education at UpLeveled, I
            not only learned JavaScript, React, HTML, and CSS, but also applied
            these in many practical exercises and projects. I also work with
            Nexts.js, TypeScript, and GraphQL as part of first end-to-end
            applications.
          </p>
          <p>
            The boot camp was only the beginning of my lifelong-learning journey
            in web development, and an excellent proof that I can learn complex
            subjects in a very short time. I am convinced that combining my web
            development knowledge with the long-time experience in sales is a
            benefit for my future employer.
          </p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{data.name}</span>
                {/* <br></br>
                <span>{data.address}</span> */}
                <br></br>
                <span>{data.website}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
