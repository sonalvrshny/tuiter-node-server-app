import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    avatarIcon: {type: String, default: '../../images/zuko-profile.jpeg'},
    username: {type: String, default: 'Prince Zuko'},
    handle: {type: String, default: 'zukoshonor'},
    likes: {type: Number, default: 0},
    liked: {type: Boolean, default: false},
    unlikes: {type: Number, default: 0},
    unliked: {type: Boolean, default: false},
}, {collection: 'tuits'});

export default schema;