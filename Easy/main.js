

function exercise(activity) {
  if (info == "running") {
    return function () {
      return `Today's Exercise: running`
    }
  } else {
    return function () {
      return `Today's Exercise: swimming`
    }
  }

}

var run = exercise(`running`);
console.log(run());

var swim = exercise(`swimming`);
console.log(swim());