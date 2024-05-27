import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Our Services</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Logo Design */}
      
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Custom Web Design</h4>
          <p>
          Crafting bespoke web solutions tailored to your unique needs. With expertise in React.js alongside Material-UI and Tailwind CSS, I specialize in creating stunning, responsive designs that seamlessly adapt to various devices. From concept to execution, I ensure your vision is brought to life with precision and creativity, delivering exceptional user experiences every step of the way.
          </p>
        </div>
      </div>
      {/* Service Item 2 End */}
      {/* Service Item 3: WordPress */}
      {/* Service Item 3 End */}
      {/* Service Item 4: Web Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-code" /></div>
          <h4>Web Development</h4>
          <p>Elevate your online presence with bespoke web development tailored to your business needs. With proficiency in React.js, Material-UI, and Tailwind CSS, combined with ASP.NET expertise, I deliver dynamic and scalable web applications that captivate your audience. Specializing in responsive design, I ensure seamless user experiences across all devices, empowering your brand to thrive in the digital landscape.</p>
        </div>
      </div>
      {/* Service Item 4 End */}
      {/* Service Item 5: Video Editing */}
    
      {/* Service Item 5 End */}
      {/* Service Item 6: SEO Optimization */}

      {/* Service Item 6 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
