import styles from "../Styles/experience.module.css";
import prodios from "../Assets/prodios.jpeg";
import de360 from "../Assets/de360.png";

export function Experience() {
  return (
    <div className={styles.container} id="experience">
      <h1 className={styles.heading}>Work Experience</h1>
      <div className={styles.subContainer}>
        <div className={styles.prodios}>
          <div className={styles.titleDiv}>
            Associate Developer, Prodios Labs
            <span>
              <img src={prodios} />
            </span>
          </div>
          <div>July 2024 - Present</div>
          <p>
            I am working as a Full Stack Web Developer, responsible for building
            and maintaining web applications using React, NestJS, and
            TypeScript. I use Zod for schema validation and shadcn/ui with
            Tailwind CSS for creating clean, responsive user interfaces. My role
            involves developing both frontend and backend features, ensuring
            type safety, performance, and code quality across the stack.
          </p>
        </div>
        <div className={styles.de360}>
          <div className={styles.titleDiv}>
            MERN Stack Developer, Digital Edge 360
            <span>
              <img src={de360} />
            </span>
          </div>
          <div>May 2023 - December 2023</div>
          <p>
            I worked at Digital Edge 360 for 7 months, starting as a Junior
            Frontend Developer during a 3-month probation period. After
            completing probation, I transitioned into a MERN Stack Developer
            role. During this time, I built and maintained the admin panel of a
            cab booking application, contributing to both UI development and
            backend integration.
          </p>
        </div>
      </div>
    </div>
  );
}
