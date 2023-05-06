
module.exports = function (env) {
    return {
        // Railway inputs
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        DB_CLIENT: 'pg',
        DB_HOST: env.PGHOST,
        DB_PORT: env.PGPORT,
        DB_DATABASE: env.PGDATABASE,
        DB_USER: env.PGUSER,
        DB_PASSWORD: env.PGPASSWORD,

        EMAIL_FROM: env.EMAIL_FROM,
        EMAIL_VERIFY_SETUP: env.EMAIL_VERIFY_SETUP,
        EMAIL_TRANSPORT: env.EMAIL_TRANSPORT,
        EMAIL_SENDGRID_API_KEY: env.EMAIL_SENDGRID_API_KEY,
        
        CORS_ENABLED: true,
        CORS_ORIGIN: "localhost",
    };
};
