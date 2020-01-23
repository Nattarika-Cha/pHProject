# highcharts-react-native

**Thank's to [TradingPal](https://camo.githubusercontent.com/12c283baeba17ad50bf7d03bdabb82a520e19ea0/687474703a2f2f692e67697068792e636f6d2f6c33765264577758696e316f6f4c4348532e676966) but got blanck screen on our project.**

📊Implementation of Highcharts in React Native via WebView API.

## Instalation
```js
npm i -S highcharts-react-native
```

## Usage
```js
import React from 'react';
import HighchartsWebView from 'highcharts-react-native';

export default class App extends React.PureComponent {
  render() {
    const configuration = {
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }],
    };

    return (
      <HighchartsWebView
        style={{ height: 300 }}
        config={configuration} />
    );
  }
}
```

## Props
| Name | Required | Type |
| ------------- | ------------- | ------------- |
| config | true | [Object](http://www.highcharts.com/docs/getting-started/your-first-chart)|
| options | false | [Object](https://api.highcharts.com/highcharts/lang)|
| style | false | Object |
| debug | false | boolean |

## Known issues
### Blanck screen :
- Why did that happens ?
> Blank screen appears when injected Javascript is invalid. Usually due to new Javascript features not supported by JSON.stringify, also due to babel compiler.
- How to solve this ?
  - Code directly into [ES5](https://www.w3schools.com/js/js_es5.asp).
  - Put your code into string.
  - Add the `'debug'` prop (the debug's prop allow you to know how injected JS looks like, if previous steps resolve blank screen, remove it).
-  Example :
#### Before
```js
const configuration = {
  tooltip: {
    formatter() {
      return `
        <table style="width:100px;">
          <tr><td style="color:#bc9c69;">
            $${Math.round(this.y)}
          </td></tr>
          <tr><td style="text-align:center;color:#bc9c69;">
          ${Highcharts.dateFormat('%y/%m/%d', this.x)}
          </td></tr>
        </table>
      `;
    },
    positioner(a, b, point) {
      return {
        y: 0,
        x: point.plotX,
      };
    },
  },
  // ...
};
```
#### After
```js
const my_variable = 'something';
const configuration = `{
  tooltip: {
    formatter: function() {
      return (
        '<table style="width:100px;">'
        + '<tr><td style="color:#bc9c69;">'
        + '$' + Math.round(this.y)
        + '</td></tr>'
        + '<tr><td style="text-align:center;color:#bc9c69;">'
        + Highcharts.dateFormat('%y/%m/%d', this.x)
        + '</td></tr>'
        + '</table>'
      );
    },
    positioner: function (a, b, point) {
      return {
        y: 0,
        x: point.plotX,
      };
    },
  },
  // ...
}`;
```
