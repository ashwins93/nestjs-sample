module.exports = {
  url: 'postgres://dev:password@localhost:5432/demo',
  type: 'postgres',
  entities: ['dist/**/*.entity.js'],
  logging: true,
};
