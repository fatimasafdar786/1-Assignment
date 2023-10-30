"use strict";
const current_users = ['Maryam', 'Fatima', 'Saba', 'Iqra', 'Asma'];
const new_users = ['Laiba', 'Javeria', 'Maryam', 'Saba', 'Mehreen'];
const lowerCurrentUsers = current_users.map(x => x.toLowerCase());
for (const newUsername of new_users) {
    const usernameExists = lowerCurrentUsers.includes(newUsername.toLowerCase());
    if (usernameExists) {
        console.log(`The username '${newUsername}' is already taken. Please choose a different username.`);
    }
    else {
        console.log(`The username '${newUsername}' is available.`);
    }
}
