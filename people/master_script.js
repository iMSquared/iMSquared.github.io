// import {MSMembers} from './people_database.js';

const MSMembers = [

  {
    name: "Junhyek Han",
    imageUrl: "./img/junhyek.jpg",
    status: "Master candidate",
    websiteUrl: "https://www.linkedin.com/in/junhyek-han-40444923a",
  },
  {
    name: "Jisu Han (Lab Manager)",
    imageUrl: "./img/jisu.png",
    status: "Master candidate",
    websiteUrl: "https://github.com/JisuHann?tab=repositories",
  },
  {
    name: "Jaehyung Kim",
    imageUrl: "./img/jaehyung.png",
    status: "Master candidate",
    websiteUrl: "https://www.linkedin.com/in/jaehyung-kim-a666551ba/",
  },
  {
    name: "Sanghyun Son",
    imageUrl: "./img/sanghyeon.JPG",
    status: "Master candidate",
    websiteUrl: "https://github.com/ssh98son?tab=repositories",
  },
  {
    name: "Sejune Joo",
    imageUrl: "./img/sejune.JPG",
    status: "Master candidate",
    websiteUrl: "https://www.linkedin.com/in/se-june-%E2%80%8Djoo-60a2ba211/",
  },
  {
    name: "Donguk Lee",
    imageUrl: "./img/donguk.JPG",
    status: "Master candidate",
    websiteUrl: "https://github.com/mydulee06",
  },
  {
    name: "Hojin Jung",
    imageUrl: "./img/hojin.png",
    status: "Master candidate",
    websiteUrl: "https://dev.hojins.life/",
  },
];

const MasterContainer = document.getElementById("master-container");

MSMembers.forEach((member) => {
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
  MasterContainer.appendChild(memberCard);
});
