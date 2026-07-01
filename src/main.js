import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import './assets/scss/_index.scss';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faBars, faEnvelope, faLink, faAngleDown, faAngleUp, faArrowUp, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faEnvelope, faLink, faAngleDown, faAngleUp, faArrowUp, faArrowLeftLong, faGithub);

const app = createApp(App);
app.use(router);
app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app');
