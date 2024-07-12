export const getConversationId = (user, users) => {
  return users[0].userId === user._id ? users[1].user.id : users[0].user.id;
};
export const getConversationName = (user, users) => {
  return users[0].userId == user.id ? users[1].user.name : users[0].user.name;
};
export const getConversationPicture = (user, users) => {
  return users[0].userId == user.id
    ? users[1].user.picture
    : users[0].user.picture;
};
// export const getConversationId = (user, users) => {
//   return users[0]._id === user._id ? users[1]._id : users[0]._id;
// };
// export const getConversationName = (user, users) => {
//   return users[0]._id === user._id ? users[1].name : users[0].name;
// };
// export const getConversationPicture = (user, users) => {
//   return users[0]._id === user._id ? users[1].picture : users[0].picture;
// };

export const checkOnlineStatus = (onlineUsers, user, users) => {
  let convoId = getConversationId(user, users);
  let check = onlineUsers.find((u) => u.userId === convoId);
  return check ? true : false;
};

//   console.log("user = ", user);
//   console.log(
//     "getConversationPicture = ",
//     getConversationPicture(user, convo.users)
//   );

//   console.log("convo_users = ", convo.users[0].user.picture);
// console.log("convo_users = ", convo.users[0].userId);
//   console.log("user = ", user.id);
//   console.log("convo.users = ", convo.users[0].userId);
//   console.log("convo.users = ", convo.users[1].userId);
