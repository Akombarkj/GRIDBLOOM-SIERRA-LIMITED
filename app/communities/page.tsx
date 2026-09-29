import communitiesBackground from "../../image/NATA_ALA TUNDUN WADA LGA, KANO SITE (37).jpg";

// [PLACEHOLDER DATA — replace with real community list from client]
type CommunityStatus = "Connected" | "Coming soon" | "Planned";

type Community = {
  name: string;
  district: string;
  status: CommunityStatus;
  context: string;
};

const communities: Community[] = [
  {
    name: "Koidu Town",
    district: "Kono District",
    status: "Connected",
    context: "Mini-grid services are live for homes, shops, and community services. [PLACEHOLDER]",
  },
  {
    name: "Bo Town",
    district: "Bo District",
    status: "Connected",
    context: "GridBloom connections are active in town centers and nearby service areas. [PLACEHOLDER]",
  },
  {
    name: "Makeni Rural Ring",
    district: "Bombali District",
    status: "Coming soon",
    context: "Expansion is in preparation for nearby homes and local institutions. [PLACEHOLDER]",
  },
  {
    name: "Lunsar Area",
    district: "Port Loko District",
    status: "Planned",
    context: "A planned mini-grid area for future residential and business coverage. [PLACEHOLDER]",
  },
  {
    name: "Kenema Market Cluster",
    district: "Kenema District",
    status: "Planned",
    context: "Community services and small commercial connections are planned. [PLACEHOLDER]",
  },
];

const statusOrder: Record<CommunityStatus, number> = {
  Connected: 0,
  "Coming soon": 1,
  Planned: 2,
};

export default function CommunitiesPage() {
  return (
    <div className="communities-page">
      <section
        className="communities-hero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(11, 34, 24, 0.72), rgba(16, 73, 43, 0.46)), url(${communitiesBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="section-inner">
          <div className="page-intro-block">
            <span className="section-kicker">Communities We Serve</span>
            <h1>Growing solar access across Sierra Leone</h1>
            <p>
              GridBloom is expanding mini-grid solar coverage across Sierra Leone. This page lists where
              our service is live today and where we are planning the next local connections.
            </p>
            <p>
              If a community is not listed yet, your area may still be under review or planned for future service.
            </p>
          </div>
        </div>
      </section>

      <section className="section solution-section">
        <div className="section-inner">
          <div className="community-list-head">
            <div>
              <h2 className="section-title">Community coverage</h2>
            </div>
            <div className="community-list-legend">
              <span><span className="legend-dot connected-dot"></span>Connected</span>
              <span><span className="legend-dot soon-dot"></span>Coming soon</span>
              <span><span className="legend-dot planned-dot"></span>Planned</span>
            </div>
          </div>

          <div className="community-grid">
            {communities
              .slice()
              .sort((a, b) => statusOrder[a.status] - statusOrder[b.status])
              .map((community) => (
                <article className="community-list-card" key={community.name}>
                  <div className="community-card-top">
                    <div>
                      <span className="community-name">{community.name}</span>
                      <span className="community-district">{community.district}</span>
                    </div>
                    <span className={`status-badge status-${community.status.toLowerCase().replace(/\s/g, "-")}`}>
                      <span className="status-dot" aria-hidden="true"></span>
                      {community.status}
                    </span>
                  </div>
                  <p className="community-context">{community.context}</p>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="section community-interest">
        <div className="section-inner interest-inner">
          <div className="interest-copy">
            <span className="section-kicker">Are you nearby?</span>
            <h2 className="section-title">Don’t see your community?</h2>
            <p>
              Tell us where you live or work and we can help you check whether your area is ready for a new mini-grid connection.
            </p>
          </div>
          <div className="interest-actions">
            <a className="primary-button" href="/request-connection">Request a Connection</a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>Ready to get connected?</h2>
          <a className="primary-button" href="/request-connection">Request a Connection</a>
        </div>
      </section>
    </div>
  );
}
