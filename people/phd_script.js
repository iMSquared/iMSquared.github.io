// import {PhdMembers} from './people_database.js';

const PhdMembers = [
  {
    name: "Jamie (Yoonyoung) Cho",
    imageUrl: "./img/jamie.png",
    status: "PhD candidate",
    websiteUrl: "https://yycho0108.github.io/research",
  },
  {
    name: "Dongwon Son",
    imageUrl: "./img/dongwon.png",
    status: "PhD candidate",
    websiteUrl: "https://dongwon-son.github.io/",
  },

  // {
  //   name: "Minchan Kim",
  //   imageUrl: "./img/minchan.jpg",
  //   status: "PhD candidate",
  //   websiteUrl: "https://minchan-kim.github.io",
  // },
  {
    name: "Haewon Jung",
    imageUrl: "./img/haewon.jpg",
    status: "PhD candidate",
    websiteUrl: "https://github.com/j-hae1",
    role: "Lab Manager",
    email: "zora07@kaist.ac.kr",
  },
  {
    name: "Dongryung Lee",
    imageUrl: "./img/dongryung.jpg",
    status: "PhD candidate",
    websiteUrl: "https://github.com/dlee960504",
  },
  {
    name: "Junhyek Han",
    imageUrl: "./img/junhyek.jpg",
    status: "PhD candidate",
    websiteUrl: "https://junhyekh.github.io/",
  },
];
const PhdContainer = document.getElementById("phd-container");

PhdMembers.forEach((member) => {
  const memberCard = document.createElement("div");
  memberCard.classList.add("member-card");

  const memberImage = document.createElement("img");
  memberImage.classList.add("member-image");
  memberImage.src = member.imageUrl;
  memberImage.alt = `${member.name}'s profile image`;

  const memberLink = document.createElement("a");
  memberLink.classList.add("member-link");
  memberLink.href = member.websiteUrl;
  memberLink.textContent = member.name;

  memberCard.appendChild(memberImage);
  memberCard.appendChild(memberLink);
  // Add role if it exists
  if (member.role) {
    const memberRole = document.createElement("p");
    memberRole.classList.add("member-role");
    memberRole.innerText = member.role;
    memberCard.appendChild(memberRole);
  }
  // Add email if it exists
  if (member.email) {
    const memberEmail = document.createElement("a");
    memberEmail.classList.add("member-email");
    memberEmail.href = "mailto:".concat(member.email);
    memberEmail.textContent = member.email;
    memberCard.appendChild(memberEmail);
  }

  PhdContainer.appendChild(memberCard);
});
