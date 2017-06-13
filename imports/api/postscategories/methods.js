import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { _ } from 'meteor/underscore';

import { Categories } from './categories.js';

//import { Categories } from './categories.js';

const ID_ONLY = new SimpleSchema({
    userId: { type: String },
}).validator();

const TEXT = new SimpleSchema({
    text: { type: String },
}).validator();

export const insert = new ValidatedMethod({
    name: 'categories.insert',
    validate: TEXT,
    run({ text }) {

        if (!this.userId) {
            throw new Meteor.Error('Error not user id','Cannot add todos to a private list that is not yours');
        }

        const categorie = {
            userId: this.userId,
            text,
        };

        return Categories.insert(categorie, (err)=>{
            if(!err){
                console.log(err);
            }
        });
    },
});