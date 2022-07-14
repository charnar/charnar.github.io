"use strict";

const skillsContainer = document.querySelector(".container-table");
const skillsAll = [
  {
    name: "Python",
    logo: "fa-brands fa-python",
    type: "Programming Languages",
  },

  {
    name: "Java",
    logo: "fa-brands fa-java",
    type: "Programming Languages",
  },

  {
    name: "HTML",
    logo: "fa-brands fa-html5",
    type: "Web Development",
  },

  {
    name: "CSS",
    logo: "fa-brands fa-css3-alt",
    type: "Web Development",
  },

  {
    name: "Javascript",
    logo: "fa-brands fa-js",
    type: "Web Development",
  },

  {
    name: "Figma",
    logo: "fa-brands fa-figma",
    type: "UI/UX Design",
  },
];

const skillTypes = [...new Set(skillsAll.map((s) => s.type))];
let html;

skillTypes.forEach((skillType) => {
  html = `<h1>${skillType}</h1>`;
  //   skillsContainer.insertAdjacentHTML("beforeend", html);

  const skills = skillsAll.filter((s) => s.type === skillType);
  skills.forEach((skill) => {
    html = `<div>
  <i class="${skill.logo}"></i>
</div>`;
    skillsContainer.insertAdjacentHTML("beforeend", html);
  });
});
