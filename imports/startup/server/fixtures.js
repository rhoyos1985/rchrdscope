import { Meteor } from 'meteor/meteor';
import { Posts } from '../../api/posts/posts.js';

Meteor.startup(() => {
  // code to run on server at startup
  if (Posts.find().count() === 0){
    Posts.insert({ 
        user: 'Usuario 1', 
        img: '/img/cod.png', 
        title: 'Titulo 1', 
        pubDate: '12:00:00 am', 
        comments: '3', 
        resumenPost: 'loreimpsum' 
    });

    Posts.insert({
        user: 'Usuario 2', 
        img: '/img/cod.png', 
        title: 'Titulo 2', 
        pubDate: '12:00:00 am', 
        comments: '3', 
        resumenPost: 'loreimpsum' 
    });

    Posts.insert({
        user: 'Usuario 3', 
        img: '/img/cod.png', 
        title: 'Titulo 3', 
        pubDate: '12:00:00 am', 
        comments: '3', 
        resumenPost: 'loreimpsum' 
    });
  }
});