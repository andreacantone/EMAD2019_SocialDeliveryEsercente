import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'mdi mdi-gauge',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/ordini',
        title: 'Ordini',
        icon: 'mdi mdi-equal',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/prodotto',
        title: 'Aggiungi prodotto',
        icon: 'mdi mdi-plus-circle',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
      path: '/login',
      title: 'Esci',
      icon: 'mdi mdi-power',
      class: '',
      label: '',
      labelClass: '',
      extralink: false,
      submenu: []
  },

];
