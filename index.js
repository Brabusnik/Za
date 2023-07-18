const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const bot = new TelegramBot('5797940789:AAEhVi0rKKuqVWSPBmyXiU91bLrWMxj2Sck');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Указываем, что папка 'public' должна быть доступна как статическая папка


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});￼Enter
