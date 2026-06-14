import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="education">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Certification
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology in IT</h4>
                <h5>Marwadi University</h5>
              </div>
              <h3>2023 — 2027</h3>
            </div>
            <p>
              GPA: 7.77/10
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Achievements</h4>
                <h5>Udemy / Cisco Academy / Infosys Springboard</h5>
              </div>
            </div>
            <p>
              • Building Recommender System with Machine Learning and AI <br/>
              • Python Essentials 1 <br/>
              • CPA - Programming Essentials in C++ <br/>
              • Database and SQL <br/>
              • Networking Essentials <br/>
              • CSS3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
