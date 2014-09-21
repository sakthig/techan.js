/*
 TechanJS v0.2.0
 (c) 2014 - 2014 Andre Dumas | https://github.com/andredumas/techan.js
*/
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.techan=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';module.exports='0.2.0';
},{}],2:[function(_dereq_,module,exports){
'use strict';

module.exports = function() {

  var date = function(d) { return d.date; },
      up = function(d) { return d.up; },
      down = function(d) { return d.down; },
      oscillator = function(d) { return d.oscillator; },
      overbought = function(d) { return d.overbought; },
      oversold = function(d) { return d.oversold; },
      middle = function(d) { return d.middle; };

  function accessor(d) {
    return accessor.r(d);
  }

  // TODO use d3.rebind to obtain this from 'super class'
  accessor.date = function(_) {
    if (!arguments.length) return date;
    date = _;
    return bind();
  };

  accessor.up = function(_) {
    if (!arguments.length) return up;
    up = _;
    return bind();
  };
  accessor.down = function(_) {
    if (!arguments.length) return down;
    down = _;
    return bind();
  };

  accessor.oscillator = function(_) {
    if (!arguments.length) return oscillator;
    oscillator = _;
    return bind();
  };

  accessor.overbought = function(_) {
    if (!arguments.length) return overbought;
    overbought = _;
    return bind();
  };

  accessor.oversold = function(_) {
    if (!arguments.length) return oversold;
    oversold = _;
    return bind();
  };

  accessor.middle = function(_) {
    if (!arguments.length) return middle;
    middle = _;
    return bind();
  };

  function bind() {
    // TODO These methods will need to know if the variables are functions or values and execute as such
    accessor.d = date;
    accessor.up = up;
    accessor.down = down;
    accessor.oscillator = oscillator;
    accessor.ob = overbought;
    accessor.os = oversold;
    accessor.m = middle;

    return accessor;
  }

  return bind();
};
},{}],3:[function(_dereq_,module,exports){
'use strict';

// TODO Could these be singletons? Generally will be accessing the same data and data structures at the same time
module.exports = function() {
  return {
    ohlc: _dereq_('./ohlc'),
    volume: _dereq_('./volume'),
    macd: _dereq_('./macd'),
    rsi: _dereq_('./rsi'),
    aroon: _dereq_('./aroon'),
    stochastic: _dereq_('./stochastic'),
    williams: _dereq_('./williams'),
    trendline: _dereq_('./trendline'),
    value: _dereq_('./value')
  };
};
},{"./aroon":2,"./macd":4,"./ohlc":5,"./rsi":6,"./stochastic":7,"./trendline":8,"./value":9,"./volume":10,"./williams":11}],4:[function(_dereq_,module,exports){
'use strict';

module.exports = function() {
  var date = function(d) { return d.date; },
      macd = function(d) { return d.macd; },
      zero = function(d) { return d.zero; },
      signal = function(d) { return d.signal;},
      difference = function(d) { return d.difference;};

  function accessor(d) {
    return accessor.m(d);
  }

  // TODO use d3.rebind to obtain this from 'super class'
  accessor.date = function(_) {
    if (!arguments.length) return date;
    date = _;
    return bind();
  };

  accessor.macd = function(_) {
    if (!arguments.length) return macd;
    macd = _;
    return bind();
  };

  accessor.signal = function(_) {
    if (!arguments.length) return signal;
    signal = _;
    return bind();
  };

  accessor.difference = function(_) {
    if (!arguments.length) return difference;
    difference = _;
    return bind();
  };

  function bind() {
    // TODO These methods will need to know if the variables are functions or values and execute as such
    accessor.d = date;
    accessor.m = macd;
    accessor.s = signal;
    accessor.dif = difference;
    accessor.z = zero;

    return accessor;
  }

  return bind();
};
},{}],5:[function(_dereq_,module,exports){
'use strict';

module.exports = function() {
  var date = function(d) { return d.date; },
      open = function(d) { return d.open; },
      high = function(d) { return d.high; },
      low = function(d) { return d.low; },
      close = function(d) { return d.close;},
      volume = function(d) { return d.volume; };

  function accessor(d) {
    return accessor.c(d);
  }

  // TODO use d3.rebind to obtain this from 'super class'
  accessor.date = function(_) {
    if (!arguments.length) return date;
    date = _;
    return bind();
  };

  accessor.open = function(_) {
    if (!arguments.length) return open;
    open = _;
    return bind();
  };

  accessor.high = function(_) {
    if (!arguments.length) return high;
    high = _;
    return bind();
  };

  accessor.low = function(_) {
    if (!arguments.length) return low;
    low = _;
    return bind();
  };

  accessor.close = function(_) {
    if (!arguments.length) return close;
    close = _;
    return bind();
  };

  accessor.volume = function(_) {
    if (!arguments.length) return volume;
    volume = _;
    return bind();
  };

  function bind() {
    // TODO These methods will need to know if the variables are functions or values and execute as such
    accessor.d = date;
    accessor.o = open;
    accessor.h = high;
    accessor.l = low;
    accessor.c = close;
    accessor.v = volume;

    return accessor;
  }

  return bind();
};
},{}],6:[function(_dereq_,module,exports){
'use strict';

module.exports = function() {
  var date = function(d) { return d.date; },
      rsi = function(d) { return d.rsi; },
      overbought = function(d) { return d.overbought; },
      oversold = function(d) { return d.oversold; },
      middle = function(d) { return d.middle; };

  function accessor(d) {
    return accessor.r(d);
  }

  // TODO use d3.rebind to obtain this from 'super class'
  accessor.date = function(_) {
    if (!arguments.length) return date;
    date = _;
    return bind();
  };

  accessor.rsi = function(_) {
    if (!arguments.length) return rsi;
    rsi = _;
    return bind();
  };

  accessor.overbought = function(_) {
    if (!arguments.length) return overbought;
    overbought = _;
    return bind();
  };

  accessor.oversold = function(_) {
    if (!arguments.length) return oversold;
    oversold = _;
    return bind();
  };

  accessor.middle = function(_) {
    if (!arguments.length) return middle;
    middle = _;
    return bind();
  };

  function bind() {
    // TODO These methods will need to know if the variables are functions or values and execute as such
    accessor.d = date;
    accessor.r = rsi;
    accessor.ob = overbought;
    accessor.os = oversold;
    accessor.m = middle;

    return accessor;
  }

  return bind();
};
},{}],7:[function(_dereq_,module,exports){
'use strict';

module.exports = function() {
  var date = function(d) { return d.date; },
      stochasticK = function(d) { return d.stochasticK; },
      stochasticD = function(d) { return d.stochasticD; },
      overbought = function(d) { return d.overbought; },
      oversold = function(d) { return d.oversold; },
      middle = function(d) { return d.middle; };

  function accessor(d) {
    return accessor.r(d);
  }

  // TODO use d3.rebind to obtain this from 'super class'
  accessor.date = function(_) {
    if (!arguments.length) return date;
    date = _;
    return bind();
  };

  accessor.stochasticK = function(_) {
    if (!arguments.length) return stochasticK;
    stochasticK = _;
    return bind();
  };
  accessor.stochasticD = function(_) {
    if (!arguments.length) return stochasticD;
    stochasticD = _;
    return bind();
  };

  accessor.overbought = function(_) {
    if (!arguments.length) return overbought;
    overbought = _;
    return bind();
  };

  accessor.oversold = function(_) {
    if (!arguments.length) return oversold;
    oversold = _;
    return bind();
  };

  accessor.middle = function(_) {
    if (!arguments.length) return middle;
    middle = _;
    return bind();
  };

  function bind() {
    // TODO These methods will need to know if the variables are functions or values and execute as such
    accessor.d = date;
    accessor.k = stochasticK;
    accessor.sd = stochasticD;
    accessor.ob = overbought;
    accessor.os = oversold;
    accessor.m = middle;

    return accessor;
  }

  return bind();
};
},{}],8:[function(_dereq_,module,exports){
'use strict';

module.exports = function() {
  var startDate = function(d, _) {
        if(arguments.length < 2) return d.start.date;
        d.start.date = _;
      },
      startValue = function(d, _) {
        if(arguments.length < 2) return d.start.value;
        d.start.value = _;
      },
      endDate = function(d, _) {
        if(arguments.length < 2) return d.end.date;
        d.end.date = _;
      },
      endValue = function(d, _) {
        if(arguments.length < 2) return d.end.value;
        d.end.value = _;
      };

  function accessor(d) {
    return accessor.sv(d);
  }

  accessor.startDate = function(_) {
    if (!arguments.length) return startDate;
    startDate = _;
    return bind();
  };

  accessor.startValue = function(_) {
    if (!arguments.length) return startValue;
    startValue = _;
    return bind();
  };

  accessor.endDate = function(_) {
    if (!arguments.length) return endDate;
    endDate = _;
    return bind();
  };

  accessor.endValue = function(_) {
    if (!arguments.length) return endValue;
    endValue = _;
    return bind();
  };

  function bind() {
    // TODO These methods will need to know if the variables are functions or values and execute as such
    accessor.sd = startDate;
    accessor.sv = startValue;
    accessor.ed = endDate;
    accessor.ev = endValue;

    return accessor;
  }

  return bind();
};
},{}],9:[function(_dereq_,module,exports){
'use strict';

module.exports = function() {
  var date = function(d) { return d.date; },
      value = function(d, _) {
        if(arguments.length < 2) return d.value;
        d.value = _;
      },
      zero = function(d) { return d.zero; };

  function accessor(d) {
    return accessor.v(d);
  }

  // TODO use d3.rebind to obtain this from 'super class'
  accessor.date = function(_) {
    if (!arguments.length) return date;
    date = _;
    return bind();
  };

  accessor.value = function(_) {
    if (!arguments.length) return value;
    value = _;
    return bind();
  };

  accessor.zero = function(_) {
    if (!arguments.length) return zero;
    zero = _;
    return bind();
  };

  function bind() {
    // TODO These methods will need to know if the variables are functions or values and execute as such
    accessor.d = date;
    accessor.v = value;
    accessor.z = zero;

    return accessor;
  }

  return bind();
};
},{}],10:[function(_dereq_,module,exports){
'use strict';

module.exports = function() {
  var date = function(d) { return d.date; },
      volume = function(d) { return d.volume; };

  function accessor(d) {
    return accessor.v(d);
  }

  // TODO use d3.rebind to obtain this from 'super class'
  accessor.date = function(_) {
    if (!arguments.length) return date;
    date = _;
    return bind();
  };

  accessor.volume = function(_) {
    if (!arguments.length) return volume;
    volume = _;
    return bind();
  };

  function bind() {
    // TODO These methods will need to know if the variables are functions or values and execute as such
    accessor.d = date;
    accessor.v = volume;

    return accessor;
  }

  return bind();
};
},{}],11:[function(_dereq_,module,exports){
'use strict';

module.exports = function() {
  var date = function(d) { return d.date; },
      williams = function(d) { return d.williams; };

  function accessor(d) {
    return accessor.r(d);
  }

  // TODO use d3.rebind to obtain this from 'super class'
  accessor.date = function(_) {
    if (!arguments.length) return date;
    date = _;
    return bind();
  };

  accessor.williams = function(_) {
    if (!arguments.length) return williams;
    williams = _;
    return bind();
  };

  function bind() {
    // TODO These methods will need to know if the variables are functions or values and execute as such
    accessor.d = date;
    accessor.w = williams;

    return accessor;
  }

  return bind();
};
},{}],12:[function(_dereq_,module,exports){
'use strict';

module.exports = function(indicatorMixin, accessor_ohlc, indicator_ema) {  // Injected dependencies
  return function() { // Closure function
    var p = {},  // Container for private, direct access mixed in variables
        period = 20,
        overbought = 70,
        middle = 0,
        oversold = 30;

    function indicator(data) {
      return data.map(function(d, i) {
        if(i >= (period-1)){
          var max = 0;
          var maxi = 0;
          var min = 10000;
          var mini = 0;
          for (var j = 0; j < period; j++) {
            if(data[i-j].high > max){
              max = data[i-j].high;
              maxi = j;
            }
            if(data[i-j].low < min){
              min = data[i-j].low;
              mini = j;
            }
          }
          var up = ((period-maxi)/period)*100;
          var down = ((period-mini)/period)*100;
          var oscillator = up - down;
          return datum(p.accessor.d(d), up,down, oscillator, middle, overbought, oversold);
        }
        else return datum(p.accessor.d(d));
      }).filter(function(d) { return d.up; });
    }

    indicator.period = function(_) {
      if (!arguments.length) return period;
      period = _;
      return indicator;
    };

    indicator.overbought = function(_) {
      if (!arguments.length) return overbought;
      overbought = _;
      return indicator;
    };

    indicator.middle = function(_) {
      if (!arguments.length) return middle;
      middle = _;
      return indicator;
    };

    indicator.oversold = function(_) {
      if (!arguments.length) return oversold;
      oversold = _;
      return indicator;
    };

    // Mixin 'superclass' methods and variables
    indicatorMixin(indicator, p, accessor_ohlc());

    return indicator;
  };
};

function datum(date, up,down,oscillator, middle, overbought, oversold) {
  if(up) return { date: date, up: up,down:down,oscillator:oscillator, middle: middle, overbought: overbought, oversold: oversold };
  else return { date: date, up: null,down:null,oscillator:null, middle: null, overbought: null, oversold: null };
}
},{}],13:[function(_dereq_,module,exports){
'use strict';

module.exports = function(indicatorMixin, accessor_ohlc) {  // Injected dependencies
  return function() { // Closure function
    var p = {},  // Container for private, direct access mixed in variables
      period = 10,
      previous,
      alpha,
      initialTotal,
      initialCount;

    function indicator(data) {
      indicator.init();
      return data.map(ma).filter(function(d) { return d.value; });
    }

    indicator.init = function() {
      previous = null;
      alpha = 2/(period+1);
      initialTotal = 0;
      initialCount = 0;
      return indicator;
    };

    function ma(d, i) {
      var value = indicator.average(p.accessor(d));
      if (i+1 < period) {
        value = null;
      }

      return { date: p.accessor.d(d), value: value };
    }

    indicator.average = function(value) {
      if(initialCount < period) return (initialTotal += value)/++initialCount;
      else {
        if(initialCount === period) {
          previous = initialTotal/initialCount++;
        }

        return (previous = previous + alpha*(value-previous));
      }
    };

    indicator.period = function(_) {
      if (!arguments.length) return period;
      period = _;
      return indicator;
    };

    // Mixin 'superclass' methods and variables
    indicatorMixin(indicator, p, accessor_ohlc());

    return indicator;
  };
};
},{}],14:[function(_dereq_,module,exports){
'use strict';

module.exports = function() {
  var indicatorMixin = _dereq_('./indicatormixin')(),
      accessor = _dereq_('../accessor')(),
      ema = _dereq_('./ema')(indicatorMixin, accessor.ohlc);

  return {
    ema: ema,
    macd: _dereq_('./macd')(indicatorMixin, accessor.ohlc, ema),
    rsi: _dereq_('./rsi')(indicatorMixin, accessor.ohlc, ema),
    aroon: _dereq_('./aroon')(indicatorMixin, accessor.ohlc, ema),
    stochastic: _dereq_('./stochastic')(indicatorMixin, accessor.ohlc, ema),
    williams: _dereq_('./williams')(indicatorMixin, accessor.ohlc, ema),
    sma: _dereq_('./sma')(indicatorMixin, accessor.ohlc)
  };
};
},{"../accessor":3,"./aroon":12,"./ema":13,"./indicatormixin":15,"./macd":16,"./rsi":17,"./sma":18,"./stochastic":19,"./williams":20}],15:[function(_dereq_,module,exports){
'use strict';

module.exports = function() {
  return function(source, priv, accessor) {
    // Mixin the functions to the source
    source.accessor = function(_) {
      if (!arguments.length) return accessor;
      accessor = _;
      return bind();
    };

    // Add in the private, direct access variables
    function bind() {
      priv.accessor = accessor;

      return source;
    }

    bind();
  };
};
},{}],16:[function(_dereq_,module,exports){
'use strict';

module.exports = function(indicatorMixin, accessor_ohlc, indicator_ema) {  // Injected dependencies
  return function() { // Closure function
    var p = {},  // Container for private, direct access mixed in variables
        fast = 12,
        slow = 26,
        signal = 9;

    function indicator(data) {
      var minFastSlow = Math.max(fast, slow) - 1,
          minCount = minFastSlow + signal - 1,
          signalLine = indicator_ema().accessor(indicator.accessor()).period(signal).init(),
          fastAverage = indicator_ema().accessor(indicator.accessor()).period(fast).init(),
          slowAverage = indicator_ema().accessor(indicator.accessor()).period(slow).init();

      return data.map(function(d, i) {
        slow = fastAverage.average(p.accessor(d));
        fast = slowAverage.average(p.accessor(d));

        var macd = slow - fast,
            signalValue = i >= minFastSlow ? signalLine.average(macd) : null;

        if(i >= minCount) return datum(p.accessor.d(d), macd, signalValue, macd - signalValue, 0);
        else return datum(p.accessor.d(d));

      }).filter(function(d) { return d.macd; });
    }

    indicator.fast = function(_) {
      if (!arguments.length) return fast;
      fast = _;
      return indicator;
    };

    indicator.slow = function(_) {
      if (!arguments.length) return slow;
      slow = _;
      return indicator;
    };

    indicator.signal = function(_) {
      if (!arguments.length) return signal;
      signal = _;
      return indicator;
    };

    // Mixin 'superclass' methods and variables
    indicatorMixin(indicator, p, accessor_ohlc());

    return indicator;
  };
};

function datum(date, macd, signal, difference, zero) {
  if(macd) return { date: date, macd: macd, signal: signal, difference: difference, zero: zero };
  else return { date: date, macd: null, signal: null, difference: null, zero: null };
}
},{}],17:[function(_dereq_,module,exports){
'use strict';

module.exports = function(indicatorMixin, accessor_ohlc, indicator_ema) {  // Injected dependencies
  return function() { // Closure function
    var p = {},  // Container for private, direct access mixed in variables
        period = 14,
        overbought = 70,
        middle = 50,
        oversold = 30;

    function indicator(data) {
      var lossAverage = indicator_ema().accessor(indicator.accessor()).period(period).init(),
          gainAverage = indicator_ema().accessor(indicator.accessor()).period(period).init();

      return data.map(function(d, i) {
        if(i < 1) return datum(p.accessor.d(d));

        var difference = p.accessor(d) - p.accessor(data[i-1]),
            averageGain = gainAverage.average(Math.max(difference, 0)),
            averageLoss = Math.abs(lossAverage.average(Math.min(difference, 0)));

        if(i >= period) {
          var rsi = 100 - (100/(1+(averageGain/averageLoss)));
          return datum(p.accessor.d(d), rsi, middle, overbought, oversold);
        }
        else return datum(p.accessor.d(d));

      }).filter(function(d) { return d.rsi; });
    }

    indicator.period = function(_) {
      if (!arguments.length) return period;
      period = _;
      return indicator;
    };

    indicator.overbought = function(_) {
      if (!arguments.length) return overbought;
      overbought = _;
      return indicator;
    };

    indicator.middle = function(_) {
      if (!arguments.length) return middle;
      middle = _;
      return indicator;
    };

    indicator.oversold = function(_) {
      if (!arguments.length) return oversold;
      oversold = _;
      return indicator;
    };

    // Mixin 'superclass' methods and variables
    indicatorMixin(indicator, p, accessor_ohlc());

    return indicator;
  };
};

function datum(date, rsi, middle, overbought, oversold) {
  if(rsi) return { date: date, rsi: rsi, middle: middle, overbought: overbought, oversold: oversold };
  else return { date: date, rsi: null, middle: null, overbought: null, oversold: null };
}
},{}],18:[function(_dereq_,module,exports){
'use strict';

module.exports = function(indicatorMixin, accessor_ohlc) {  // Injected dependencies
  return function() { // Closure function
    var p = {},  // Container for private, direct access mixed in variables
        period = 10,
        samples,
        currentIndex,
        total;

    function indicator(data) {
      indicator.init();
      return data.map(ma).filter(function(d) { return d.value; });
    }

    indicator.init = function() {
      total = 0;
      samples = [];
      currentIndex = 0;
      return indicator;
    };

    function ma(d, i) {
      var value = indicator.average(p.accessor(d));
      if (i+1 < period) value = null;
      return { date: p.accessor.d(d), value: value };
    }

    indicator.average = function(value) {
      total += value;

      if(samples.length+1 < period) {
        samples.push(value);
        return total/++currentIndex;
      }
      else {
        if(samples.length < period) {
          samples.push(value);
          total += value;
        }

        total -= samples[currentIndex];
        samples[currentIndex] = value;
        if(++currentIndex === period) {
          currentIndex = 0;
        }

        return total/period;
      }
    };

    indicator.period = function(_) {
      if (!arguments.length) return period;
      period = _;
      return indicator;
    };

    // Mixin 'superclass' methods and variables
    indicatorMixin(indicator, p, accessor_ohlc());

    return indicator;
  };
};
},{}],19:[function(_dereq_,module,exports){
'use strict';

module.exports = function(indicatorMixin, accessor_ohlc) {  // Injected dependencies
  return function() { // Closure function
    var p = {},  // Container for private, direct access mixed in variables
        period = 20,
        periodD = 3,
        overbought = 80,
        middle = 50,
        oversold = 20;

    function indicator(data) {
      return data.map(function(d, i) {
        if(i >= period+periodD){
          var max = [];
          var min = [];
          var stochasticKBuffer = [];
          for (var per = 0; per < periodD; per++) {
            max.push(0);
            min.push(10000);
            stochasticKBuffer.push(0);
          }
          var stochasticD = 0;
          for (var k = 0; k < periodD; k++) {
            for (var j = 0; j < period; j++) {
              if(data[i-j-k].high > max[k]){
                max[k] = data[i-j-k].high;
              }
              if(data[i-j-k].low < min[k]){
                min[k] = data[i-j-k].low;
              }
            }
            stochasticKBuffer[k] = ((data[i-k].close-min[k])/(max[k]-min[k]))*100;
            stochasticD +=stochasticKBuffer[k];
          }
          var stochasticK =stochasticKBuffer[0];// ((d.close-min)/(max-min))*100;
          stochasticD /= periodD;
          return datum(p.accessor.d(d), stochasticK,stochasticD, middle, overbought, oversold);
        }
        else return datum(p.accessor.d(d));
      }).filter(function(d) { return d.stochasticK; });
    }

    indicator.period = function(_) {
      if (!arguments.length) return period;
      period = _;
      return indicator;
    };
    indicator.periodD = function(_) {
      if (!arguments.length) return periodD;
      periodD = _;
      return indicator;
    };

    indicator.overbought = function(_) {
      if (!arguments.length) return overbought;
      overbought = _;
      return indicator;
    };

    indicator.middle = function(_) {
      if (!arguments.length) return middle;
      middle = _;
      return indicator;
    };

    indicator.oversold = function(_) {
      if (!arguments.length) return oversold;
      oversold = _;
      return indicator;
    };

    // Mixin 'superclass' methods and variables
    indicatorMixin(indicator, p, accessor_ohlc());

    return indicator;
  };
};

function datum(date, stochasticK,stochasticD, middle, overbought, oversold) {
  if(stochasticK) return { date: date, stochasticK: stochasticK,stochasticD:stochasticD, middle: middle, overbought: overbought, oversold: oversold };
  else return { date: date, stochasticK: null,stochasticD:null, middle: null, overbought: null, oversold: null };
}
},{}],20:[function(_dereq_,module,exports){
'use strict';

module.exports = function(indicatorMixin, accessor_ohlc) {  // Injected dependencies
  return function() { // Closure function
    var p = {},  // Container for private, direct access mixed in variables
        period = 20,

        overbought = 80,
        middle = 50,
        oversold = 20;

    function indicator(data) {
      return data.map(function(d, i) {
         if(i >= period){
          var max = 0;
          var maxi = 0;
          var min = 10000;
          var mini = 0;
          for (var j = 0; j < period; j++) {
            if(data[i-j].high > max){
              max = data[i-j].high;
              maxi = j;
            }
            if(data[i-j].low < min){
              min = data[i-j].low;
              mini = j;
            }
          }
          var williams = ((data[i].close-min)/(max-min))*100;
          return datum(p.accessor.d(d), williams, middle, overbought, oversold);
        }
        else return datum(p.accessor.d(d));
      }).filter(function(d) { return d.williams; });
    }

    indicator.period = function(_) {
      if (!arguments.length) return period;
      period = _;
      return indicator;
    };


    indicator.overbought = function(_) {
      if (!arguments.length) return overbought;
      overbought = _;
      return indicator;
    };

    indicator.middle = function(_) {
      if (!arguments.length) return middle;
      middle = _;
      return indicator;
    };

    indicator.oversold = function(_) {
      if (!arguments.length) return oversold;
      oversold = _;
      return indicator;
    };

    // Mixin 'superclass' methods and variables
    indicatorMixin(indicator, p, accessor_ohlc());

    return indicator;
  };
};

function datum(date, williams, middle, overbought, oversold) {
  if(williams) return { date: date, williams: williams, middle: middle, overbought: overbought, oversold: oversold };
  else return { date: date, williams: null, middle: null, overbought: null, oversold: null };
}
},{}],21:[function(_dereq_,module,exports){
'use strict';

module.exports = function(accessor_aroon, plot, plotMixin) {  // Injected dependencies
  return function() { // Closure function
    var p = {};  // Container for private, direct access mixed in variables

    function aroon(g) {
      var group = plot.groupSelect(g, plot.dataMapper.array, p.accessor.d);

      group.entry.append('path').attr('class', 'overbought');
      group.entry.append('path').attr('class', 'oversold');
      group.entry.append('path').attr('class', 'aroon oscillator');
      group.entry.append('path').attr('class', 'aroon oscillatorArea');
      group.entry.append('path').attr('class', 'aroon middle');
      group.entry.append('path').attr('class', 'aroon up');
      group.entry.append('path').attr('class', 'aroon down');
      aroon.refresh(g);
    }

    aroon.refresh = function(g) {
      refresh(g, p.accessor, p.xScale, p.yScale, plot);
    };

    // Mixin 'superclass' methods and variables
    plotMixin(aroon, p, accessor_aroon());

    return aroon;
  };
};

function refresh(g, accessor, x, y, plot) {
  g.selectAll('path.overbought').attr('d', plot.horizontalPathLine(accessor.d, x, accessor.ob, y));
  g.selectAll('path.oversold').attr('d', plot.horizontalPathLine(accessor.d, x, accessor.os, y));
  g.selectAll('path.aroon.oscillator').attr('d', plot.pathLine(accessor.d, x, accessor.oscillator, y));
  g.selectAll('path.aroon.oscillatorArea').attr('d', plot.pathArea(accessor.d, x, accessor.oscillator, y,0));
  g.selectAll('path.aroon.middle').attr('d', plot.pathLine(accessor.d, x, accessor.m, y));
  g.selectAll('path.aroon.up').attr('d', plot.pathLine(accessor.d, x, accessor.up, y));
  g.selectAll('path.aroon.down').attr('d', plot.pathLine(accessor.d, x, accessor.down, y));
}
},{}],22:[function(_dereq_,module,exports){
'use strict';

/**
 * TODO Refactor this to techan.plot.annotation.axis()?
 */
module.exports = function(d3_svg_axis, plot) {  // Injected dependencies
  return function() { // Closure function
    var axis = d3_svg_axis(),
        format,
        point = 4,
        height = 14,
        width = 50,
        translate = [0, 0];

    function annotation(g) {
      g.selectAll('g.translate').data(plot.dataMapper.array).enter()
        .append('g').attr('class', 'translate');

      annotation.refresh(g);
    }

    annotation.refresh = function(g) {
      var fmt = format ? format : (axis.tickFormat() ? axis.tickFormat() : axis.scale().tickFormat());
      refresh(g, plot, axis, fmt, height, width, point, translate);
    };

    annotation.axis = function(_) {
      if(!arguments.length) return axis;
      axis = _;
      return annotation;
    };

    annotation.format = function(_) {
      if(!arguments.length) return format;
      format = _;
      return annotation;
    };

    annotation.height = function(_) {
      if(!arguments.length) return height;
      height = _;
      return annotation;
    };

    annotation.width = function(_) {
      if(!arguments.length) return width;
      width = _;
      return annotation;
    };

    annotation.translate = function(_) {
      if(!arguments.length) return translate;
      translate = _;
      return annotation;
    };

    return annotation;
  };
};

function refresh(g, plot, axis, format, height, width, point, translate) {
  var neg = axis.orient() === 'left' || axis.orient() === 'top' ? -1 : 1,
      translateSelection = g.select('g.translate'),
      dataGroup = plot.groupSelect(translateSelection, filterInvalidValues(axis.scale()));
  dataGroup.entry.append('path');
  dataGroup.entry.append('text');

  translateSelection.attr('transform', 'translate(' + translate[0] + ',' + translate[1] + ')');
  dataGroup.selection.selectAll('path').attr('d', backgroundPath(axis, height, width, point, neg));
  dataGroup.selection.selectAll('text').text(textValue(format)).call(textAttributes, axis, neg);
}

function filterInvalidValues(scale) {
  return function(data) {
    var range = scale.range(),
        start = range[0],
        end = range[range.length - 1];

    range = start < end ? [start, end] : [end, start];

    return data.filter(function (d) {
      if (!d.value) return false;
      var value = scale(d.value);
      return value && !isNaN(value) && range[0] <= value && value <= range[1];
    });
  };
}

function textAttributes(text, axis, neg) {
  var scale = axis.scale();

  switch(axis.orient()) {
    case 'left':
    case 'right':
      text.attr({
        x: neg*(Math.max(axis.innerTickSize(), 0) + axis.tickPadding()),
        y: textPosition(scale),
        dy: '.32em'
      }).style('text-anchor', neg < 0 ? 'end' : 'start');
      break;
    case 'top':
    case 'bottom':
      text.attr({
        x: textPosition(scale),
        y: neg*(Math.max(axis.innerTickSize(), 0) + axis.tickPadding()),
        dy: neg < 0 ? '0em' : '.72em'
      }).style('text-anchor', 'middle');
      break;
  }
}

function textPosition(scale) {
  return function(d) {
    return scale(d.value);
  };
}

function textValue(format) {
  return function(d) {
    return format(d.value);
  };
}

function backgroundPath(axis, height, width, point, neg) {
  return function(d) {
    var scale = axis.scale(),
        value = scale(d.value),
        pt = point;

    switch(axis.orient()) {
      case 'left':
      case 'right':
        var h = 0;

        if(height/2 < point) pt = height/2;
        else h = height/2-point;

        return [
          'M', 0, value,
          'l', neg*axis.innerTickSize(), -pt,
          'l', 0, -h,
          'l', neg*width, 0,
          'l', 0, height,
          'l', neg*-width, 0,
          'l', 0, -h
        ].join(' ');
      case 'top':
      case 'bottom':
        var w = 0;

        if(width/2 < point) pt = width/2;
        else w = width/2-point;

        return [
          'M', value, 0,
          'l', -pt, neg*axis.innerTickSize(),
          'l', -w, 0,
          'l', 0, neg*height,
          'l', width, 0,
          'l', 0, neg*-height,
          'l', -w, 0
        ].join(' ');
      default: throw "Unsupported axis.orient() = " + axis.orient();
    }
  };
}
},{}],23:[function(_dereq_,module,exports){
'use strict';

module.exports = function(d3_scale_linear, d3_extent, accessor_ohlc, plot, plotMixin) {  // Injected dependencies
  return function() { // Closure constructor
    var p = {},  // Container for private, direct access mixed in variables
        volumeOpacity = false;

    function candlestick(g) {
      var group = plot.groupSelect(g, plot.dataMapper.unity, p.accessor.d);

      // Two path's as wick and body can be styled slightly differently (stroke and fills)
      group.entry.append('path').attr('class', 'candle body');
      group.entry.append('path').attr('class', 'candle wick');

      candlestick.refresh(g);
    }

    candlestick.refresh = function(g) {
      if(volumeOpacity) opacity(g, d3_scale_linear, d3_extent, p.accessor.v);
      refresh(g, plot, p.accessor, p.xScale, p.yScale);
    };

    candlestick.volumeOpacity = function(_) {
      if (!arguments.length) return volumeOpacity;
      volumeOpacity = _;
      return candlestick;
    };

    // Mixin 'superclass' methods and variables
    plotMixin(candlestick, p, accessor_ohlc());

    return candlestick;
  };
};

function refresh(g, plot, accessor, x, y) {
  g.selectAll('path.candle.body').attr('d', bodyPath(accessor, x, y)).classed(plot.classedUpDown(accessor));
  g.selectAll('path.candle.wick').attr('d', wickPath(accessor, x, y)).classed(plot.classedUpDown(accessor));
}

function bodyPath(accessor, x, y) {
  return function(d) {
    var path = [],
        open = y(accessor.o(d)),
        close = y(accessor.c(d)),
        rangeBand = x.band(),
        xValue = x(accessor.d(d)) - rangeBand/2;

    path.push(
        'M', xValue, open,
        'l', rangeBand, 0
      );

    // Draw body only if there is a body (there is no stroke, so will not appear anyway)
    if(open != close) {
      path.push(
          'L', xValue + rangeBand, close,
          'l', -rangeBand, 0,
          'L', xValue, open
        );
    }

    return path.join(' ');
  };
}

function wickPath(accessor, x, y) {
  return function(d) {
    var path = [],
        open = y(accessor.o(d)),
        close = y(accessor.c(d)),
        rangeBand = x.band(),
        xPoint = x(accessor.d(d)),
        xValue = xPoint - rangeBand/2;

    // Top
    path.push(
        'M', xPoint, y(accessor.h(d)),
        'L', xPoint, Math.min(open, close)
      );

    // Draw another cross wick if there is no body
    if(open == close) {
      path.push(
          'M', xValue, open,
          'l', rangeBand, 0
        );
    }
    // Bottom
    path.push(
        'M', xPoint, Math.max(open, close),
        'L', xPoint, y(accessor.l(d))
      );

    return path.join(' ');
  };
}

function opacity(g, d3_scale_linear, d3_extent, accessor_volume) {
  var selection = g.selectAll('g.data'),
      volumeOpacityScale = d3_scale_linear()
        .domain(d3_extent(selection.data().map(accessor_volume).filter(function(d) { return !isNaN(d); })))
        .range([0.2, 1]);

  selection.selectAll('path.candle').style('opacity', function(d) {
    var volume = accessor_volume(d);
    return isNaN(volume) ? null : volumeOpacityScale(volume);
  });
}
},{}],24:[function(_dereq_,module,exports){
'use strict';

module.exports = function(d3_select, d3_event, d3_mouse, axisannotation) { // Injected dependencies
  return function() { // Closure function
    var xAnnotation = [axisannotation()],
        yAnnotation = [axisannotation()],
        verticalWireRange,
        horizontalWireRange;

    function crosshair(g) {
      var group = g.selectAll('g.data').data([0]),
          groupEnter = group.enter().append('g').attr('class', 'data').call(display, 'none');

      groupEnter.append('path').attr('class', 'horizontal wire');
      groupEnter.append('path').attr('class', 'vertical wire');

      appendAnnotation(group, groupEnter, d3_select, ['axisannotation', 'x'], xAnnotation);
      appendAnnotation(group, groupEnter, d3_select, ['axisannotation', 'y'], yAnnotation);

      g.selectAll('rect').data([0]).enter()
        .append('rect').style({ fill: 'none', 'pointer-events': 'all'});

      crosshair.refresh(g);
    }

    crosshair.refresh = function(g) {
      var xRange = xAnnotation[0].axis().scale().range(),
          yRange = yAnnotation[0].axis().scale().range(),
          group = g.selectAll('g.data'),
          mouseSelection = g.selectAll('rect');

      mouseSelection.attr({
          x: Math.min(xRange[0], xRange[xRange.length-1]),
          y: Math.min(yRange[0], yRange[yRange.length-1]),
          height: Math.abs(yRange[yRange.length-1] - yRange[0]),
          width: Math.abs(xRange[xRange.length-1] - xRange[0])
        })
        .on('mouseenter', display(g, 'inline'))
        .on('mouseout', display(g, 'none'))
        .on('mousemove', mousemoveRefresh(group, d3_select, d3_mouse, xAnnotation, yAnnotation, verticalWireRange, horizontalWireRange));

      refresh(d3_select, xAnnotation, yAnnotation,
        g.select('path.vertical'), g.select('path.horizontal'),
        g.selectAll('g.axisannotation.x > g'), g.selectAll('g.axisannotation.y > g'),
        verticalWireRange, horizontalWireRange
      );
    };

    crosshair.xAnnotation = function(_) {
      if(!arguments.length) return xAnnotation;
      xAnnotation = _ instanceof Array ? _ : [_];
      return crosshair;
    };

    crosshair.yAnnotation = function(_) {
      if(!arguments.length) return yAnnotation;
      yAnnotation = _ instanceof Array ? _ : [_];
      return crosshair;
    };

    crosshair.verticalWireRange = function(_) {
      if(!arguments.length) return verticalWireRange;
      verticalWireRange = _;
      return crosshair;
    };

    crosshair.horizontalWireRange = function(_) {
      if(!arguments.length) return horizontalWireRange;
      horizontalWireRange = _;
      return crosshair;
    };

    return crosshair;
  };
};

function display(g, style) {
  return function() {
    g.selectAll('g.data').style('display', style);
  };
}

function mousemoveRefresh(group, d3_select, d3_mouse, xAnnotation, yAnnotation, verticalWireRange, horizontalWireRange) {
  return function() {
    var coords = d3_mouse(this),
        x = xAnnotation[0].axis().scale(),
        y = yAnnotation[0].axis().scale();

    refresh(d3_select, xAnnotation, yAnnotation,
      group.select('path.vertical').datum(x.invert(coords[0])),
      group.select('path.horizontal').datum(y.invert(coords[1])),
      group.selectAll('g.axisannotation.x > g').each(updateAnnotationValue(xAnnotation, coords[0])),
      group.selectAll('g.axisannotation.y > g').each(updateAnnotationValue(yAnnotation, coords[1])),
      verticalWireRange, horizontalWireRange
    );
  };
}

function refresh(d3_select, xAnnotation, yAnnotation, xPath, yPath,
                 xAnnotationSelection, yAnnotationSelection,
                 verticalWireRange, horizontalWireRange) {
  var x = xAnnotation[0].axis().scale(),
      y = yAnnotation[0].axis().scale();

  xPath.attr('d', verticalPathLine(x, verticalWireRange || y.range()));
  yPath.attr('d', horizontalPathLine(y, horizontalWireRange || x.range()));
  xAnnotationSelection.each(refreshAnnotation(d3_select, xAnnotation));
  yAnnotationSelection.each(refreshAnnotation(d3_select, yAnnotation));
}

function horizontalPathLine(y, range) {
  return function(d) {
    if(!d) return "M 0 0";
    var value = y(d);
    return ['M', range[0], value, 'L', range[range.length-1], value].join(' ');
  };
}

function verticalPathLine(x, range) {
  return function(d) {
    if(!d) return "M 0 0";
    var value = x(d);
    return ['M', value, range[0], 'L', value, range[range.length-1]].join(' ');
  };
}

function updateAnnotationValue(annotations, value) {
  return function(d, i) {
    // d[0] because only ever 1 value for crosshairs
    d[0].value = annotations[i].axis().scale().invert(value);
  };
}

function appendAnnotation(selection, selectionEnter, d3_select, classes, annotation) {
  selectionEnter.append('g').attr('class', classes.join(' '));

  var annotationSelection = selection.select('g.' + classes.join('.')).selectAll('g')
    .data(annotation.map(function() { return [{ value: null }]; }));

  annotationSelection.exit().remove();
  annotationSelection.enter().append('g').attr('class', function(d, i) { return i; })
    .each(function(d, i) { annotation[i](d3_select(this)); });
}

function refreshAnnotation(d3_select, annotation) {
  return function(d, i) {
    annotation[i].refresh(d3_select(this));
  };
}
},{}],25:[function(_dereq_,module,exports){
'use strict';

module.exports = function(d3) {
  var scale = _dereq_('../scale')(d3),
      accessor = _dereq_('../accessor')(),
      plot = _dereq_('./plot')(d3),
      plotMixin = _dereq_('./plotmixin')(d3.scale.linear, scale.financetime),
      line = _dereq_('./line'),
      axisannotation = _dereq_('./axisannotation')(d3.svg.axis, plot);

  return {
    axisannotation: axisannotation,
    candlestick: _dereq_('./candlestick')(d3.scale.linear, d3.extent, accessor.ohlc, plot, plotMixin),
    crosshair: _dereq_('./crosshair')(d3.select, d3_event, d3.mouse, axisannotation),
    ema: line(accessor.value, plot, plotMixin),
    ohlc: _dereq_('./ohlc')(d3.scale.linear, d3.extent, accessor.ohlc, plot, plotMixin),
    close: line(accessor.ohlc, plot, plotMixin),
    volume: _dereq_('./volume')(accessor.volume, plot, plotMixin),
    rsi: _dereq_('./rsi')(accessor.rsi, plot, plotMixin),
    aroon: _dereq_('./aroon')(accessor.aroon, plot, plotMixin),
    stochastic: _dereq_('./stochastic')(accessor.stochastic, plot, plotMixin),
    williams: _dereq_('./williams')(accessor.williams, plot, plotMixin),
    macd: _dereq_('./macd')(accessor.macd, plot, plotMixin),
    momentum: line(accessor.value, plot, plotMixin, true),
    moneyflow: line(accessor.value, plot, plotMixin, true),
    sma: line(accessor.value, plot, plotMixin),
    supstance: _dereq_('./supstance')(d3.behavior.drag, d3_event, d3.select, accessor.value, plot, plotMixin),
    trendline: _dereq_('./trendline')(d3.behavior.drag, d3_event, d3.select, accessor.trendline, plot, plotMixin)
  };
};

function d3_event() {
  return d3.event;
}
},{"../accessor":3,"../scale":38,"./aroon":21,"./axisannotation":22,"./candlestick":23,"./crosshair":24,"./line":26,"./macd":27,"./ohlc":28,"./plot":29,"./plotmixin":30,"./rsi":31,"./stochastic":32,"./supstance":33,"./trendline":34,"./volume":35,"./williams":36}],26:[function(_dereq_,module,exports){
'use strict';

module.exports = function(accessor_value, plot, plotMixin, showZero) {  // Injected dependencies
  showZero = showZero || false;

  return function() { // Closure function
    var p = {};  // Container for private, direct access mixed in variables

    function line(g) {
      var group = plot.groupSelect(g, plot.dataMapper.array);

      group.entry.append('path').attr('class', 'line');

      if(showZero) {
        group.selection.append('path').attr('class', 'zero');
      }

      line.refresh(g);
    }

    line.refresh = function(g) {
      refresh(g, p.accessor, p.xScale, p.yScale, plot, showZero);
    };

    // Mixin 'superclass' methods and variables
    plotMixin(line, p, accessor_value());

    return line;
  };
};

function refresh(g, accessor, x, y, plot, showZero) {
  g.selectAll('path.line').attr('d', plot.pathLine(accessor.d, x, accessor, y));

  if(showZero) {
    g.selectAll('path.zero').attr('d', plot.horizontalPathLine(x, accessor.z, y));
  }
}
},{}],27:[function(_dereq_,module,exports){
'use strict';

module.exports = function(accessor_macd, plot, plotMixin) {  // Injected dependencies
  return function() { // Closure function
    var p = {};  // Container for private, direct access mixed in variables

    function macd(g) {
      var group = plot.groupSelect(g, plot.dataMapper.array, p.accessor.d);

      var histogramSelection = group.selection
        .append('g').attr('class', 'difference')
        .selectAll('g.difference').data(function(data) { return data; });

      histogramSelection.exit().remove();
      histogramSelection.enter().append('path').attr('class', 'difference');

      group.selection.append('path').attr('class', 'zero');
      group.selection.append('path').attr('class', 'macd');
      group.selection.append('path').attr('class', 'signal');

      macd.refresh(g);
    }

    macd.refresh = function(g) {
      refresh(g, p.accessor, p.xScale, p.yScale, plot);
    };

    // Mixin 'superclass' methods and variables
    plotMixin(macd, p, accessor_macd());

    return macd;
  };
};

function refresh(g, accessor, x, y, plot) {
  g.selectAll('path.difference').attr('d', differencePath(accessor, x, y));
  g.selectAll('path.zero').attr('d', plot.horizontalPathLine(accessor.d, x, accessor.z, y));
  g.selectAll('path.macd').attr('d', plot.pathLine(accessor.d, x, accessor.m, y));
  g.selectAll('path.signal').attr('d', plot.pathLine(accessor.d, x, accessor.s, y));
}

function differencePath(accessor, x, y) {
  return function(d) {
    var zero = y(0),
        height = y(accessor.dif(d)) - zero,
        rangeBand = x.band(),
        xValue = x(accessor.d(d)) - rangeBand/2;

    return [
        'M', xValue, zero,
        'l', 0, height,
        'l', rangeBand, 0,
        'l', 0, -height
      ].join(' ');
  };
}
},{}],28:[function(_dereq_,module,exports){
'use strict';

module.exports = function(d3_scale_linear, d3_extent, accessor_ohlc, plot, plotMixin) {  // Injected dependencies
  return function() { // Closure constructor
    var p = {};  // Container for private, direct access mixed in variables

    function ohlc(g) {
      plot.groupSelect(g, plot.dataMapper.unity, p.accessor.d)
        .entry.append('path').attr({ class: 'ohlc' });

      ohlc.refresh(g);
    }

    ohlc.refresh = function(g) {
      refresh(g, plot, p.accessor, p.xScale, p.yScale);
    };

    // Mixin 'superclass' methods and variables
    plotMixin(ohlc, p, accessor_ohlc());

    return ohlc;
  };
};

function refresh(g, plot, accessor, x, y) {
  g.selectAll('path.ohlc').attr({ d: ohlcPath(accessor, x, y) }).classed(plot.classedUpDown(accessor));
}

function ohlcPath(accessor, x, y) {
  return function(d) {
    var open = y(accessor.o(d)),
        close = y(accessor.c(d)),
        rangeBand = x.band(),
        xPoint = x(accessor.d(d)),
        xValue = xPoint - rangeBand/2;

    return [
        'M', xValue, open,
        'l', rangeBand/2, 0,
        'M', xPoint, y(accessor.h(d)),
        'L', xPoint, y(accessor.l(d)),
        'M', xPoint, close,
        'l', rangeBand/2, 0
      ].join(' ');
  };
}
},{}],29:[function(_dereq_,module,exports){
'use strict';

module.exports = function(d3) {
  function dataSelection(g, dataMapper, accessor_date) {
    var selection = g.selectAll('g.data').data(dataMapper, accessor_date);
    selection.exit().remove();
    return selection;
  }

  function dataEntry(dataSelection) {
    return dataSelection.enter().append('g').attr('class', 'data');
  }

  return {
    dataMapper: {
      unity: function(d) { return d; },
      array: function(d) { return [d]; }
    },

    dataSelection: dataSelection,

    dataEntry: dataEntry,

    groupSelect: function(g, dataMapper, accessor_date) {
      var selection = dataSelection(g, dataMapper, accessor_date),
          entry = dataEntry(selection);
      return {
        selection: selection,
        entry: entry
      };
    },

    classedUpDown: function(accessor) {
      return {
        up: function(d) { return accessor.o(d) < accessor.c(d); },
        down: function(d) { return accessor.o(d) > accessor.c(d); }
      };
    },

    horizontalPathLine: function(accessor_date, x, accessor_value, y) {
      return function(d) {
        var firstDatum = d[0],
            lastDatum = d[d.length-1];

        return [
            'M', x(accessor_date(firstDatum)), y(accessor_value(firstDatum)),
            'L', x(accessor_date(lastDatum)), y(accessor_value(lastDatum))
          ].join(' ');
      };
    },

    pathLine: function(accessor_date, x, accessor_value, y) {
      return d3.svg.line().interpolate('monotone')
        .x(function(d) { return x(accessor_date(d)); } )
        .y(function(d) { return y(accessor_value(d)); } );
    },

      pathArea: function(accessor_date, x, accessor_value, y, yBase) {
          return d3.svg.area().interpolate('monotone')
              .x(function(d) { return x(accessor_date(d)); } )
              .y0(function(d) { return y(yBase);})
              .y1(function(d) { return y(accessor_value(d)); } );
      }
  };
};
},{}],30:[function(_dereq_,module,exports){
'use strict';

module.exports = function(d3_scale_linear, techan_scale_financetime) {
  function plotMixin(source, priv, accessor) {
    var xScale = techan_scale_financetime(),
        yScale = d3_scale_linear();

    // Mixin the functions to the source
    source.accessor = function(_) {
      if (!arguments.length) return accessor;
      accessor = _;
      return bind();
    };

    source.xScale = function(_) {
      if (!arguments.length) return xScale;
      xScale = _;
      return bind();
    };

    source.yScale = function(_) {
      if (!arguments.length) return yScale;
      yScale = _;
      return bind();
    };

    // Add in the private, direct access variables
    function bind() {
      priv.xScale = xScale;
      priv.yScale = yScale;
      priv.accessor = accessor;

      return source;
    }

    bind();
  }

  return plotMixin;
};
},{}],31:[function(_dereq_,module,exports){
'use strict';

module.exports = function(accessor_rsi, plot, plotMixin) {  // Injected dependencies
  return function() { // Closure function
    var p = {};  // Container for private, direct access mixed in variables

    function rsi(g) {
      var group = plot.groupSelect(g, plot.dataMapper.array, p.accessor.d);

      group.entry.append('path').attr('class', 'overbought');
      group.entry.append('path').attr('class', 'middle');
      group.entry.append('path').attr('class', 'oversold');
      group.entry.append('path').attr('class', 'rsi');

      rsi.refresh(g);
    }

    rsi.refresh = function(g) {
      refresh(g, p.accessor, p.xScale, p.yScale, plot);
    };

    // Mixin 'superclass' methods and variables
    plotMixin(rsi, p, accessor_rsi());

    return rsi;
  };
};

function refresh(g, accessor, x, y, plot) {
  g.selectAll('path.overbought').attr('d', plot.horizontalPathLine(accessor.d, x, accessor.ob, y));
  g.selectAll('path.middle').attr('d', plot.horizontalPathLine(accessor.d, x, accessor.m, y));
  g.selectAll('path.oversold').attr('d', plot.horizontalPathLine(accessor.d, x, accessor.os, y));
  g.selectAll('path.rsi').attr('d', plot.pathLine(accessor.d, x, accessor.r, y));
}
},{}],32:[function(_dereq_,module,exports){
'use strict';

module.exports = function(accessor_stochastic, plot, plotMixin) {  // Injected dependencies
  return function() { // Closure function
    var p = {};  // Container for private, direct access mixed in variables

    function stochastic(g) {
      var group = plot.groupSelect(g, plot.dataMapper.array, p.accessor.d);

      group.entry.append('path').attr('class', 'overbought');
      group.entry.append('path').attr('class', 'oversold');
      group.entry.append('path').attr('class', 'stochastic up');
      group.entry.append('path').attr('class', 'stochastic down');
      stochastic.refresh(g);
    }

    stochastic.refresh = function(g) {
      refresh(g, p.accessor, p.xScale, p.yScale, plot);
    };

    // Mixin 'superclass' methods and variables
    plotMixin(stochastic, p, accessor_stochastic());

    return stochastic;
  };
};

function refresh(g, accessor, x, y, plot) {
  g.selectAll('path.overbought').attr('d', plot.horizontalPathLine(accessor.d, x, accessor.ob, y));
  g.selectAll('path.oversold').attr('d', plot.horizontalPathLine(accessor.d, x, accessor.os, y));
  g.selectAll('path.stochastic.up').attr('d', plot.pathLine(accessor.d, x, accessor.k, y));
  g.selectAll('path.stochastic.down').attr('d', plot.pathLine(accessor.d, x, accessor.sd, y));
}
},{}],33:[function(_dereq_,module,exports){
'use strict';

module.exports = function(d3_behavior_drag, d3_event, d3_select, accessor_value, plot, plotMixin) {  // Injected dependencies
  return function() { // Closure function
    var p = {};  // Container for private, direct access mixed in variables

    function supstance(g) {
      var group = plot.groupSelect(g, plot.dataMapper.unity);

      group.entry.append('path').attr('class', 'supstance');

      group.entry.append('g').attr('class', 'interaction').style({ opacity: 0, fill: 'none' })
        .append('path').style('stroke-width', 16);

      supstance.refresh(g);
    }

    supstance.refresh = function(g) {
      refresh(g, p.accessor, p.xScale, p.yScale);
    };

    supstance.drag = function(g) {
      g.selectAll('.interaction path')
        .call(dragBody(d3_behavior_drag, d3_event, d3_select, p.accessor, p.xScale, p.yScale));
    };

    // Mixin 'superclass' methods and variables
    plotMixin(supstance, p, accessor_value());

    return supstance;
  };
};

function refresh(g, accessor, x, y) {
  g.selectAll('path.supstance').attr('d', supstancePath(accessor, x, y));
  g.selectAll('.interaction path').attr('d', supstancePath(accessor, x, y));
}

function supstancePath(accessor, x, y) {
  return function(d) {
    var path = [],
        range = x.range();

    path.push('M', range[0], y(accessor.v(d)));
    path.push('L', range[range.length-1], y(accessor.v(d)));

    return path.join(' ');
  };
}

function dragBody(d3_behavior_drag, d3_event, d3_select, accessor, x, y) {
  return d3_behavior_drag()
    .origin(function(d) {
      // TODO Fire listeners
      return { x: 0, y: y(accessor.v(d)) };
    })
    .on('drag', function(d) {
      accessor.v(d, y.invert(d3_event().y));
      refresh(d3_select(this.parentNode.parentNode), accessor, x, y);
      // TODO Fire listeners
    });
}
},{}],34:[function(_dereq_,module,exports){
'use strict';

module.exports = function(d3_behavior_drag, d3_event, d3_select, accessor_trendline, plot, plotMixin) {  // Injected dependencies
  return function() { // Closure function
    var p = {};  // Container for private, direct access mixed in variables

    function trendline(g) {
      var group = plot.groupSelect(g, plot.dataMapper.unity);

      group.entry.append('path').attr('class', 'trendline');

      var interaction = group.entry.append('g').attr('class', 'interaction').style({ opacity: 0, fill: 'none' });
      interaction.append('path').attr('class', 'body').style('stroke-width', 16);
      interaction.append('circle').attr({ class: 'start', r: 8 });
      interaction.append('circle').attr({ class: 'end', r: 8 });

      trendline.refresh(g);
    }

    trendline.refresh = function(g) {
      refresh(g, p.accessor, p.xScale, p.yScale);
    };

    trendline.drag = function(g) {
      // TODO Emit events
      g.selectAll('.interaction circle.start')
        .call(dragEnd(d3_behavior_drag, d3_event, d3_select, p.accessor, p.accessor.sd, p.xScale, p.accessor.sv, p.yScale));
      g.selectAll('.interaction circle.end')
        .call(dragEnd(d3_behavior_drag, d3_event, d3_select, p.accessor, p.accessor.ed, p.xScale, p.accessor.ev, p.yScale));
      g.selectAll('.interaction path.body')
        .call(dragBody(d3_behavior_drag, d3_event, d3_select, p.accessor, p.xScale, p.yScale));
    };

    // TODO Add mouseover, mouseout listener support for drag/user update events

    // Mixin 'superclass' methods and variables
    plotMixin(trendline, p, accessor_trendline());

    return trendline;
  };
};

function refresh(g, accessor, x, y) {
  g.selectAll('path.trendline').attr('d', trendlinePath(accessor, x, y));
  g.selectAll('.interaction path.body').attr('d', trendlinePath(accessor, x, y));
  g.selectAll('.interaction circle.start').attr(interactionEnds(accessor.sd, x, accessor.sv, y));
  g.selectAll('.interaction circle.end').attr(interactionEnds(accessor.ed, x, accessor.ev, y));
}

function trendlinePath(accessor, x, y) {
  return function(d) {
    var path = [];

    path.push('M', x(accessor.sd(d)), y(accessor.sv(d)));
    path.push('L', x(accessor.ed(d)), y(accessor.ev(d)));

    return path.join(' ');
  };
}

function interactionEnds(accessor_x, x, accessor_y, y) {
  return {
    cx: function(d) { return x(accessor_x(d)); },
    cy: function(d) { return y(accessor_y(d)); }
  };
}

function dragEnd(d3_behavior_drag, d3_event, d3_select, accessor, accessor_x, x, accessor_y, y) {
  return d3_behavior_drag()
    .origin(function(d) {
      // TODO Fire listeners dragstart
      return { x: x(accessor_x(d)), y: y(accessor_y(d)) };
    })
    .on('drag', function(d) {
      updateEnd(accessor_x, x, d3_event().x, accessor_y, y, d3_event().y, d);
      refresh(d3_select(this.parentNode.parentNode), accessor, x, y);
      // TODO Fire listeners dragging
    });
}

function dragBody(d3_behavior_drag, d3_event, d3_select, accessor, x, y) {
  var dragStart = {}; // State information, grabs the start coords of the line
  return d3_behavior_drag()
    .origin(function(d) {
      dragStart.start = { date: x(accessor.sd(d)), value: y(accessor.sv(d)) };
      dragStart.end = { date: x(accessor.ed(d)), value: y(accessor.ev(d)) };
      // TODO Fire listeners
      return { x: 0, y: 0 };
    })
    .on('drag', function(d) {
      updateEnd(accessor.sd, x, d3_event().x + dragStart.start.date,
                accessor.sv, y, d3_event().y + dragStart.start.value,
                d);
      updateEnd(accessor.ed, x, d3_event().x + dragStart.end.date,
                accessor.ev, y, d3_event().y + dragStart.end.value,
                d);
      refresh(d3_select(this.parentNode.parentNode), accessor, x, y);
      // TODO Fire listeners
    });
}

function updateEnd(accessor_x, x, xValue, accessor_y, y, yValue, d) {
  var date = x.invert(xValue);
  if(date) accessor_x(d, date);
  accessor_y(d, y.invert(yValue));
}
},{}],35:[function(_dereq_,module,exports){
'use strict';

module.exports = function(accessor_volume, plot, plotMixin) {  // Injected dependencies
  return function() { // Closure function
    var p = {};  // Container for private, direct access mixed in variables

    function volume(g) {
      var group = plot.groupSelect(g, plot.dataMapper.unity, p.accessor.d)
        .entry.append('path')
          .attr('class', 'volume');

      if(p.accessor.o && p.accessor.c) {
        group.classed(plot.classedUpDown(p.accessor));
      }

      volume.refresh(g);
    }

    volume.refresh = function(g) {
      refresh(g, p.accessor, p.xScale, p.yScale);
    };

    // Mixin 'superclass' methods and variables
    plotMixin(volume, p, accessor_volume());

    return volume;
  };
};

function refresh(g, accessor, x, y) {
  g.selectAll('path.volume').attr('d', volumePath(accessor, x, y));
}

function volumePath(accessor, x, y) {
  return function(d) {
    var vol = accessor.v(d);

    if(isNaN(vol)) return null;

    var zero = y(0),
        height = y(vol) - zero,
        rangeBand = x.band(),
        xValue = x(accessor.d(d)) - rangeBand/2;

    return [
        'M', xValue, zero,
        'l', 0, height,
        'l', rangeBand, 0,
        'l', 0, -height
      ].join(' ');
  };
}
},{}],36:[function(_dereq_,module,exports){
'use strict';

module.exports = function(accessor_williams, plot, plotMixin) {  // Injected dependencies
  return function() { // Closure function
    var p = {};  // Container for private, direct access mixed in variables

    function williams(g) {
      var group = plot.groupSelect(g, plot.dataMapper.array, p.accessor.d);
      group.entry.append('path').attr('class', 'williams up');
      williams.refresh(g);
    }

    williams.refresh = function(g) {
      refresh(g, p.accessor, p.xScale, p.yScale, plot);
    };

    // Mixin 'superclass' methods and variables
    plotMixin(williams, p, accessor_williams());

    return williams;
  };
};

function refresh(g, accessor, x, y, plot) {
  g.selectAll('path.williams.up').attr('d', plot.pathLine(accessor.d, x, accessor.w, y));
}
},{}],37:[function(_dereq_,module,exports){
'use strict';

/*
 Finance time scale which is not necessarily continuous, is required to be plot continuous. Finance scale
 generally contains data points on days where a market is open but no points when closed, such as weekday
 and weekends respectively. When plot, is done so without weekend gaps.
 */
module.exports = function(d3_scale_linear, d3_time, d3_bisect, techan_util_rebindCallback, widen, zoomable) {  // Injected dependencies
  function financetime(index, domain) {
    var dateIndexMap,
        tickState = { tickFormat: dailyTickMethod[dailyTickMethod.length-1][2] },
        band = 3;

    index = index || d3_scale_linear();
    domain = domain || [new Date(0), new Date(1)];

    /**
     * Scales the value to domain. If the value is not within the domain, will currently brutally round the data:
     * - If before min domain, will round to 1 index value before min domain
     * - If after max domain, will round to 1 index value after min domain
     * - If within domain, but not mapped to domain value, uses d3.bisect to find nearest domain index
     *
     * This logic was not required until the domain was being updated and scales re-rendered and this line
     * https://github.com/mbostock/d3/blob/abbe1c75c16c3e9cb08b1d0872f4a19890d3bb58/src/svg/axis.js#L107 was causing error.
     * New scale generated ticks that old scale did not have, causing error during transform. To avoid error this logic
     * was added.
     *
     * @param x The value to scale
     * @returns {*}
     */
    function scale(x) {
      var mappedIndex = dateIndexMap[+x];

      // Make sure the value has been mapped, if not, determine if it's just before, round in, or just after domain
      if(mappedIndex === undefined) {
        if(domain[0] > x) mappedIndex = -1; // Less than min, round just out of domain
        else mappedIndex = d3_bisect(domain, x); // else let bisect determine where in or just after than domain it is
      }

      return index(mappedIndex);
    }

    scale.invert = function(y) {
      var i = scale.invertToIndex(y);
      return i === null ? null : domain[i];
    };

    scale.invertToIndex = function(y) {
      var i = Math.round(index.invert(y));
      return domain[i] ? Math.abs(i) : null;
    };

    /**
     * As the underlying structure relies on a full array, ensure the full domain is passed here,
     * not just min and max values.
     *
     * @param _ The full domain array
     * @returns {*}
     */
    scale.domain = function(_) {
      if (!arguments.length) {
        var visible = index.domain();
        visible = [
          Math.ceil(visible[0]), // If min is fraction, it is partially out of view, round up (ceil)
          Math.floor(visible[visible.length-1]) // If max is fraction, is partially out of view, round down (floor)
        ];
        return domain.slice(visible[0], visible[visible.length-1]+1); // Grab visible domain, inclusive
      }

      domain = _;
      domainMap();
      index.domain([0, domain.length-1]);
      zoomed();
      // Widen the outer edges by pulling the domain in to ensure start and end bands are fully visible
      index.domain(index.range().map(widen(0.65, band)).map(index.invert));
      return zoomed();
    };

    function zoomed() {
      band = rangeBand(index, domain);
      return scale;
    }

    function domainMap() {
      dateIndexMap = lookupIndex(domain);
    }

    scale.copy = function() {
      return financetime(index.copy(), domain);
    };

    /**
     * Equivalent to d3's ordinal.rangeBand(). It could not be named rangeBand as d3 uses the method
     * to determine how axis ticks should be rendered. This scale is a hybrid ordinal and linear scale,
     * such that scale(x) returns y at center of the band as does d3.scale.linear()(x) does, whereas
     * d3.scale.ordinal()(x) returns y at the beginning of the band. When rendering svg axis, d3
     * compensates for this checking if rangeBand is defined and compensates as such.
     * @returns {number}
     */
    scale.band = function() {
      return band;
    };

    scale.zoomable = function() {
      return zoomable(index, zoomed);
    };

    /*
     * Ticks based heavily on d3 implementation. Attempted to implement this using composition with d3.time.scale,
     * but in the end there were sufficient differences to 'roll my own'.
     * - Different base tick steps: millis not required (yet!)
     * - State based tick formatting given the non continuous, even steps of ticks
     * - Supporting daily and intraday continuous (no gaps) plotting
     * https://github.com/mbostock/d3/blob/e03b6454294e1c0bbe3125f787df56c468658d4e/src/time/scale.js#L67
     */
    /**
     * Generates ticks as continuous as possible against the underlying domain. Where continuous time ticks
     * fall on where there is no matching domain (such as weekend or holiday day), it will be replaced with
     * the nearest domain datum ahead of the tick to keep close to continuous.
     * @param interval
     * @param steps
     * @returns {*}
     */
    scale.ticks = function(interval, steps) {
      var visibleDomain = scale.domain();

      if(!visibleDomain.length) return []; // Nothing is visible, no ticks to show

      var method = interval === undefined ? tickMethod(visibleDomain, 10) :
                    typeof interval === 'number' ? tickMethod(visibleDomain, interval) : null;

      tickState.tickFormat = method ? method[2] : tickMethod(visibleDomain, 10)[2];

      if(method) {
        interval = method[0];
        steps = method[1];
      }

      var intervalRange = interval.range(visibleDomain[0], +visibleDomain[visibleDomain.length-1]+1, steps);

      return intervalRange                  // Interval, possibly contains values not in domain
        .map(domainTicks(visibleDomain))    // Line up interval ticks with domain, possibly adding duplicates
        .reduce(sequentialDuplicates, []);  // Filter out duplicates, produce new 'reduced' array
    };

    /**
     * NOTE: The type of tick format returned is dependant on ticks that were generated. To obtain the correct
     * format for ticks, ensure ticks function is called first, otherwise a default tickFormat will be returned
     * which may not be the optimal representation of the current domain state.
     * @returns {Function}
     */
    scale.tickFormat = function() {
      return function(date) {
        return tickState.tickFormat(date);
      };
    };

    techan_util_rebindCallback(scale, index, zoomed, 'range', 'interpolate', 'clamp', 'nice');

    domainMap();
    return zoomed();
  }

  function rangeBand(linear, domain) {
    return (Math.abs(linear(domain.length-1) - linear(0))/Math.max(1, domain.length-1))*0.8;
  }

  var dayFormat = d3_time.format('%b %e'),
      yearFormat = d3_time.format.multi([
        ['%b %Y', function(d) { return d.getMonth(); }],
        ['%Y', function() { return true; }]
      ]),
      intraDayFormat = d3_time.format.multi([
        [":%S", function(d) { return d.getSeconds(); }],
        ["%I:%M", function(d) { return d.getMinutes(); }],
        ["%I %p", function(d) { return d.getHours(); }]
      ]),
      genericTickMethod = [d3_time.second, 1, d3_time.format.multi([
          [":%S", function(d) { return d.getSeconds(); }],
          ["%I:%M", function(d) { return d.getMinutes(); }],
          ["%I %p", function(d) { return d.getHours(); }],
          ['%b %e', function() { return true; }]
        ])
      ];

  var dailyStep = 864e5,
      dailyTickSteps = [
        dailyStep,  // 1-day
        6048e5,     // 1-week
        2592e6,     // 1-month
        7776e6,     // 3-month
        31536e6     // 1-year
      ];

  var dailyTickMethod = [
    [d3_time.day, 1, dayFormat],
    [d3_time.monday, 1, dayFormat],
    [d3_time.month, 1, yearFormat],
    [d3_time.month, 3, yearFormat],
    [d3_time.year, 1, yearFormat]
  ];

  var intraDayTickSteps = [
    1e3,    // 1-second
    5e3,    // 5-second
    15e3,   // 15-second
    3e4,    // 30-second
    6e4,    // 1-minute
    3e5,    // 5-minute
    9e5,    // 15-minute
    18e5,   // 30-minute
    36e5,   // 1-hour
    108e5,  // 3-hour
    216e5,  // 6-hour
    432e5,  // 12-hour
    864e5   // 1-day
  ];

  var intraDayTickMethod = [
    [d3_time.second, 1, intraDayFormat],
    [d3_time.second, 5, intraDayFormat],
    [d3_time.second, 15, intraDayFormat],
    [d3_time.second, 30, intraDayFormat],
    [d3_time.minute, 1, intraDayFormat],
    [d3_time.minute, 5, intraDayFormat],
    [d3_time.minute, 15, intraDayFormat],
    [d3_time.minute, 30, intraDayFormat],
    [d3_time.hour, 1, intraDayFormat],
    [d3_time.hour, 3, intraDayFormat],
    [d3_time.hour, 6, intraDayFormat],
    [d3_time.hour, 12, intraDayFormat],
    [d3_time.day, 1, dayFormat]
  ];

  function tickMethod(visibleDomain, count) {
    if(visibleDomain.length == 1) return genericTickMethod; // If we only have 1 to display, show the generic tick method

    // Determine whether we're showing daily or intraday data
    var intraDay = (visibleDomain[visibleDomain.length-1] - visibleDomain[0])/dailyStep < 1,
        tickMethods = intraDay ? intraDayTickMethod : dailyTickMethod,
        tickSteps = intraDay ? intraDayTickSteps : dailyTickSteps,
        target = (visibleDomain[visibleDomain.length-1] - visibleDomain[0])/count,
        i = d3_bisect(tickSteps, target);

    return i ? tickMethods[target/tickSteps[i-1] < tickSteps[i]/target ? i-1 : i] : tickMethods[i];
  }

  function lookupIndex(array) {
    var lookup = {};
    array.forEach(function(d, i) { lookup[+d] = i; });
    return lookup;
  }

  function domainTicks(visibleDomain) {
    var visibleDomainLookup = lookupIndex(visibleDomain); // Quickly lookup index of the domain

    return function(d) {
      var value = visibleDomainLookup[+d];
      if (value !== undefined) return visibleDomain[value];
      return visibleDomain[d3_bisect(visibleDomain, d)];
    };
  }

  function sequentialDuplicates(previous, current) {
    if(previous.length === 0 || previous[previous.length-1] !== current) previous.push(current);
    return previous;
  }

  return financetime;
};
},{}],38:[function(_dereq_,module,exports){
'use strict';

module.exports = function(d3) {
  var zoomable = _dereq_('./zoomable')(),
      util = _dereq_('../util')(),
      accessors = _dereq_('../accessor')(),
      financetime = _dereq_('./financetime')(d3.scale.linear, d3.time, d3.bisect, util.rebindCallback, widen, zoomable);

  return {
    financetime: financetime,

    analysis: {
      supstance: function(data, accessor) {
        return d3.scale.linear();
      },

      trendline: function(data, accessor) {
        return d3.scale.linear();
      }
    },

    plot: {
      time: function(data, accessor) {
        accessor = accessor || accessors.value();
        return financetime().domain(data.map(accessor.d));
      },

      percent: function (scale, reference) {
        var domain = scale.domain();
        reference = reference || domain[0];
        return scale.copy().domain([domain[0], domain[domain.length-1]].map(function(d) { return (d-reference)/reference; }));
      },

      ohlc: function (data, accessor) {
        accessor = accessor || accessors.ohlc();
        return d3.scale.linear()
          .domain([d3.min(data.map(accessor.low())), d3.max(data.map(accessor.high()))].map(widen(0.02)))
          .range([1, 0]);
      },

      volume: function (data, accessor) {
        accessor = accessor || accessors.ohlc().v;
        return d3.scale.linear()
          .domain([0, d3.max(data.map(accessor))*1.15])
          .range([1, 0]);
      },

      rsi: function () {
        return d3.scale.linear().domain([0, 100])
          .range([1, 0]);
      },

      aroon: function () {
        return d3.scale.linear().domain([-100, 100])
          .range([1, 0]);
      },
      stochastic: function () {
        return d3.scale.linear().domain([0, 100])
          .range([1, 0]);
      },

      williams: function () {
        return d3.scale.linear().domain([0, 100])
          .range([1, 0]);
      },

      momentum: function(data, accessor) {
        accessor = accessor || accessors.value();
        return pathScale(d3, data, accessor, 0.04);
      },

      moneyflow: function(data, accessor) {
        accessor = accessor || accessors.value();
        return pathScale(d3, data, accessor, 0.04);
      },

      macd: function(data, accessor) {
        accessor = accessor || accessors.macd();
        return pathScale(d3, data, accessor, 0.04);
      },

      movingaverage: function(data, accessor) {
        accessor = accessor || accessors.value();
        return pathScale(d3, data, accessor);
      }
    },

    position: {

    }
  };
};

function pathDomain(d3, data, accessor, widening) {
  return data.length > 0 ? d3.extent(data, accessor).map(widen(widening)) : null;
}

function pathScale(d3, data, accessor, widening) {
  return d3.scale.linear().domain(pathDomain(d3, data, accessor, widening))
    .range([1, 0]);
}

/**
 * Only to be used on an array of 2 elements [min, max]
 * @param padding
 * @param width
 * @returns {Function}
 */
function widen(widening, width) {
  widening = widening || 0;

  return function(d, i, array) {
    if(array.length > 2) throw "array.length > 2 unsupported. array.length = " + array.length;
    width = width || (array[array.length-1] - array[0]);
    return d + (i*2-1)*width*widening;
  };
}
},{"../accessor":3,"../util":41,"./financetime":37,"./zoomable":39}],39:[function(_dereq_,module,exports){
'use strict';

/**
 * Creates a decorated zoomable view of the passed scale. As the finance scale deals with an array and integer positions within the
 * array, it does not support the d3 zoom behaviour. d3 zoom behaviour rescales the input domain.
 * Finance scale is composed of an array of dates which is fixed in length and position and a linear scale mapping index
 * to range. The linear scale can be zoomed. This object decorates the scale with only the methods required by zoom
 * (invert, domain, copy). On zoom, calls the based zoomed callback.
 *
 * NOTE: This is not a complete scale, it will throw errors if it is used for anything else but zooming
 */
module.exports = function() {
  function zoomable(linear, zoomed) {
    var scale = {},
        domainLimit = linear.domain();

    scale.invert = linear.invert;

    scale.domain = function(_) {
      if(!arguments.length) throw "zoomable is a write only domain. Use this scale for zooming only";
      linear.domain([Math.max(domainLimit[0], _[0]), Math.min(domainLimit[1], _[1])]);
      if(zoomed) zoomed(); // Callback to that we have been zoomed
      return scale;
    };

    scale.range = function(_) {
      if(!arguments.length) return linear.range();
      throw "zoomable is a read only range. Use this scale for zooming only";
    };

    scale.copy = function() {
      return zoomable(linear.copy(), zoomed);
    };

    return scale;
  }

  return zoomable;
};
},{}],40:[function(_dereq_,module,exports){
'use strict';

module.exports = (function(d3) {
  return {
    version: _dereq_('../build/version'),
    accessor: _dereq_('./accessor')(),
    indicator: _dereq_('./indicator')(),
    plot: _dereq_('./plot')(d3),
    scale: _dereq_('./scale')(d3)
  };
})(d3);
},{"../build/version":1,"./accessor":3,"./indicator":14,"./plot":25,"./scale":38}],41:[function(_dereq_,module,exports){
'use strict';

module.exports = function() {
  return {
    rebindCallback: rebindCallback,

    rebind: function(target, source) {
      var newArgs = Array.prototype.slice.call(arguments, 0);
      newArgs.splice(2, 0, undefined);
      return rebindCallback.apply(this, newArgs);
    }
  };
};

/*
 Slight modification to d3.rebind taking a post set callback
 https://github.com/mbostock/d3/blob/master/src/core/rebind.js
 */
function rebindCallback(target, source, postSetCallback) {
  var i = 2, n = arguments.length, method;
  while (++i < n) target[method = arguments[i]] = doRebind(target, source, source[method], postSetCallback);
  return target;
}

function doRebind(target, source, method, postSetCallback) {
  return function() {
    var value = method.apply(source, arguments);
    if(postSetCallback && value === source) postSetCallback();
    return value === source ? target : value;
  };
}
},{}]},{},[40])
(40)
});