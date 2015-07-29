module.exports= function(app){

		
    var Base_Twitt = require('./twitt_Turismo');


		Conseguir_twitt = function(req, res) {
		Obj_Twitt.find(function(err, twitt_Turismo){
			if(!err) res.send(twitt_Turismo);
			else console.log('ERROR:' +err);
		})
		};


		conseguir_id = function(req, res){
		Obj_Twitt.findById(req.params.id, function(err, twitt_Turismo){
			if(!err) res.send(twitt_Turismo);
			else console.log('ERROR:' +err);
		});
		};

		


		eliminar_twitt =function(req, res){
		Obj_Twitt.findById(req.params.id, function(err, twitt_Turismo){
		twitt_Turismo.remove(function(err){
		if(!err) console.log('Twett Borrado!');
			else console.log('ERROR:' +err);	
				})
			});
		}

		//API routers
		app.get('/twitt_Turismo', Conseguir_twitt);
		app.get('/twitt_Turismo/:id', conseguir_id);
		app.delete('/twitt_Turismo/:id', eliminar_twitt);
	
}