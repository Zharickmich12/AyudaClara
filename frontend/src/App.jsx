import { useState } from "react";

const STAGES = ["Asignado", "En custodia", "Disponible", "Entregada"];
const ACTORS = {
  "Asignado": "Entidad gestora",
  "En custodia": "ONG ejecutora",
  "Disponible": "ONG ejecutora",
  "Entregada": "Persona afectada",
};
const today = () => new Date().toISOString().slice(0, 10);
const money = (n) => "$" + Number(n).toLocaleString("es-CO");

const SEED = [
  {
    code: "AC-1001", municipio: "Municipio Ejemplo 1", monto: 120000000,
    history: [{ stage: "Asignado", actor: ACTORS["Asignado"], date: "2026-08-24" }],
  },
  {
    code: "AC-1002", municipio: "Municipio Ejemplo 2", monto: 80000000,
    history: [
      { stage: "Asignado", actor: ACTORS["Asignado"], date: "2026-08-22" },
      { stage: "En custodia", actor: ACTORS["En custodia"], date: "2026-08-25" },
      { stage: "Disponible", actor: ACTORS["Disponible"], date: "2026-08-28" },
    ],
  },
];

function Timeline({ item }) {
  const done = item.history.length;
  return (
    <ol className="timeline">
      {STAGES.map((s, i) => {
        const h = item.history[i];
        return (
          <li key={s} className={i < done ? "done" : i === done ? "next" : ""}>
            <strong>{s}</strong>
            <span>{h ? `${h.actor} · ${h.date}` : "Pendiente"}</span>
          </li>
        );
      })}
    </ol>
  );
}

function Lookup({ items, donor, onAccept }) {
  const [code, setCode] = useState("");
  const [shown, setShown] = useState(null);
  const search = (e) => {
    e.preventDefault();
    const found = items.find((i) => i.code === code.trim().toUpperCase());
    setShown(found || "none");
  };
  const item = shown && shown !== "none" ? items.find((i) => i.code === shown.code) : null;
  const stage = item ? item.history[item.history.length - 1].stage : null;

  return (
    <section>
      <h2>{donor ? "Sigue tu donación" : "Consulta tu ayuda"}</h2>
      <p className="hint">
        {donor
          ? "Escribe el código de tu aporte para ver en qué etapa va."
          : "Escribe el código público de tu municipio. No necesitas dar tu cédula."}
      </p>
      <form onSubmit={search} className="row">
        <label className="sr" htmlFor="code">Código</label>
        <input id="code" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Ej. AC-1002" />
        <button type="submit">Consultar</button>
      </form>
      {shown === "none" && <p className="msg error">Código no encontrado. Revisa que esté bien escrito.</p>}
      {item && (
        <div className="card">
          <h3>{item.municipio}</h3>
          <p className="hint">Monto: {money(item.monto)} · Etapa actual: <b>{stage}</b></p>
          <Timeline item={item} />
          {!donor && stage === "Disponible" && (
            <button onClick={() => onAccept(item.code)}>Aceptar ayuda</button>
          )}
          {!donor && stage === "Entregada" && <p className="msg ok">Aceptaste esta ayuda. Quedó como entregada.</p>}
        </div>
      )}
    </section>
  );
}

function Panel({ items, onCreate, onRegister }) {
  const [municipio, setMunicipio] = useState("");
  const [monto, setMonto] = useState("");
  const [code, setCode] = useState(items[0]?.code || "");
  const [stage, setStage] = useState(STAGES[1]);
  const [msg, setMsg] = useState(null);

  const create = (e) => {
    e.preventDefault();
    if (!municipio.trim() || !monto) return setMsg({ ok: false, text: "Completa el municipio y el monto." });
    const c = onCreate(municipio.trim(), Number(monto));
    setCode(c);
    setMunicipio(""); setMonto("");
    setMsg({ ok: true, text: `Desembolso registrado como Asignado. Código público: ${c}` });
  };
  const register = (e) => {
    e.preventDefault();
    setMsg(onRegister(code, stage));
  };

  return (
    <section>
      <h2>Panel de entidad y ONG</h2>
      <form onSubmit={create} className="card">
        <h3>1. Registrar un desembolso nuevo</h3>
        <div className="row">
          <input aria-label="Municipio" value={municipio} onChange={(e) => setMunicipio(e.target.value)} placeholder="Municipio" />
          <input aria-label="Monto" type="number" value={monto} onChange={(e) => setMonto(e.target.value)} placeholder="Monto en COP" />
          <button type="submit">Registrar desembolso</button>
        </div>
      </form>
      <form onSubmit={register} className="card">
        <h3>2. Registrar una etapa</h3>
        <p className="hint">Una etapa solo se registra si la anterior ya existe. Prueba saltarte una.</p>
        <div className="row">
          <select aria-label="Desembolso" value={code} onChange={(e) => setCode(e.target.value)}>
            {items.map((i) => <option key={i.code} value={i.code}>{i.code} · {i.municipio}</option>)}
          </select>
          <select aria-label="Etapa" value={stage} onChange={(e) => setStage(e.target.value)}>
            {STAGES.map((s) => <option key={s}>{s}</option>)}
          </select>
          <button type="submit">Registrar etapa</button>
        </div>
      </form>
      {msg && <p className={"msg " + (msg.ok ? "ok" : "error")} role="status">{msg.text}</p>}
      <table>
        <thead><tr><th>Código</th><th>Municipio</th><th>Monto</th><th>Etapa actual</th></tr></thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.code}>
              <td>{i.code}</td><td>{i.municipio}</td><td>{money(i.monto)}</td>
              <td>{i.history[i.history.length - 1].stage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default function App() {
  const [view, setView] = useState("consulta");
  const [items, setItems] = useState(SEED);

  const create = (municipio, monto) => {
    const code = "AC-" + (1001 + items.length);
    setItems([...items, { code, municipio, monto, history: [{ stage: "Asignado", actor: ACTORS["Asignado"], date: today() }] }]);
    return code;
  };

  const register = (code, stage) => {
    const item = items.find((i) => i.code === code);
    if (!item) return { ok: false, text: "Elige un desembolso." };
    const next = STAGES[item.history.length];
    if (!next) return { ok: false, text: "Este desembolso ya está entregado." };
    if (stage !== next) {
      return { ok: false, text: `No se puede registrar "${stage}". Falta la etapa "${next}".` };
    }
    if (stage === "Entregada") {
      return { ok: false, text: "La entrega solo se registra cuando la persona afectada acepta la ayuda." };
    }
    setItems(items.map((i) => i.code === code
      ? { ...i, history: [...i.history, { stage, actor: ACTORS[stage], date: today() }] } : i));
    return { ok: true, text: `Etapa "${stage}" registrada para ${code}.` };
  };

  const accept = (code) =>
    setItems(items.map((i) => i.code === code && i.history.length === 3
      ? { ...i, history: [...i.history, { stage: "Entregada", actor: ACTORS["Entregada"], date: today() }] } : i));

  const tabs = [["consulta", "Consultar ayuda"], ["panel", "Entidad y ONG"], ["donante", "Donante"]];

  return (
    <>
      <header>
        <h1>AyudaClara</h1>
        <p>Sabe en qué etapa está la ayuda de tu comunidad.</p>
        <nav>
          {tabs.map(([k, label]) => (
            <button key={k} className={view === k ? "tab on" : "tab"} onClick={() => setView(k)}>{label}</button>
          ))}
        </nav>
      </header>
      <main>
        {view === "consulta" && <Lookup items={items} onAccept={accept} />}
        {view === "donante" && <Lookup items={items} donor />}
        {view === "panel" && <Panel items={items} onCreate={create} onRegister={register} />}
      </main>
      <footer>Demo con datos de ejemplo. Aún no está conectada a Stellar.</footer>
    </>
  );
}