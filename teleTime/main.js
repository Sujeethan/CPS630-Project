Messages = new Mongo.Collection('messages');
Users = new Mongo.Collection('users');

if(Meteor.isClient){
	Template.messages.helpers({
		messages: function(){
			return Messages.find();
		}
	});
	
	Template.messages.events({
		'keypress textarea': function(e, instance){
			if (e.keyCode == 13){
				var value = instance.find('textarea').value;
				instance.find('textarea').value = '';
				
				Messages.insert({
					message: value,  
					timestamp: new Date()
					//user: Meteor.userId		
				});
			}		
		}
		/*
	'click .AddPlaceButton': function (e) {
      e.preventDefault();
      console.log("You pressed the button");
    } 
		
	});

	*/
	}

if(Meteor.isServer){
	
	
}