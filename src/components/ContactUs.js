import React from 'react';

export default function ContactUs() {
  const part1 = "alexscherer";
  const part2 = Math.pow(2,6);
  const part3 = String.fromCharCode(part2);
  const part4 = "outlook.com";
  const part5 = part1 + String.fromCharCode(part2) + part4;
  const part6 = "mailto:";

  return (
    <section id="contact">
      <p className="impressum">
        Impressum: Alexander Scherer-Sokolowski | Tel: +43 664 7501 8228 <br />
        Schulstrasse 1 - 7304 Grosswarasdorf - Österreich <br />email:  <a href={part6 + part5}>{ part5 }</a>
      </p>
    </section>
  );
}
