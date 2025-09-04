import React, { useState } from "react";
import "../style.css";

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCheckCircle, 
  faCertificate, 
  faScroll, 
  faHome, 
  faGift, 
  faTrophy,
  faLandmark, 
  faUser,       
  faPhone,    
  faEnvelope, 
  faGavel       
} from "@fortawesome/free-solid-svg-icons";



export default function Poster() {
  const [shakeCard, setShakeCard] = useState(null); 
  const [pulseTicket, setPulseTicket] = useState(false);

  function handleShake(id) {
    setShakeCard(id);
    setTimeout(() => setShakeCard(null), 900);
  }

  function handlePulse() {
    setPulseTicket(true);
    setTimeout(() => setPulseTicket(false), 1200);
  }

  return (
    <main className="poster-root">
      {/* Background Elements */}
      <>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>

        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>

        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>

        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </>

      {/* Header */}
      <header className="poster-header">
        <h1 className="poster-title">
          Land Raffle - Win <span style={{ color: "#28a745" }}>14 Guntas</span> of Agricultural
          Land <span style={{ fontSize: "1rem", color: "#ff9800" }}>
            (Govt. Verified & Legally Transferred)
          </span>
        </h1>
        <p className="poster-sub">
          Buy a ticket for <strong>₹999/-</strong> — <span style={{ color: "#007bff", fontWeight: "600" }}>
            Transparent Live Draw
          </span>, <span style={{ color: "#28a745" }}>
            Notarized & Police-Verified Transfer
          </span>, and guaranteed prizes for many winners.
          <br />
          <span style={{ fontSize: "0.95rem", color: "#6c757d" }}>
            Oversight by Judicial & Local Authorities — 100% Fair & Legal
          </span>
        </p>
      </header>

      {/* Ticket Section */}
      <section className="ticket-section">
      <div className={`ticket-box ticket-style ${pulseTicket ? "pulse" : ""}`}>
        
        {/* Decorative Background Icons */}
        <img src="https://res.cloudinary.com/dloojhqqk/image/upload/v1756958655/view-3d-graphic-house3d-house-icon-illustration-3d-rendering-home-ui-icon_1255023-30696_gdrbr5.jpg" alt="house" className="bg-icon house" />
        <img src="https://res.cloudinary.com/dloojhqqk/image/upload/v1756964107/42943-20_2_hmzi3i.jpg" alt="gift" className="bg-icon gift" />
        <img src="https://res.cloudinary.com/dloojhqqk/image/upload/v1756961323/person-holding-a-winning-lottery-ticket_eyfn34.jpg" alt="ticket" className="bg-icon ticket" />

        {/* Floating Icons */}
        {/* Floating Icons in 4 corners */}
<span className="floating-icon top-left">
  <FontAwesomeIcon icon={faHome} />
</span>
<span className="floating-icon top-right">
  <FontAwesomeIcon icon={faGift} />
</span>
<span className="floating-icon bottom-left">
  <FontAwesomeIcon icon={faTrophy} />
</span>
<span className="floating-icon bottom-right">
  <FontAwesomeIcon icon={faScroll} />
</span>


        <div className="ticket-left">
          <h2 className="ticket-price">₹999 / Ticket</h2>
          <p className="ticket-note">
            One verified ticket = one <strong>legal chance</strong> to win the land.
            <span className="ticket-trust">
              <FontAwesomeIcon icon={faCheckCircle} /> Govt. approved |{" "}
              <FontAwesomeIcon icon={faCertificate} /> Notary certified |{" "}
              <FontAwesomeIcon icon={faScroll} /> Live draw
            </span>
          </p>

          <div className="ticket-stats">
            <div>
              <strong>Tickets</strong>
              <br />🎟️ 2500 planned
            </div>
            <div>
              <strong>Status</strong>
              <br />⏳ Opening Soon
            </div>
            <div>
              <strong>Availability</strong>
              <br />🔔 Updates soon
            </div>
          </div>
        </div>

        <div className="ticket-right">
          <button
            className="btn-buy"
            onClick={() => { handlePulse(); alert("Payment integration coming soon!"); }}
          >
            🚀 Buy Ticket Now
          </button>
          <button
            className="btn-info"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
          >
            <FontAwesomeIcon icon={faScroll} /> Terms & Docs
          </button>
        </div>
      </div>
    </section>

      {/* Prize Cards Row */}
      <section className="cards-row">
        <article className={`prize-card first ${shakeCard === 1 ? "shake" : ""}`} onMouseEnter={() => handleShake(1)} onClick={() => handleShake(1)}>
          <div className="badge">1st</div>
          <h3>1st Winner <span style={{ fontSize: "0.85rem", color: "#4428a7ff" }}>(Grand Jackpot)</span></h3>
          <p className="muted">
            Wins the full <strong>14 guntas</strong> agricultural land
            <br />
            <span style={{ color: "#007bff", fontWeight: "600" }}>Registered in winner’s name legally within 30 days</span>
            <br />
            <span style={{ color: "#6c757d" }}>Includes RTC, Title Deed & Govt. Notary proof</span>
          </p>
          <div className="card-cta">
            Land Ownership <span style={{ fontSize: "0.85rem", color: "#ff9800" }}>(100% Transfer Guaranteed)</span>
          </div>
        </article>

        <article className={`prize-card second ${shakeCard === 2 ? "shake" : ""}`} onMouseEnter={() => handleShake(2)} onClick={() => handleShake(2)}>
          <div className="badge">2-49</div>
          <h3>2nd – 49th Winners <span style={{ fontSize: "0.85rem", color: "#17a2b8" }}>(Assured Rewards)</span></h3>
          <p className="muted">
            Reward gifts & vouchers worth <strong>₹2k – ₹5k</strong>
            <br />
            <span style={{ color: "#28a745", fontWeight: "600" }}>Directly redeemable at partnered stores</span>
            <br />
            <span style={{ color: "#6c757d" }}><FontAwesomeIcon icon={faCheckCircle} /> Verified by official vendors with unique tracking codes</span>
          </p>
          <div className="card-cta">
            Reward Prizes <span style={{ fontSize: "0.85rem", color: "#ff9800" }}>(Guaranteed Delivery)</span>
          </div>
        </article>

        <article className={`prize-card third ${shakeCard === 3 ? "shake" : ""}`} onMouseEnter={() => handleShake(3)} onClick={() => handleShake(3)}>
          <div className="badge">50–79</div>
          <h3>50th – 79th Winners <span style={{ fontSize: "0.85rem", color: "#9c27b0" }}>(Community Support)</span></h3>
          <p className="muted">
            Consolation prizes: <strong>Agricultural tools / Education kits / Small business aid</strong>
            <br />
            <span style={{ color: "#007bff", fontWeight: "600" }}><FontAwesomeIcon icon={faLandmark} /> Delivered through verified distributors</span>
            <br />
            <span style={{ color: "#6c757d" }}>Focused on empowering farmers & students</span>
          </p>
          <div className="card-cta">
            Support Packages <span style={{ fontSize: "0.85rem", color: "#4caf50" }}>(Value-Driven Aid)</span>
          </div>
        </article>
<article 
  className={`prize-card fourth ${shakeCard === 4 ? "shake" : ""}`} 
  onMouseEnter={() => handleShake(4)} 
  onClick={() => handleShake(4)}
>
  <div className="badge">80–100</div>
  <h3>80th – 100th Winners <span style={{ fontSize: "0.85rem", color: "#ff5722" }}>(Special Appreciation)</span></h3>
  <p className="muted">
    Appreciation rewards including <strong>discount coupons for next lottery draw</strong> 🎟️ 
    <br />
    <span style={{ color: "#3f51b5", fontWeight: "600" }}>
      <FontAwesomeIcon icon={faGift} /> Exclusive early-bird access to upcoming community events
    </span>
    <br />
    <span style={{ color: "#6c757d" }}>
      Plus digital kits: <em>guides, resources & knowledge packs</em> to support personal growth
    </span>
  </p>
  <div className="card-cta">
    Appreciation Rewards <span style={{ fontSize: "0.85rem", color: "#009688" }}>(Everyone Wins Something)</span>
  </div>
</article>


      </section>

      {/* Contact & Proof Section */}
      <section className="info-section">
        <h2 className="info-title">Contact & Legal Proof</h2>
        <p className="info-sub">Verified by authorities, notarized, and 100% transparent process</p>

        <div className="info-cards">
          {/* Contact Card */}
          <div className="info-card contact">
            <div className="info-icon"><FontAwesomeIcon icon={faUser} /></div>
            <h3>Contact & Verification</h3>
            <ul className="contact-list">
              <li><strong>Full Name:</strong> Ananthula Vivek Kumar</li>
              <li><strong>Phone:</strong> <a href="tel:+919618021890" className="contact-link"><FontAwesomeIcon icon={faPhone} /> +91-9618021890</a></li>
              <li><strong>Email:</strong> <a href="mailto:ananthulavivekkumar961@gmail.com" className="contact-link"><FontAwesomeIcon icon={faEnvelope} /> ananthulavivekkumar961@gmail.com</a></li>
              <li><strong>Locality:</strong> Temburni, Near Gundampally</li>
              <li><strong>Mandal:</strong> Narsapur-(G)</li>
              <li><strong>District:</strong> Nirmal</li>
              <li><strong>State:</strong> Telangana</li>
              <li><strong>Country:</strong> India</li>
            </ul>
            <p className="muted small">All participants must provide verified KYC documents before land transfer.</p>
          </div>

          {/* Proof Card */}
          <div className="info-card legal">
            <div className="info-icon"><FontAwesomeIcon icon={faGavel} /></div>
            <h3>Proof & Legal Verification</h3>
            <ul className="legal-list">
              <li><strong>RTC / Title Deed:</strong> Authenticated scanned land documents.</li>
              <li><strong>Transparency:</strong> Verified field photos & video walkthrough.</li>
              <li><strong>Notarization:</strong> Certified by Govt-licensed Notary.</li>
              <li><strong>Police NOC:</strong> Official No-Objection Certificate.</li>
              <li><strong>Judicial Consent:</strong> Endorsed by Judicial Authority.</li>
              <li><strong>Authority Approval:</strong> Panchayat / District Office validation.</li>
              <li><strong>Public Draw:</strong> Live-streamed on YouTube for fairness.</li>
            </ul>
            <p className="muted small">Buyers may inspect all documents. Certified proofs ensure legality, fairness, and full transparency.</p>
          </div>
        </div>
      </section>

      <footer className="poster-footer">
        <div className="trust">
          <strong>Transparent draw • Live on YouTube • Notarized transfer • Legal counsel available</strong>
        </div>
      </footer>
    </main>
  );
}
