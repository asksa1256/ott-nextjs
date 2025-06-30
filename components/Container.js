import styles from "./Container.module.css";

export default function Container({ className = "", page = false, ...props }) {
  const classNames = `${styles.container} ${
    page ? styles.page : ""
  } ${className}`;
  return <div className={classNames} {...props} />;
}
