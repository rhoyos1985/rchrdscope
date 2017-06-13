import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


class CategoriesCollection extends Mongo.Collection {
  	insert(doc, callback) {
  		const ourDoc = {
  			userId: doc.userId,
  			description: doc.text,
  		};
  		const result = super.insert(ourDoc, callback);
  		return result;
  	}
  	update(selector, modifier, options, callback) {
  		const result = super.update(selector, modifier);
  		return result;
  	}
  	remove(selector, callback) {
  		const categorie = this.find(selector).fetch();
  		const result = super.remove(categorie);
  		return result;
  	}
}

export const Categories = new CategoriesCollection('Categories');

// Deny all client-side updates since we will be using methods to manage this collection
Categories.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});

Categories.schema = new SimpleSchema({
	userId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
	},
	description: {
		type: String,
		max: 30,
	},
	createAt: {
		type: Date,
		autoValue: () => {
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date()};
			} 
		},
		denyUpdate: true,
		optional: true,
	},
	updateAt: {
		type: Date,
		autoValue: () => {
			if (this.isUpdate) {
				return new Date();
			} 
		},
		denyInsert: true,
		optional: true,	
	},
});

Categories.attachSchema(Categories.schema);