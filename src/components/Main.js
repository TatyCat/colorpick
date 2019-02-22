import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main>
        <section id="color-results" style={{ backgroundColor: `hsl(0, 0%,0%)` }}></section>
        <article>
          <p id="slider-results">HSL (39, 100% 4%)</p>
          <p>Hue</p>
          <section class="slidecontainer">
            <input type="range" min="1" max="100" value="0" class="slider" id="hue" />
          </section>
          <p>Saturation</p>
          <section class="slidecontainer">
            <input type="range" min="1" max="100" value="0" class="slider" id="saturation" />
          </section>
          <p>Lightness</p>
          <section class="slidecontainer">
            <input type="range" min="1" max="100" value="0" class="slider" id="lightness" />
          </section>
          <button>Store Color</button>

          <section id="saved-section">
            <h2>Saved Colors</h2>
            <div class="saved-color"></div> <p>hsl (208, 100%, 49%)</p>
            <div class="saved-color"></div> <p>hsl (50, 50%, 10%)</p>
          </section>
        </article>

      </main>
    );
  }
}

export default Main;