import DS from 'ember-data';

var User = DS.Model.extend({
    posts: DS.hasMany('post'),
    username: DS.attr('string'),
    pic: DS.attr('string'),
    about: DS.attr('string')
});

User.reopenClass({
    FIXTURES: [{
        "id": 1,
        "username": "James Bond",
        "pic": "images/profile/Sean-Connery-as-James-Bond.jpg",
        "about": "Secret Agent, for MI6 code name 007, need I say more?"
    },
    {
        "id": 2,
        "username": "William Forrester",
        "pic": "images/profile/2001_finding_forrester_008.png",
        "about": "I make better writers out of high school kids"
    },
    {
        "id": 3,
        "username": "Jim Malone",
        "pic": "images/profile/sean_connery_the_untouchables.jpg",
        "about": " I picked the men out for Ness's crew from the police academy to go after Capone  "
    },
    {
        "id": 4,
        "username": "Juan Sanchez Villalobos Ramirez",
        "pic": "images/profile/Sean-Connery-as-James-Bond.jpg",
        "about": "Trained Connor in the art of sword fighting"
    },
    
    
    {
        "id": 5,
        "username": "Daniel Craig",
        "pic": "images/profile/daniel-craig.jpg",
        "about": "James Bond reloaded"
    }]
});

export default User;