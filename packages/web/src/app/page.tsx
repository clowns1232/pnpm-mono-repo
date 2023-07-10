import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@pnpm-test/core";
export default function Home() {
  return (
    <main className={styles.main}>
      <Button
        style={{
          backgroundColor: "red",
          width: "100px",
          height: "100px",
          color: "white",
        }}
        className="card"
      >
        test123
      </Button>
    </main>
  );
}
