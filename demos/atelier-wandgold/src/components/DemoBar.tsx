export default function DemoBar() {
  return (
    <div className="demoBar" role="note" aria-label="Demo Hinweis">
      <span className="demoBarDot" aria-hidden />
      <span>
        Demo-Version · Webseite erstellt von{" "}
        <a href="https://www.agrmultimedia.eu" target="_blank" rel="noopener noreferrer">
          AGRMULTIMEDIA
        </a>
      </span>
    </div>
  );
}
