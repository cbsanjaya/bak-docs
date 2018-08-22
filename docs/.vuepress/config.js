module.exports = {
  title: 'BAK Docs',
  description: 'Dokumentasi Aplikasi BAK',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/favicon.ico',
    algolia: {
      apiKey: '8e2bdb0e169fd9d3e4b9d88ff8cea7df',
      indexName: 'bak'
    },
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
            'tagihan',
            'pembayaran',
            'pendapatan',
            'pengeluaran',
            'laporan',
            'asset',
          ]
        }
      ]
    },
  },
}