# React+Vite+TS+FSD
[![License](https://img.shields.io/github/license/Dimaga32/cinema.svg)](https://github.com/Dimaga32/cinema/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/Dimaga32/cinema.svg)](https://github.com/Dimaga32/cinema/issues)
## О проекте
Данный проект представляет собой демонстрационный макета сайта онлайн-кинотеатра.
## Стек
React, Vite, TS, Redux, RTK, Bootstrap, Bootstrap-react, Express, PostgreSQL, Axios, Bcrypt
## Функционал
### - [x] Настройка роутеризации фронтенда
### - [x] Настройка окружения
### - [x] Создание UI
### - [x] Создание и настройка сервера
### - [x] Создание и настройка базы данных
### - [x] Регистрация и авторизация
### - [x] Корзина
## Архитектура
- [public](./public)  
  Папка public предназначена для jpg, png, svg и подобных файлов
- [server](./server)  
  Папка server содержит папки:
  - [routes](./server/routes) — хранит роутеризацию сервера
  - [middlewares](./server/middlewares) — хранит мидлвары
  - [controllers](./server/controllers) — хранит контроллеры — функции, вызывающиеся при запросе на url роутера
  - [models](./server/models) — хранит модели — функции вызова к базе данных
- [src](./src)  
Папка src содержит фронтенд. Фронтенд построен по методологии FSD (Feature-Sliced Design): features, shared, entities, widgets, pages, app. Однако присутствует дополнительный слой содержащий редюссеры - processes. Он отвечает за запросы к стору Redux. 
## Установка
Требуется установленный Docker и docker-compose
```
git pull https://github.com/Dimaga32/cinema .
docker-compose up --build 
``` 
## Вклады и баги
В случае нахождения бага или неработоспособности определённых кейсов просьба написать по данной почте sinitsin.dmitry2013@yandex.ru
## Команда
### Главный разработчик: Dimaga32