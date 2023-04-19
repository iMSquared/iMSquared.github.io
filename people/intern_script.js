// import {Interns} from './people_database.js';

const Interns = [
    {
        name: 'Sanghyun Son',
        imageUrl:'./img/sanghyeon.JPG',
        websiteUrl: 'https://github.com/ssh98son?tab=repositories'
    },
    {
        name: 'Hyunbae Kim',
        imageUrl:'./img/hyunbae.jpg',
        websiteUrl: 'https://github.com/BaeLuv?tab=repositories'
    },
    {
        name: 'Kwanwoo Kim',
        imageUrl:'./img/default.png',
        websiteUrl: ''
    },
    {
        name: 'Donguk Lee',
        imageUrl:'./img/donguk.JPG',
        websiteUrl: 'https://github.com/mydulee06'
    },
];

const Container = document.getElementById('intern-container');

Interns.forEach(member => {
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
    Container.appendChild(memberCard);
});
