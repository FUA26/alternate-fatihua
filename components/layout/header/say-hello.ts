import siteMetadata from 'configs/siteMetadata'

export default function sayHello() {
  console.log(
    '%c███████   ██    ██    ███████     \n' +
      '%c██        ██    ██   ██     ██   \n' +
      '%c█████     ██    ██   █████████   \n' +
      '%c██        ██    ██   ██     ██   \n' +
      '%c██        ████████   ██     ██   ',
    'color: #fde68a;',
    'color: #fcd34d;',
    'color: #fbbf24;',
    'color: #f59e0b;',
    'color: #d97706;'
  )
  console.log('Curious about what’s behind the magic? 👀')
  console.log('🧑‍💻 View source:', siteMetadata.siteRepo)
}
