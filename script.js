import { publications } from "./publications/script.js";

function htmlToNode(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    const nNodes = template.content.childNodes.length;
    if (nNodes !== 1) {
        throw new Error(
            `html parameter must represent a single node; got ${nNodes}. ` +
            'Note that leading or trailing spaces around an element in your ' +
            'HTML, like " <img/> ", get parsed as text nodes neighbouring ' +
            'the element; call .trim() on your input to avoid this.'
        );
    }
    return template.content.firstChild;
}

function createPublicationElement(publication) {
    const line = htmlToNode(
        `<hr class="pub" />`
    );
    const conferenceDiv = htmlToNode(
        `<p style="color: #000085; display: inline">${publication['conference_shortname'] ? publication['conference_shortname'] : ""}</p>`
    );
    const pubDescription = htmlToNode(
       `
        <p class="pub_description" style="display: inline">
          ${publication.title} ${publication.author}
          ${publication.pdfUrl ? `<a href="${publication.pdfUrl}">[Paper]</a>` : ""}
          ${publication.VideoUrl ? `<a href="${publication.VideoUrl}">[video]</a>` : ""}
          ${publication.ProjectUrl ? `<a href="${publication.ProjectUrl}">[project]</a>` : ""}
          ${publication['dataset'] ? `<a href="${publication['dataset']}">[dataset]</a>` : ""}
        </p>
       `.trim()
    );
    return [
        line,
        conferenceDiv,
        pubDescription
    ];
}

const currentYear = new Date().getFullYear();

const publicationsList = document.getElementById("publications-list-recent");
if (publicationsList !== null) {
    const firstElement = publicationsList.childNodes[0];
    publications.filter((publication) => {
        return publication.year >= currentYear - 1 && publication["recent"] !== false;
    }).forEach((publication) => {
        const publicationElements = createPublicationElement(publication);
        publicationElements.forEach((publicationElement) => {
            publicationsList.insertBefore(publicationElement, firstElement);
        });
    });
}
