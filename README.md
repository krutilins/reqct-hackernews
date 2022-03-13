# Тестовое задание

Разработать интерфейс для сайта [Hacker News](https://news.ycombinator.com/news), состоящий из двух страниц.

## Продуктовые требования
### Главная страница
- Показывает последние 100 новостей в виде списка, отсортированного по датe.
- Каждая новость содержит:
	- название
	- рейтинг
  - ник автора
  - дату публикации
  - По клику на новость происходит переход на страницу новости
- Список новостей должен автоматически обновляться раз в минуту без участия пользователя
- На странице должна быть кнопка для принудительного обновления списка новостей
### Страница новости
- Должна содержать:	
  - ссылку на новость
  - заголовок новости
  - дату
  - автора
  - счётчик количества комментариев
  - список комментариев в виде дерева
- Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой.
- Список комментариев должен автоматически обновляться раз в минуту без участия пользователя
- На странице должна быть кнопка для принудительного обновления списка комментариев
- На странице должна быть кнопка для возврата к списку новостей
- Необходимо реализовать возможность смены темы(context)
- Должна быть возможность удаления комментария по средствам всплывающего окна(реализованного через порталы)

## Технические требования

- Приложение разработано с использованием React и Redux
- Использован [официальный API Hacker News](https://github.com/HackerNews/API). Вызовы Hacker News API и обработка данных от него производятся напрямую с фронтенда.
- Роутинг выполнен с использованием [React Router v5](https://github.com/ReactTraining/react-router/releases/tag/v5.0.0)
- Использование любого UI фреймворка, чтобы выглядело красиво
- Пакетный менеджер `npm`
- Приложение должно запускаться по адресу `localhost:3000` командой `npm start`
- После запуска приложения все переходы по ссылкам не перезагружают страницу
- Должна быть реализована обработка ошибок с помощью ErrorBoundary
- Покрытие кода юнит-тестами и end to end тестами (cypress, jest, supertest)
- Использование redux saga

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

