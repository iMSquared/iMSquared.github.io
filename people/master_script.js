// import {MSMembers} from './people_database.js';

const MSMembers = [

  {
    name: "Jisu Han",
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
    name: "Sanghyeon Son",
    imageUrl: "./img/sanghyeon.JPG",
    status: "Master candidate",
    websiteUrl: "https://github.com/ssh98son?tab=repositories",
    role: "Lab Manager",
    email: "ssh98son@kaist.ac.kr",
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
  {
    name: "Yoontae Cho",
    imageUrl: "./img/yoontae.jpg",
    status: "Master candidate",
    websiteUrl: " https://github.com/YoontaeCho",
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

  MasterContainer.appendChild(memberCard);

});
