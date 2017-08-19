import { Meteor } from 'meteor/meteor';

const base = Meteor.absolutePath;
const fileStore = new FS.Store.FileSystem("files", {
  path: base + "/public/img" //optional, default is "/cfs/files" path within app container
});

Files = new FS.Collection("files", {
  stores: [fileStore]
});

Files.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});

export default Files;