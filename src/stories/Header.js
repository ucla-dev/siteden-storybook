import { createButton } from './Button';
import './header.css';

export const createHeader = ({ user, onLogout, onLogin, onCreateAccount }) => {
  // Create the header.
  const header = document.createElement('header');
  header.className = 'ucla-header ucla-header--college';

  // Create the logo container.
  const logoContainer = document.createElement('div');
  logoContainer.className = 'ucla-header__logo-container';

  // Create the header container.
  const headerContainer = document.createElement('div');
  headerContainer.className = 'ucla-header__container';
  headerContainer.id = 'header-wrap';

  // Create the main menu.
  const mainMenu = document.createElement('nav');
  mainMenu.className = 'ucla-main-nav';
  mainMenu.id = 'nav-main';
  mainMenu.ariaLabel = 'Main Menu';

  // Create secondary menu.
  const secondaryMenu = document.createElement('nav');
  secondaryMenu.className = 'ucla-secondary-nav';
  secondaryMenu.id = 'nav-second';
  secondaryMenu.ariaLabel = 'Secondary Menu';

  // Create mobile menu button.
  const mobileNavButton = document.createElement('button');
  mobileNavButton.className = 'hamburger';
  mobileNavButton.type = 'button';
  mobileNavButton.id = 'primary-ham';
  mobileNavButton.ariaControls = 'nav-main';
  mobileNavButton.ariaExpanded = 'false';
  mobileNavButton.alt = 'navigation and search';

  const logo = `
  <div class="ucla-header__logo">
    <a href="https://www.ucla.edu/">
      <img
        class="ucla-header__logo-image"
        src="https://www.ucla.edu/img/logo-ucla.svg"
        alt="UCLA"
      />
    </a>
  </div>
  `;

  const siteName = `
  <div class="ucla-header__site-name">
    <a href="#" title="Department Name" rel="home">Department Name</a>
  </div>
  `;

  const secondaryMenuItems = `
  <ul class="ucla-secondary-nav__list">
    <li class="ucla-secondary-nav__item">
      <a class="ucla-secondary-nav__link" href="#">Nav Item</a>
    </li>
    <li class="ucla-secondary-nav__item">
      <a class="ucla-secondary-nav__link" href="#">Nav Item</a>
    </li>
    <li class="ucla-secondary-nav__item">
      <a class="ucla-secondary-nav__link ucla-secondary-nav__link--active" href="#">Nav Item</a>
    </li>
  </ul>
  `;

  const primaryMenuItems = `
  <ul>
    <li>
      <a href="#">Parent Item</a> Arrow Down
      <ul>
        <li>
          <a href="#">Nav Item</a>
        </li>
        <li>
          <a href="#">Nav Item</a>
        </li>
        <li>
          <a href="#">Nav Item</a>
        </li>
        <li>
          <a href="#">Nav Item</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Nav Item</a>
    </li>
    <li>
      <a href="#">Parent Item</a> Arrow Down
      <ul>
        <li>
          <a href="#">Nav Item</a>
        </li>
        <li>
          <a href="#">Nav Item</a> Arrow Down
          <ul>
            <li>
              <a href="#">Nav Item</a>
            </li>
            <li>
              <a href="#">Nav Item</a> Arrow Down
              <ul>
                <li>
                  <a href="#">Nav Item</a>
                </li>
                <li>
                  <a href="#">Nav Item</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Parent Item</a> Arrow Down
      <ul>
        <li>
          <a href="#">Nav Item</a>
        </li>
        <li>
          <a href="#">Nav Item</a>
        </li>
        <li>
          <a href="#">Nav Item</a>
        </li>
        <li>
          <a href="#">Nav Item</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Parent Item</a> Arrow Down
      <ul>
        <li>
          <a href="#">Nav Item</a>
        </li>
        <li>
          <a href="#">Nav Item</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Parent Item</a> Arrow Down
      <ul>
        <li>
          <a href="#">Nav Item</a>
        </li>
        <li>
          <a href="#">Nav Item</a>
        </li>
      </ul>
    </li>
  </ul>
  `;

  const hamburger = `
  <span class="hamburger__box">
    <span class="hamburger__inner"></span>
  </span>
  `;

  // Add the containers to the header.
  header.appendChild(logoContainer);
  header.appendChild(headerContainer);

  // Add the logo to it's container.
  logoContainer.insertAdjacentHTML('afterbegin', logo);


  // Add site name to header container.
  headerContainer.insertAdjacentHTML('afterbegin', siteName);

  // Add the secondary menu to the header container.

  return header;
};
