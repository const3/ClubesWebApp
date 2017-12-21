export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Administración'
  },
  {
    name: 'Clubes',
    url: '/clubes',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Aventureros',
        url: '/dashboard/clubes/aventureros',
        icon: 'icon-puzzle'
      },
      {
        name: 'Conquistadores',
        url: '/dashboard/clubes/conquistadores',
        icon: 'icon-puzzle'
      },
      {
        name: 'Guías Mayores',
        url: '/dashboard/clubes/guias-mayores',
        icon: 'icon-puzzle'
      }
    ]
  }
];
