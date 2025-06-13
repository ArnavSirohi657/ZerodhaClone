export default function Ticket() {
  return (
    <div className="container mt-5">
      {/* Heading (don't restrict width too much) */}
      <h1 className="text-muted mb-4 fs-4">
        To create a ticket, select a relevant topic
      </h1>
      <br /> <br />
      {/* 3 columns in one line */}
      <div className="row">
        <div className="col">
          <h5>Account Opening</h5>
          <a href="#" className="d-block mb-2 mt-4" style={{ textDecoration: "none", fontSize: "14px" }}>Resident individual</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Minor</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Non Resident Indian (NRI)</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Company, Partnership, HUF and LLP</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Glossary</a>
          <br/> <br/>  <br/> 
          <h5>Funds</h5>
          <a href="#" className="d-block mb-2 mt-4" style={{ textDecoration: "none", fontSize: "14px" }}>Add money</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Withdraw money</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Add bank account</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>eMandates</a>
         
        </div>
        <div className="col">
          <h5>Your Zerodha Account</h5>
          <a href="#" className="d-block mb-2 mt-4" style={{ textDecoration: "none", fontSize: "14px" }}>Your Profile</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Account modification</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Client Master Report (CMR) and Depository Participant (DP)</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Nomination</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Transfer and conversion of securities</a>
          <br/>  <br/> 
          <h5>Console</h5>
          <a href="#" className="d-block mb-2 mt-4" style={{ textDecoration: "none", fontSize: "14px" }}>Portfolio</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Corporate actions</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Funds statement</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Reports</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>profile</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Segments</a>
        </div>
        <div className="col">
          <h5>Kite</h5>
          <a href="#" className="d-block mb-2 mt-4" style={{ textDecoration: "none", fontSize: "14px" }}>IPO</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Trading FAQs</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Margin Trading Facility (MTF) and Margins</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Charts and orders</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Alerts and Nudges</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>General</a>
          <br/>  <br/>
          <h5>Coin</h5>
          <a href="#" className="d-block mb-2 mt-4" style={{ textDecoration: "none", fontSize: "14px" }}>Understanding mutual funds and coin</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Coin app</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Coin web</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>Transactions and reports</a>
          <a href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "14px" }}>National Pension Scheme(NPS)</a>
        </div>
      </div>
    </div>
  );
}
