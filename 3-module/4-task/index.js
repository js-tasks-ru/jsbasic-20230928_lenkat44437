function showSalary(users, age) {
  let usersage = users.filter((user) => {
    return user.age <= age;
  });
  let userchanges = usersage.map((user) => {return `${user.name}, ${user.balance}`;});
  return userchanges.join(`\n`);
}