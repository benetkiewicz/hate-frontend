import Summary from "../components/summary";

const posts = [
  {
    date: "2023-12-31 19:50",
    title: "Hundred ways to start a project",
    link: "/hate-frontend/posts/different-ways-to-setup",
    lead: "I hate frontend. There are so many ways of creating new project and   each one has its own flaws and hides some important details from   you. This post explores few approaches to setup a new typescipt   react project.",
  },
  {
    date: "2024-01-10 21:37",
    title: "React + Typescript + Vite project from scratch",
    link: "/hate-frontend/posts/react-typescript-vite-setup",
    lead: "In the previous post we explored a few stupid ways how front-end   developers setup new projects. It happens that Visual Studio   developers decided that vite approach is the way to go. Let's setup React Typescript project with Vite step by step.",
  },
  {
    date: "2024-01-10 21:37",
    title: "Configure linting in React Typescript project",
    link: "/hate-frontend/posts/react-typescript-linting",
    lead: "In front-end world, you are not ment to write a readable code. You should write a code that linter thinks is readable or write whatever   and have it changed by the linter. In this post we will set up a stupid linter for our project.",
  },
];
const List = () => {
  return (
    <>
      <section>
        <h2>Recent Posts</h2>
        {posts.map((x, i) => (
          <Summary
            date={x.date}
            lead={x.lead}
            link={x.link}
            title={x.title}
            key={i}
          />
        ))}
      </section>
    </>
  );
};

export default List;
