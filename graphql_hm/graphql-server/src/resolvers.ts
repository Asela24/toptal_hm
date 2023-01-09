import { users } from "./db";

interface Args {
    id: number,
    name: string,
    email: string,
    age: number
}

const resolvers = {    
    Query: {    
     user: (parent, {id}: Args) => {
        return users.find(user => user.id == id)
     },
     users: () => {
        return users
     }    
    },
    Mutation: {
        createUser: (parent, {id, name, email, age }: Args) => {
            const newUser = {id, name, email, age}
            users.push(newUser)
            return newUser
        },
        updateUser: (parent, {id, name, email, age}: Args) => {
            let newUser = users.find(user => user.id == id);

            if (newUser === undefined) {
                throw new Error("User not found.");
            }    
            newUser.name = name;    
            newUser.email = email;    
            newUser.age = age;

            return newUser;
        },
         deleteUser: (parent, { id } : Args) => {    
                const userIndex = users.findIndex(user => user.id == id);

                if (userIndex === -1) throw new Error("User not found.");

                const deletedUsers = users.splice(userIndex, 1);

                return deletedUsers[0];     
    }    
    }    
};

export default resolvers;
