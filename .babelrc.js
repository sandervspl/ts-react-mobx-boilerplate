module.exports = {
  presets: [
    '@babel/env',
    '@babel/typescript',
    '@babel/react',
  ],
  plugins: [
    'lodash',
    'babel-plugin-styled-components',
    'react-hot-loader/babel',
    'react-loadable/babel',
  ],
  env: {
    production: {
      plugins: [
        [
          'transform-react-remove-prop-types',
          {
            mode: 'remove',
            removeImport: true,
          },
        ],
      ],
    },
  },
}
