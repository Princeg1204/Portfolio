import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    function getTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return 0;
      const container = document.querySelector(".work-container");
      if (!container) return 0;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      const result = rect.width * box.length - (rectLeft + parentWidth) + padding;
      console.log("getTranslateX debug:", {
        rectWidth: rect.width,
        boxLength: box.length,
        rectLeft,
        parentWidth,
        padding,
        result
      });
      return result;
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "Road Accident Prediction",
              category: "Data Science, ML, Python",
              tools: "Python, scikit-learn, Pandas",
              description: "It predicts that accident happened or not by the helping of features like Weather conditions, Road conditions, etc.",
              image: "/images/road_accident.png"
            },
            {
              name: "Pharmacy Sales & Inventory Analytics",
              category: "Data Analytics, Power BI",
              tools: "Power BI, DAX, Power Query",
              description: "Interactive Power BI dashboard analyzing pharmacy sales, profitability, customer behavior, and inventory performance using DAX and Power Query.",
              image: "/images/pharmacy_analytics.png"
            },
            {
              name: "ResumeForge App",
              category: "Web Application",
              tools: "HTML, CSS, JavaScript (Vite), html2pdf",
              description: "An interactive, client-side resume builder web app that allows users to create, format, preview, and download professional resumes as PDFs dynamically.",
              image: "/images/resumeforge.png"
            },
            {
              name: "E-Commerce Grocery",
              category: "Web Application",
              tools: "React, Redux, Express.js",
              description: "Built a fully functional e-commerce app with cart management, user authentication, and secure checkout.",
              image: "/images/ecommerce_grocery.png"
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p style={{ marginTop: '10px', fontSize: '14px', color: '#ccc' }}>{project.description}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
