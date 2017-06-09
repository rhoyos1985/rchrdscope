import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class CategorieCollection extends Mongo.Collection {
	insert(doc, callback) {
		const ourDoc = doc;
		ourDoc.
		const result = super.insert(ourDoc, callback);
		return result;
	}
	update(selector, modifier) {
		const result = super.update(selector, modifier);
		return result;
	}
	remove(selector, callback) {
		const todos = this.find(selector).fetch();
		const result = super.remove(selector);
		return result;
	}
}

export const Categorie = new CategorieCollection('Categorie');

// Deny all client-side updates since we will be using methods to manage this collection
Categorie.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});

Categorie.schema = SimpleSchema({
	userId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		denyUpdate: true,
	},
	categorieName: {
		type: String,
		max: 30,	
	},
	createdAt: {
		type: Date,
		denyUpdate: true,
		defaultValue: new Date(),
	},
	updateAt: {
		type: Date,
		defaultValue: new Date(),
	},
});

Categorie.attachSchema(Categorie.schema);

// This represents the keys from Lists objects that should be published
// to the client. If we add secret properties to List objects, don't list
// them here to keep them private to the server.
Categorie.publicFields = {
	userId: 0,
	categorieName: 1,
	createdAt: 0,
	updateAt: 1,
};

Categorie.helpers({
	editableBy(userId) {
		return this.userId === userId;
	},
});