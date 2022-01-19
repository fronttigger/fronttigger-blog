import config from 'config'

import * as styles from '#shared/styles/pages/about/styles.css'
import PageSEO from '#components/shared/SEO/PageSEO'
import SocialIcon from '#components/icons'

function About() {
  return (
    <>
      <PageSEO title="About" url={`${config.url}/about`} />
      <section className={styles.container}>
        <article className={styles.articleContainer}>
          <h1 className={styles.title}>{config.about.title}</h1>
          <p className={styles.description}>{config.about.description}</p>
          <SocialIcon kind="github" href={config.author.contacts.github} />
          <SocialIcon kind="linkedin" href={config.author.contacts.linkedin} />
        </article>
        <article className={styles.articleContainer}>
          <h2 className={styles.subtitle}>경력 👨🏻‍💻</h2>
          {config.about.experiences.map((experience, index) => (
            <div key={index} className={styles.experienceContainer}>
              <div className={styles.companyContainer}>
                <h3 className={styles.companyTitle}>{experience.company}</h3>
                <span className={styles.companySubtitle}>{experience.job}</span>
                <span className={styles.companySubtitle}>{experience.date}</span>
              </div>
              <div className={styles.companyDescriptionContainer}>
                {experience.projects.map((project, index) => (
                  <div key={index} className={styles.companyDescription}>
                    <h4 className={styles.projectTitle}>{project.title}</h4>
                    <span className={styles.projectSubtitle}>{project.date}</span>
                    <div>
                      <strong className={styles.projectDescription}>{project.description}</strong>
                      <ul className={styles.projectItems}>
                        {project.tasks.map((task, index) => (
                          <li key={index}>{task}</li>
                        ))}
                      </ul>
                      <ul className={styles.projectStacks}>
                        {project.stacks.map((stack, index) => (
                          <li key={index} className={styles.projectStack}>
                            {stack}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </article>
      </section>
    </>
  )
}

export default About
