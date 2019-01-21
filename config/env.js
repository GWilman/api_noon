const env = process.env.NODE_ENV || 'dev';
// const env = process.env.NODE_ENV || 'production';
const port  = process.env.PORT || 3002;
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/api_noon_${env}`;
const secret = process.env.AUTH_SECRET || 'hYgs^=?>@qrTfxLp';

module.exports = { port, dbURI, secret, env };
