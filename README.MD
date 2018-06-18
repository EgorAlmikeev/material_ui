REACT DEMO 2018

Развёртывание приложения в Heroku.

```bash
cd && mkdir $(date +%Y%m%d_%H%M%S) && cd $_ && git clone -b heroku https://github.com/GossJS/reactDemo2018.git .  
heroku create
git push heroku heroku:master
heroku open
```

Допустим адрес приложения https://glacial-hollows-49848.herokuapp.com

I. Откройте консоль Chrome и напишите

```JavaScript
await fetch('https://glacial-hollows-49848.herokuapp.com/author').then(x=>x.text());
```

II. В браузере откройте https://glacial-hollows-49848.herokuapp.com/env

и проанализируйте состав переменных окружения. Обратите внимание на NODE_ENV

III. Запустите приложение локально.

```bash
yarn
NODE_ENV='development' yarn start
```

Сравните с тем, что получается на хироку.
