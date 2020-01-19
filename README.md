#Шаблон сборки на Webpack 4.

## INSTALLATION

Для запуска проекта необходимо:

- Установить [node.js](https://nodejs.org/en/).

- Открыть консоль/терминал от имени администратора, перейти в папку с проектом и выполнить команду установки нужных пакетов/библиотек (npm install);
    ```sh
    $ npm install
    ```

- Выполнять команду, после чего сайт автоматические откроется в вашем браузере;
    ```sh
    $ npm run dev
    ```

- Сборка проекта;
    ```sh
    $ npm run build
    ```

## TEST

Чтобы не возникло казусов, перед отправкой убедитесь, что все тесты проходят без ошибок.

- Проверка JavaScript с помощью eslint и правилами от Airbnb;
    ```sh
    $ npm run eslint
    ```

- Проверка Styles с помощью stylelint и правилами от Webstandards&htmlacademy;
    ```sh
    $ npm run stylelint
    ```

- Проверка Template с помощью puglint и собсвенныеми правилами основываясь на докментиции pug и логики;
    ```sh
    $ npm run puglint
    ```

## BUILD
1.  Клонируем репозиторий, переходим в папку с проектом, устанавливаем зависимости `npm i`;
2.  Запускаем билд проекта `npm run build`;
3.  Переходим в папку distribution в проекте, открываем html-файл в редакторе;
4.  Выполняем поиск и замену:
```
Ищем: /content
Заменяем на: ./content
```
5.  Из корня проекта копируем папку content, вставляем ее в папку distribution;


## Plugins

1. cssnano
2. pug
3. scss
4. resolve-url
5. postcss
6. cache
7. thread
8. autoprefixer


### Lints

1. eslint
2. stylelint
3. puglint
