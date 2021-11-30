import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="file full">
      <h2>MOORD OP CEO- MILJARDAIR OMHULD IN MYSTERIE</h2>

      <p
        style={{
          textAlign: "justify",
          textDecoration: "underline",
          margin: "30px 0px",
        }}
      >
        Jill Bridges, de flamboyante miljardair en oprichtster van de
        technologiereus MacroHard, werd vandaag vermoord aangetroffen in haar
        landhuis. Ze had net ervoor nog een extravagant feestje gegeven voor de
        "who's who" in de Tech-industrie.
      </p>

      <p style={{ width: "48%", float: "left", textAlign: "justify" }}>
        Rond 06u30 ’s ochtends ontdekte een lid van de schoonmaakploeg het
        levenloze lichaam van Jill Bridges. De hulpdiensten werden meteen ter
        plaatse geroepen, maar konden bij aankomst enkel het overlijden van het
        slachtoffer vaststellen. Bronnen dichtbij het onderzoek hebben aan onze
        redactie bevestigd dat de omstandigheden van het overlijden als ‘zeer
        verdacht’ worden bestempeld en dat een natuurlijke dood als ‘uiterst
        onwaarschijnlijk’ wordt beschouwd.
      </p>

      <p style={{ width: "48%", float: "right", textAlign: "justify" }}>
        Eerst viel alle verdenking op haar echtgenoot, Bill Bridges, maar hij
        kon een ijzersterk alibi voorleggen en wordt daardoor voorlopig niet
        verder verhoord. De cruciale vragen smeken dus nog steeds op een
        antwoord: waarom werd Jill Bridges vermoord, hoe is het gebeurd en wat
        is de ware identiteit van de moordenaar(s)?
      </p>

      <div style={{ width: "48%", float: "right", marginTop: "15px" }}>
        <Link to="/clues" className="btn">
          Aan de slag
        </Link>
      </div>
    </div>
  );
};

export default Intro;
