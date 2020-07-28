const sizes = {
  a4: { width: '210mm', height: '297mm' },
}
const styles = ({ size }) => `
  main#resume {
    width: ${sizes[size].width};
    height: ${sizes[size].height};
    margin: auto;
    font-family: Arial, sans-serif;
  }

  main#resume header nav ul {
    display: inline-block;
    padding: 0;
  }

  main#resume header nav ul li {
    display: inline-block;
  }

  main#resume header h1 {
    font-size: 24px;
    margin: .5em 0 .25em 0;
  }

  main#resume header h2 {
    font-size: 20px;
    margin: 0;
  }

  section h1 {
    font-size: 20px;
    margin: 1em 0 .5em 0;
  }

  section h2 {
    font-size: 16px;
    font-weight: normal;
    margin: 0;
  }

  section h3 {
    font-size: 16px;
    font-weight: normal;
    margin: 0 0 1.5em 0;
  }

  section#skills ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
  }

  section#skills ul li {
    flex-grow: 3;
    width: 33%;
  }

  section#skills li span.skill-name {
    width: 100%;
    display: inline-block;
  }

  section#skills li span.skill-exp {
    width: 90%;
    display: inline-block;
    color: green;
    border: 1px solid #eaeaea;
  }

  section#skills span.skill-progress {
    display: block;
    background-color: #09d809; /* light green */
    color: rgba(0, 0, 0, 0);
  }

  section#education ul#courses {
    list-style: none;
    padding: 0;
  }

  section#education li.course {
    margin: .25em 0;
    display: inline-block;
    font-size: 14px;
  }

  section#education li.course::after {
    content: "\\2219";
  }

  /* print styles */
  body {
    -webkit-print-color-adjust: exact !important;
  }
  @page { size: auto;  margin: 5mm; }
`;

export default styles;
