import Dropdown from "@/components/Dropdown";
import styles from "@/styles/Setting.module.css";
import { useTheme } from "@/contexts/ThemeContext";

export default function Setting() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <h1 className={styles.title}>설정</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>테마 설정</h2>
        <Dropdown
          className={styles.dropdown}
          name="theme"
          value={theme}
          options={[
            { label: "다크", value: "dark" },
            { label: "라이트", value: "light" },
          ]}
          onChange={(name: string, value: string) => setTheme(value)}
        />
      </section>
    </>
  );
}
