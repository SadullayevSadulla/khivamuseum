export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://694fc9098531714d9bcef883.mockapi.io',
        changeOrigin: true,
        secure: false
      }
    }
  }
}
