import { createWebHistory, createRouter } from "vue-router";

import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import AppLayer from '@/components/layout/AppLayer';

import ListPage from '@/pages/ListPage';
import ViewPage from '@/pages/ViewPage';
import AboutPage from '@/pages/AboutPage';
import ArchivePage from '@/pages/ArchivePage';

const routes = [
  {
    path: '/blog/',
    name: 'Home',
    components: {
      layer : AppLayer,
      header: AppHeader,
      default: ListPage,
      footer: AppFooter
    },
    meta: {
      title : 'Home / Jay.J'
    }
  },
  {
    path: '/blog/:postCate',
    name: 'ListPage',
    components: {
      header: AppHeader,
      default: ListPage,
      footer: AppFooter
    },
    props: true,
    meta: {
      title : 'Posts / Jay.J'
    }
  },
  {
    path: '/blog/posts/:postURL',
    name: 'ViewPage',
    components: {
      header: AppHeader,
      default: ViewPage,
      footer: AppFooter
    },
    props: true,
    meta: {
      title : 'Post View / Jay.J'
    }
  },
  {
    path: '/blog/archive',
    name: 'ArchivePage',
    components: {
      header: AppHeader,
      default: ArchivePage,
      footer: AppFooter
    },
    meta: {
      title : 'Archive / Jay.J'
    }
  },
  {
    path: '/blog/about',
    name: 'AboutPage',
    components: {
      header: AppHeader,
      default: AboutPage,
      footer: AppFooter
    },
    meta: {
      title : 'About / Jay.J'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const DEFAULT_TITLE = 'Jay.J';
router.afterEach((to) => {
    document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
