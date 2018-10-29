module.exports = (app, db) => {
    app.get( "/author/:id", (req, res) => {
        console.log('REQ :', req);
        db.author.findById(req.params.id).then( (result) => res.json(result))
    });    
  }