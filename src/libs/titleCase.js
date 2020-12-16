module.exports.titleCase = function(str) {
  return str.replace(/(?:^|\s)\w/g, function(match) {
    return match.toUpperCase();
  });
}
