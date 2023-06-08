import Header from "./header/header";
import Footer from "./footer/footer";
export default function layout({
  isClicked,
  setIsClicked,
  scroll,
  children,
  screen,
  htmlcss = "no",
}) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", transition: "background 2s" }}
      className="main-container"
    >
      <Header
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        scroll={scroll}
        screen={screen}
      />

            {children}

      <Footer screen={screen} scroll={scroll} />
      {htmlcss == "no" && (
        <style>{`
            html {
                font-size: calc(0.95rem + 1vw);
                }
            `}</style>
      )}
    </div>
  );
}
