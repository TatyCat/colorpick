import React, { Component } from 'react';

class Main extends Component {

  state = {
    hue: 0,
    saturation: 100,
    lightness: 1,
    alpha: 1,
  }


  updateHue = (event) => {
    this.setState({
      hue: Number(event.target.value)
    })
  }
  updateSaturation = (event) => {
    this.setState({
      saturation: Number(event.target.value)
    })
  }
  updateLightness = (event) => {
    this.setState({
      lightness: Number(event.target.value)
    })
  }
  updateAlpha = (event) => {
    this.setState({
      alpha: Number(event.target.value)
    })
  }

  render() {
    return (
      <>
        <main >
          <section id="color-results" style={{
            backgroundColor: `hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`
          }}>

          </section>
          <article >
            <p id="slider-results">HSLa ({this.state.hue}, {this.state.saturation}%,  {this.state.lightness}%, {this.state.alpha})</p>
            <p>Hue</p>
            <section class="slidecontainer">
              <input onChange={this.updateHue} step="1" type="range" min="0" max="360" value={this.state.hue} class="slider" id="hue" />
            </section>

            <p>Saturation</p>
            <section class="slidecontainer">
              <input onChange={this.updateSaturation} type="range" min="0" max="100" value={this.state.saturation} class="slider" id="saturation" />
            </section>

            <p>Lightness</p>
            <section class="slidecontainer">
              <input onChange={this.updateLightness} type="range" min="0" max="100" value={this.state.lightness} class="slider" id="lightness" />
            </section>

            <p>alpha</p>
            <section class="slidecontainer">
              <input onChange={this.updateAlpha} type="range" step=".1" min="0" max="1" value={this.state.alpha} class="slider" id="alpha" />
            </section>
            <button style={{
              boxShadow: `.2px 1px .3px 6px hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha}) inset, .2px 1px 1px 3px hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`
            }}>Store This Color</button>

            <section id="saved-section">
              <h2>Saved Colors</h2>
              <div class="saved-color"></div> <p>hsla (208, 100%, 49%, 100%)</p>
              <div class="saved-color"></div> <p>hsla (50, 50%, 10%, 100%)</p>
            </section>
          </article>
        </main >
      </>
    )
  }
}

export default Main