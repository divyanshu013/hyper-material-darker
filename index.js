
    module.exports.decorateConfig = config => {
      return Object.assign({}, config, {
        cursorColor: 'rgba(255, 203, 107, 0.5)',
        foregroundColor: '#c5c9de',
        backgroundColor: '#0f111a',
        borderColor: '#0f111a',
        colors: {
          black: '#0f111a',
          red: '#f07178',
          green: '#c3e88d',
          yellow: '#ffcb6b',
          blue: '#82aaff',
          magenta: '#c792ea',
          cyan: '#84ffff',
          white: '#FFFFFF',
          lightBlack: '#8F93A2',
          lightRed: '#f78c6c',
          lightGreen: '#c3e88d',
          lightYellow: '#f78c6c',
          lightBlue: '#80cbc4',
          lightMagenta: '#c792ea',
          lightCyan: '#82aaff',
          lightWhite: '#e3e8ff',
        },
      });
    };
  