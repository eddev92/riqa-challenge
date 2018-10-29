module.exports = (app, db) => {
  
    app.get( "/posts", (req, res) =>
      db.post.findAll().then( (result) => res.json(result) )
    );
  
    app.get( "/post/:id", (req, res) => {
      console.log('req.params',req.params)
      db.post.findById(req.params.id)
        .then((result) => {
          res.json(result)
        })
        .catch((error) => {
          console.log('_ERROR: ', error);
          res.json(error);
        })
      }
    );
  
    app.post("/post", (req, res) => {
      console.log('REQ', req.body)
        db.post.create({
          title: req.body.title,
          content: req.body.content
        }).then((result) => {
          console.log('REISTRO EXITOSO: ', result);
          res.json(result)
        })
        .catch((error) => {
          console.log('_ERROR: ', error);
          res.json(error);
        })
      }      
    );
  
    app.put( "/post/:id", (req, res) =>
      db.post.update({
        title: req.body.title,
        content: req.body.content
      },
      {
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/post/:id", (req, res) =>
      db.post.destroy({
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  }