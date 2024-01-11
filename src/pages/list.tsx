import { Link } from "react-router-dom";

const List = () => {
  return (
    <>
    <section>
      <h2>Recent Posts</h2>
      <article className="titleItem">
        <div className="titleDate"><span className="date">2023-12-31 19:50</span></div>
        <h3 className="titleHeading">
          <Link to="/hate-frontend/posts/test-error" className="titleLink">Missing Post</Link>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqu.
        </p>
      </article>
      <article className="blogTitle">
        <div className="titleDate"><span className="date">2024-01-10 21:37</span></div>
        <h3 className="titleHeading">
          <Link to="/hate-frontend/posts/hello-world" className="titleLink">
            React + Typescript + Vite project from scratch
          </Link>
        </h3>
        <p>
          I hate frontend. There are so many ways of creating new project and
          each one has its own flaws and hides some important details from you.
          This post explains how to setup React + Typescript app from scratch.
        </p>
      </article>
    </section>
    </>
  );
};

export default List;
