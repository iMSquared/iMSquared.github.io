const members = {
  "intern": [
    {
      name: "MinJoon Kim",
      imageUrl: "./img/minjoon_kim.png",
      websiteUrl: "https://www.linkedin.com/in/246p/",
    },
    {
      name: "Younjin Kang",
      imageUrl: "./img/younjin_kang.png",
      websiteUrl: "",
    },
    {
      name: "Sunyoung Kong",
      imageUrl: "./img/sunyoung_kong.png",
      websiteUrl: "https://www.notion.so/About-Me-118a7eb3e86c80fe8910c55fe83564fb?pvs=4",
    },
    {
      name: "Jiho Kim",
      imageUrl: "./img/jiho_kim.jpg",
      websiteUrl: "",
    },
    {
      name: "Joonhyeop Kim",
      imageUrl: "./img/joonhyeop.png",
      websiteUrl: "",
    },
  ],
  "ms": [
    {
      name: "Jaehyung Kim",
      imageUrl: "./img/jaehyung.png",
      status: "Master candidate",
      websiteUrl: "https://www.linkedin.com/in/jaehyung-kim-a666551ba/",
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
      websiteUrl: "https://github.com/YoontaeCho",
    },
    {
      name: "Haecheol Park",
      imageUrl: "./img/HaecheolPark.jpg",
      websiteUrl: "",
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
};

const container = {
  "phd": document.getElementById("phd-container"),
  "ms": document.getElementById("master-container"),
  "intern": document.getElementById("intern-container"),
  "etc": document.getElementById("etc-container"),
};

Object.keys(members).forEach((key) => {
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
