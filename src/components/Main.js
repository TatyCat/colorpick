import React, { Component } from 'react';

class Main extends Component {
  state = {
    hue: 0,
    saturation: 100,
    lightness: 1,
    alpha: 1,
    savedColors: []
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

  saveColor = () => {
    this.setState({
      savedColors: this.state.savedColors.concat(`hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`)
    })
  }

  selectText = event => {
    console.log(event.target.innerText)
    event.target.innerText.select()
    document.execCommand("copy")

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
            <p onClick={this.selectText} id="slider-results">HSLa ({this.state.hue}, {this.state.saturation}%,  {this.state.lightness}%, {this.state.alpha})</p>
            <p>Hue</p>
            <section className="slidecontainer">
              <input onChange={this.updateHue} step="1" type="range" min="0" max="360" value={this.state.hue} className="slider" id="hue" />
            </section>

            <p>Saturation</p>
            <section className="slidecontainer">
              <input onChange={this.updateSaturation} type="range" min="0" max="100" value={this.state.saturation} className="slider" id="saturation" />
            </section>

            <p>Lightness</p>
            <section className="slidecontainer">
              <input onChange={this.updateLightness} type="range" min="0" max="100" value={this.state.lightness} className="slider" id="lightness" />
            </section>

            <p>alpha</p>
            <section className="slidecontainer">
              <input onChange={this.updateAlpha} type="range" step=".1" min="0" max="1" value={this.state.alpha} className="slider" id="alpha" />
            </section>

            <button style={{
              boxShadow: `.2px 1px .3px 6px hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha}) inset, .2px 1px 1px 3px hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`
            }} onClick={this.saveColor}>Store This Color</button>

            <section id="saved-section">
              <h2>Saved Colors</h2>
              <div>
                {this.state.savedColors.map((hsla, index) => {
                  return (
                    <ul key={index}>
                      <li >{hsla} <span className="saved-color" style={{ backgroundColor: `${hsla}` }}></span>
                      </li>
                    </ul>
                  )
                })}
              </div>
            </section>
          </article>
          <footer></footer>
        </main >
      </>
    )
  }
}

export default Main