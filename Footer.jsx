function Footer() {
  return (
    <footer id="contact" className="rp-footer">
      <div className="rp-footer-top">
        <div className="rp-footer-brand">
          <img src="assets/logo-white.png" alt="Radio Patrol" />
          <p>A volunteer civilian patrol serving the Rosedale Park neighborhood of Detroit, sanctioned by the Detroit Police Department under the Citizens Radio Patrol Program.</p>
        </div>
        <div className="rp-footer-cols">
          <div>
            <h5>Contact</h5>
            <ul>
              <li><b>Emergency</b> · 911</li>
              <li><a href="mailto:RPRadioPatrol@gmail.com">RPRadioPatrol@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <h5>Neighbors</h5>
            <ul>
              <li><a href="#">Rosedale Park Improvement Assn.</a></li>
              <li><a href="#">North Rosedale Park Civic Assn.</a></li>
              <li><a href="#">Grandmont-Rosedale CDC</a></li>
              <li><a href="#">DPD 8th Precinct</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rp-footer-bottom">
        <span>© 2026 Rosedale Park Radio Patrol</span>
        <span className="rp-callsign">RP-BASE · 10-4</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
