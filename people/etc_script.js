const EtcMembers = [
    {
        name: 'Shakey',
        imageUrl: './img/etc/shakey_1.jpeg',
    },
    {
        name: 'Allbam Son',
        imageUrl:'./img/etc/allbam_1.jpg'
    }
];


const EtcContainer = document.getElementById('etc-container');

EtcMembers.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.classList.add('member-card');

    const memberImage = document.createElement('img');
    memberImage.classList.add('member-image');
    memberImage.src = member.imageUrl;
    memberImage.alt = `${member.name}'s profile image`;

    const memberName = document.createElement('p');
    memberName.classList.add('member-name');
    memberName.textContent = member.name;

    memberCard.appendChild(memberImage);
    memberCard.appendChild(memberName);
    EtcContainer.appendChild(memberCard);
});
