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
        url: '/clubes/aventureros',
        icon: 'icon-puzzle'
      },
      {
        name: 'Conquistadores',
        url: '/clubes/conquistadores',
        icon: 'icon-puzzle'
      },
      {
        name: 'Guías Mayores',
        url: '/clubes/guias-mayores',
        icon: 'icon-puzzle'
      }
    ]
  }
];
