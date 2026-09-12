import React, { Component } from 'react';
import Typist from 'react-typist';
import './App.css';
import Configs from './configurations.json';

const MEDIUM_SVG_PATH =
  'M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z';

class App extends Component {
  constructor(props) {
    super(props);

    const darkBackgroundModes = [
      'day',
      'terminal',
      'torquoise',
      'alizarin',
      'amythyst',
      'carrot',
      'peterriver'
    ];

    const lightBackgroundModes = [
      'night',
      'lightred',
      'lightpurple',
      'lightgreen',
      'lightblue',
      'lightyellow'
    ];

    const baseState = {
      darkBackgroundModes,
      lightBackgroundModes,
      backgroundType: Configs.backgroundType || 'plain',
      appClass: Configs.plainBackgroundMode || 'daylight',
      devIntro: Configs.devIntro || 'Lorem Ipsum',
      devDesc:
        Configs.devDesc ||
        'Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.',
      backgroundMode: 'default',
      backgroundIndex: 0,
      bgStyle: {},
      icons: Configs.icons || []
    };

    // Apply same logic that used to live in componentWillMount
    if (baseState.backgroundType === 'gradient') {
      this.state = {
        ...baseState,
        appClass: 'gradient',
        bgStyle: this.prepareGradientStyleSheets()
      };
    } else if (baseState.backgroundType === 'image') {
      this.state = {
        ...baseState,
        appClass: 'full-bg-image',
        bgStyle: this.prepareBackgroundImageStyle()
      };
    } else {
      // plain
      this.state = baseState;
    }
  }

  checkIfNightModeEnabled = () => {
    return (
      this.state.backgroundType === 'plain' &&
      this.state.appClass === 'nightlight'
    );
  };

  checkIfDayModeEnabled = () => {
    return (
      this.state.backgroundType === 'plain' &&
      this.state.appClass === 'daylight'
    );
  };

  checkIfGradientTypeEnabled = () => {
    return this.state.backgroundType === 'gradient';
  };

  checkIfPlainTypeEnabled = () => {
    return this.state.backgroundType === 'plain';
  };

  checkIfImageTypeEnabled = () => {
    return this.state.backgroundType === 'image';
  };

  prepareGradientStyleSheets = () => {
    if (Configs.gradientColors) {
      return {
        background: 'linear-gradient(-45deg, ' + Configs.gradientColors + ')',
        backgroundSize: '400% 400%'
      };
    } else {
      return {
        background:
          'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)',
        backgroundSize: '400% 400%'
      };
    }
  };

  prepareBackgroundImageStyle = () => {
    if (Configs.backgroundImageUrl) {
      return {
        background:
          'url("' +
          Configs.backgroundImageUrl +
          '") no-repeat center center fixed',
        backgroundSize: 'cover'
      };
    } else {
      return {
        background:
          'url("/images/sample-background.jpg") no-repeat center center fixed',
        backgroundSize: 'cover'
      };
    }
  };

  getDefaultModeBasedOnBackgroundType = () => {
    if (this.checkIfNightModeEnabled()) {
      return this.state.lightBackgroundModes[0];
    } else if (this.checkIfDayModeEnabled()) {
      return this.state.darkBackgroundModes[0];
    }
    return 'default';
  };

  changeThemeMode = () => {
    if (this.checkIfNightModeEnabled()) {
      this.setState({
        appClass: 'daylight',
        backgroundIndex: 0,
        backgroundMode: this.state.darkBackgroundModes[0]
      });
    } else if (this.checkIfDayModeEnabled()) {
      this.setState({
        appClass: 'nightlight',
        backgroundIndex: 0,
        backgroundMode: this.state.lightBackgroundModes[0]
      });
    }
  };

  changeBackgroundBasedonMode = () => {
    if (
      this.checkIfNightModeEnabled() &&
      this.state.backgroundIndex < this.state.lightBackgroundModes.length - 1
    ) {
      this.setState({
        backgroundIndex: this.state.backgroundIndex + 1,
        backgroundMode:
          this.state.lightBackgroundModes[this.state.backgroundIndex + 1]
      });
    } else if (
      this.checkIfDayModeEnabled() &&
      this.state.backgroundIndex < this.state.darkBackgroundModes.length - 1
    ) {
      this.setState({
        backgroundIndex: this.state.backgroundIndex + 1,
        backgroundMode:
          this.state.darkBackgroundModes[this.state.backgroundIndex + 1]
      });
    } else {
      this.setState({
        backgroundIndex: 0,
        backgroundMode: this.getDefaultModeBasedOnBackgroundType()
      });
    }
  };

  render() {
    const { appClass, bgStyle, backgroundMode, devIntro, devDesc, icons } =
      this.state;

    return (
      <div className={appClass} style={bgStyle}>
        <div className="change-mode" onClick={this.changeThemeMode} />
        <div
          className={backgroundMode}
          onClick={this.changeBackgroundBasedonMode}
        >
          <main className="App-main">
            <h1 className="intro">{devIntro}</h1>
            <div className="tagline">
              <Typist>{devDesc}</Typist>
            </div>
            <div className="icons-social">
              {icons.map(icon => (
                <a
                  key={icon.url || icon.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${icon.url}`}
                >
                  {icon.image === 'inline-medium' ? (
                    <i className="inline-icon">
                      <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                        <path d={MEDIUM_SVG_PATH} />
                      </svg>
                    </i>
                  ) : (
                    <i className={`${icon.prefix || 'fab'} ${icon.image}`} />
                  )}
                </a>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
