import css from "./Contact.module.css";
import { MdPerson } from "react-icons/md";
import { MdPhone } from "react-icons/md";

export default function Contact({ name, phone, onClick }) {
  return (
    <div>
      <MdPerson className={css.icon} />
      <p className={css.text}>{name}</p>
      <MdPhone className={css.icon} />
      <p className={css.text}>{phone}</p>
      <button className={css.button} type="button" onClick={onClick}>
        Delete
      </button>
    </div>
  );
}
