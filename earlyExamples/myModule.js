function hello(name) {
  return name;
}


function helloDay(name, info) {
  return hello(name) + " " + info;
}

module.exports = {helloDay: helloDay};
