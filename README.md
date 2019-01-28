# appToDo Моё первое react приложение
 по инструкции:
 https://hackernoon.com/create-a-simple-todo-app-in-react-9bd29054566b
 
 # От себя добавил:
 ============================================================================
1) Чекбокс выполненной задачи
2) Кнопка Скрыть "Выполненные"
3) Кнопка "Удалить" задачу


 # ESLint и Prettier:
 ============================================================================
 https://maxfarseer.gitbooks.io/redux-course-ru-v2/content/chapter1/eslint-i-prettier.html
 
 ##watcher prettier по сохранению файла
 ===============
 файл .prettierrc автоматом подтягивается и с его помощью можем вносить изменения в prettier
 делаем по официальному гфйду:
 https://prettier.io/docs/en/webstorm.html
 
 In older IDE versions, select Custom and do the following configuration:
 
 Name: Prettier or any other name
 File Type: JavaScript (or Any if you want to run prettier on all files)
 Scope: Project Files
 Program: full path to .bin/prettier or .bin\prettier.cmd in the project's node_module folder. Or, if Prettier is installed globally, select prettier on macOS and Linux or C:\Users\user_name\AppData\Roaming\npm\prettier.cmd on Windows (or whatever npm prefix -g returns).
 Arguments: --write [other options] $FilePathRelativeToProjectRoot$
 Output paths to refresh: $FilePathRelativeToProjectRoot$
 Working directory: $ProjectFileDir$
 Auto-save edited files to trigger the watcher: Uncheck to reformat on Save only.
 
# Логгер для отслеживания actions и состояний store
============================================================================
 npm i -D redux-logger
 

 # Redux
 ============================================================================
В рамках данного тестового проекта Redux избыточен, но для изучения его применил
документация по Redux:
https://redux.js.org/
Полезность:
https://maxfarseer.gitbooks.io/redux-course-ru-v2/content/sozdanie/tochka-vhoda.html
Установка
npm i redux react-redux --save
npm install redux-thunk --save //для асихронных actions


Что необходимо ещё сделать:
 ============================================================================
1) Редактирование текста задачи