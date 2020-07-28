const sizes = {
  a4: { width: '210mm', height: '297mm' },
}
const styles = ({ size }) => `
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: gray;
  }

  main#resume {
    width: ${sizes[size].width};
    height: ${sizes[size].height};
    margin: auto;
    background-color: white;
    font-family: Roboto, sans-serif;
  }

  main#resume p {
    font-size: 14px;
  }

  main#resume header {
    text-align: center;
  }

  main#resume header nav ul {
    display: inline-block;
    padding: 0;
    margin-bottom: .25em;
  }

  main#resume header nav ul li {
    display: inline-block;
  }

  main#resume header h1 {
    font-size: 27px;
    font-weight: 100;
    margin: 0 0 .25em 0;
  }

  main#resume header h2 {
    font-size: 14px;
    font-weight: 100;
    margin: 0;
  }

  section h1 {
    font-size: 20px;
    margin: 1em 0 .16em 0;
    font-weight: 500;
  }

  section h2 {
    font-size: 16px;
    font-weight: normal;
    margin: 0;
  }

  section h3 {
    font-size: 14px;
    font-weight: normal;
    margin: 0 0 1em 0;
  }

  .container {
    padding: 1.75em 1.75em 0 1.75em;
  }

  #content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }

  #sections {
    width: 80%;
    flex: 4;
    margin: 0 0 0 1.5em;
  }

  #sections hr {
    margin-top: 0;
  }

  #content aside {
    width: 20%;
    flex: 1;
  }

  section#skills ul {
    list-style: none;
    padding: 0;
  }

  section#skills ul li {
    width: 100%;
  }

  section#skills li span.skill-name {
    width: 100%;
    display: inline-block;
    margin-bottom: .25em;
  }

  section#skills li span.skill-exp {
    width: 90%;
    display: inline-block;
    color: green;
    border: 1px solid #909090; /* light gray */
  }

  section#skills span.skill-progress {
    display: block;
    background-color: #919192; /* light blue gray */
    color: rgba(0, 0, 0, 0);
    height: 6px;
  }

  section#education ul#courses, section#work ul.skills-work {
    list-style: none;
    padding: 0;
    font-size: 12px;
  }

  section#education li.course, section#work li.skill-item {
    margin: .25em 0;
    display: inline-block;
  }

  section#education li.course:not(:last-child):after, section#work li.skill-item:not(:last-child):after {
    content: " \\2219 ";
  }

  /* print styles */
  body {
    -webkit-print-color-adjust: exact !important;
  }
  @page { size: auto;  margin: 0; }
`;

export default styles;
