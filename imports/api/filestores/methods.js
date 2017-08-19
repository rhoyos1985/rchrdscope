import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { _ } from 'meteor/underscore';

import { Files } from './files.js';

const ID_ONLY = new SimpleSchema({
    userId: { type: String },
}).validator();

const TEXT = new SimpleSchema({
    text: { type: String },
}).validator();

const OBJECT = new SimpleSchema({
	files: { type: Object },
}).validator();

export const insertFile = new ValidatedMethod({
    name: 'files.insert',
	validate:null,
    run({ prueba }) {

    	console.log(prueba);

    	for (var i = 0, ln = prueba.length; i < ln; i++) {
    		console.log(prueba[i]);
    	}



        if (!this.userId) {
            throw new Meteor.Error('Error not user id','Cannot add todos to a private list that is not yours');
        }

        /*for (var i = 0, ln = files.length; i < ln; i++) {
        	console.log(files[i]);
        	Images.insert(files[i], function (err, fileObj) {
                if(err){
                	console.log(err);
                }else{
                	console.log(fileObj._id);
                }
           	});
        }*/
    },
});