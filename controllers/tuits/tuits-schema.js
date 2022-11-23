import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    likes: {type: Number, default: 0},
    liked: {type: Boolean, default: false},
}, {collection: 'tuits'});

export default schema;