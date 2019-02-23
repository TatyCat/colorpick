import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main>
        <section id="color-results" style={{ backgroundColor: `hsl(0, 0%,0%)` }}></section>
        <article>
          <p id="slider-results">HSLa (39, 100%, 4%, 100%)</p>
          <p>Hue</p>
          <section class="slidecontainer">
            <input type="range" min="0" max="100" value="0" class="slider" id="hue" />
          </section>
          <p>Saturation</p>
          <section class="slidecontainer">
            <input type="range" min="0" max="360" value="0" class="slider" id="saturation" />
          </section>
          <p>Lightness</p>
          <section class="slidecontainer">
            <input type="range" min="0" max="100" value="50" class="slider" id="lightness" />
          </section>
          <p>alpha</p>
          <section class="slidecontainer">
            <input type="range" min="0" max="1" value="1" class="slider" id="alpha" />
          </section>
          <button>Store Color</button>

          <section id="saved-section">
            <h2>Saved Colors</h2>
            <div class="saved-color"></div> <p>hsla (208, 100%, 49%, 100%)</p>
            <div class="saved-color"></div> <p>hsla (50, 50%, 10%, 100%)</p>
          </section>
        </article>

      </main>
    );
  }
}

export default Main;