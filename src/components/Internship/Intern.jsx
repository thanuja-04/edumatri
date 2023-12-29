import React from 'react';
import './Intern.css'; // Assuming you have custom styles in this file

const Intern = () => {
  return (
    <div className="bg-primary-900 pt-5 pb-5">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="col-12 pt-5 pb-5">
            <h1 className="text-teal-400 text-3xl font-semibold">
              Placements & Internship guide and hiring challenges
            </h1>
          </div>

          <div className="col-12 md:w-1/2">
            <div className="bg-cover card shadow p-3 mb-3">
              <h1 className="text-white text-xl font-medium">
                A Guide for internship & Placements Preparation
              </h1>
              <a
                href="https://whimsical.com/internship-and-placement-guide-XkAX3DDuKACcREs6Ko7F8i"
                className="text-teal-400 font-medium"
                target="_blank" rel="noreferrer"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-12 md:w-1/2">
            <div className="bg-cover card shadow p-3 mb-3">
              <h1 className="text-white text-xl font-medium">
                Hiring challenges
              </h1>
              <a
                href="https://levelup.gitconnected.com/top-hackathons-through-which-company-hires-63e01cb7a807"
                className="text-teal-400 font-medium"
                target="_blank" rel="noreferrer"
              >
                Know more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-12 pt-5 pb-5">
            <h1 className="text-teal-400 text-3xl font-semibold">
              Open sources
            </h1>
            <p className="text-white italic">
              (click on the icon to navigate to the website)
            </p>
          </div>

          <div className="col-6 md:col-3">
            <a href="https://summerofcode.withgoogle.com/" target="_blank" rel="noreferrer">
              <div className="ops-background text-center shadow mb-3">
                <img
                  src="https://1.bp.blogspot.com/-G6Sq-OXZU9w/XmqoqEnM6XI/AAAAAAAAAaI/YU_E3H7WYAQrnBb3DwfWLZLue9zdC89VACLcBGAsYHQ/s1600/sun.png"
                  className="ops-image"alt="img"
                />
                <p className="ops-name">Google Summer of code(GSOC)</p>
              </div>
            </a>
          </div>

          <div className="col-6 md:col-3">
            <a
              href="https://developers.google.com/season-of-docs"
              className="ops-background text-center shadow mb-3"
              target="_blank" rel="noreferrer"
            >
              <img
                src="https://developers.google.com/static/season-of-docs/images/SeasonOfDocs_Icon.png"
                className="ops-image" alt="img"
              />
              <p className="ops-name">Google Season of Docs(GSOD)</p>
            </a>
          </div>

          <div className="col-6 md:col-3">
            <a
              href="https://wiki.hyperledger.org/display/INTERN"
              className="ops-background text-center shadow mb-3"
              target="_blank" rel="noreferrer"
            >
              <img
                src="https://financialit.net/sites/default/files/hyperledger_0.png"
                className="ops-image" alt="img"
              />
              <p className="ops-name">Hyperledger Foundation</p>
            </a>
          </div>

          <div className="col-6 md:col-3">
            <a href="https://mentorship.kde.org/sok/" className="ops-background text-center shadow mb-3" target="_blank" rel="noreferrer">
              <img
                src="https://mentorship.kde.org/images/sok.png"
                className="ops-image2" alt="img"
              />
              <p className="ops-name">Season of KDE</p>
            </a>
          </div>

          <div className="col-6 md:col-3">
            <a href="https://fellowship.mlh.io/" className="ops-background text-center shadow mb-3" target="_blank" rel="noreferrer">
              <img
                src="https://github.blog/wp-content/uploads/2020/05/mlh-fellowship-white.jpg?fit=1200%2C630"
                className="ops-image2" alt="img"
              />
              <p className="ops-name">MLH Fellowship</p>
            </a>
          </div>

          <div className="col-6 md:col-3">
            <a
              href="https://fossasiataipei.github.io/fossasia-cht/apply/"
              className="ops-background text-center shadow mb-3"
              target="_blank" rel="noreferrer"
            >
              <img
                src="https://miro.medium.com/v2/resize:fit:1200/1*8yKE824eaCtQKCWQ2ocD3Q.jpeg"
                className="ops-image2" alt="img"
              />
              <p className="ops-name">Fossasia Internship</p>
            </a>
          </div>

          <div className="col-6 md:col-3">
            <a href="https://www.outreachy.org/" className="ops-background text-center shadow mb-3" target="_blank" rel="noreferrer">
              <img
                src="https://chanzuckerberg.com/wp-content/uploads/2022/03/outreachy-meta.jpg"
                className="ops-image2" alt="img"
              />
              <p className="ops-name">OUTREACHY</p>
            </a>
          </div>

          <div className="col-6 md:col-3">
            <a
              href="https://mentorship.lfx.linuxfoundation.org/#projects_all"
              className="ops-background text-center shadow mb-3"
              target="_blank" rel="noreferrer"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVoAAACSCAMAAAAzQ/IpAAAAqFBMVEX///8AN2QAmt4AMWAAlt0ANGKWprcAKVwAJlrq7O+susgAHFZOaYdWbIgAktwaSXOerb6e0/Dq9PuFx+wALl/09/lthJ0so+FgcowAI1mzvsrIzdXO6fcsT3WFmKxne5UAFVPD4vUvV3xuvOnO1t7e8Pq03PNPseXk8/vK5/en1vF8w+s7qePx8/UKPmo8XX8AAE4Aitpet+dxvukAAEiSzO4AF1PZ4OaqyhhoAAAFTklEQVR4nO2dYUPaMBCGKxRl6qqoiChOUFFR5qbO+f//2ZRSoGneywWYWPI+H7Wk5aFcr9dLiCJCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghc/EP8vnegOqnIFcAAAAASUVORK5CYII="
                className="ops-image2" alt="img"
              />
              <p className="ops-name">LFX Mentorship</p>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Intern;
