import { h, Fragment } from 'preact';

export default function Component() {
  return (
    <>
      <a
        href="https://www.matas.dk/chanel"
        style={{
          boxSizing: "inherit",
          backgroundColor: "initial",
          textDecoration: "none",
          touchAction: "manipulation",
          color: "rgb(0, 0, 0)",
        }}
      >
        <div
          className="brandbanner"
          style={{
            borderTop: "6px solid rgb(0, 0, 0)",
            boxSizing: "initial",
            display: "block",
            marginTop: "16px",
            borderWidth: "8px",
            padding: "33px 0px 42px",
            height: "29px",
          }}
        >
          <span
            className="brandbanner__image"
            style={{
              boxSizing: "inherit",
              maxWidth: "1230px",
              backgroundPosition: "50% center",
              backgroundRepeat: "no-repeat",
              margin: "0px auto",
              backgroundImage:
                'url("https://www.matas.dk/images/chanel-logo.svg")',
              backgroundSize: "contain",
              display: "block",
              height: "100%",
              width: "auto",
            }}
          />
        </div>
      </a>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  text-size-adjust: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  height: -webkit-fill-available;
}

body {
  box-sizing: inherit;
  margin: 0px;
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  min-height: -webkit-fill-available;
  color: rgb(0, 0, 0);
  font-family: Arial, Helvetica, sans-serif;
}
`,
        }}
      />
    </>
  );
}
