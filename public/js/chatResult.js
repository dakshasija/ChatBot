  var chat = new function() {
    this.saveChat = function(x, callback) {
        execute('saveChat', x, callback, callback);
      }
}
