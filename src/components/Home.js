import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to Movie Browser" />
      <div id="box" className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <h2>Movie Browser</h2>
            <p className="lead">
              This is a movie browser application that's API driven. There's a home page, an about page, a search function and a movie detail view functionality, all built into a single page application / progressive web application.
            </p>
            <p className="lead">
              Features of this web application:
            </p>
            <ul className="lead">
              <li>Dynamic display of search results</li>
              <li>Movie detail view functionality</li>
              <li>A 404 page for handling invalid page requests</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
