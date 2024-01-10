import { Link } from "react-router-dom";

const List = () => {
  return (
    <section>
      <article className="blogTitle">
        <div className="date">2023-12-31 19:50</div>
        <h2>
          <Link to="/hate-frontend/posts/test-error">Missing Post</Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqu.
        </p>
      </article>
      <article className="blogTitle">
        <div className="date">2024-01-10 19:50</div>
        <h2>
          <Link to="/hate-frontend/posts/hello-world">
            React + Typescript + Vite project from scratch
          </Link>
        </h2>
        <p>
          I hate frontend. There are so many ways of creating new project and
          each one has its own flaws and hides some important details from you.
          This post explains how to setup React + Typescript app from scratch.
        </p>
      </article>
    </section>
  );
};

export default List;
