class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

body {
  margin: 0;
  font-family: Times;
  overflow-y: auto;   /* 👈 SINGLE SCROLL CONTAINER */
}

/* NAVBAR */
.leg-nav {
    font-family: "Inter", "Segoe UI", Arial, sans-serif;
    background: #034490;
    border-bottom: 1px solid #c7d1dc;
    padding: 22px 40px;

    position: sticky;
    top: 0;
    z-index: 1000;

    transition: transform 0.2s ease;
}

body.nav-hidden .leg-nav {
  transform: translateY(-100%);
}

.nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 18px;
}

.brand-logo {
    height: 70px;
    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
}

.brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1.25;
}

.brand-text .maori {
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
}

.brand-text .english {
    font-size: 15px;
    color: #d2d2d2;
}

/* LINKS */
.nav-links {
    list-style: none;
    display: flex;
    gap: 42px;
    margin: 0;
    padding: 0;
}

.nav-links a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
    font-size: 15px;
}

.nav-links a span {
    display: block;
    font-size: 12px;
    color: #d2d2d2;
}

/* SEARCH */
.nav-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #d3dbe3;
    padding-top: 18px;
}

.search-controls {
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
}

.nav-search select,
.nav-search input {
    padding: 10px 12px;
    border: 1px solid #b7c2ce;
    border-radius: 6px;
    font-size: 14px;
}

.nav-search input {
    flex: 1;
}

.search-btn {
    background: #126cd3;
    color: white;
    border: none;
    padding: 10px 22px;
    border-radius: 6px;
    font-weight: 600;
}

.advanced-search {
    margin-left: 26px;
    font-size: 14px;
    color: #ffffff;
    text-decoration: none;
}

#layout {
  display: flex;
  margin-top: 50px;
  padding-left: 50px;
  align-items: flex-start; /* IMPORTANT */
}
      </style>

          <nav class="leg-nav">
    <div class="nav-header">
        <div class="brand">
            <div class="brand-text">
                <span class="maori">Square Country Legislation</span>
                <span class="english">Legislación del país cuadrado</span>
            </div>
        </div>

        <ul class="nav-links">
            <li><a href="index.html">Home <span>Hogar</span></a></li>
            <li><a href="#">Browse agencies<span>Buscar agencias</span></a></li>
            <li><a href="#">Learn more<span>Más información</span></a></li>
        </ul>
    </div>

    <div class="nav-search">
        <div class="search-controls">
            <select>
                <option>In force</option>
                <option>Bills</option>
                <option>Not in force</option>
            </select>

            <select>
                <option>Title contains</option>
                <option>Content contains</option>
            </select>

            <input type="text" placeholder="Search in-force Acts and secondary legislation…">
            <button class="search-btn">Search</button>
        </div>

        <a href="#" class="advanced-search">Advanced search</a>
    </div>
</nav>
    `;

    const toggle = this.shadowRoot.querySelector('.menu-toggle');
    const menu = this.shadowRoot.querySelector('ul');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });

    // Render feather icons inside shadow DOM
    if (window.feather) {
      feather.replace({ root: this.shadowRoot });
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);
