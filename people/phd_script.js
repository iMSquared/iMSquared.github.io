// import {PhdMembers} from './people_database.js';


const PhdMembers = [
    {
        name: 'Jamie (Yoonyoung) Cho',
        imageUrl: './img/jamie.png',
        status: 'PhD candidate',
        websiteUrl: 'github.com/yycho0108'
    },
    {
        name: 'Dongwon Son',
        imageUrl:'./img/dongwon.png',
        status: 'PhD candidate',
        websiteUrl: 'https://dongwon-son.github.io/'
    },

    {
        name: 'Minchan Kim',
        imageUrl:'./img/default.png',
        status: 'PhD candidate',
        websiteUrl: ''
    }
];
const PhdContainer = document.getElementById('phd-container');

PhdMembers.forEach(member => {
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
    PhdContainer.appendChild(memberCard);
});
