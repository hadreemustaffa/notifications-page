const markAllAsReadBtn = document.querySelector('#markAllAsReadBtn');
const newNotifications = document.querySelectorAll('.new');
const unreadMessagesAmount = document.querySelector('.amount-unread');

unreadMessagesAmount.innerHTML = newNotifications.length;

markAllAsReadBtn.addEventListener('click', () => {
  let unread = [];
  for (let i = 0; i < newNotifications.length; i++) {
    unread.push[newNotifications[i]];
    newNotifications[i].classList.remove('new');
  }

  if (unread.length === 0) {
    unreadMessagesAmount.innerHTML = 0;
  }
});
