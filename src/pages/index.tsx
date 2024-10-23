// src/pages/index.js
import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Welcome" description={siteConfig.tagline}>
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="buttons">
            <a className="button button--secondary button--lg" href="/blog">
              Read Latest Posts
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="padding-vert--xl">
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className="text--center">
                  <h2>Technical Writings</h2>
                  <p>
                    Deep dives into software development, architecture, and best
                    practices
                  </p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center">
                  <h2>Learning Notes</h2>
                  <p>
                    Documentation of my learning journey and helpful resources
                  </p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center">
                  <h2>Project Showcases</h2>
                  <p>Highlights of personal and professional projects</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-vert--xl">
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>About Me</h2>
                <p>
                  Welcome to my digital garden! I'm a software engineer and
                  open-source enthusiast. I'm passionate about building software
                  that makes a difference.Currently, I'm working as a Computer
                  Scientist @ Adobe. Most of my work involves building scalable
                  and reliable software systems along with designing and
                  developing data pipelines for 100s of TBs of data.
                </p>
              </div>
              <div className="col col--6">
                <h2>Featured Posts</h2>
                <ul>
                  <li>
                    <a href="/blog/building-scalable-systems">
                      Building Scalable Systems
                    </a>
                  </li>
                  <li>
                    <a href="/blog/model-javascript-patterns">
                      Modern JavaScript Patterns
                    </a>
                  </li>
                  <li>
                    <a href="/blog/getting-started-with-devops">
                      Getting Started with DevOps
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-vert--xl">
          <div className="container">
            <div className="text--center">
              <h2>Let's Connect</h2>
              <div className="social-links">
                <a
                  href="https://github.com/arya-oss"
                  className="margin-horiz--sm"
                >
                  GitHub
                </a>
                <a
                  href="https://x.com/Aryarajmani2"
                  className="margin-horiz--sm"
                >
                  X(Twitter)
                </a>
                <a
                  href="https://linkedin.com/in/rajmani1995"
                  className="margin-horiz--sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
