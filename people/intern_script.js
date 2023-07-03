// import {Interns} from './people_database.js';

const Interns = [
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
    {
        name: 'Yoontae Cho',
        imageUrl:'./img/yoontae.jpg',
        websiteUrl: ''
    },
    {
        name: 'Jaeryeong Kim',
        imageUrl:'./img/jaeryeong.JPG',
        websiteUrl: ''
    },
    {
        name: 'Beomseok Kim',
        imageUrl:'./img/default.png',
        websiteUrl: ''
    },
    {
        name: 'Hwanseok Jung',
        imageUrl:'./img/hwanseok.jpg',
        websiteUrl: 'https://blog.naver.com/junghs1040'
    },
    {
        name: 'Hojin Jung',
        imageUrl:'./img/hojin.png',
        websiteUrl: 'https://dev.hojins.life/'
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
