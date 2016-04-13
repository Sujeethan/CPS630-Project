Messages = new Mongo.Collection('messages');
Messages2 = new Mongo.Collection('messages2');
Messages3 = new Mongo.Collection('messages3');


if(Meteor.isClient){
	Template.messages.helpers({
		messages: function(){
			return Messages.find();
		}
	});
		Template.messages2.helpers({
		messages: function(){
			return Messages2.find();
		}
	});
		Template.messages3.helpers({
		messages: function(){
			return Messages3.find();
		}
	});
	
	Template.messages.events({
		'keypress textarea': function(e, instance){
			if (e.keyCode == 13){
				var value = instance.find('textarea').value;
				instance.find('textarea').value = '';
				
				Messages.insert({
					message: value,  
					timestamp: new Date(),
					user: Meteor.userId()
				});
			}		
		}
		
	});
	
	
	Template.messages2.events({
		'keypress textarea': function(e, instance){
			if (e.keyCode == 13){
				var value = instance.find('textarea').value;
				instance.find('textarea').value = '';
				
				Messages2.insert({
					message: value,  
					timestamp: new Date(),
					user: Meteor.userId()
				});
			}		
		}
		
	});
	
	Template.messages3.events({
		'keypress textarea': function(e, instance){
			if (e.keyCode == 13){
				var value = instance.find('textarea').value;
				instance.find('textarea').value = '';
				
				Messages3.insert({
					message: value,  
					timestamp: new Date(),
					user: Meteor.userId()
				});
			}		
		}
		
	});
	
	Template.message.helpers({
		user: function() {
			return Meteor.users.findOne({_id: this.user});
		},
		
		time: function() {
			return moment(this.timestamp).format('h:mm a');
		}
	});
	
	
	Template.message2.helpers({
		user: function() {
			return Meteor.users.findOne({_id: this.user});
		},
		
		time: function() {
			return moment(this.timestamp).format('h:mm a');
		}
	});
	
	Template.message3.helpers({
		user: function() {
			return Meteor.users.findOne({_id: this.user});
		},
		
		time: function() {
			return moment(this.timestamp).format('h:mm a');
		}
	});
	
	Accounts.ui.config({
		passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
	});
	
}

if(Meteor.isServer){
	
	
}

