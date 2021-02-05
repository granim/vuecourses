import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';
import Recap from './components/Recap.vue';
import User from './components/User.vue';
import NewUser from './components/NewUser'
const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);
app.component('recap-com', Recap);
app.component('user-com', User);
app.component('new-user', NewUser);

app.mount('#app');
