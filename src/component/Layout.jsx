import Nav from "./Nav";
import classes from "../styles/Layout.module.css";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
      <Footer />
    </>
  );
}
