# Star Wars web app

## Описание проекта

Был использован стек MERN.

## Инструкции по настройке

Сначала запускается сервер с помощью файла `${server.js}`, затем в терминале нужно прописать `${npm start}`, для запуска фронтенд части

## Функционал

Есть следующий набор функционала:

- Бэк полностью готов, есть следующие эндпоинты:
  - /get_collections (GET method, позволяет просмотреть доступные коллекции в базе данных)
  - /create_character (GET method, создает уникального персонажа с помощью уникальной айди, который сохраняется в папке IDs, и каждый раз увеличивается на 1 при создании персонажа)
  - /create_planet (GET method, создает уникального персонажа с помощью уникальной айди, который сохраняется в папке IDs, и каждый раз увеличивается на 1 при создании планеты)
  - /create_starship (GET method, создает уникального персонажа с помощью уникальной айди, который сохраняется в папке IDs, и каждый раз увеличивается на 1 при создании космического корабля)
  - /get_collectionData (POST method, body: `${collection_name: planets || characters || starships}`)
- Homepage
- Отдельная страница для планет, персонажей и космических кораблей

## Баги, ошибки, упущения

- нет поиска.
- не успел сделать отображение дополнительной информации о сущности(`${planet, character, starship}`) с помощью модального окна.
- не успел доделать на фронте функционал создания сущности, с помощью эндпоинта `${create_entity}`, где entity - `${planet || character || starship}`
