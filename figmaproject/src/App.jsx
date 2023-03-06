

//import { HashRouter as Router, Routes, Route } from "react";

//import AboutPage from "./routes/about/AboutPage.jsx";
//import ContactPage from "./routes/about/contact/ContactPage.jsx";
//import LandingPage from "./routes/landingPage.jsx";
//import ProjectsPage from "./routes/projects/ProjectsPage";
//import Layout from "./routes/components/Layout/Layout.jsx";
//import FirstProject from "./routes/projects/first-project/FirstProjectPage";
//import SecondProject from "./routes/projects/second-project/SecondProjectPage";


import './App.css'

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
          <h2 className="section title">
            RANDOM TITLE AND RANDOM TITLE W CAPS
          </h2>
          <small>
            My dream job has always been a concept designer, Im an idealist by
            heart, and I love sitting down brainstorming creative new ideas that
            can benefit tomorrows world
          </small>
        </section>

        <section className="intro">
          <h2 className="section-title">
            The future ahead
            <span className="text-primary">CREATIVE</span> tomorrows solutions
            <span className="text-primary">IDEALIST</span> My vision.
          </h2>
        </section>
        <section className="about-us">
          <header className="about-us__intro">
            <h2 className="section-title-small"></h2>
          </header>
          <div className="about-us__body"></div>
          <p>
            random text random text random textrandom text random text random
            text random text random text random text
          </p>
          <p>
            random text random text random textrandom text random text random
            text random text random text random text
          </p>
        </section>

        <section className="order-online">
          <header>
            <h2 className="section-title text-primary"></h2>
          </header>
          <p></p>
          <div className="btn-group">
            <a href="" className="btn btn-primary">
              Email
            </a>
            <a href="" className="btn btn-primary">
              Facebook
            </a>
            <a href="" className="btn btn-primary">
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
              <div className="product__content">
                <img src="" alt="" className="product__img" />
                <h3 className="product__title">bananas for coconuts</h3>

                <p className="fineprint">True Quality.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illo, facilis. Aliquid dolores necessitatibus consectetur
                  laudantium tempora omnis assumenda deleniti praesentium?
                </p>
              </div>
            </div>
            <div className="product">
              <img src="" alt="" className="product__img" />

              <h3 className="product__title">coconuts for bananas</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo officiis asperiores nobis ducimus repellat fugit natus
                facilis perferendis voluptatibus repudiandae!
              </p>
              <p className="fineprint">cetified</p>
            </div>
            <div className="product">
              <div className="product__content">
                <h3 className="product__title"> Mucho Grando Amigo</h3>
                <img src="" alt="" className="product__img" />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas labore vero commodi esse, impedit sapiente!
                </p>
                <p className="fineprint">super quality</p>

                <div className="btn group">
                  <a href="" className="btn btn-accent">
                    see all my work
                  </a>
                  <div className="btn-group">
                    <a href="" className="btn btn-primary">
                      Email
                    </a>
                    <a href="" className="btn btn-primary">
                      Facebook
                    </a>
                    <a href="" className="btn btn-primary">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <ul className="footer-nav">
            <li>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Connect</a>
              <a href="#">Links</a>
            </li>
          </ul>
          <ul className="footer-social">
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </footer>
      </main>
    </body>
  );
}

export default App


// (
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
//   </Router>
// );
