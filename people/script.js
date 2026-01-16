const members = {
  "intern": [
    {
      name: "Minseok Lee",
      websiteUrl: "",
    },
    {
      name: "Jaehyuk Kim",
      websiteUrl: "",
    },
    {
      name: "Munhyeon Wang",
      websiteUrl: "",
    },
    {
      name: "Jaewon Choi",
      websiteUrl: "https://www.linkedin.com/in/jaewon-choi-1b6672307",
    },
    {
      name: "Jiyeon Joung",
      websiteUrl: "",
    },
    {
      name: "Huiil Cha",
      websiteUrl: "https://www.linkedin.com/in/%ED%9D%AC%EC%9D%BC-%EC%B0%A8-7a4b8b25a",
    }
  ],
  "ms": [
    {
      name: "Hojin Jung",
      websiteUrl: "https://dev.hojins.life",
    },
    {
      name: "Yoontae Cho",
      websiteUrl: "https://github.com/YoontaeCho",
    },
    {
      name: "Haecheol Park",
      websiteUrl: "https://www.linkedin.com/in/haecheol-park-b3734334a",
    },
    {
      name: "Jiho Kim",
      websiteUrl: "",
    },
    {
      name: "Hyunho Noh",
      websiteUrl: "https://www.linkedin.com/in/hyunhonoh/",
    },
    {
      name: "Kyungjun Oh",
      websiteUrl: "https://www.linkedin.com/in/okj001010/",
    },
    {
      name: "Minyeong Choi",
      websiteUrl: "https://www.linkedin.com/in/%EB%AF%BC%EC%98%81-%EC%B5%9C-93152b294?trk=contact-info",
    },
    {
      name: "Minjoon Kim",
      websiteUrl: "https://www.linkedin.com/in/minjoonkim01",
    },
  ],
  "phd": [
    {
      name: "Jamie (Yoonyoung) Cho",
      websiteUrl: "https://yycho0108.github.io/research",
    },
    {
      name: "Dongwon Son",
      websiteUrl: "https://dongwon-son.github.io/",
    },
    {
      name: "Haewon Jung",
      websiteUrl: "https://github.com/j-hae1",
    },
    {
      name: "Dongryung Lee",
      websiteUrl: "https://github.com/dlee960504",
    },
    {
      name: "Junhyek Han",
      websiteUrl: "https://junhyekh.github.io/",
      role: "Lab Manager",
      email: "junhyek.han@kaist.ac.kr",
    },
  ],
  "etc": [
    {
      name: 'Shakey',
      websiteUrl: "",
    },
    {
      name: 'Allbam Son',
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
    {
      name: "Sejune Joo",
      websiteUrl: "https://www.linkedin.com/in/se-june-%E2%80%8Djoo-60a2ba211/",
    },
    {
      name: "Donguk Lee",
      websiteUrl: "https://github.com/mydulee06",
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

const addMemberLink = (member, listItem) => {
  if (member.websiteUrl) {
    const memberLink = document.createElement("a");
    memberLink.classList.add("member-link");
    memberLink.href = member.websiteUrl;
    memberLink.textContent = member.name;
    listItem.appendChild(memberLink);
  } else {
    listItem.textContent = member.name;
  }
};

const appendDetail = (listItem, detailText) => {
  const detail = document.createElement("span");
  detail.classList.add("member-detail");
  detail.textContent = detailText;
  listItem.appendChild(detail);
};

Object
  .keys(members)
  .filter(key => key !== 'alumni')
  .forEach((key) => {
    members[key].forEach((member) => {
      const listItem = document.createElement("li");
      listItem.classList.add("member-item");

      addMemberLink(member, listItem);

      if (member.role) {
        appendDetail(listItem, ` — ${member.role}`);
      }

      if (member.email) {
        const memberEmail = document.createElement("a");
        memberEmail.classList.add("member-email");
        memberEmail.href = "mailto:".concat(member.email);
        memberEmail.textContent = ` (${member.email})`;
        listItem.appendChild(memberEmail);
      }

      container[key].appendChild(listItem);
    });
  });

members["alumni"].forEach((alumni) => {
  const listItem = document.createElement("li");
  listItem.classList.add("member-item");

  if (alumni.websiteUrl) {
    const alumniLink = document.createElement("a");
    alumniLink.href = alumni.websiteUrl;
    alumniLink.textContent = alumni.name;
    listItem.appendChild(alumniLink);
  } else {
    listItem.textContent = alumni.name;
  }

  container["alumni"].appendChild(listItem);
});
