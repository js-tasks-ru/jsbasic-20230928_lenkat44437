function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  ul.insertAdjacentHTML('beforeend', friends.map(f => `<li>${f.firstName} ${f.lastName}</li>`).join(''));
  return ul;
}
