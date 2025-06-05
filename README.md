<h1>SiteDen Storybook - HTML Latest (Vite | JavaScript)</h1>

<p>
  This is project combines UCLA Design System and custom front end development for UCLA CMS systems like SiteDen.
</p>

<!-- <a  href="https://stackblitz.com/github/storybookjs/sandboxes/tree/next/html-vite/default-js/after-storybook?preset=node=">
  View it in Stackblitz
</a> -->

<h3>Start the Storybook</h3>

<p>Install dependencies:</p>
<pre>
  yarn
</pre>

<p>Run Storybook:</p>
<pre>
  yarn storybook
</pre>

<h3>Local Development</h3>

<h4>Compile and Watch SCSS</h4>

<p>Before compiling sass you will need to make sure that the design system dependencies are made available as they are referenced and not part of the package by default. To get them run the following:</p>

<pre>yarn ucla-design-system-deps</pre>

<p>While Storybook is running compile and watch SCSS by running:</p>
<pre>
  yarn sass-dev
</pre>

<h4>Lint and Fix SCSS</h4>

<p>Style lint parameters are found in <code>stylelint.config.js</code>.</p>

<p>To lint the css run:</p>

<pre>yarn sass-lint</pre>

<p>To automatically fix as many issues as can be fixed using the config rules run:</p>

<pre>yarn sass-lint:fix</pre>

<h4>Javascript</h4>

<p>JS needs no processing for local development.</p>

<h3>Build Production Assests</h3>
<p>Compiles SCSS and JS into <u>dist/assets</u>. These files are not used here, but are intended to be exported or used for production environments.</p>
<pre>
  yarn build
</pre>

<h3>TODO:</h3>

<ul>
  <li><del>CSS/SASS Lint</del></li>
  <li><del>CSS/SASS Lint Fix</del></li>
  <li>Decide whether to stay on yarn or move to npm. This will be problematic when we move to the theme, as it will certainly already be using node already.</li>
  <li>See if we can just delete the <code>package-lock.json</code></li>
  <li>JS Lint</li>
  <li>Decide if we need a sass production build script since vite can do a production build<pre>"sass-prod": "sass --no-source-map --style=compressed src/scss/style.scss:src/dist/style.css"</pre></li>
  <li>Have temporarily moved icons folder from design system node module to /public folder. Will need to sym-link or create a build script that migrates these on Storybook build. This is not a long term solution to have to copy paste those files.</li>
</ul>
