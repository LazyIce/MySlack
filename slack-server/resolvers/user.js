import bcrypt from 'bcrypt';

export default {
	Query: {
		getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
		allUsers: (parent, args, { models }) => models.User.findAll()
	},
	Mutation: {
		register: async (parent, { password, ...otherArgs}, { models }) => {
			try {
				const hashPassword = await bcrypt.hash(password, 12);
				await models.User.create({ ...otherArgs, password: hashPassword });
				return true;
			} catch (err) {
				return false;
			}
		}
	}
};
