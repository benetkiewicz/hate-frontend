import { Link } from "react-router-dom";

const Summary = (props: {
  date: string;
  title: string;
  link: string;
  lead: string;
}) => {
  return <>
    <article className="titleItem">
      <div className="titleDate">
        <span className="date">{props.date}</span>
      </div>
      <h3 className="titleHeading">
        <Link to={props.link} className="titleLink">
          {props.title}
        </Link>
      </h3>
      <p>{props.lead}</p>
    </article>
  </>;
};

export default Summary;
