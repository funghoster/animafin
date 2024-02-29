# Руководство по работе с проектом

Данный проект создан с помощью [Vite](https://github.com/vitejs/vite) ([русская документация](https://vite-docs-ru.vercel.app)).

## Минимальные требования для работы над проектом:

### Среда выполнения JS [Node.js](https://nodejs.org) >= v.18

```bash
node -v
```

### Пакетный менеджер [NPM](https://www.npmjs.com) >= v.9

```bash
npm -v
```

### Перед началом работы над проектом необходимо произвести установку зависимостей, описанных в файле `package.json`:

```bash
npm install
```

## Структура проекта

### public

Директория для размещения статичных ресурсов:

```sh
public/
├── fonts/
├── css/
├── favicon/
└── img/
```

### src

В директории размещается исходный код проекта:

```sh
src/
├── assets/
│
├── components/
│
├── hooks/
│
├── pages/
│
├── services/
│
├── shared/
│   ├── constans/
│   ├── types/
│   └── utils/
└── store/
```

## Сценарии

После создания проекта вам доступны следующие сценарии.

### Параллельный запуск клиентской и (серверной части приложения - еще нет)

```bash
npm start
```

### Запуск проекта в режиме development

```bash
npm run dev
```

### Сборка проекта для production

```bash
npm run build
```

### Запуск проекта в режиме production

```bash
npm run preview
```

### Проверка качества кода линтером ESLint

```bash
npm run lint
```

## Используемые технологии

- [React](https://react.dev) - библиотека для создания пользовательских интерфейсов, использующая компонентный подход.
- [React-Router](https://reactrouter.com/en/main) - библиотека для маршрутизации внутри приложения React.
- [Redux Toolkit](https://redux-toolkit.js.org/tutorials/overview) - пакет, облегчающий работу с Redux. Для создания запросов на сервер будем использовать RTK Query, который по умолчанию включен в пакет Toolkit'а.
- [Ant Design](https://ant.design) - библиотека готовых UI-компонентов.

## API

| Api             | Описание          |
| --------------- | ----------------- |
| `Эндпоинты ...` | Список эндпоинтов |

Тут будет `body` для формы обратной связи
