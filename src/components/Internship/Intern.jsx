import React from "react";
import "./Intern.css"; // Assuming you have custom styles in this file

const Intern = () => {
  return (
    <div className="bg-primary-900 pt-5 pb-5 pl-5 pr-5">
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
        <div className="sm:col-span-4 col-span-2 pt-5 pb-5">
          <h1 className="text-teal-400 text-3xl font-semibold">
            Placements & Internship guide and hiring challenges
          </h1>
        </div>

        <div className="sm:col-span-2 col-span-1 hire-ops-bg-card">
          <div className="bg-cover card shadow p-3 mb-3">
            <h1 className="text-white text-xl font-medium">
              A Guide for internship & Placements Preparation
            </h1>
            <a
              href="https://whimsical.com/internship-and-placement-guide-XkAX3DDuKACcREs6Ko7F8i"
              className="text-teal-400 font-medium"
              target="_blank"
              rel="noreferrer"
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

        <div className="sm:col-span-2 col-span-1 hire-ops-bg-card">
          <div className="bg-cover card shadow p-3 mb-3">
            <h1 className="text-white text-xl font-medium">
              Hiring challenges
            </h1>
            <a
              href="https://levelup.gitconnected.com/top-hackathons-through-which-company-hires-63e01cb7a807"
              className="text-teal-400 font-medium"
              target="_blank"
              rel="noreferrer"
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

        <div className="sm:col-span-4 col-span-2 pt-5 pb-5">
          <h1 className="text-teal-400 text-3xl font-semibold">Open sources</h1>
          <p className="text-white italic">
            (click on the icon to navigate to the website)
          </p>
        </div>

        <div className="sm:col-span-1 col-span-1 ops-background ">
          <a
            href="https://summerofcode.withgoogle.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-center shadow mb-3">
              <img
                src="https://1.bp.blogspot.com/-G6Sq-OXZU9w/XmqoqEnM6XI/AAAAAAAAAaI/YU_E3H7WYAQrnBb3DwfWLZLue9zdC89VACLcBGAsYHQ/s1600/sun.png"
                className="ops-image"
                alt="img"
              />
              <p className="ops-name">Google Summer of code(GSOC)</p>
            </div>
          </a>
        </div>

        <div className="sm:col-span-1 col-span-1 ops-background ">
          <a
            href="https://developers.google.com/season-of-docs"
            target="_blank"
          >
            <div class="text-center shadow mb-3">
              <img
                src="https://developers.google.com/static/season-of-docs/images/SeasonOfDocs_Icon.png"
                class="ops-image"
              />
              <p class="ops-name">Google Season of Docs(GSOD)</p>
            </div>
          </a>
        </div>

        <div className="sm:col-span-1 col-span-1 ops-background ">
          <a href="https://wiki.hyperledger.org/display/INTERN" target="_blank">
            <div class="text-center shadow mb-3">
              <img
                src="https://financialit.net/sites/default/files/hyperledger_0.png"
                class="ops-image"
              />
              <p class="ops-name">Hyperledger Foundation</p>
            </div>
          </a>{" "}
        </div>

        <div className="sm:col-span-1 col-span-1 ops-background ">
          <a href="https://mentorship.kde.org/sok/" target="_blank">
            <div class="text-center shadow mb-3">
              <img
                src="https://mentorship.kde.org/images/sok.png"
                class="ops-image2"
              />
              <p class="ops-name">Season of KDE</p>
            </div>
          </a>
        </div>

        <div className="sm:col-span-1 col-span-1 ops-background ">
          <a href="https://fellowship.mlh.io/" target="_blank">
            <div class="text-center shadow mb-3">
              <img
                src="https://github.blog/wp-content/uploads/2020/05/mlh-fellowship-white.jpg?fit=1200%2C630"
                class="ops-image2"
              />
              <p class="ops-name">MLH Fellowship</p>
            </div>
          </a>
        </div>

        <div className="sm:col-span-1 col-span-1 ops-background ">
          <a
            href="https://fossasiataipei.github.io/fossasia-cht/apply/"
            target="_blank"
          >
            <div class="text-center shadow mb-3">
              <img
                src="https://miro.medium.com/v2/resize:fit:1200/1*8yKE824eaCtQKCWQ2ocD3Q.jpeg"
                class="ops-image2"
              />
              <p class="ops-name">Fossasia Internship</p>
            </div>
          </a>
        </div>

        <div className="sm:col-span-1 col-span-1 ops-background ">
          <a href="https://www.outreachy.org/" target="_blank">
            <div class="text-center shadow mb-3">
              <img
                src="https://chanzuckerberg.com/wp-content/uploads/2022/03/outreachy-meta.jpg"
                class="ops-image2"
              />
              <p class="ops-name">OUTREACHY</p>
            </div>
          </a>
        </div>

        <div className="sm:col-span-1 col-span-1 ops-background ">
          <a
            href="https://mentorship.lfx.linuxfoundation.org/#projects_all"
            target="_blank"
          >
            <div class="text-center shadow mb-3">
              <img
                src="data:image/png;base64,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"
                class="ops-image2"
              />
              <p class="ops-name">LFX Mentorship</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intern;
