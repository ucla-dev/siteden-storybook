export default {
  title: 'Components/Accordion',
  tags: ['autodocs']
};

// Plain headings.
export const accordion = () => `
<div class="accordion">
  <div class="accordion-item is-open">
    <h4 class="accordion__heading">
      <button
        type="button"
        class="accordion__heading-button"
        aria-expanded="true"
      >
        Royce Hall
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 9.41L16.59 8L12 12.58L7.41 8L6 9.41L12 15.41L18 9.41Z"
            fill="#333333"
          />
        </svg>
      </button>
    </h4>
    <div class="accordion__body">
      <div
        class="accordion__content"
        tabindex="0"
      >
        <p>
          Royce Hall is a building on the campus of the University of California,
          Los Angeles. Designed by the Los Angeles firm of Allison &amp; Allison
          and completed in 1929, it is one of the four original buildings on
          UCLA's Westwood campus and has come to be the defining image of the
          university.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h4 class="accordion__heading">
      <button
        type="button"
        class="accordion__heading-button"
        aria-expanded="false"
      >
        Fowler Museum
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 9.41L16.59 8L12 12.58L7.41 8L6 9.41L12 15.41L18 9.41Z"
            fill="#333333"
          />
        </svg>
      </button>
    </h4>
    <div class="accordion__body">
      <div
        class="accordion__content"
        tabindex="0"
      >
        <p>
          The Fowler Museum at UCLA, commonly known as The Fowler, and formerly
          Museum of Cultural History and Fowler Museum of Cultural History, is a
          museum on the campus of the University of California, Los Angeles (UCLA)
          which explores art and material culture primarily from Africa, Asia and
          the Pacific, and the Americas, past and present.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h4 class="accordion__heading">
      <button
        type="button"
        class="accordion__heading-button"
        aria-expanded="false"
      >
        Luskin Conference Center
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 9.41L16.59 8L12 12.58L7.41 8L6 9.41L12 15.41L18 9.41Z"
            fill="#333333"
          />
        </svg>
      </button>
    </h4>
    <div class="accordion__body">
      <div
        class="accordion__content"
        tabindex="0"
      >
        <p>
          The UCLA Meyer and Renee Luskin School of Public Affairs, commonly known
          as the UCLA Luskin School of Public Affairs, is the public
          affairs/public service graduate school at the University of California,
          Los Angeles. The school consists of three graduate departments—Public
          Policy, Social Welfare, and Urban Planning—and an undergraduate program
          in Public Affairs that began accepting students in 2018. In all, the
          school offers three undergraduate minors, the undergraduate major, three
          master's degrees, and two doctoral degrees.
        </p>
      </div>
    </div>
  </div>
</div>`
