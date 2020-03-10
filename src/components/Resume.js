import React from 'react';
import styled from 'styled-components';

let data = {
  education: [
    {
      UniversityName: 'Fullstack Web Development Bootcamp ',
      specialization: 'UpLeveled GmbH',
      MonthOfPassing: 'Nov',
      YearOfPassing: '2019',
      Achievements: 'Some Achievements'
    },
    {
      UniversityName: 'Communications And Political Science',
      specialization: 'University of Vienna - Second Study Section Completed',
      MonthOfPassing: '   ',
      YearOfPassing: '2005',
      Achievements: 'Some Achievements'
    },
    {
      UniversityName: `Higher School Certificate`,
      specialization: `Bundesrealgymnasium Zell am See`,
      MonthOfPassing: '   ',
      YearOfPassing: '1995',
      Achievements: 'Some Achievements'
    }
  ],
  work: [
    {
      CompanyName: 'Staymate OG',
      CompanyInfo: 'Vienna -  the digital hotel assistant ',
      specialization: 'Software Engineer',
      MonthOfLeaving: ' present',
      YearOfLeaving: '',
      MonthOfStarting: 'Feb',
      YearOfStarting: '2020',
      Achievements: ''
    },

    {
      CompanyName: 'whatchado GmbH',
      CompanyInfo: 'Vienna - video employer branding platform',
      specialization: 'Sales Manager',
      MonthOfLeaving: 'Jul',
      YearOfLeaving: '2019',
      MonthOfStarting: 'Jan',
      YearOfStarting: '2017',
      Achievements: ''
    },
    {
      CompanyName: 'Adverity GmbH',
      CompanyInfo: 'Vienna - marketing intelligence SaaS platform',
      specialization:
        'Sales / Business Development, International and Agencies',
      MonthOfLeaving: 'Dez',
      YearOfLeaving: '2016',
      MonthOfStarting: 'Jul',
      YearOfStarting: '2014',
      Achievements: `
      `
    },
    {
      CompanyName: 'kununu GmbH / Xing',
      CompanyInfo: 'Vienna - employer ranking platform',
      specialization: 'Sales Manager, Team Lead Large Accounts DACH',
      MonthOfLeaving: 'May',
      YearOfLeaving: '2014',
      MonthOfStarting: 'Jun',
      YearOfStarting: '2011',
      Achievements: ''
    },
    {
      CompanyName: 'Immobilien.NET',
      CompanyInfo: 'Vienna - real estate platform',
      specialization: 'Sales and Key Account Manager Online Advertising',
      MonthOfLeaving: 'May',
      YearOfLeaving: '2011',
      MonthOfStarting: 'Aug',
      YearOfStarting: '2009',
      Achievements: ''
    },
    {
      CompanyName: 'StepStone Österreich GmbH',
      CompanyInfo: 'Vienna - online job board',
      specialization: 'Account Manager',
      MonthOfLeaving: 'Aug',
      YearOfLeaving: '2009',
      MonthOfStarting: 'Jul',
      YearOfStarting: '2008',
      Achievements: ''
    },
    {
      CompanyName: 'EMBERS Consulting',
      CompanyInfo: 'Vienna - business call center',
      specialization: 'Account and Quality Management',
      MonthOfLeaving: 'Aug',
      YearOfLeaving: '2009',
      MonthOfStarting: 'Nov',
      YearOfStarting: '2006',
      Achievements: ''
    }
  ],
  skillsDescriptionOne: 'Tech Skills',
  skills: [
    {
      skillname: 'JavaScript',
      skillpercent: '70%',
      skillcolor: '#f7df1e'
    },
    {
      skillname: 'React',
      skillpercent: '70%',
      skillcolor: '#61DBFB'
    },
    {
      skillname: 'Next.js',
      skillpercent: '70%',
      skillcolor: '#323232'
    },
    {
      skillname: 'Node.js',
      skillpercent: '60%',
      skillcolor: '#68A063'
    },
    {
      skillname: 'TypeScript',
      skillpercent: '50%',
      skillcolor: '#007acc'
    },
    {
      skillname: 'HTML5',
      skillpercent: '70%',
      skillcolor: '#f06529'
    },
    {
      skillname: 'CSS3',
      skillpercent: '75%',
      skillcolor: '#2965f1'
    },
    {
      skillname: 'GraphQL',
      skillpercent: '58%',
      skillcolor: ' #e535ab'
    },
    {
      skillname: 'GIT',
      skillpercent: '55%',
      skillcolor: '#3E2C00'
    }
  ],
  skillsDescriptionTwo: 'Soft Skills',
  skillsTwo: [
    {
      skillname: 'Communication ',
      skillpercent: '80%',
      skillcolor: '#f7df1e'
    },
    {
      skillname: 'Teachability ',
      skillpercent: '78%',
      skillcolor: '#61DBFB'
    },
    {
      skillname: 'Abstract Thinking',
      skillpercent: '70%',
      skillcolor: '#323232'
    },
    {
      skillname: 'Persistence',
      skillpercent: '67%',
      skillcolor: '#68A063'
    },
    {
      skillname: 'Helpfulness',
      skillpercent: '82%',
      skillcolor: '#007acc'
    },
    {
      skillname: 'Creativity',
      skillpercent: '70%',
      skillcolor: '#f06529'
    },
    {
      skillname: 'Patience',
      skillpercent: '63%',
      skillcolor: '#2965f1'
    },
    {
      skillname: 'Project Planning',
      skillpercent: '73%',
      skillcolor: ' #e535ab'
    },
    {
      skillname: 'Critical Thinking',
      skillpercent: '88%',
      skillcolor: '#3E2C00'
    }
  ]
};

const ContainerSkill = styled.div`
  border: 0.1rem solid black;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const TitleSkill = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
`;

const BarExpand = styled.div`
  background: #0bbdf4;
  height: 22px;
`;

export default function Resume() {
  return (
    <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.work &&
            data.work.map((item, index) => {
              return (
                <div className="row item" key={index}>
                  <div className="twelve columns">
                    <h3>
                      {item.CompanyName} <span> {item.CompanyInfo}</span>
                    </h3>

                    <p className="info">
                      <em className="date">
                        {item.MonthOfStarting} {item.YearOfStarting} -{' '}
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                      <span> | </span> {item.specialization}
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.education &&
            data.education.map((item, index) => {
              return (
                <div className="row item" key={index}>
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>{' '}
                      <span> | </span>
                      {item.specialization}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="container skills">
          <div className="nine columns main-col">
            <p className="skilldescription">{data.skillsDescriptionOne}</p>

            <div className="bars">
              <ul className="skills skillsone">
                {data.skills &&
                  data.skills.map((item, index) => {
                    return (
                      <li key={index}>
                        <TitleSkill>{item.skillname}</TitleSkill>
                        <ContainerSkill>
                          <BarExpand
                            style={{
                              width: item.skillpercent
                            }}
                            className={` ${item.skillname
                              .toLowerCase()
                              .replace(' ', '')}`}
                          ></BarExpand>
                        </ContainerSkill>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="nine columns main-col">
            <p className="skilldescription">{data.skillsDescriptionTwo}</p>

            <div className="bars">
              <ul className="skills skillstwo">
                {data.skillsTwo &&
                  data.skillsTwo.map((item, index) => {
                    return (
                      <li key={index}>
                        <TitleSkill>{item.skillname}</TitleSkill>
                        <ContainerSkill>
                          <BarExpand
                            style={{
                              width: item.skillpercent
                            }}
                            className={` ${item.skillname
                              .toLowerCase()
                              .replace(' ', '')}`}
                          ></BarExpand>
                        </ContainerSkill>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
