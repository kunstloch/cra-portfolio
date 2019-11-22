import React from 'react';
import linkedInLogo from './li-logo.png';

let data = {
  linkedinId: 'Test'
};

export default function ContactUs() {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>
              <img src={linkedInLogo} height="42" width="42" />
              linked: {data.linkedinId}
            </h4>
          </div>
        </aside>
      </div>
      <p className="inprint">
        Impressum: Alexander Scherer-Sokolowski | Tel: +43 664 7501 8228 |
        Schulstrasse 1 - 7304 Grosswarasdorf - Österreich
      </p>
    </section>
  );
}
