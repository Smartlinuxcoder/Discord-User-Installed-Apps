# Installation

1. Run `git clone https://github.com/Stef-00012/Discord-User-Installed-Apps`
2. Run `npm i`
3. Rename `config.example.js` to `config.js`
4. Replace the required fields in the config file

# Config

- `token`: Your Discord bot token
- `owners`: An array of Discord users allowed to use owner-only commands
- `mongo`: Your MongoDB database connection string (or `null` if you don't want to use MongoDB)
- `zipline`: Configs for `/upload` and `/shorten` to work
    - `token`: Your Zipline token
    - `url`: Your Zipline hostname
    - `chunkSize`: File chunk size, for chunked uploads (in mb)
    - `maxFileSize`: Max file size (in mb)
- `naviac`: Configs for the NAVIAC API
    - `username`: Username for the API authentication
    - `token`: Token for the API authentication
- `web`: Configs for the web dashboard
    - `enabled`: Whetever the web dashboard is enabled **[Requires MongoDB]**
    - `hostname`: Your web dashboard hostname
    - `port`: Your web dashboard port
    - `secure`: Whetever the dashboard uses `http` or `https`
    - `keepPort`: whetever in the commands it should keep the port or remove it (eg. if you use a reverse proxy or port `443`/`80`)
    - `auth`: Discord OAuth2 configs for the web dashboard
        - `clientId`: Your Discord bot client ID
        - `clientSecret`: Your Discord bot client secret
        - `redirectURI`: Your OAuth2 redirect URI
        - `scopes`: Your OAuth2 scopes
    - `jwt`: Config for the JSON Web Token (used to store the user ID in the browser's cookie, to keep the user logged in)
        - `secret`: Your JSON Web Token secret (any string, possibly hard to guess)

# Hosted

If you can not selfhost the bot, you can use the already hosted versions

- By [Stef-00012](https://github.com/Stef-00012) (me, `/ask` command avaible) - [here](https://discord.com/oauth2/authorize?client_id=1223221223685886032)
- By [Stef-00012](https://github.com/Stef-00012) (me, `/aks` command not avaible) - [here](https://discord.com/oauth2/authorize?client_id=1219574606294417499)
- By [CreeperITA104](https://github.com/Creeperita09) - [here](https://discord.com/oauth2/authorize?client_id=1222184630581592107)
- By [Ninja-5000](https://github.com/Ninja-5000) - [here](https://discord.com/oauth2/authorize?client_id=1042885313367900211)

# Credits

- Code: [Stef-00012](https://github.com/Stef-00012)
- Dashboard Frontend: [Ninja-5000](https://github.com/Ninja-5000)