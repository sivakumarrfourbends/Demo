import type { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Sivakumar <span>Front End Developer</span>
                  </h2>
                  <p>
                  With three years of experience in React development, I have worked on various domains such as Application Tracking Systems, insurance, and LMS. In 2021, I was at SSIT Software Development, and since June 2022, I have been with Foubends. At Foubends, I work on the learning platform product named Qubits.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>https://demo-indol-eight.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>sivakumar2012000@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>B.E(Computer Science & Engg)</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 7397544377</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Madurai</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a href="/sivakumarupdatedresume.pdf" target="_blank" rel="noopener noreferrer" className="btn"  download>
      Download CV
    </a>
                      {/* <Link className="btn" href='/SivakumarUpdatedresume.pdf'>Download cv</Link> */}
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    {/* <div className="skill-item padd-15">
                      <h5>Html5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Css3</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div> */}
                    {/* <div className="skill-item padd-15">
                      <h5>Bootstrap</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div> */}
                    <div className="skill-item padd-15">
                      <h5>React JS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Next JS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                      <div className="skill-item padd-15">
                      <h5>Typescript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Tailwindcss</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Jest React Testing Library</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2017 to 2021
                          </h6>
                          <h4 className="timeline-title">
                            B.E(Computer Science & Engg)
                          </h4>
                          <p className="timeline-text">
                          
I completed my B.E. in Computer Science Engineering from KGiSL Institute of Technology,
 Coimbatore, with a 7.1 CGPA. I cleared all subjects in a single attempt, 
 with no backlogs across all eight semesters.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2016 to 2017
                          </h6>
                          <h4 className="timeline-title">
                            Higher Secondary
                          </h4>
                          <p className="timeline-text">
                          In 2017, I completed my Higher Secondary examination with an impressive score of 87%. This success further solidified my commitment to academic excellence.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2014 to 2015
                          </h6>
                          <h4 className="timeline-title">
                            Secondary School Certificate
                          </h4>
                          <p className="timeline-text">
                          In 2015, I completed my SSLC examination with a remarkable score of 95%. 
                          This achievement laid a strong foundation for my academic journey.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 to Present
                          </h6>
                          <h4 className="timeline-title">Fourbends</h4>
                          <p className="timeline-text">
                           
At Fourbends since June 2022, 
I have managed diverse projects including insurance and an Application Tracking System (ATS).
 For the past two years, I have focused on Qubits, a learning management system. In Qubits, users create and manage schools, 
 teachers, and students, with teachers customizing courses, chapters, and topics, and assigning quizes and assignments. 

                          </p>
                          <br/>
                          <p  className="timeline-text">
                          Currently, we are developing an updated version set to release in August, utilizing React and Next.js for the frontend and Nest.js
  for the backend. In the previous version, we used Next.js for the frontend and Moodle for the backend, integrating React builds 
  into Moodle. Notable features include student learning of Python and SQL directly from the client side using Pyodide and SQLWasm, 
  and integration of the ChatGPT API for providing feedback on code mistakes.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> May 2021 to May 2022
                          </h6>
                          <h4 className="timeline-title">SSIT Software Development</h4>
                          <p className="timeline-text">
                          I worked at SSIT Software Development from May 2021 to May 2022, focusing on ASP.NET applications in the real estate domain while learning React in parallel. I completed several React projects for college students, mentoring them and providing project support. At SSIT, we specialized in delivering college projects and technical solutions.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
