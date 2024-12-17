//

function callable() {
  return '';
}

// callable.call(this,"ssss")

Function.prototype.MyCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error('not a callable function');
  }
  context.fn = this;
  context.fn(...args);
};

callable.MyCall(this, 'suraj');

Function.prototype.MyApply = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error('not a callable function');
  }
  if (!Array.isArray(args)) {
    throw new Error('not an array');
  }
  context.fn = this;
  context.fn(...args);
};

callable.MyApply(this, ['suraj']);

Function.prototype.MyBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error('not a callable function');
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newBind = callable.MyBind(this, 'suraj');
newBind();


// Once pollyfill
function once(fn, context) {
  let ran;
  return function () {
    if (fn) {
      ran = fn.call(context, arguments);
      fn = null;
    }
    return ran;
  };
}

const onceInstance = once(() => console.log('ddddsddd'), this);



