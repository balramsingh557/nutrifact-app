const apiFor = 'favourites';
module.exports = {
  users: {
    admin: {password: 'password', scopes: `${apiFor}:all ${apiFor}:read ${apiFor}:edit`.split(' ')},
    stranger: {password: 'password', scopes: `${apiFor}:all ${apiFor}:read`.split(' ')}
  },
  jwtSecret: 'check',
  port: process.env.PORT || 3001,
  enableAuth: true
}