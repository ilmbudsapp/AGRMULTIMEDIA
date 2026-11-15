import { places, site } from "@/content/site";

export function Area() {
  return (
    <section className="area" id="einsatzgebiet">
      <div className="area-inner">
        <div>
          <p className="eyebrow">Einsatzgebiet</p>
          <h2>Augsburg & Umgebung</h2>
          <p className="intro">{site.areaLine}</p>
        </div>
        <ul>
          {places.map((place) => (
            <li key={place}>{place}</li>
          ))}
          <li>Weitere Orte nach Vereinbarung.</li>
        </ul>
      </div>
    </section>
  );
}
