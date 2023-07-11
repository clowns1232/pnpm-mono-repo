import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@pnpm-test/core";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>여기는 web이고 next로 구성됩니다.</h1>
      <Button
        style={{
          backgroundColor: "red",
          width: "100px",
          height: "100px",
          color: "white",
          cursor: "pointer",
        }}
        className="card"
      >
        테스트용 버튼
      </Button>
    </main>
  );
}
