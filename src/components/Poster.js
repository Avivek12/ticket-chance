import React, { useState, useEffect } from "react";
import "../style.css";

// FontAwesome
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
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

const giftCategories = {
  "Agriculture Tools": [
    {
      name: "Hand Tractor (Power Tiller)",
      price: "₹25,000",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757331591/two-wheel-hand-tractor00035532161_ttweo1.jpg",
      desc: "Compact tiller machine for small farmers to plough land efficiently.",
    },
    {
      name: "Sprayer Pump",
      price: "₹4,500",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757332756/Double_Motor_Agriculture_Sprayer_Pump_20L_Tank_Battery_Operated_Backpack_Sprayer_with_12V_12Ah_Battery_for_Automatic_Use_-_Singhal_Mart-5236529_i3gao7.jpg",
      desc: "Durable sprayer for fertilizers & pesticides.",
    },
    {
      name: "Drip Irrigation Kit",
      price: "₹12,000",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757332871/110400_16_cuhkmh.jpg",
      desc: "Water-saving drip irrigation kit suitable for 1 acre.",
    },
    {
      name: "Solar Water Pump",
      price: "₹35,000",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757332929/Solar-modules-water-flowing_h63bfa.jpg",
      desc: "Eco-friendly solar-powered water pump for sustainable farming.",
    },
  ],

  "Farming Benefits": [
    {
      name: "Free Organic Fertilizer Pack",
      price: "₹2,000",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757333002/814s-lOWdfL_dkfgry.jpg",
      desc: "Eco-friendly organic fertilizer to boost soil fertility.",
    },
    {
      name: "Free Soil Testing Service",
      price: "₹3,500",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757333253/61981be2-ed74-4d1f-b805-a97a932f5f72.__CR0_0_970_600_PT0_SX970_V1____w97cgr.jpg",
      desc: "Certified lab testing for soil health & crop recommendations.",
    },
    {
      name: "Farmer Training Workshop",
      price: "₹5,000 (value)",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757333389/061609_9033_xov13n.jpg",
      desc: "Hands-on training for modern farming techniques & organic methods.",
    },
  ],

  "Agri Essentials": [
    {
      name: "Free Seeds Starter Pack",
      price: "₹3,000",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757337890/91yVUG7AGLL._UF894_1000_QL80__us5fct.jpg",
      desc: "High-quality vegetable & grain seeds to kickstart cultivation.",
    },
    {
      name: "Irrigation Support Kit",
      price: "₹6,500",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757333491/71b5OLNrmML._UF1000_1000_QL80__iq6v8t.jpg",
      desc: "Drip irrigation starter kit with pipes, fittings & connectors.",
    },
    {
      name: "Organic Fertilizer Pack",
      price: "₹2,000",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757333642/9f1f4938963fa5f9ab4d57353afe2586-8fef7522706e643d60f59cd6e4f9810f16535460516637.jpg_ylaukr.jpg",
      desc: "Eco-friendly manure & compost to improve soil fertility.",
    },
    {
      name: "Solar Lantern",
      price: "₹4,200",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757333709/Mainstays-Black-Plastic-Solar-Powered-LED-Outdoor-Hanging-Lantern-Flickering-Flame_7b3e3248-36f4-4c88-a48e-42b3e957da5a.74eee07ee11f5d910de0dea4e0d5ef84_bypewp.jpg",
      desc: "Portable solar-powered lantern for farms & rural households.",
    },
    {
      name: "Soil Testing Kit",
      price: "₹3,500",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757333748/N883gehHkyqCIH5H7jeoT2zk4cYDIXj3ZBGFIngACuHtLV7R7LkelVbhgUATD3Z1__47708.1712267676_uo6v4u.jpg",
      desc: "Quick soil health test kit to know nutrients before sowing.",
    },
    {
      name: "Rainwater Harvest Drum",
      price: "₹5,000",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757337143/71HqH1g8eUL_kocyxw.jpg",
      desc: "Storage drum to collect & reuse rainwater for crops.",
    },
    {
      name: "Protective Farm Gear",
      price: "₹1,800",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757337173/61QqxmEQsZL._UF894_1000_QL80__b7mzbi.jpg",
      desc: "Gloves, boots, masks & apron for safe pesticide handling.",
    },
    {
      name: "Agri Tool Combo",
      price: "₹7,800",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757337255/H5ad2b148afcc4640a94d0f59d816bedfy_avgtf8.jpg",
      desc: "Set of sickle, spade, hoe & sprayer for everyday farming.",
    },
    {
      name: "Livestock Care Kit",
      price: "₹4,000",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757337488/inspire-pv-opt1_hslbjw.jpg",
      desc: "Basic veterinary kit for cattle & goats with supplements.",
    },
    {
      name: "Weather Alert Subscription",
      price: "₹2,500",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757337531/image_26400f_seds18.jpg",
      desc: "SMS & app alerts for rain, drought & crop advisories.",
    },
  ],

  "Additional Benefits": [
    {
      name: "Education Kit for Children",
      price: "₹3,000",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757337593/140-Pcs-Set-Building-Blocks-Construction-Toy-Learning-Set-STEM-Toy-Set-Education-Kit-Building-Children-s-Toys-Different-Colored-Toy-Building-Sets-Dev_eda4b037-be07-455b-a5b7-dfc4fdaf13ba.d930b6be19f8d90e80ef3c2be25c5b6e_ynddy4.jpg",
      desc: "Books & digital resources to support children’s education.",
    },
    {
      name: "Healthcare Vouchers",
      price: "₹2,500",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757337677/pngtree-cartoon-minimalist-fashion-health-care-voucher-design-template-care-productshealth-care-image_191569_fkx5eb.jpg",
      desc: "Discount vouchers for local hospitals & clinics.",
    },
    {
      name: "Skill Development Course",
      price: "₹7,500",
      img: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757337740/71HxQV1YnBL._UF1000_1000_QL80__w3xawb.jpg",
      desc: "Free enrollment in digital literacy & entrepreneurship training.",
    },
  ],
};

export default function Poster() {
  const [shakeCard, setShakeCard] = useState(null);
  const [pulseTicket, setPulseTicket] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Agriculture Tools");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757331078/land-plot-in-aerial-view-in-chiang-mai-of-thailand_qhgngs.jpg",
      alt: "Land site view",
    },
    {
      src: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757338352/original-9cbe7d0e805b1adee6ef3efb70b28ccb_rvvmsi.jpg",
      alt: "Document proof",
    },
    {
      src: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757326571/1_M-b093jQIpmapIIaxH7N7g_y0te1m.jpg",
      alt: "Community event",
    },
    {
      src: "https://res.cloudinary.com/dloojhqqk/image/upload/v1757331142/shutterstock_1785042593_mbs0fd.jpg",
      alt: "Verification",
    },
  ];

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleShake = (id) => {
    setShakeCard(id);
    setTimeout(() => setShakeCard(null), 900);
  };

  const handlePulse = () => {
    setPulseTicket(true);
    setTimeout(() => setPulseTicket(false), 1200);
  };

  return (
    <main className="poster-root">
      {/* Background Elements */}
      <>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={`circle-${i}`} className="circle"></div>
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`sparkle-${i}`} className="sparkle"></div>
        ))}
      </>

      {/* Header */}
      <header className="poster-header">
        <h1 className="poster-title">
          Land Raffle - Win{" "}
          <span style={{ color: "#28a745" }}>14 Guntas</span> of Agricultural
          Land{" "}
          <span style={{ fontSize: "1rem", color: "#ff9800" }}>
            (Govt. Verified & Legally Transferred)
          </span>
        </h1>
        <p className="poster-sub">
          Buy a ticket for <strong>₹699/-</strong> —{" "}
          <span style={{ color: "#007bff", fontWeight: "600" }}>
            Transparent Live Draw
          </span>
          , <span style={{ color: "#28a745" }}>Notarized & Police-Verified</span>
          , and guaranteed prizes for many winners.
          <br />
          <span style={{ fontSize: "0.95rem", color: "#6c757d" }}>
            Oversight by Judicial & Local Authorities — 100% Fair & Legal
          </span>
        </p>
      </header>

      {/* Ticket Section */}
      <section className="ticket-section">
        <div className={`ticket-box ticket-style ${pulseTicket ? "pulse" : ""}`}>
          {/* Decorative Icons */}
          <img
            src="https://res.cloudinary.com/dloojhqqk/image/upload/v1756958655/view-3d-graphic-house3d-house-icon-illustration-3d-rendering-home-ui-icon_1255023-30696_gdrbr5.jpg"
            alt="house"
            className="bg-icon house"
          />
          <img
            src="https://res.cloudinary.com/dloojhqqk/image/upload/v1756964107/42943-20_2_hmzi3i.jpg"
            alt="gift"
            className="bg-icon gift"
          />
          <img
            src="https://res.cloudinary.com/dloojhqqk/image/upload/v1756961323/person-holding-a-winning-lottery-ticket_eyfn34.jpg"
            alt="ticket"
            className="bg-icon ticket"
          />

          {/* Floating Icons */}
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
            <h2 className="ticket-price">₹699 / Ticket</h2>
            <p className="ticket-note">
              One verified ticket = one <strong>legal chance</strong> to win the
              land.
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
              onClick={() => {
                handlePulse();
                alert("Payment integration coming soon!");
              }}
            >
              🚀 Buy Ticket Now
            </button>
            <button
              className="btn-info"
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              <FontAwesomeIcon icon={faScroll} /> Terms & Docs
            </button>
          </div>
        </div>
      </section>

      {/* Prize Cards */}
      <section className="cards-row">
        {/* 1st Winner */}
        <article
          className={`prize-card first ${shakeCard === 1 ? "shake" : ""}`}
          onMouseEnter={() => handleShake(1)}
          onClick={() => handleShake(1)}
        >
          <div className="badge">1st</div>
          <h3>
            1st Winner{" "}
            <span style={{ fontSize: "0.85rem", color: "#4428a7ff" }}>
              (Grand Jackpot)
            </span>
          </h3>
          <p className="muted">
            Wins the full <strong>14 guntas</strong> agricultural land
            <br />
            <span style={{ color: "#007bff", fontWeight: "600" }}>
              Registered in winner’s name legally within 30 days
            </span>
            <br />
            <span style={{ color: "#6c757d" }}>
              Includes RTC, Title Deed & Govt. Notary proof
            </span>
          </p>
          <div className="card-cta">
            Land Ownership{" "}
            <span style={{ fontSize: "0.85rem", color: "#ff9800" }}>
              (100% Transfer Guaranteed)
            </span>
          </div>
        </article>

        {/* 2nd – 49th */}
        <article
          className={`prize-card second ${shakeCard === 2 ? "shake" : ""}`}
          onMouseEnter={() => handleShake(2)}
          onClick={() => handleShake(2)}
        >
          <div className="badge">2-49</div>
          <h3>
            2nd – 49th Winners{" "}
            <span style={{ fontSize: "0.85rem", color: "#17a2b8" }}>
              (Assured Rewards)
            </span>
          </h3>
          <p className="muted">
            Reward gifts & vouchers worth <strong>₹2k – ₹5k</strong>
            <br />
            <span style={{ color: "#28a745", fontWeight: "600" }}>
              Directly redeemable at partnered stores
            </span>
            <br />
            <span style={{ color: "#6c757d" }}>
              <FontAwesomeIcon icon={faCheckCircle} /> Verified by official
              vendors
            </span>
          </p>
          <div className="card-cta">
            Reward Prizes{" "}
            <span style={{ fontSize: "0.85rem", color: "#ff9800" }}>
              (Guaranteed Delivery)
            </span>
          </div>
        </article>

        {/* 50th – 79th */}
        <article
          className={`prize-card third ${shakeCard === 3 ? "shake" : ""}`}
          onMouseEnter={() => handleShake(3)}
          onClick={() => handleShake(3)}
        >
          <div className="badge">50–79</div>
          <h3>
            50th – 79th Winners{" "}
            <span style={{ fontSize: "0.85rem", color: "#9c27b0" }}>
              (Community Support)
            </span>
          </h3>
          <p className="muted">
            Consolation prizes:{" "}
            <strong>
              Agricultural tools / Education kits / Small business aid
            </strong>
            <br />
            <span style={{ color: "#007bff", fontWeight: "600" }}>
              <FontAwesomeIcon icon={faLandmark} /> Delivered via distributors
            </span>
            <br />
            <span style={{ color: "#6c757d" }}>
              Focused on empowering farmers & students
            </span>
          </p>
          <div className="card-cta">
            Support Packages{" "}
            <span style={{ fontSize: "0.85rem", color: "#4caf50" }}>
              (Value-Driven Aid)
            </span>
          </div>
        </article>

        {/* 80th – 100th */}
        <article
          className={`prize-card fourth ${shakeCard === 4 ? "shake" : ""}`}
          onMouseEnter={() => handleShake(4)}
          onClick={() => handleShake(4)}
        >
          <div className="badge">80–100</div>
          <h3>
            80th – 100th Winners{" "}
            <span style={{ fontSize: "0.85rem", color: "#ff5722" }}>
              (Special Appreciation)
            </span>
          </h3>
          <p className="muted">
            Appreciation rewards including{" "}
            <strong>discount coupons for next lottery draw</strong> 🎟️
            <br />
            <span style={{ color: "#3f51b5", fontWeight: "600" }}>
              <FontAwesomeIcon icon={faGift} /> Early-bird access to events
            </span>
            <br />
            <span style={{ color: "#6c757d" }}>
              Plus digital kits: guides, resources & knowledge packs
            </span>
          </p>
          <div className="card-cta">
            Appreciation Rewards{" "}
            <span style={{ fontSize: "0.85rem", color: "#009688" }}>
              (Everyone Wins Something)
            </span>
          </div>
        </article>
      </section>

      {/* Gifts Section */}
      <section
        className="gifts-section"
        style={{ padding: "2rem", background: "#f9f9f9" }}
      >
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Exclusive Gifts
        </h2>

        {/* Tabs */}
        <div className="gift-tabs" style={{ textAlign: "center", marginBottom: "2rem" }}>
          {Object.keys(giftCategories).map((cat) => (
            <button
              key={cat}
              className={`gift-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.5rem 1rem",
                margin: "0 0.5rem",
                borderRadius: "5px",
                border: activeCategory === cat ? "2px solid #4CAF50" : "1px solid #ccc",
                background: activeCategory === cat ? "#e8f5e9" : "#fff",
                cursor: "pointer",
                fontWeight: activeCategory === cat ? "bold" : "normal"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gifts Grid */}
        <div className="gift-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {giftCategories[activeCategory].map((gift, idx) => (
            <div
              key={idx}
              className="gift-card"
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                textAlign: "center"
              }}
            >
              <img
                                src={gift.img || "https://via.placeholder.com/150?text=No+Image"}
                alt={gift.name}
                className="gift-img"
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px", marginBottom: "1rem" }}
              />
              <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0" }}>{gift.name}</h3>
              <p style={{ color: "#4CAF50", fontWeight: "bold", margin: "0.25rem 0" }}>{gift.price}</p>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Images Section */}
      <section className="images-section" style={{ padding: "2rem", background: "#f9f9f9" }}>
        <h2 className="images-title" style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          Event & Proof Images
        </h2>
        <p className="images-sub" style={{ textAlign: "center", marginBottom: "1.5rem", color: "#555" }}>
          Real site photos, community events & verification snapshots
        </p>

        <div className="carousel-container" style={{ position: "relative", maxWidth: "700px", margin: "auto", overflow: "hidden", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
          <div
            className="carousel-slide"
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                style={{ width: "100%", flexShrink: 0, height: "400px", objectFit: "cover" }}
              />
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <button
            onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
            style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", color: "#fff", border: "none", padding: "0.5rem 1rem", borderRadius: "5px", cursor: "pointer", fontSize: "1.5rem" }}
          >
            &#10094;
          </button>
          <button
            onClick={() => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
            style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", color: "#fff", border: "none", padding: "0.5rem 1rem", borderRadius: "5px", cursor: "pointer", fontSize: "1.5rem" }}
          >
            &#10095;
          </button>

          {/* Dots */}
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            {images.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  margin: "0 5px",
                  background: currentIndex === i ? "#4CAF50" : "#ccc",
                  borderRadius: "50%",
                  cursor: "pointer"
                }}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Legal Section */}
      <section className="info-section" style={{ padding: "2rem", background: "#fff" }}>
        <h2 className="info-title">Contact & Legal Proof</h2>
        <p className="info-sub">Verified by authorities, notarized, and 100% transparent process</p>

        <div className="info-cards" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
          {/* Contact Card */}
          <div className="info-card contact" style={{ flex: "1", minWidth: "280px", padding: "1rem", borderRadius: "10px", background: "#f9f9f9", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <div className="info-icon"><FontAwesomeIcon icon={faUser} /></div>
            <h3>Contact & Verification</h3>
            <ul className="contact-list">
              <li><strong>Full Name:</strong> Ananthula Vivek Kumar</li>
              <li><strong>Phone:</strong> <a href="tel:+919618021890"><FontAwesomeIcon icon={faPhone} /> +91-9618021890</a></li>
              <li><strong>Email:</strong> <a href="mailto:ananthulavivekkumar961@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> ananthulavivekkumar961@gmail.com</a></li>
              <li><strong>Locality:</strong> Temburni, Near Gundampally</li>
              <li><strong>Mandal:</strong> Narsapur-(G)</li>
              <li><strong>District:</strong> Nirmal</li>
              <li><strong>State:</strong> Telangana</li>
              <li><strong>Country:</strong> India</li>
            </ul>
            <p className="muted small">All participants must provide verified KYC documents before land transfer.</p>
          </div>

          {/* Proof Card */}
          <div className="info-card legal" style={{ flex: "1", minWidth: "280px", padding: "1rem", borderRadius: "10px", background: "#f9f9f9", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
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
  <span className="footer-text">
    Transparent draw • Live on YouTube • Notarized transfer • Legal counsel available
  </span>

  <div className="footer-floating-icons">
    {[...Array(8)].map((_, i) => (
      <span key={i} className="floating-dot" style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${5 + Math.random() * 5}s`
      }}></span>
    ))}
  </div>
</footer>

    </main>
  );
}
