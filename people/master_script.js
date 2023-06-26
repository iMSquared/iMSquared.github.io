// import {MSMembers} from './people_database.js';

const MSMembers = [
    {
        name: 'Dongryung Lee',
        imageUrl:'./img/dongryung.jpg',
        status: 'Master candidate',
        websiteUrl: 'https://github.com/dlee960504'
    },
    {
        name: 'Junhyek Han',
        imageUrl:'./img/default.png',
        status: 'Master candidate',
        websiteUrl: 'https://www.linkedin.com/in/junhyek-han-40444923a'
    },
    {
        name: 'Jisu Han (Lab Leader)',
        imageUrl:'./img/default.png',
        status: 'Master candidate',
        websiteUrl: 'https://github.com/JisuHann?tab=repositories'
    },
    {
        name: 'Jaehyung Kim',
        imageUrl:'./img/jaehyung.png',
        status: 'Master candidate',
        websiteUrl: 'https://www.linkedin.com/in/jaehyung-kim-a666551ba/'
    },
    {
        name: 'Sanghyun Son',
        imageUrl:'./img/sanghyeon.JPG',
        websiteUrl: 'https://github.com/ssh98son?tab=repositories'
    },
];

const MasterContainer = document.getElementById('master-container');

MSMembers.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.classList.add('member-card');

    const memberImage = document.createElement('img');
    memberImage.classList.add('member-image');
    memberImage.src = member.imageUrl;
    memberImage.alt = `${member.name}'s profile image`;

    const memberLink = document.createElement('a');
    memberLink.classList.add('member-link');
    memberLink.href = member.websiteUrl;
    memberLink.textContent = member.name;

    memberCard.appendChild(memberImage);
    memberCard.appendChild(memberLink);
    MasterContainer.appendChild(memberCard);
});
