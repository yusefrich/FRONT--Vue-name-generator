const { ApolloServer } = require("apollo-server");

const typeDefs = `

	type Item {
		id: Int
		type: String
		description: String
	}

	type Query {
		items (type: String): [Item]
	}

`;

const items = [
	{ id: 1, type: "prefix", description: "Tha" },
	{ id: 2, type: "prefix", description: "Jo" },
	{ id: 3, type: "prefix", description: "Ric" },
	{ id: 4, type: "sufix", description: "eison" },
	{ id: 5, type: "sufix", description: "ão" },
	{ id: 6, type: "sufix", description: "zé" },
]

const resolvers = {
	Query: {
		items(_, args) {
			console.log(args);
			return items.filter(item => item.type === args.type);
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen();