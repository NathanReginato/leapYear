module.exports = {
  leap: function (year) {
    if (year % 4 === 0) {
      return true
    } else {
      return false;
    }
  }
}
