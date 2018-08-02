module.exports = {
  title: 'BAK Docs',
  description: 'Dokumentasi Aplikasi BAK',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/favicon.ico',
    nav: [
      { text: 'Tutorial', link: '/tutorial/' },
      { text: 'Website BAK', link: 'https://bak.yudharta.ac.id' },
    ],
    sidebar: {
      '/tutorial/': [
        {
          title: 'Tutorial',
          collapsable: false,
          children: [
            '',
            'jurnal',
            'pendapatan',
            'tagihan',
            'pembayaran',
            'pengeluaran',
            'laporan',
            'asset',
          ]
        }
      ]
    },
  },
}