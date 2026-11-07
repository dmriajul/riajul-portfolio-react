/**
 * Visual explanations for /industries/hvac.
 *
 * Everything here is HTML and CSS rather than images or SVG text: the labels
 * stay readable at any width, follow the theme tokens, and are read out by
 * screen readers in a sensible order. No diagram contains client data, and the
 * report preview is explicitly labelled as a layout example.
 */

/* ----------------------------------------------------------------
   Hero system flow: demand, campaigns, page, tracking, report
---------------------------------------------------------------- */

export function SystemFlow({ flow }) {
  return (
    <figure className="hvac-figure hvac-hero-flow">
      <div className="hvac-flow-rail">
        {flow.steps.map((step, index) => (
          <div className="hvac-flow-node" key={step.label}>
            <span className="hvac-flow-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="hvac-flow-copy">
              <strong>{step.label}</strong>
              <span>{step.detail}</span>
            </div>
            {index < flow.steps.length - 1 && (
              <span className="hvac-flow-arrow" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
      <figcaption>{flow.caption}</figcaption>
    </figure>
  );
}

/* ----------------------------------------------------------------
   Channel workflow: two lanes converging on a page and a report
---------------------------------------------------------------- */

const laneContent = {
  google: {
    title: "Google Ads: capture the search",
    note: "People already looking for help.",
    steps: [
      {
        title: "Intent research",
        detail: "Emergency repair, replacement quotes, maintenance, indoor air quality",
      },
      {
        title: "Account structure",
        detail: "Single-theme ad groups, service area by city or ZIP, negative lists",
      },
      {
        title: "Search term discipline",
        detail: "Weekly pruning of DIY, parts, rental and job-seeker queries",
      },
    ],
  },
  meta: {
    title: "Meta Ads: stay in the consideration",
    note: "People who are not searching yet.",
    steps: [
      {
        title: "Audience build",
        detail: "Site visitors, past enquiries, lookalikes from real customers",
      },
      {
        title: "Offer and creative",
        detail: "Seasonal offers, job photos with permission, retention angles",
      },
      {
        title: "Creative testing",
        detail: "Hooks and formats tested in small budgets before scaling",
      },
    ],
  },
};

export function ChannelWorkflow() {
  const lanes = [
    { key: "google", ...laneContent.google },
    { key: "meta", ...laneContent.meta },
  ];

  return (
    <figure className="hvac-figure hvac-workflow">
      <div className="hvac-workflow-lanes">
        {lanes.map((lane) => (
          <div className={`hvac-workflow-lane is-${lane.key}`} key={lane.key}>
            <div className="hvac-workflow-lane-head">
              <span className="hvac-workflow-dot" aria-hidden="true" />
              <h3>{lane.title}</h3>
            </div>
            <p className="hvac-workflow-note">{lane.note}</p>

            <ol className="hvac-workflow-steps">
              {lane.steps.map((step, index) => (
                <li key={step.title}>
                  <span className="hvac-workflow-step-num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <strong>{step.title}</strong>
                    <span>{step.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="hvac-workflow-converge">
        <span className="hvac-workflow-converge-label">Both channels land in the same place</span>
        <div className="hvac-workflow-outcomes">
          {[
            { title: "One landing page", detail: "Service, city, phone number, one action" },
            { title: "One conversion event", detail: "Call tap, form submit or booking click in GA4" },
            { title: "One report", detail: "Cost per lead by campaign, month over month" },
          ].map((item, index) => (
            <div className="hvac-workflow-outcome" key={item.title}>
              <div>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
              {index < 2 && <span className="hvac-workflow-outcome-arrow" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>

      <figcaption>
        How the two channels connect to the same page, event and report. A workflow diagram, not
        account data.
      </figcaption>
    </figure>
  );
}

/* ----------------------------------------------------------------
   Tracking architecture: what is captured, where it lands, what
   sits outside my access
---------------------------------------------------------------- */

export function TrackingArchitecture() {
  const columns = [
    {
      title: "1. The lead happens",
      items: [
        "Form submission on a landing page",
        "Phone number tap on mobile",
        "Booking link click, such as Calendly",
        "Chat or messaging click, if present",
      ],
    },
    {
      title: "2. How it is captured",
      items: [
        "Google Tag Manager web container: tags and triggers",
        "GA4 events, marked as key events",
        "Meta Pixel browser events",
        "Conversions API, where the setup supports it",
      ],
    },
    {
      title: "3. Where it lands",
      items: [
        "GA4: source, campaign, landing page",
        "Google Ads: imported conversion actions",
        "Meta: matched events for campaign reporting",
        "One monthly report built from these",
      ],
    },
  ];

  return (
    <figure className="hvac-figure hvac-arch">
      <div className="hvac-arch-grid">
        {columns.map((column, index) => (
          <div className="hvac-arch-col" key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {index < columns.length - 1 && (
              <span className="hvac-arch-connector" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <div className="hvac-arch-outside">
        <h3>Outside this diagram, in your systems</h3>
        <ul>
          {[
            "CRM or dispatch software, client owned",
            "Call tracking provider, third party and paid",
            "Answering service or call centre",
            "Offline job outcomes, if nobody records them",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <figcaption>
        Solid items are set up or maintained inside the service. Dashed items need your access or a
        third party tool, and are not assumed to exist. Diagram only.
      </figcaption>
    </figure>
  );
}

/* ----------------------------------------------------------------
   Optimisation cycle: the loop that runs after launch
---------------------------------------------------------------- */

export function OptimizationCycle() {
  const steps = [
    {
      cadence: "Weekly",
      title: "Read the numbers",
      detail: "Calls and forms by campaign, search terms that spent without converting.",
    },
    {
      cadence: "Weekly",
      title: "Change one thing",
      detail: "Negatives, budget pacing, a creative angle. Logged with the date it changed.",
    },
    {
      cadence: "Monthly",
      title: "Report and re-forecast",
      detail: "What changed, what it produced, and what the next month should hold.",
    },
    {
      cadence: "Seasonal",
      title: "Rebuild for the peak",
      detail: "Budget shape and creative adjusted before heating and cooling demand shifts.",
    },
  ];

  return (
    <figure className="hvac-figure hvac-cycle">
      <div className="hvac-cycle-grid">
        {steps.map((step, index) => (
          <div className="hvac-cycle-step" key={step.title}>
            <span className="hvac-cycle-cadence">{step.cadence}</span>
            <span className="hvac-cycle-index" aria-hidden="true">
              {index + 1}
            </span>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </div>
        ))}
        <div className="hvac-cycle-center">
          <strong>The loop</strong>
          <span>Repeats for as long as the account runs</span>
        </div>
      </div>
      <figcaption>
        The optimisation loop after launch. Diagrams the cadence, not results.
      </figcaption>
    </figure>
  );
}

/* ----------------------------------------------------------------
   Report preview: labelled layout example, no client figures
---------------------------------------------------------------- */

export function ReportPreview() {
  const rows = ["Campaign A", "Campaign B", "Campaign C"];

  return (
    <figure className="hvac-figure hvac-report">
      <div className="hvac-report-card">
        <div className="hvac-report-head">
          <div>
            <span className="hvac-report-kicker">Monthly report</span>
            <strong>Layout example</strong>
          </div>
          <span className="hvac-report-badge">Illustrative</span>
        </div>

        <dl className="hvac-report-meta">
          <div>
            <dt>Reporting period</dt>
            <dd>—</dd>
          </div>
          <div>
            <dt>Account</dt>
            <dd>—</dd>
          </div>
          <div>
            <dt>Prepared for</dt>
            <dd>—</dd>
          </div>
        </dl>

        <table className="hvac-report-table">
          <caption className="sr-only">
            Example monthly report layout with placeholder values, no client data
          </caption>
          <thead>
            <tr>
              <th scope="col">Campaign</th>
              <th scope="col">Spend</th>
              <th scope="col">Calls</th>
              <th scope="col">Forms</th>
              <th scope="col">Cost per lead</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row}>
                <th scope="row">{row}</th>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="hvac-report-bars" aria-hidden="true">
          <span style={{ width: "72%" }} />
          <span style={{ width: "46%" }} />
          <span style={{ width: "88%" }} />
          <span style={{ width: "34%" }} />
        </div>

        <p className="hvac-report-foot">
          Every figure in a real report comes from your own accounts. This card shows the structure
          only, with no client numbers.
        </p>
      </div>

      <figcaption>
        Illustrative layout. Dashes replace the numbers on purpose: no advertising results are shown
        or implied here.
      </figcaption>
    </figure>
  );
}
