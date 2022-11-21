const { User } = require('../models');

// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, {userId}) => {
            return User.findOne({_id: userId});
        },
    },

    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },

        login: aysnc (parent, { username, email}) => {
            const user = await User.findOne( {})
        }

    }


}




module.exports = resolvers;
