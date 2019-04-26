
// export object
module.exports = {

    // TODO:
  
    sendError: function(err, req, res) {
      res.status(500).send({error: err});
    }
  
  };