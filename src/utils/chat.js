export const getConversationId = (user, users) => {
  return users[0].userId == user.user_id
    ? users[1].user.user_id
    : users[0].user.user_id;
};
export const getConversationName = (user, users) => {
  return users[0].userId == user.user_id
    ? users[1].user.username
    : users[0].user.username;
};
export const getConversationPicture = (user, users) => {
  return users[0].userId == user.user_id
    ? users[1].user.picture
    : users[0].user.picture;
};

// export const getConversationId = (user, users) => {
//   return users[0].userId === user._id ? users[1].user.id : users[0].user.id;
// };
// export const getConversationName = (user, users) => {
//   return users[0].userId == user.id ? users[1].user.name : users[0].user.name;
// };
// export const getConversationPicture = (user, users) => {
//   return users[0].userId == user.id
//     ? users[1].user.picture
//     : users[0].user.picture;
// };

export const checkOnlineStatus = (onlineUsers, user, users) => {
  let convoId = getConversationId(user, users);
  let check = onlineUsers.find((u) => u.userId === convoId);
  return check ? true : false;
};
