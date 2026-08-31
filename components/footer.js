class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #034490;
          font-family: Arial, sans-serif;
          color: white;
          padding: 2rem;
          text-align: center;
          margin-top: auto;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: left;
        }

        .footer-section h3 {
          font-weight: 600;
          margin-bottom: 1rem;
          color: #93c5fd;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-section li {
          margin-bottom: 0.5rem;
        }

        .footer-section a {
          color: #e5e7eb;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-section a:hover {
          color: #3b82f6;
        }

        /* Copyright bar */
        .copyright {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #d3dbe3;
          color: #d3dbe3;
          font-size: 0.875rem;
        }

        /* Disclaimer bar */
        .disclaimer {
          max-width: 1200px;
          margin: 1.5rem auto 0;
          padding-top: 1rem;
          border-top: 1px solid #d3dbe3;
        }

        .disclaimer-box {
          border: 1px solid rgba(211, 219, 227, 0.5);
          padding: 1rem 1.25rem;
          color: #d3dbe3;
          font-size: 0.8rem;
          line-height: 1.6;
          text-align: center;
        }

        .disclaimer-box strong {
          color: white;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .disclaimer-box {
            font-size: 0.78rem;
            padding: 1rem;
          }
        }
      </style>

      <footer>

        <div class="footer-content">

          <div class="footer-section">
            <h3>Legislation</h3>
            <ul>
              <li><a href="recent.html">Recent Laws</a></li>
              <li><a href="archive.html">Legislative Archive</a></li>
              <li><a href="">Constitution</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Government</h3>
            <ul>
              <li><a href="#">Executive Branch</a></li>
              <li><a href="#">Legislative Branch</a></li>
              <li><a href="#">Judicial Branch</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">How Laws Are Made</a></li>
              <li><a href="#">Legislative Calendar</a></li>
              <li><a href="#">Contact Officials</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="/about.html">About SquareDocs</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <!-- Copyright Bar -->
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Office of Legislative Counsel | Square Country Government. All rights reserved.
        </div>

        <!-- Disclaimer Bar -->
        <div class="disclaimer">
          <div class="disclaimer-box">
            <strong>Disclaimer:</strong>
            This website is a fictional representation of the Government of Square Country.
            Square Country is a fictional country and this website, its departments, agencies,
            legislation, services, and other content are created for fictional and entertainment
            purposes only. It does not represent a real government, country, institution, or organisation.
          </div>
        </div>

      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
