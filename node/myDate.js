 function myDateTime () {
  console.log('h');
    return Date();

  }

  module.exports.myDateTime = myDateTime

  exports.myDateTime = function () {
    return Date();
  };