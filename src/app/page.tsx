
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/Sivakumar.jpeg"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>R Sivakumar</h1>
            <p>I am a skilled frontend developer with expertise in React.js, TypeScript, Next.js, and Tailwind CSS. I specialize in writing efficient and robust test cases using Jest. My experience includes building dynamic, responsive web applications and ensuring high-quality code through comprehensive testing. I thrive in collaborative environments and am passionate about creating seamless user experiences.</p>
            <div className="social-links">
              <a href="https://github.com/sivakumarrfourbends" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/sivakumar_bagavathi/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="http://linkedin.com/in/siva-kumar-85431b212" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
