import React, { useMemo, useState } from "react";
import QRCode from "react-qr-code";

const CATEGORIES = [
  { key: "Health", label: "Health" },
  { key: "Heat", label: "Heat" },
  { key: "Food", label: "Food" },
  { key: "Housing", label: "Housing" }
];

const mapLink = (address) =>
  address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    : "#";

const RESOURCES = [
  {
    type: "Primary",
    category: "Health",
    name: "Mt. San Rafael Hospital (ER & Clinic)",
    address: "410 Benedicta Ave, Trinidad, CO 81082",
    phone: "719-846-9213",
    website: "https://www.msrhc.org/",
    hours: "ER 24/7; Walk‑in Clinic posted",
    notes: "Hospital, ER, clinic, imaging (incl. 3D mammogram).",
    tags: ["women", "mammography"]
  },
  {
    type: "Primary",
    category: "Health",
    name: "Mt. Carmel Wellness & Community Center",
    address: "911 Robinson Ave, Trinidad, CO 81082",
    phone: "719-845-4894",
    website: "https://mtcarmelcenter.org/",
    hours: "Varies by program",
    notes: "Wellness, screenings, help for Veterans.",
    tags: []
  },
  {
    type: "Primary",
    category: "Health",
    name: "LA‑H Counties District Health Dept. (Public Health & WIC)",
    address: "412 Benedicta Ave, Trinidad, CO 81082",
    phone: "719-846-2213",
    website: "https://la-h-health.colorado.gov/",
    hours: "Call for hours",
    notes: "Shots, WIC (women/infants/children), public health clinic.",
    tags: ["women", "wic"]
  },
  {
    type: "Primary",
    category: "Health",
    name: "Health Solutions – Trinidad (Behavioral Health)",
    address: "417 S Indiana Ave, Trinidad, CO 81082",
    phone: "719-846-4416",
    website: "https://www.health.solutions/",
    hours: "Mon–Fri 8a–5p (Crisis line 24/7)",
    notes: "Mental health care, crisis help, substance use.",
    tags: []
  },
  {
    type: "Primary",
    category: "Health",
    name: "Crossroads Turning Points – Trinidad",
    address: "1004 Carbon Pl, Trinidad, CO 81082",
    phone: "719-846-4481",
    website: "https://www.crossroadstp.org/locations",
    hours: "See site; many late hours",
    notes: "Substance use treatment.",
    tags: []
  },
  {
    type: "Primary",
    category: "Health",
    name: "Salud Family Health – Dental Clinic (Trinidad)",
    address: "928 Smith Ave, Trinidad, CO 81082",
    phone: "719-422-8810",
    website: "https://www.saludclinic.org/trinidad",
    hours: "Mon–Fri 8a–5p (opens 9a 1st & 3rd Wed)",
    notes: "Community dental clinic; Medicaid accepted; low‑cost options.",
    tags: ["dental"]
  },
  {
    type: "Primary",
    category: "Health",
    name: "Trinidad Family Dental",
    address: "2124 Freedom Rd, Trinidad, CO 81082",
    phone: "719-422-5696",
    website: "https://trinidadfamily.dental/",
    hours: "Mon–Fri 8:30a–4:30p",
    notes: "Family dentistry; accepts Medicaid; comprehensive care.",
    tags: ["dental"]
  },
  {
    type: "Primary",
    category: "Health",
    name: "New Image Advanced Dental (Amy Wilson, DDS)",
    address: "417 University St, Suite 1, Trinidad, CO 81082",
    phone: "719-846-7387",
    website: "https://trinidadsmiles.com/",
    hours: "Call for hours",
    notes: "General dentistry, implants, periodontics, orthodontics.",
    tags: ["dental"]
  },
  {
    type: "Primary",
    category: "Health",
    name: "Fishers Peak Dentistry",
    address: "1723 E Main St, Trinidad, CO 81082",
    phone: "719-846-4028",
    website: "https://www.fisherspeakdentistry.com/",
    hours: "Call for hours",
    notes: "Family dentistry.",
    tags: ["dental"]
  },
  {
    type: "Primary",
    category: "Health",
    name: "Maternal Mental Health Hotline (24/7)",
    address: "",
    phone: "1-833-852-6262",
    website:
      "https://mchb.hrsa.gov/programs-impact/national-maternal-mental-health-hotline",
    hours: "24/7 call or text (English/Español)",
    notes: "Confidential support for pregnant/postpartum parents.",
    tags: ["women", "mental-health"]
  },
  {
    type: "Primary",
    category: "Food",
    name: "E & M Food Pantry",
    address: "911 Robinson Ave, Trinidad, CO 81082",
    phone: "719-846-2075",
    website: "https://www.trinidad.co.gov/news_detail_T74_R142.php",
    hours: "Mon, Wed, Fri 10a–4p (call)",
    notes: "Food boxes and pantry items.",
    tags: []
  },
  {
    type: "Primary",
    category: "Food",
    name: "Mt. Carmel – Food Distribution",
    address: "Mt. Carmel Center, Trinidad, CO 81082",
    phone: "719-845-4894",
    website: "https://mtcarmelcenter.org/",
    hours: "Monthly – see site",
    notes: "Food events for families, seniors, Veterans.",
    tags: []
  },
  {
    type: "Primary",
    category: "Food",
    name: "Fishers Peak Soup Kitchen",
    address: "Trinidad, CO",
    phone: "",
    website: "https://www.foodpantries.org/ci/co-trinidad",
    hours: "Meals M‑W‑F 10:45–11:45a; Baskets M‑F 8:45–10:45a",
    notes: "Hot meals and food baskets.",
    tags: []
  },
  {
    type: "Primary",
    category: "Heat",
    name: "LEAP – Energy Help (Winter)",
    address: "219 S Chestnut St, Trinidad, CO 81082",
    phone: "719-846-2276",
    website: "https://cdhs.colorado.gov/leap",
    hours: "Nov 1 – Apr 30 (call)",
    notes: "Help with heat bills (gas, electric, propane, wood).",
    tags: []
  },
  {
    type: "Primary",
    category: "Housing",
    name: "Las Animas County Human Services – Housing",
    address: "219 S Chestnut St, Trinidad, CO 81082",
    phone: "719-846-2276",
    website:
      "https://remerg.com/resources/las-animas-county-department-of-human-services/",
    hours: "Mon–Fri 8a–4:30p",
    notes: "Rent help, shelter links, stabilization.",
    tags: []
  },
  {
    type: "Primary",
    category: "Faith",
    name: "Most Holy Trinity Catholic Church (Aid)",
    address: "135 Church St, Trinidad, CO 81082",
    phone: "719-846-3369",
    website: "https://trinidadcatholic.org/",
    hours: "Call for ministry hours",
    notes: "Utility aid, food/housing outreach (parish).",
    tags: []
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Spanish Peaks Regional Health – Outreach & Women’s Clinic",
    address: "129 Kansas Ave, Walsenburg, CO 81089",
    phone: "719-738-5200",
    website: "https://www.sprhc.org/",
    hours: "Call for hours",
    notes: "Women’s clinic/services; hospital & imaging nearby.",
    tags: ["women"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Spanish Peaks Regional Health – Diagnostic Imaging (Mammography)",
    address: "23500 US Hwy 160, Walsenburg, CO 81089",
    phone: "719-738-5152",
    website: "https://www.sprhc.org/diagnostic-imaging",
    hours: "Mammography Mon (see site)",
    notes: "Mammograms and women’s imaging.",
    tags: ["women", "mammography"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Pueblo Dept. of Public Health & Environment – Family Planning Clinic",
    address: "101 W 9th St, Pueblo, CO 81003",
    phone: "719-583-4380",
    website:
      "https://county.pueblo.org/public-health-department/family-planning-birth-control",
    hours: "Mon–Fri 8a–4:30p; some evenings",
    notes: "Low‑cost birth control, STI testing; confidential; se habla español.",
    tags: ["women", "family-planning"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "UCHealth – Associates in Women’s Health (OB‑GYN)",
    address: "1600 N Grand Ave, Suite 400, Pueblo, CO 81003",
    phone: "719-585-2500",
    website:
      "https://www.uchealth.org/locations/womens-health-center-pueblo/",
    hours: "Mon–Fri 8a–5p",
    notes: "OB‑GYN group providing prenatal & gynecology care.",
    tags: ["women", "obgyn"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "CARE Colorado – Abortion Clinic (Pueblo)",
    address: "1930 E Orman Ave, Pueblo, CO 81004",
    phone: "719-884-4070",
    website: "https://carecliniccolorado.com/",
    hours: "Appts Wed–Sat; phone 24/7",
    notes: "Medication & procedural abortion; info & support.",
    tags: ["women", "abortion"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Pueblo Community Health Center – Women’s Wellness Connection",
    address: "110 E Routt Ave, Pueblo, CO 81004",
    phone: "719-543-8711",
    website: "https://www.pueblochc.org/service/womens-wellness-connection/",
    hours: "Call for hours",
    notes: "Free breast & cervical screening for eligible patients (state WWC).",
    tags: ["women", "screening"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Planned Parenthood – Colorado Springs Westside Health Center",
    address: "3480 Centennial Blvd, Colorado Springs, CO 80907",
    phone: "719-475-7162",
    website:
      "https://www.plannedparenthood.org/health-center/colorado/colorado-springs/80907/colorado-springs-westside-health-center-3967-90210",
    hours: "Mon/Fri 8a–6p; Tue 9a–6p; Sat 8a–3p",
    notes: "Birth control, STI care, abortion services; online booking.",
    tags: ["women", "abortion", "family-planning"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Community Dental Health – Pueblo (Grand Avenue Dental)",
    address: "2320 N Grand Ave, Pueblo, CO 81003",
    phone: "719-542-5300",
    website: "https://communitydentalhealth.org/",
    hours: "Mon–Thu 8a–4p",
    notes: "Nonprofit low‑cost dental; dentures, extractions; serves uninsured/Medicaid.",
    tags: ["dental"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Pueblo Community Health Center – Dental Services",
    address: "110 E Routt Ave, Pueblo, CO 81004 (multiple sites)",
    phone: "719-543-8711",
    website: "https://www.pueblochc.org/service/dental-services/",
    hours: "Call for hours",
    notes: "FQHC dental clinics (O'Rourke & East Side); accepts most payors; sliding scale.",
    tags: ["dental"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Pueblo Community College – Dental Hygiene Clinic",
    address: "415 Harrison St (Health Sciences Bldg), Pueblo, CO 81004",
    phone: "719-549-3286",
    website: "https://pueblocc.edu/Dental-Clinics",
    hours: "Varies by semester",
    notes: "Low‑cost preventive cleanings and x‑rays by supervised students.",
    tags: ["dental"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Raton Family Dental",
    address: "1100 S 2nd St, Suite C, Raton, NM 87740",
    phone: "575-215-5750",
    website: "https://www.ratonfamilydental.com/",
    hours: "Mon–Fri 8a–5p",
    notes: "Full‑service family dentistry near CO/NM border.",
    tags: ["dental"]
  },
  {
    type: "Secondary",
    category: "Food",
    name: "The Salvation Army – Pueblo Corps",
    address: "401 S Prairie Ave, Pueblo, CO 81005",
    phone: "",
    website: "https://pueblo.salvationarmy.org/pueblo_corps/cure-hunger/",
    hours: "Tue & Thu 10a–12p",
    notes: "Food boxes, Pueblo area.",
    tags: []
  },
  {
    type: "Secondary",
    category: "Food",
    name: "Center Toward Self‑Reliance (Pantry)",
    address: "901 W 8th St, Pueblo, CO",
    phone: "719-546-1271",
    website: "https://cfdpueblo.org/service/food-pantry/",
    hours: "Mon/Tue/Wed/Fri 1–3:30p",
    notes: "Groceries for low‑income households.",
    tags: []
  },
  {
    type: "Secondary",
    category: "Food",
    name: "Care and Share – Mobile Markets",
    address: "Southern Colorado (various)",
    phone: "",
    website: "https://careandshare.org/",
    hours: "See mobile schedule",
    notes: "Mobile markets across rural areas.",
    tags: []
  },
  {
    type: "Secondary",
    category: "Housing",
    name: "Westside CARES (Rent/Utilities)",
    address: "2808 W Colorado Ave, Colorado Springs, CO",
    phone: "",
    website: "https://www.westsidecares.org/get-help/rent-utilities/",
    hours: "Mon–Thu 9:30a–12:30p (after 8th)",
    notes: "Emergency rent and utility help.",
    tags: []
  },
  {
    type: "Secondary",
    category: "Housing",
    name: "Catholic Charities of Central Colorado",
    address: "Colorado Springs, CO",
    phone: "",
    website: "https://www.ccharitiescc.org/get-help/rent-utility-services/",
    hours: "Call for availability",
    notes: "Rent & utility assistance.",
    tags: []
  },
  {
    type: "Secondary",
    category: "Heat",
    name: "2‑1‑1 Colorado – Statewide Helpline",
    address: "Colorado (statewide)",
    phone: "866-760-6489",
    website: "https://www.211colorado.org/",
    hours: "24/7",
    notes: "Call to find local help near you.",
    tags: []
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Spanish Peaks Regional Health Center",
    address: "23500 US Hwy 160, Walsenburg, CO 81089",
    phone: "719-738-5100",
    website: "https://www.sprhc.org/clinics",
    hours: "See site; family clinic walk‑in times",
    notes: "Hospital & clinics (nearby).",
    tags: []
  },
  {
    type: "Secondary",
    category: "Health",
    name: "UCHealth Parkview Medical Center (ER)",
    address: "400 W 16th St, Pueblo, CO 81003",
    phone: "719-584-4000",
    website:
      "https://www.uchealth.org/locations/uchealth-emergency-care-parkview-medical-center/",
    hours: "ER 24/7",
    notes: "Hospital & emergency care.",
    tags: []
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Pueblo Public Health – Clinic (General)",
    address: "101 W 9th St, Pueblo, CO 81003",
    phone: "719-583-4380",
    website: "https://county.pueblo.org/public-health-department/clinic",
    hours: "Mon–Fri 8a–4:30p; limited evenings",
    notes: "General clinic at PDPHE; se habla español.",
    tags: []
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Miners Colfax Medical Center (Raton, NM)",
    address: "203 Hospital Dr, Raton, NM 87740",
    phone: "575-445-3661",
    website: "https://www.minershosp.com/",
    hours: "ER 24/7; clinics vary",
    notes: "Hospital & clinics just south of CO line.",
    tags: []
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Raton VA CBOC (Veterans Clinic)",
    address: "1493 Whittier St, Raton, NM 87740",
    phone: "575-445-2391",
    website:
      "https://www.va.gov/new-mexico-health-care/locations/raton-va-clinic",
    hours: "Call for hours",
    notes: "Primary care & women’s health for eligible Veterans.",
    tags: ["women", "veterans"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "TRUE Center for Gender Diversity (Youth)",
    address: "Colorado Springs, CO (Children’s Hospital)",
    phone: "720-777-8783",
    website: "https://www.childrenscolorado.org/",
    hours: "Call for hours",
    notes: "Gender‑affirming care for youth (regional).",
    tags: []
  },
  {
    type: "Primary",
    category: "Health",
    name: "Diane Buscarello, LPC",
    address: "Trinidad, CO",
    phone: "",
    website: "https://www.7cups.com/",
    hours: "Call for appointment",
    notes: "Counseling for family stress, trauma, PTSD, and relationships.",
    tags: ["mental-health"]
  },
  {
    type: "Primary",
    category: "Health",
    name: "Colorado Crisis Services (Statewide)",
    address: "",
    phone: "1-844-493-8255",
    website: "https://coloradocrisisservices.org/",
    hours: "24/7",
    notes: "Immediate crisis support. Text 'TALK' to 38255.",
    tags: ["mental-health"]
  },
  {
    type: "Primary",
    category: "Food",
    name: "Compassion Food Bank (Trinidad)",
    address: "Trinidad, CO",
    phone: "",
    website: "https://foodpantries.org/",
    hours: "4th Sat 10a–1:30p",
    notes: "Food assistance.",
    tags: []
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Spanish Peaks Mental Health Center",
    address: "926 Russell Ave, Walsenburg, CO 81089",
    phone: "719-738-2386",
    website: "https://www.spmhc.org/",
    hours: "Call for hours",
    notes: "Outpatient/inpatient services, therapy, dual diagnosis.",
    tags: ["mental-health"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Health Solutions – Walsenburg",
    address: "926 Russell Ave, Walsenburg, CO 81089",
    phone: "719-545-2746",
    website: "https://www.health.solutions/",
    hours: "Call for hours; 24/7 crisis",
    notes: "Mental health crisis intervention & substance abuse treatment.",
    tags: ["mental-health"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Pinwheel Healing Center",
    address: "186 Hospital Dr, Raton, NM 87740",
    phone: "505-636-6100",
    website: "https://pinwheelhealing.com/",
    hours: "Call for hours",
    notes: "Counseling, PTSD/anxiety treatment, addiction treatment.",
    tags: ["mental-health"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Tri County Community Services (Raton)",
    address: "220 4th Ave, Raton, NM 87740",
    phone: "575-445-2754",
    website: "https://www.tccservices.org/",
    hours: "Call for hours",
    notes: "Therapy, medication management, crisis intervention.",
    tags: ["mental-health"]
  },
  {
    type: "Secondary",
    category: "Health",
    name: "Health Solutions Crisis Center (Pueblo)",
    address: "1310 Chinook Ln, Pueblo, CO 81001",
    phone: "719-545-2746",
    website: "https://www.health.solutions/",
    hours: "24/7 Walk-in",
    notes: "Immediate mental health crisis help for all ages.",
    tags: ["mental-health"]
  },
  {
    type: "Secondary",
    category: "Food",
    name: "Walsenburg WIC Clinic",
    address: "119 E Fifth St, Walsenburg, CO 81089",
    phone: "719-738-2650",
    website: "https://www.coloradowic.gov/",
    hours: "Mon–Thu 9a–3p",
    notes: "Nutrition for women/infants/children.",
    tags: ["women", "wic"]
  },
  {
    type: "Secondary",
    category: "Food",
    name: "Dorcas Circle Food Pantry",
    address: "911 Main St, Walsenburg, CO 81089",
    phone: "719-738-2291",
    website: "",
    hours: "Tue/Thu (Call)",
    notes: "Food assistance.",
    tags: []
  },
  {
    type: "Secondary",
    category: "Food",
    name: "Raton Hunger Pantry",
    address: "430 N 2nd St, Raton, NM 87740",
    phone: "505-652-6769",
    website: "",
    hours: "2nd/4th Sat 11a–1p",
    notes: "Food distribution.",
    tags: []
  },
  {
    type: "Secondary",
    category: "Food",
    name: "Colfax County WIC (Raton)",
    address: "226 E 4th Ave, Raton, NM 87740",
    phone: "575-445-3601",
    website: "https://www.nmwic.org/",
    hours: "Mon–Fri 8a–5p",
    notes: "WIC services for families.",
    tags: ["women", "wic"]
  },
  {
    type: "Secondary",
    category: "Food",
    name: "Pueblo WIC Clinic",
    address: "Pueblo, CO (Multiple locations)",
    phone: "719-583-4392",
    website: "https://county.pueblo.org/wic",
    hours: "Call for hours",
    notes: "Nutrition support for women/children.",
    tags: ["women", "wic"]
  }
];

function TrinidadHelpFinder() {
  const [which, setWhich] = useState("Primary");
  const [cat, setCat] = useState(null);
  const [q, setQ] = useState("");
  const [hc, setHc] = useState(false);
  const [fontPct, setFontPct] = useState(115);
  const [dentalOnly, setDentalOnly] = useState(false);
  const [womenOnly, setWomenOnly] = useState(false);
  const [mentalHealthOnly, setMentalHealthOnly] = useState(false);

  const data = useMemo(() => {
    return RESOURCES
      .filter((r) => r.type === which)
      .filter((r) => !cat || r.category === cat)
      .filter((r) => {
        const hay = `${r.name} ${r.address} ${r.notes} ${r.category} ${(r.tags || []).join(
          " "
        )}`.toLowerCase();
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
        className={`${hc ? "bg-yellow-500 text-black" : "bg-teal-600 text-white"} p-4 shadow no-print`}
        role="banner"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src="./logo.png" alt="Trinidad Area Resource Finder Logo" className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-white p-1" />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Trinidad Help Finder
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handlePrint}
              className="hidden md:inline-block bg-white text-teal-700 px-3 py-1 rounded font-bold hover:bg-gray-100"
            >
              Print / Save PDF
            </button>

            <div
              className="flex items-center gap-2"
              aria-label="Accessibility settings"
            >
              <div
                className="flex items-center gap-1"
                role="group"
                aria-label="Text size"
              >
                <button
                  onClick={decFont}
                  className={`${hc
                      ? "bg-black text-white border-white"
                      : "bg-white text-teal-700 border-teal-700"
                    } border rounded px-2 py-1 text-lg font-bold focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${hc ? "focus-visible:ring-yellow-300" : "focus-visible:ring-teal-300"
                    }`}
                  aria-label="Decrease text size"
                >
                  A−
                </button>
                <button
                  onClick={incFont}
                  className={`${hc
                      ? "bg-black text-white border-white"
                      : "bg-white text-teal-700 border-teal-700"
                    } border rounded px-2 py-1 text-lg font-bold focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${hc ? "focus-visible:ring-yellow-300" : "focus-visible:ring-teal-300"
                    }`}
                  aria-label="Increase text size"
                >
                  A+
                </button>
              </div>
              <label className="inline-flex items-center gap-2 text-sm md:text-base font-semibold">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  checked={hc}
                  onChange={(e) => setHc(e.target.checked)}
                  aria-label="High contrast mode"
                />
                High contrast
              </label>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-3 text-sm md:text-base flex justify-between items-center">
          <div
            className={`${hc ? "bg-white text-black" : "bg-white text-teal-700"
              } rounded-lg px-3 py-2 font-semibold`}
          >
            Emergency? Call <a className="underline" href="tel:911">911</a>
          </div>
          {/* Mobile Print Button */}
          <button
            onClick={handlePrint}
            className="md:hidden bg-white text-teal-700 px-3 py-2 rounded font-bold text-sm"
          >
            Print
          </button>
        </div>
      </header>

      {/* Print Header */}
      <div className="print-only text-center mb-5">
        <h1 className="text-3xl font-bold">Trinidad Help Finder Resources</h1>
        <p>Resources for Trinidad, Walsenburg, Raton, and Pueblo.</p>
      </div>

      <main id="main" className="max-w-5xl mx-auto p-4" role="main">
        <fieldset className="mb-3 no-print" aria-label="Location scope">
          <legend className="sr-only">Choose Trinidad or Regional resources</legend>
          <div
            className="flex gap-2"
            role="radiogroup"
            aria-label="Location scope"
          >
            {["Primary", "Secondary"].map((t) => (
              <label
                key={t}
                className={`flex-1 rounded-2xl px-4 py-3 text-xl font-bold border-2 cursor-pointer ${which === t
                    ? hc
                      ? "bg-yellow-500 text-black border-yellow-500"
                      : "bg-teal-600 text-white border-teal-600"
                    : hc
                      ? "bg-black text-white border-white"
                      : "bg-white text-teal-700 border-teal-600"
                  } focus-within:outline-none focus-within:ring-4 ${hc ? "focus-within:ring-yellow-300" : "focus-within:ring-teal-300"
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
                <span>{t === "Primary" ? "Trinidad" : "Regional (nearby)"}</span>
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
              className={`rounded-3xl h-24 md:h-28 border-2 flex items-center justify-center text-2xl font-extrabold tracking-wide focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${cat === c.key
                  ? hc
                    ? "bg-yellow-500 text-black border-yellow-500 focus-visible:ring-yellow-300"
                    : "bg-teal-600 text-white border-teal-600 focus-visible:ring-teal-300"
                  : hc
                    ? "bg-black text-white border-white focus-visible:ring-yellow-300"
                    : "bg-gray-100 border-gray-300 text-gray-900 focus-visible:ring-teal-300"
                }`}
              aria-pressed={cat === c.key}
              aria-label={
                cat === c.key
                  ? `${c.label} filter on`
                  : `Filter by ${c.label}`
              }
              aria-controls="results"
            >
              {c.label}
            </button>
          ))}
        </div>

        {cat === "Health" && (
          <div
            className="mb-4 flex flex-wrap items-center gap-6 no-print"
            role="group"
            aria-label="Health subfilters"
          >
            <label className="inline-flex items-center gap-2 text-base md:text-lg font-semibold">
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={dentalOnly}
                onChange={(e) => setDentalOnly(e.target.checked)}
                aria-label="Show dental resources only"
              />
              Dental only
            </label>
            <label className="inline-flex items-center gap-2 text-base md:text-lg font-semibold">
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={womenOnly}
                onChange={(e) => setWomenOnly(e.target.checked)}
                aria-label="Show women's health resources only"
              />
              Women’s health
            </label>
            <label className="inline-flex items-center gap-2 text-base md:text-lg font-semibold">
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={mentalHealthOnly}
                onChange={(e) => setMentalHealthOnly(e.target.checked)}
                aria-label="Show mental health resources only"
              />
              Mental Health
            </label>
          </div>
        )}

        <div className="mb-4 no-print">
          <label htmlFor="search" className="block text-lg font-bold mb-1">
            Search
          </label>
          <input
            id="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type a name or place (try: women, mammogram, OB‑GYN, dental, food)"
            className={`w-full rounded-2xl border-2 px-4 py-3 text-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${hc
                ? "bg-black border-white text-white focus-visible:ring-yellow-300"
                : "border-gray-300 focus-visible:ring-teal-300"
              }`}
            aria-describedby="searchHelp"
          />
          <div id="searchHelp" className="mt-1 text-base opacity-80">
            Example: “dental”, “hospital”, “food”, or a street name.
          </div>
        </div>

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
                  className={`rounded-3xl border shadow-sm p-4 md:p-5 ${hc ? "border-white" : "border-gray-200"
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
                        {r.category} • {" "}
                        {r.type === "Primary" ? "Trinidad" : "Regional"}
                      </div>
                    </div>
                    <div
                      className={`shrink-0 text-sm md:text-base font-bold px-3 py-1 rounded-full ${hc
                          ? "bg-white text-black border border-black"
                          : "bg-gray-100 border border-gray-300"
                        }`}
                    >
                      Easy Read
                    </div>
                  </div>

                  <div className="mt-3 grid md:grid-cols-2 gap-3 text-lg">
                    <div>
                      {r.address && (
                        <div>
                          <span aria-hidden="true">📍 </span>
                          <span>{r.address}</span>
                        </div>
                      )}
                      {r.phone && (
                        <div className="mt-1">
                          <span aria-hidden="true">📞 </span>
                          <a
                            className="underline"
                            href={`tel:${r.phone.replace(/[^\d+]/g, "")}`}
                            aria-label={`Call ${r.name} at ${r.phone}`}
                          >
                            {r.phone}
                          </a>
                        </div>
                      )}
                      {r.website && (
                        <div className="mt-1">
                          <span aria-hidden="true">🌐 </span>
                          <a
                            className="underline break-all"
                            href={r.website}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open website for ${r.name}`}
                          >
                            {r.website}
                          </a>
                        </div>
                      )}
                      {r.hours && (
                        <div className="mt-1">
                          <span aria-hidden="true">⏰ </span>
                          <span>{r.hours}</span>
                        </div>
                      )}
                      {/* Tags for print view or screen readers */}
                      {r.tags && r.tags.length > 0 && (
                        <div className="mt-1 text-sm opacity-75 print-only">
                          Tags: {r.tags.join(", ")}
                        </div>
                      )}
                    </div>
                    <div>
                      {r.notes && (
                        <p
                          id={notesId}
                          className={`${hc
                              ? "bg-black text-white border border-white"
                              : "bg-gray-50"
                            } rounded-2xl p-3 text-lg leading-relaxed`}
                        >
                          {r.notes}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3 no-print">
                    {r.phone && (
                      <a
                        href={`tel:${r.phone.replace(/[^\d+]/g, "")}`}
                        className={`${hc
                            ? "bg-yellow-500 text-black"
                            : "bg-teal-600 text-white"
                          } rounded-2xl px-5 py-3 text-xl font-bold focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${hc
                            ? "focus-visible:ring-yellow-300"
                            : "focus-visible:ring-teal-300"
                          }`}
                        aria-label={`Call ${r.name}`}
                      >
                        Call
                      </a>
                    )}
                    {r.address && (
                      <a
                        href={mapLink(r.address)}
                        target="_blank"
                        rel="noreferrer"
                        className={`${hc
                            ? "bg-yellow-500 text-black"
                            : "bg-blue-600 text-white"
                          } rounded-2xl px-5 py-3 text-xl font-bold focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${hc
                            ? "focus-visible:ring-yellow-300"
                            : "focus-visible:ring-blue-300"
                          }`}
                        aria-label={`Get directions to ${r.name}`}
                      >
                        Directions
                      </a>
                    )}
                    {r.website && (
                      <a
                        href={r.website}
                        target="_blank"
                        rel="noreferrer"
                        className={`${hc
                            ? "bg-yellow-500 text-black"
                            : "bg-gray-800 text-white"
                          } rounded-2xl px-5 py-3 text-xl font-bold focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${hc
                            ? "focus-visible:ring-yellow-300"
                            : "focus-visible:ring-gray-400"
                          }`}
                        aria-label={`Open website for ${r.name}`}
                      >
                        Website
                      </a>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {/* QR Code Section */}
        <div className="mt-12 p-6 bg-white rounded-3xl border border-gray-200 shadow text-center no-print">
          <h2 className="text-2xl font-bold mb-4">Share this Resource</h2>
          <p className="mb-4 text-lg">Scan this QR code to share or save.</p>
          <div className="inline-block p-4 bg-white rounded-xl shadow-lg">
            <QRCode value={window.location.href} size={180} />
          </div>
        </div>

        <div className="mt-8 text-base md:text-lg opacity-80 no-print">
          Please call to confirm hours. This tool lists help for Trinidad first.
          Regional options include nearby cities (Pueblo, Walsenburg, Raton,
          Colorado Springs).
        </div>
      </main>
    </div>
  );
}

export default TrinidadHelpFinder;
