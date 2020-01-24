// @flow
// @from https://github.com/TradingPal/react-native-highcharts

import React from 'react';
import {
  StyleSheet,
  View,
  WebView,
} from 'react-native';

const DEBUG_TEMPLATE = `
  <textarea id="debug" rows="100" cols="50">{config: %config, options: %options}</textarea>
  <script>
    var debug = document.querySelector("#debug");
    var debugContent = debug.innerHTML;
    try {
      eval(debugContent);
      debug.innerHTML = "Injected Javascript is working!\\n" + debugContent;
    } catch (e) {
      debug.innerHTML = "Injected Javascript is invalid:" + e + "\\n" + debugContent;
    }
  </script>
`;

const HTML_TEMPLATE = `
<html>
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
  <style media="screen" type="text/css">
  #container {
    width:100%;
    height:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    position:absolute;
    user-select: none;
    -webkit-user-select: none;
  }
  </style>
  <head>
    <script src="https://code.highcharts.com/highcharts.src.js"></script>
  </head>
  <body>
    %debug
    <div id="container"></div>
    <script>
      window.addEventListener('load', function() {
        Highcharts.setOptions(%options);
        Highcharts.chart('container', %config);
      });
    </script>
  </body>
</html>`;

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

type Props = {
  config: Object | string,
  options: Object | string,
  debug?: boolean,
  style?: any,
};

class HightChart extends React.PureComponent<Props> {
  static defaultProps = {
    options: {},
    style: null,
    debug: false,
  };

  _jsonStringify = (json: Object | string) => (typeof json === 'string'
    ? json
    : JSON.stringify(json, (key: string, value: any) => (
      typeof value === 'function' ? value.toString() : value
    ))
      // @from https://github.com/TradingPal/react-native-highcharts/issues/4
      .replace(/\\n/g, ' ') // remove \n in string = ""
      .replace(/"([^(")"]+)":/g, '$1: ') // remove {"chart":"chart"} = {chart:"chart"}
      .replace(/"function/g, 'function') // remove {chart:"function ...} = {chart:function ...}
      .replace(/}"/g, '}') // remove {chart:function(){}"} = {chart:function(){}}
  );

  render() {
    const {
      config,
      options,
      style,
      debug,
      ...props
    } = this.props;
    const html = (HTML_TEMPLATE
      .replace(/%debug/g, () => (debug ? DEBUG_TEMPLATE : ''))
      .replace(/%config/g, () => this._jsonStringify(config))
      .replace(/%options/g, () => this._jsonStringify(options))
    );


    return (
      <View style={style}>
        <WebView
          style={styles.full}
          source={{ html, baseUrl: 'web/' }}
          javaScriptEnabled
          domStorageEnabled
          scalesPageToFit
          scrollEnabled={false}
          originWhitelist={['*']}
          {...props}
        />
      </View>
    );
  }
}

export default HightChart;
