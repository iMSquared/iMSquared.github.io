// import {Interns, MSMembers, PhdMembers} from './people_database.js';
const publications = [
  {
    title:
      "Open x-embodiment: Robotic learning datasets and rt-x models",
    author: "Open X-Embodiment Collaboration",
    Paper_link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=dw3rEwgAAAAJ&citation_for_view=dw3rEwgAAAAJ:4DMP91E08xMC",
    year: 2023,
    conference_etc: "",
    pdfUrl: "https://arxiv.org/pdf/2310.08864.pdf",
    VideoUrl: "",
    ProjectUrl: "https://robotics-transformer-x.github.io/",
    imageUrl: "images/RTX.png",
  },
  {
    title:
      "Learning whole-body manipulation for quadrupedal robot",
    author: "Seunghun Jeon, Moonkyu Jung, Suyoung Choi, Beomjoon Kim, Jemin Hwangbo",
    conference:
      "Robotics and Automation Letters (RA-L)",
    year: 2023,
    conference_etc: "",
    pdfUrl: "https://arxiv.org/pdf/2308.16820.pdf",
    VideoUrl: "https://www.youtube.com/watch?v=fO_PVr27QxU&feature=youtu.be&ab_channel=RaiLabKaist",
    ProjectUrl:
      "",
    imageUrl: "images/wholebody.png",
  },
  {
    title:
      "Preference learning for guiding the tree search in continuous POMDPs",
    author: "Jiyong Ahn, Sanghyeon Son, Dongryung Lee, Jisu Han, Dongwon Son, and Beomjoon Kim.",
    conference:
      "Conference on Robot Learnining (CoRL)",
    year: 2023,
    conference_etc: "",
    pdfUrl: "https://openreview.net/pdf?id=09UL1dCqf2n",
    VideoUrl: "https://youtu.be/sONwle96q-8?si=daMlHJAQyEjGsp-l",
    ProjectUrl:
      "https://sites.google.com/view/preference-guided-pomcpow?usp=sharing",
    imageUrl: "images/POMDPs.png",
  },
  {
    title:
      "Pre- and post-contact policy decomposition for non-prehensile manipulation with zero-shot sim-to-real transfer.",
    author: "Minchan Kim, Junhyek Han, Jaehyung Kim, and Beomjoon Kim.",
    conference:
      "International Conference on Intelligent Robots and Systems (IROS)",
    year: 2023,
    conference_etc: "",
    pdfUrl: "http://arxiv.org/abs/2309.02754.pdf",
    VideoUrl: "https://youtu.be/SVUsKp_ij-U",
    ProjectUrl:
      "https://sites.google.com/view/nonprenehsile-decomposition/home",
    imageUrl: "images/non_prehensile.png",
  },
  {
    title:
      "Local object crop collision network for efficient simulation of non-convex objects in GPU-based simulators.",
    author: "Dongwon Son, Beomjoon Kim.",
    conference: "Robotics: Science and Systems (RSS)",
    year: 2023,
    conference_etc: "",
    pdfUrl: "https://arxiv.org/pdf/2304.09439.pdf",
    VideoUrl:
      "https://youtube.com/playlist?list=PLtZIqgjx5N3JAhojekFJQ04wbm9-pZ2IZ",
    ProjectUrl: "https://sites.google.com/view/locc-rss2023/home",
    imageUrl: "images/Locc.png",
  },
  {
    title:
      "Ohm^2: Optimal hierarchical planner for object search in large environments via mobile manipulation.",
    author: "Yoonyoung Cho*, Donghoon Shin*, Beomjoon Kim.",
    conference:
      "International Conference on Intelligent Robots and Systems (IROS)",
    year: 2022,
    conference_etc: "",
    pdfUrl: "https://imsquared.github.io/papers/cho-iros-2022.pdf",
    VideoUrl: "",
    ProjectUrl: "",
    imageUrl: "images/ohm^2.png",
  },
  {
    title:
      "Grasping as inference: reactive grasping in heavily cluttered environment.",
    author: "Dongwon Son.",
    conference: "Robotics and Automation Letters (RA-L)",
    year: 2022,
    conference_etc: "",
    pdfUrl: "https://arxiv.org/pdf/2205.13146.pdf",
    VideoUrl: "https://www.youtube.com/watch?v=Sj5QDR2Hwd4&feature=youtu.be",
    ProjectUrl: "",
    imageUrl: "images/GraspPF.png",
  },
  {
    title:
      "Representation, learning, and planning algorithms for geometric task and motion planning.",
    author:
      "Beomjoon Kim, Luke Shimanuki, Leslie Pack Kaelbling, Tomás Lozano-Pérez.",
    conference: "International Journal of Robotics Research",
    year: 2021,
    conference_etc: "",
    pdfUrl: "https://arxiv.org/pdf/2203.04605.pdf",
    VideoUrl: "",
    ProjectUrl: "",
    imageUrl: "images/SAHS.png",
  },
  {
    title: "Integrated task and motion planning.",
    author:
      "Caelan Reed Garrett, Rohan Chitnis, Rachel Holladay, Beomjoon Kim, Tom Silver, Leslie Pack Kaelbling, Tomás Lozano-Pérez.",
    conference: "Annual Review of Control, Robotics, and Autonomous Systems",
    year: 2021,
    conference_etc: "",
    pdfUrl:
      "https://www.annualreviews.org/doi/pdf/10.1146/annurev-control-091420-084139",
    VideoUrl: "",
    ProjectUrl: "",
    imageUrl: "images/Integrated_TAMP.png",
  },
  {
    title:
      "Reinforcement learning for vision-based object manipulation with non-parametric policy and action primitives.",
    author: "Dongwon Son, Myungsin Kim, Jaecheol Sim, Wonsik Shin.",
    conference:
      "International Conference on Intelligent Robots and Systems (IROS)",
    year: 2021,
    conference_etc: "",
    pdfUrl: "https://arxiv.org/pdf/2206.05671.pdf",
    VideoUrl: "https://www.youtube.com/watch?v=WLoS7OXOiVI&feature=youtu.be",
    ProjectUrl: "",
    imageUrl: "images/AP_NPQL.png",
  },
  {
    title:
      "A Long Horizon Planning Framework for Manipulating Rigid Pointcloud Objects.",
    author:
      "Anthony Simeonov, Yilun Du, Beomjoon Kim, Francois Hogan, Joshua Tenenbaum, Pulkit Agrawal, Alberto Rodriguez.",
    conference: "Conference on Robot Learning (CoRL)",
    year: 2020,
    conference_etc: "",
    pdfUrl: "https://arxiv.org/pdf/2011.08177.pdf",
    VideoUrl: "https://www.youtube.com/watch?v=wTXt6djcAd4",
    ProjectUrl: "https://anthonysimeonov.github.io/rpo-planning-framework/",
    imageUrl: "images/A_Long_Horizon_Planning.png",
  },
  {
    title:
      "CAMPs: Learning Context-Specific Abstractions for Efficient Planning in Factored MDPs.",
    author:
      "Rohan Chitnis*, Tom Silver*, Beomjoon Kim, Leslie Pack Kaelbling, Tomás Lozano-Pérez.",
    conference: "Conference on Robot Learning (CoRL)",
    year: 2020,
    conference_etc: "Plenary talk (top 12% of accepted papers).",
    pdfUrl: "https://rohanchitnis.com/papers/2020-CoRL-CAMP.pdf",
    VideoUrl: "https://www.youtube.com/watch?v=wTXt6djcAd4",
    ProjectUrl: "",
    imageUrl: "images/CAMP.png",
  },
  {
    title:
      "Monte Carlo Tree Search in continuous spaces using Voronoi optimistic optimization with regret bounds.",
    author:
      "Beomjoon Kim, Kyungjae Lee, Sungbin Lim, Leslie Pack Kaelbling, Tomas Lozano-Perez.",
    conference: "AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2020,
    conference_etc: "Oral (top 6% of accepted papers).",
    pdfUrl: "http://people.csail.mit.edu/beomjoon/publications/kim-aaai20.pdf",
    VideoUrl: "",
    ProjectUrl: "",
    imageUrl: "images/VOOT.png",
  },
  {
    title: "Sim-to-Real Transfer of Bolting Tasks with Tight Tolerance.",
    author: "Dongwon Son, Hyunsoo Yang, Dongjun Lee.",
    conference:
      "International Conference on Intelligent Robots and Systems (IROS)",
    year: 2020,
    conference_etc: "",
    pdfUrl: "https://ras.papercept.net/images/temp/IROS/files/1817.pdf",
    VideoUrl: "https://www.youtube.com/watch?v=y4q0JqXdil4",
    ProjectUrl: "",
    imageUrl: "images/Sim2Real_bolting.png",
  },
  {
    title:
      "Learning to guide task and motion planning using score-space representation.",
    author: "Beomjoon Kim, Zi Wang, Leslie Pack Kaelbling, Tomas Lozano-Perez.",
    conference: "International Journal of Robotics Research",
    year: 2019,
    conference_etc: "",
    pdfUrl: "https://arxiv.org/pdf/1807.09962.pdf",
    VideoUrl: "",
    ProjectUrl: "",
    imageUrl: "images/BOX.png",
  },
  {
    title:
      "Learning value functions with relational state representations for guiding task-and-motion planning.",
    author: "Beomjoon Kim, Luke Shimanuki",
    conference: "Conference on Robot Learning (CoRL)",
    year: 2019,
    conference_etc: "",
    pdfUrl: "http://people.csail.mit.edu/beomjoon/publications/kim-corl19.pdf",
    VideoUrl: "",
    ProjectUrl: "",
    imageUrl: "images/Learning_value_functions.png",
  },
  {
    title:
      "Adversarial actor-critic method for task and motion planning problems using planning experience.",
    author: "Beomjoon Kim, Leslie Pack Kaelbling, Tomas Lozano-Perez",
    conference: "AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2019,
    conference_etc: "Oral (top 6% of accepted papers).",
    pdfUrl: "http://people.csail.mit.edu/beomjoon/publications/kim-aaai20.pdf",
    VideoUrl: "",
    ProjectUrl: "",
    imageUrl: "images/VOO.png",
  },

  {
    title:
      "Regret bounds for meta Bayesian optimization with an unknown Gaussian process prior.",
    author: "Zi Wang*, Beomjoon Kim*, Leslie Pack Kaelbling",
    conference: "Neural Information Processing Systems (NeurIPS)",
    year: 2018,
    conference_etc: "Spotlight (top 3.5% of accepted papers).",
    pdfUrl:
      "http://people.csail.mit.edu/beomjoon/publications/zi-kim-nips18.pdf",
    VideoUrl: "",
    ProjectUrl: "",
    imageUrl: "images/BO.png",
  },

  {
    title:
      "Guiding search in continuous state-action spaces by learning an action sampler from off-target search experience.",
    author: "Beomjoon Kim, Leslie Pack Kaelbling, Tomas Lozano-Perez",
    conference: "AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2018,
    conference_etc: "Oral (top 6% of accepted papers).",
    pdfUrl: "http://people.csail.mit.edu/beomjoon/publications/kim-aaai18.pdf",
    VideoUrl: "",
    ProjectUrl: "",
    imageUrl: "images/GANDI.png",
  },

  {
    title:
      "Learning to guide task and motion planning using score-space representation.",
    author: "Beomjoon Kim, Leslie Pack Kaelbling, Tomas Lozano-Perez",
    conference: "International Conference on Robotics and Automation (ICRA)",
    year: 2017,
    conference_etc: "Winner of Best Cognitive Robotics Paper Award.",
    pdfUrl: "http://people.csail.mit.edu/beomjoon/publications/kim-icra17.pdf",
    VideoUrl: "",
    ProjectUrl: "",
    imageUrl: "images/TrajOpt.png",
  },
  {
    title:
      "Generalizing over uncertain dynamics for on-line trajectory generation.",
    author: "Beomjoon Kim, Leslie Pack Kaelbling, Tomas Lozano-Perez",
    conference: "International Symposium of Robotics Research (ISRR)",
    year: 2015,
    conference_etc: "",
    pdfUrl: "http://people.csail.mit.edu/beomjoon/publications/kim-isrr15.pdf",
    VideoUrl: "",
    ProjectUrl: "",
    imageUrl: "images/TOIL.png",
  },

  {
    title: "Learning from limited demonstrations.",
    author:
      "Beomjoon Kim, Amir-massoud Farahmand, Doina Precup, Joelle Pineau.",
    conference: "Robotics: Science and Systems (RSS)",
    year: 2013,
    conference_etc: "Spotlight (top 4% of accepted papers).",
    pdfUrl: "http://people.csail.mit.edu/beomjoon/publications/kim-nips13.pdf",
    VideoUrl: "",
    ProjectUrl: "",
    imageUrl: "images/APID.png",
  },
  {
    title: "Maximum mean discrepancy imitation learning.",
    author: "Beomjoon Kim, Joelle Pineau.",
    conference: "Robotics: Science and Systems (RSS)",
    year: 2013,
    conference_etc: "",
    pdfUrl: "http://people.csail.mit.edu/beomjoon/publications/kim-rss13.pdf",
    VideoUrl: "",
    ProjectUrl: "",
    imageUrl: "images/mmd.png",
  },
];

function createPublicationElement(publication) {
  const publicationDiv = document.createElement("div");
  publicationDiv.className = "publication";

  const imageContainer = document.createElement("div");
  imageContainer.className = "publication-image-container";
  const image = document.createElement("img");
  image.className = "publication-image";
  image.src = publication.imageUrl;
  image.alt = publication.title;
  imageContainer.appendChild(image);

  const detailsDiv = document.createElement("div");
  detailsDiv.className = "publication-details";

  const title = document.createElement("div");
  title.className = "publication-title";
  title.innerHTML = `<strong>${publication.title}</strong>`;
  detailsDiv.appendChild(title);

  const author = document.createElement("div");
  author.className = "publication-author";
  // const author_list = publication.author.split(",");
  // author_list.forEach(author_element => {
  //     member_list.forEach(member_element => {
  //         if ()
  //     })
  // })
  author.textContent = `${publication.author}`;
  detailsDiv.appendChild(author);

  const conference = document.createElement("div");
  conference.className = "publication-conference";
  conference.innerHTML = `<p><i>${publication.conference}</i>, ${publication.year}. <span style="color: red;">${publication.conference_etc}</span></p>`;
  detailsDiv.appendChild(conference);

  const url = document.createElement("div");
  url.className = "publication-link";
  url.innerHTML = ``;
  if (publication.pdfUrl != "") {
    url.innerHTML += `<a href="${publication.pdfUrl}">[paper]</a> `;
  }
  if (publication.VideoUrl != "") {
    url.innerHTML += `<a href="${publication.VideoUrl}">[video]</a> `;
  }
  if (publication.ProjectUrl != "") {
    url.innerHTML += `<a href="${publication.ProjectUrl}">[project]</a>`;
  }

  detailsDiv.appendChild(url);

  publicationDiv.appendChild(imageContainer);
  publicationDiv.appendChild(detailsDiv);

  return publicationDiv;
}

const publicationsList = document.getElementById("publications-list");
// const member_list = {...Interns, ...MSMembers, ...PhdMembers}
publications.forEach((publication) => {
  const publicationElement = createPublicationElement(publication);
  publicationsList.appendChild(publicationElement);
});
