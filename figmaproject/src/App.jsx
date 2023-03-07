//import { HashRouter as Router, Routes, Route } from "react";

//import AboutPage from "./routes/about/AboutPage.jsx";
//import ContactPage from "./routes/about/contact/ContactPage.jsx";
//import LandingPage from "./routes/landingPage.jsx";
//import ProjectsPage from "./routes/projects/ProjectsPage";
//import Layout from "./routes/components/Layout/Layout.jsx";
//import FirstProject from "./routes/projects/first-project/FirstProjectPage";
//import SecondProject from "./routes/projects/second-project/SecondProjectPage";

import "./App.css";

function App() {
  return (
    <body>
      <header>
        <h1 class="logo">
          <a href="index.html"> Remi Andreas Benbow</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Connect</a>
            </li>
            <li>
              <a href="#">My work</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="Hero">
          <h2 className="section title">RANDOM HEADLINE</h2>
          <small>
            My dream job has always been a concept designer, Im an idealist by
            heart, and I love sitting down brainstorming creative new concepts &
            ideas that can benefit tomorrows world.
          </small>
        </section>

        <section className="intro">
          <h2 className="section-title">
            The future is AI driven
            <span className="text-primary"> it will CREATE</span> Tomorrow's
            solutions.
            <span className="text-primary"> This is one IDEALIST's</span>{" "}
            digital journey.
          </h2>
        </section>
        <section className="about-us">
          <header className="about-us__intro">
            <h2 className="section-title-small"></h2>
          </header>
          <div className="about-us__body"></div>
          <p>
            <thead>Another Gamer has entered the stage.</thead>
            <p>
              <b>But not any Gamer </b>
            </p>
            <strong>This gamer beat the world champion in starcraft.</strong>
            <p>I have basically played all the games there are.</p> I have been
            in every dungeon, every battle field and every virtual galaxy &
            Dimension there is.
          </p>
          <p>
            This has given me a unique view of game layouts, UIs, web-pages and
            a tonn of different interests both in the real world and online.
            <p>
              Ranging from Virtual Reality, Augmented Reality, Artificial
              Intelligence, Dropshipping and to the crypto industry.
            </p>
          </p>
        </section>
        <h2>
          <small>Work experiences before i was "reborn"</small>
        </h2>
        <h3>
          <p>
            My main work was focused in the logistics industry, warehouses and
            trucks were my bread and butter, and I did that for 17 years.
          </p>
          <p>
            Other ventures I have had include running my own house
            rehabilitation company (AS).
          </p>
          <p>
            I worked as a promoter for a virtual reality corporation where my
            job description would be rigging up equipment at different promotion
            sites such as schools, universities, and GamesCon. I also did some
            work on branding for the company.
          </p>
          <p>
            After finishing my education in child and youth work, I worked as a
            teacher assistant at a pre-school for a year.
          </p>
          <p>
            I worked at a youth center in Stavanger where we taught kids how to
            video edit, make music using Nuendo, and rig up equipment for small
            to medium concerts. We also had photography classes with our own
            darkroom where we produced the pictures we had taken.
          </p>
        </h3>
        <section className="order-online">
          <header>
            <h2 className="section-title text-primary"></h2>
          </header>
          <p></p>
          <div className="btn-group">
            <a href="mailto:benbowremi@gmail.com" className="btn btn-primary">
              Email
            </a>
            <a
              href="https://www.facebook.com/remi.benbow"
              className="btn btn-primary"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/remibenbow"
              className="btn btn-primary"
            >
              Instagram
            </a>
          </div>
        </section>
        <section className="product-showcase">
          <header>
            <h2 className="section-title text-primary"> Some of my work</h2>
          </header>
          <div className="products">
            <div className="product">
              <img
                src="./assets/images/75262127_10162356367435007_7480720663167107072_n.jpg"
                alt=""
                className="product__img"
              />
              <div className="product__content">
                <h3 className="product__title">Drum kit</h3>

                <p className="fineprint">True Quality.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illo, facilis. Aliquid dolores necessitatibus consectetur
                  laudantium tempora omnis assumenda deleniti praesentium?
                </p>
              </div>
            </div>
            <div className="product">
              <img
                src="./assets/images/75262127_10162356367435007_7480720663167107072_n.jpg"
                alt=""
                className="product__img"
              />
              <div className="product__content">
                <h3 className="product__title">Story tell</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo officiis asperiores nobis ducimus repellat fugit
                  natus facilis perferendis voluptatibus repudiandae!
                </p>
                <p className="fineprint">cetified</p>
              </div>
            </div>
            <div className="product">
              <img
                src="./assets/images/75262127_10162356367435007_7480720663167107072_n.jpg"
                alt=""
                className="product__img"
              />
              <div className="product__content">
                <h3 className="product__title">Hero Card</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas labore vero commodi esse, impedit sapiente!
                </p>
                <p className="fineprint">
                  <strong>super quality</strong>
                </p>
              </div>
            </div>

            <p className="mb-0">If you want to know more about me:</p>
            <div className="btn group">
              <a href="https://github.com/Lolgitech" className="btn btn-accent">
                see all my work
              </a>
            </div>
            <div className="btn-group">
              <a href="mailto:benbowremi@gmail.com" className="btn btn-primary">
                Connect with me through Email
              </a>
              <a
                href="https://www.facebook.com/remi.benbow"
                className="btn btn-primary"
              >
                lets hook up on Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/remi-benbow-0a3a5210b/"
                className="btn btn-primary"
              >
                Add me on LinkedID
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <ul className="footer-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Connect</a>
          </li>
          <li>
            <a href="#">Links</a>
          </li>
          <li>
            <a href="tel:93051536">Or call me for a chat</a>
          </li>
          <li>
            <label for="skills">Web dev skills </label>
            <progress id="skills" value="30" max="100"></progress>
          </li>
        </ul>
        <ul className="footer-social">
          <li>
            <a
              className="social-link"
              href="https://www.facebook.com/remi.benbow"
            >
              <img
                src="./assets/images/fblogo.png"
                className="social-icon"
                alt=""
                aria-label="facebook"
              />
            </a>
          </li>
          <li>
            <a class="social-link" href="https://www.instagram.com/remibenbow">
              <img
                src="./assets/images/fblogo.png"
                className="social-icon"
                alt=""
                aria-label="instagram"
              />
            </a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </footer>
        
    </body>
  );
}

export default App;

{
  /* // (
//   <Router>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<LandingPage />} />
//         <Route path="about" element={<AboutPage />} />
//         <Route path="projects" element={<ProjectsPage />}>
//           <Route path="first-project" element={<FirstProject />} />
//           <Route path="second-project" element={<SecondProject />} />
//         </Route>
//       </Route>

//       <Route path="*" element={<h1>404 Error</h1>} />
//     </Routes>
//   </Router> */
}
