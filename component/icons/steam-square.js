import React from 'react'

    export default function anonymous(params
/**/) {
var evalColor = function () {
    if (typeof params.color === 'function') {
        return params.color;
    } else {
        return function () {
            return params.color;
        };
    }
}();
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1370 647q0-80-57-136.5t-137-56.5-136.5 57-56.5 136q0 80 56.5 136.5t136.5 56.5 137-56.5 57-136.5zm-610 588q0 83-58 140.5t-140 57.5q-56 0-103-29t-72-77q52 20 98 40 60 24 120-1.5t85-86.5q24-60-1.5-120t-86.5-84l-82-33q22-5 42-5 82 0 140 57.5t58 140.5zm904-819v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-153l172 69q20 92 93.5 152t168.5 60q104 0 181-70t87-173l345-252q150 0 255.5-105.5t105.5-254.5q0-150-105.5-255.5t-255.5-105.5q-148 0-253 104.5t-107 252.5l-225 322q-9-1-28-1-75 0-137 37l-297-119v-468q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5zm-247 233q0 100-71 170.5t-171 70.5-170.5-70.5-70.5-170.5 70.5-171 170.5-71q101 0 171.5 70.5t70.5 171.5z' }));;
}