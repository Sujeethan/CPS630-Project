Messages = new Mongo.Collection('messages');
Messages2 = new Mongo.Collection('messages2');
Messages3 = new Mongo.Collection('messages3');


//show names for each tab
var show1, show2, show3;
var ep1, ep2, ep3;
// erase the "=1" after !!!!!
var stat1;
var stat2=1;
var stat3=1;

var time1, time2, time3;




//delete this when you make the create crap!
show1 = 'Arrow';
show2 = "One Punch Man";
show3 = "Hero Academia";

if(Meteor.isClient){

Template.createChatForms.events({
	'submit .submitcreate': function(event){
		// how to get the value var title= event.target.title.value;
		if(stat1 !=1){
			stat1=1;
			show1= event.target.titlebox.value;
			alert(stat1);
			//ep1 = event.taget.ep.value;
			//alert(event.target.ep.value);
			
		}
		else if(stat1 ==1 && stat2 !=1){
			stat2=1;
			show2= event.target.titlebox.value;
			ep2 = event.taget.ep.value;
		}
		else if(stat1 ==1 && stat2 ==1 && stat3 !=1){
			stat3=3;
			show3= event.target.titlebox.value;
			ep3 = event.taget.ep.value;
		}
		else{
			alert("Chat servers are full!");
		}
	}
});



	
	Template.shows.helpers({
		show1: function(){
			if(stat1 == 1 ){
				return show1;
			}
			else{
				return "open chat";
				}
		}
	});
	
		Template.shows.helpers({
		show2: function(){
				if(stat2 == 1 ){
				return show2;
			}
			else{
				return "open chat";
				}
		}
	});
	
		Template.shows.helpers({
		show3: function(){
				if(stat3 == 1){
				return show3;
			}
			else{
				return "open chat";
				}
		}
	});
	
	
	Template.messages.helpers({
		messages: function(){
			return Messages.find();
		}
	});
	
	Template.messages2.helpers({
		messages2: function(){
			return Messages2.find();
		}
	});	
	
	Template.messages3.helpers({
		messages3: function(){
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
					message2: value,  
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
					message3: value,  
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
	
	Template.user.helpers({
  UserId: function() {
    return Meteor.user().username;
  }
});
}

if(Meteor.isServer){
	Meteor.publish('messages', function () {
    return Messages.find({});
});

	Meteor.publish('messages2', function () {
    return Messages2.find({});
});

	Meteor.publish('messages3', function () {
    return Messages3.find({});
});
	
}