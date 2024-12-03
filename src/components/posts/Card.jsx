import Button from "../UI/button/button";
import style from "./Card.module.css";
import placeholder from "../../assets/undefined.png";

// function getClassByTag(tag) {
//   let className;
//   switch (tag) {
//     case "js":
//       return (className = style.js);
//     case "php":
//       return (className = style.php);
//     case "html":
//       return (className = style.html);
//     case "css":
//       return (className = style.css);

//     default:
//       className = "";
//       break;
//   }

// return className;
// }

export default function card(props) {
  const tags = props.tags;

  return (
    <div className={style.card}>
      <img
        className={style.thumbnail}
        src={props.image ? props.image : placeholder}
        alt=""
      />

      <div className={style.body}>
        <h3 className={style.title}>{props.title}</h3>
        <div key={props.id}>
          {tags.map((tag) => (
            <span key={tag} className={` ${style.cardTag} ${style[tag]}`}>
              {/* `${getClassByTag(tag)} si poteva inserire tra le classi dopo la logica switch sopra*/}
              {tag}
            </span>
          ))}
        </div>
        <div className={style.description}>{props.description}</div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}
