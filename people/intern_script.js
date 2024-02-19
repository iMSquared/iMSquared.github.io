// import {Interns} from './people_database.js';

const Interns = [
  {
    name: "Haecheol Park",
    imageUrl: "./img/HaecheolPark.jpg",
    websiteUrl: "",
  },
  {
    name: "Jiho Kim",
    imageUrl: "./img/JihoKim.jpg",
    websiteUrl: "",
  },
];

const Container = document.getElementById("intern-container");

Interns.forEach((member) => {
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
  Container.appendChild(memberCard);
});
