const members = {
  "intern": [
    {
      name: "Minseok Lee",
      imageUrl: "./img/minseok_lee.png",
      websiteUrl: "",
    },
    {
      name: "Yejun Ju",
      imageUrl: "./img/yejun_ju.png",
      websiteUrl: "",
    },
    {
      name: "Minjoon Kim",
      imageUrl: "./img/minjoon_kim.png",
      websiteUrl: "",
    },
  ],
  "ms": [
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
      websiteUrl: "https://github.com/YoontaeCho",
    },
    {
      name: "Haecheol Park",
      imageUrl: "./img/HaecheolPark.jpg",
      websiteUrl: "",
    },
    {
      name: "Jiho Kim",
      imageUrl: "./img/jiho_kim.jpg",
      websiteUrl: "",
    },
    {
      name: "Hyunho Noh",
      imageUrl: "./img/hyunho_noh.png",
      websiteUrl: "https://www.linkedin.com/in/hyunhonoh/",
    },
    {
      name: "Kyungjun Oh",
      imageUrl: "./img/kyungjun_oh.png",
      websiteUrl: "https://www.linkedin.com/in/okj001010/",
    },
    {
      name: "Minyeong Choi",
      imageUrl: "./img/minyeong_choi.png",
      websiteUrl: "https://www.linkedin.com/in/%EB%AF%BC%EC%98%81-%EC%B5%9C-93152b294?trk=contact-info",
    },
  ],
  "phd": [
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
    {
      name: "Haewon Jung",
      imageUrl: "./img/haewon.jpg",
      status: "PhD candidate",
      websiteUrl: "https://github.com/j-hae1",
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
      role: "Lab Manager",
      email: "junhyek.han@kaist.ac.kr",
    },
  ],
  "etc": [
    {
      name: 'Shakey',
      imageUrl: './img/etc/shakey_1.jpeg',
      websiteUrl: "",
    },
    {
      name: 'Allbam Son',
      imageUrl:'./img/etc/allbam_1.jpg',
      websiteUrl: "",
    },
  ],
  "alumni": [
    {
      name: "Minchan Kim",
      websiteUrl: "",
    },
    {
      name: "Jiyong Ahn",
      websiteUrl: "https://github.com/ajy8456",
    },
    {
      name: "Heesang Cho",
      websiteUrl: "",
    },
    {
      name: "Jisu Han",
      websiteUrl: "",
    },
    {
      name: "Sanghyeon Son",
      websiteUrl: "https://github.com/ssh98son",
    },
    {
      name: "Jaehyung Kim",
      websiteUrl: "https://www.linkedin.com/in/jaehyung-kim-a666551ba/",
    },
  ]
};

const container = {
  "phd": document.getElementById("phd-container"),
  "ms": document.getElementById("master-container"),
  "intern": document.getElementById("intern-container"),
  "etc": document.getElementById("etc-container"),
  "alumni": document.getElementById("alumni-container"),
};

Object
  .keys(members)
  .filter(key => key !== 'alumni')
  .forEach((key) => {
    members[key].forEach((member) => {
      const memberCard = document.createElement("div");
      memberCard.classList.add("member-card");
    
      const memberImage = document.createElement("img");
      memberImage.classList.add("member-image");
      memberImage.src = member.imageUrl;
      memberImage.alt = `${member.name}'s profile image`;
    
      const memberLink = document.createElement("a");
      memberLink.classList.add("member-link");
      websiteUrl = member.websiteUrl ? member.websiteUrl : "#";
      memberLink.href = member.websiteUrl;
      memberLink.textContent = member.name;
    
      memberCard.appendChild(memberImage);
      memberCard.appendChild(memberLink);
      if (member.role) {
        const memberRole = document.createElement("p");
        memberRole.classList.add("member-role");
        memberRole.innerText = member.role;
        memberCard.appendChild(memberRole);
      }
      if (member.email) {
        const memberEmail = document.createElement("a");
        memberEmail.classList.add("member-email");
        memberEmail.href = "mailto:".concat(member.email);
        memberEmail.textContent = member.email;
        memberCard.appendChild(memberEmail);
      }

      container[key].appendChild(memberCard);
    });
  });

container["alumni"].innerHTML = `
    <ul>
      ${members["alumni"].map((alumni) => `<li><a href="${alumni.websiteUrl}">${alumni.name}</a></li>`).join("")}
    </ul>
  `;
