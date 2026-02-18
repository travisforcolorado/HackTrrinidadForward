import React, { useMemo, useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { RESOURCES, CATEGORIES } from "./data";

const mapLink = (address) =>
  address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`
    : "#";

const CAT_ICONS = {
  Health: "🏥",
  Heat: "🔥",
  Food: "🍲",
  Housing: "🏠",
  Transportation: "🚌",
  Employment: "💼",
  Veterans: "🇺🇸"
};

function TrinidadHelpFinder() {
  const getUrlParam = (key) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
  };

  const [which, setWhich] = useState("Primary");
  const [cat, setCat] = useState(getUrlParam("cat") || null);
  const [q, setQ] = useState(getUrlParam("q") || "");
  const [hc, setHc] = useState(false);
  const [fontPct, setFontPct] = useState(115);
  const [dentalOnly, setDentalOnly] = useState(false);
  const [womenOnly, setWomenOnly] = useState(false);
  const [mentalHealthOnly, setMentalHealthOnly] = useState(false);

  // Sync state to URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (cat) params.set("cat", cat);
    else params.delete("cat");

    if (q) params.set("q", q);
    else params.delete("q");

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [cat, q]);

  const data = useMemo(() => {
    return RESOURCES
      .filter((r) => r.type === which)
      .filter((r) => !cat || r.category === cat)
      .filter((r) => {
        const hay = `${r.name} ${r.address} ${r.notes} ${r.category} ${(
          r.tags || []
        ).join(" ")}`.toLowerCase();
        const query = q.toLowerCase();
        const matchesQ = hay.includes(query);
        const matchesDental =
          !dentalOnly ||
          hay.includes("dental") ||
          hay.includes("dentist") ||
          (r.tags || []).includes("dental");
        const matchesWomen =
          !womenOnly ||
          (r.tags || []).includes("women") ||
          hay.includes("women");
        const matchesMental =
          !mentalHealthOnly || (r.tags || []).includes("mental-health");
        return matchesQ && matchesDental && matchesWomen && matchesMental;
      })
      .sort((a, b) => {
        if (!womenOnly) return 0;
        const aw = (a.tags || []).includes("women") ? 1 : 0;
        const bw = (b.tags || []).includes("women") ? 1 : 0;
        return bw - aw;
      });
  }, [which, cat, q, dentalOnly, womenOnly, mentalHealthOnly]);

  const handlePrint = () => {
    window.print();
  };

  const incFont = () => setFontPct((p) => Math.min(170, p + 10));
  const decFont = () => setFontPct((p) => Math.max(100, p - 10));

  return (
    <div
      lang="en"
      className={`${hc ? "bg-black text-white" : "bg-white text-gray-900"}`}
      style={{ fontSize: `${fontPct}%` }}
    >
      <style>
        {`
        @media print {
          @page { margin: 0.5cm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          header, footer, .no-print { display: none !important; }
          .print-only { display: block !important; }
          article { break-inside: avoid; border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; }
        }
        .print-only { display: none; }
        `}
      </style>

      {/* Skip Links */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-yellow-300 focus:text-black focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      <a
        href="#search"
        className="sr-only focus:not-sr-only focus:absolute focus:top-12 focus:left-2 focus:bg-yellow-300 focus:text-black focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to search
      </a>

      <header
        className={`${hc ? "bg-yellow-500 text-black" : "bg-teal-600 text-white"
          } p-4 shadow no-print`}
        role="banner"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src="./logo.png"
              alt="Trinidad Area Resource Finder Logo"
              className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-white p-1"
            />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Trinidad Help Finder
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setHc(!hc)}
              className={`px-3 py-1 rounded font-bold border-2 ${hc
                  ? "bg-black text-yellow-300 border-black"
                  : "bg-white text-teal-800 border-white"
                }`}
              aria-pressed={hc}
            >
              Using {hc ? "High Contrast" : "Normal"}
            </button>
            <div
              className="hidden sm:flex gap-1"
              role="group"
              aria-label="Font size controls"
            >
              <button
                onClick={decFont}
                className="w-8 h-8 rounded bg-white text-black font-bold flex items-center justify-center"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={incFont}
                className="w-10 h-10 rounded bg-white text-black font-bold flex items-center justify-center text-xl"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="main" className="max-w-4xl mx-auto p-4 md:p-6" role="main">
        <div className="flex justify-end gap-2 mb-4 no-print">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 font-semibold"
          >
            <span aria-hidden="true">🖨</span> Easy Print
          </button>
        </div>

        <section
          className={`mb-6 p-4 rounded-3xl border-2 ${hc ? "border-yellow-300" : "border-teal-100 bg-teal-50"
            } no-print`}
          aria-labelledby="share-heading"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white p-2 rounded-xl shadow-sm">
              <QRCode
                value="https://travisforcolorado.github.io/HackTrrinidadForward/"
                size={120}
                viewBox={`0 0 256 256`}
              />
            </div>
            <div>
              <h2 id="share-heading" className="text-xl font-bold mb-2">
                Share this Resource
              </h2>
              <p className="mb-2 max-w-md">
                Scan specifically to share this app with others in need. Works on
                any smartphone.
              </p>
              <div
                className={`text-sm font-mono p-2 rounded ${hc ? "bg-gray-800 text-yellow-300" : "bg-white text-gray-600"
                  }`}
              >
                travisforcolorado.github.io/HackTrrinidadForward/
              </div>
            </div>
          </div>
        </section>

        <fieldset className="mb-6 no-print border-0 p-0 m-0">
          <legend className="sr-only">Choose region scope</legend>
          <div className="flex gap-4 mb-4">
            {["Primary", "Secondary"].map((t) => (
              <label
                key={t}
                className={`flex-1 cursor-pointer rounded-2xl p-3 text-center text-lg font-bold border-2 transition-colors ${which === t
                    ? hc
                      ? "bg-yellow-500 text-black border-yellow-500"
                      : "bg-teal-700 text-white border-teal-700"
                    : hc
                      ? "border-white text-white"
                      : "bg-white text-gray-600 border-gray-300"
                  }`}
              >
                <input
                  type="radio"
                  name="scope"
                  className="sr-only"
                  checked={which === t}
                  onChange={() => setWhich(t)}
                  aria-checked={which === t}
                  aria-label={
                    t === "Primary"
                      ? "Show Trinidad resources"
                      : "Show Regional resources in nearby cities"
                  }
                />
                <span>
                  {t === "Primary" ? "Trinidad" : "Regional (nearby)"}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-2 no-print"
          role="group"
          aria-label="Filter by category"
        >
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => {
                const next = cat === c.key ? null : c.key;
                setCat(next);
                if (next !== "Health") {
                  setDentalOnly(false);
                  setWomenOnly(false);
                  setMentalHealthOnly(false);
                }
              }}
              className={`rounded-3xl h-24 md:h-28 border-2 flex flex-col items-center justify-center p-2 text-center transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${cat === c.key
                  ? hc
                    ? "bg-yellow-500 text-black border-yellow-500 focus-visible:ring-yellow-300"
                    : "bg-teal-600 text-white border-teal-600 focus-visible:ring-teal-300 scale-105 shadow-lg"
                  : hc
                    ? "bg-black text-white border-white focus-visible:ring-yellow-300"
                    : "bg-gray-100 border-gray-300 text-gray-900 focus-visible:ring-teal-300 hover:bg-gray-200"
                }`}
              aria-pressed={cat === c.key}
              aria-label={
                cat === c.key ? `${c.label} filter on` : `Filter by ${c.label}`
              }
              aria-controls="results"
            >
              <span className="text-3xl mb-1" aria-hidden="true">
                {CAT_ICONS[c.key]}
              </span>
              <span className="text-lg md:text-xl font-extrabold tracking-wide leading-tight">
                {c.label}
              </span>
            </button>
          ))}
        </div>

        {cat === "Health" && (
          <div
            className="mb-4 flex flex-wrap items-center gap-6 no-print"
            role="group"
            aria-label="Health subfilters"
          >
            <label className="inline-flex items-center gap-2 text-base md:text-lg font-semibold cursor-pointer">
              <input
                type="checkbox"
                className="h-5 w-5 accent-teal-600"
                checked={dentalOnly}
                onChange={(e) => setDentalOnly(e.target.checked)}
                aria-label="Show dental resources only"
              />
              Dental only
            </label>
            <label className="inline-flex items-center gap-2 text-base md:text-lg font-semibold cursor-pointer">
              <input
                type="checkbox"
                className="h-5 w-5 accent-teal-600"
                checked={womenOnly}
                onChange={(e) => setWomenOnly(e.target.checked)}
                aria-label="Show women's health resources only"
              />
              Women’s health
            </label>
            <label className="inline-flex items-center gap-2 text-base md:text-lg font-semibold cursor-pointer">
              <input
                type="checkbox"
                className="h-5 w-5 accent-teal-600"
                checked={mentalHealthOnly}
                onChange={(e) => setMentalHealthOnly(e.target.checked)}
                aria-label="Show mental health resources only"
              />
              Mental Health
            </label>
          </div>
        )}

        <form
          className="mb-4 no-print"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="search" className="block text-lg font-bold mb-1">
            Search
          </label>
          <div className="relative">
            <input
              id="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
              placeholder="Type a name or place..."
              className={`w-full rounded-2xl border-2 pl-4 pr-10 py-3 text-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${hc
                  ? "bg-black border-white text-white focus-visible:ring-yellow-300"
                  : "border-gray-300 focus-visible:ring-teal-300"
                }`}
              aria-describedby="searchHelp"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ("")}
                className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full ${hc ? "text-white hover:bg-gray-800" : "text-gray-500 hover:bg-gray-200"
                  }`}
                aria-label="Clear search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          <div id="searchHelp" className="mt-1 text-base opacity-80">
            Try: “dental”, “food”, “hospital”, or a street name.
          </div>
        </form>

        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {data.length} results shown.
        </div>

        <ul id="results" className="space-y-4" role="list">
          {data.length === 0 && (
            <li role="listitem" className="text-xl font-semibold opacity-80">
              No results. Try another word or tap a different box above.
            </li>
          )}
          {data.map((r, i) => {
            const headingId = `res-${i}-h`;
            const notesId = `res-${i}-n`;
            return (
              <li key={i} role="listitem">
                <article
                  className={`rounded-3xl border shadow-sm p-4 md:p-5 transition-transform hover:shadow-md ${hc ? "border-white" : "border-gray-200 bg-white"
                    }`}
                  role="region"
                  aria-labelledby={headingId}
                  aria-describedby={notesId}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2
                        id={headingId}
                        className="text-2xl md:text-3xl font-extrabold leading-snug"
                      >
                        {r.name}
                      </h2>
                      <div
                        className={`mt-1 text-base md:text-lg font-semibold ${hc ? "text-yellow-300" : "text-teal-700"
                          }`}
                      >
                        {r.category}
                        {r.tags && r.tags.length > 0 && (
                          <span className="ml-2 opacity-75 text-sm font-normal">
                            ({r.tags.join(", ")})
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 grid gap-1 text-lg">
                    {r.phone && (
                      <div className="flex items-center gap-2">
                        <span aria-hidden="true">📞</span>
                        <a
                          href={`tel:${r.phone}`}
                          className="underline hover:no-underline font-bold"
                        >
                          {r.phone}
                        </a>
                      </div>
                    )}
                    {r.address && (
                      <div className="flex items-start gap-2">
                        <span aria-hidden="true" className="mt-1">
                          📍
                        </span>
                        <a
                          href={mapLink(r.address)}
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:no-underline"
                        >
                          {r.address}
                        </a>
                      </div>
                    )}
                    {r.hours && (
                      <div className="flex items-start gap-2">
                        <span aria-hidden="true" className="mt-1">
                          🕒
                        </span>
                        <span>{r.hours}</span>
                      </div>
                    )}
                    {r.website && (
                      <div className="flex items-center gap-2 mt-1">
                        <span aria-hidden="true">🌐</span>
                        <a
                          href={r.website}
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:no-underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>

                  {r.notes && (
                    <div
                      id={notesId}
                      className={`mt-3 pt-3 border-t text-lg ${hc ? "border-gray-700" : "border-gray-100"
                        }`}
                    >
                      {r.notes}
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ul>
      </main>

      <footer
        className={`mt-12 py-8 border-t text-center no-print ${hc ? "border-white text-gray-300" : "border-gray-300 text-gray-600"
          }`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-semibold text-lg">Trinidad Help Finder</p>
          <p className="mt-2 text-sm opacity-80">
            Last Updated: February 2026
          </p>
          <p className="mt-2 text-sm">
            Questions? Errors?{" "}
            <a
              href="mailto:contact@trinidadhelpfinder.com"
              className={`underline ${hc ? "text-yellow-300" : "text-teal-600 hover:text-teal-800"
                }`}
            >
              Contact Us
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default TrinidadHelpFinder;
