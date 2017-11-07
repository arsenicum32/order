# установка счетчика на сервер

Текущий адрес API: http://cardback.penchat.ru

Для того чтобы счетчик считал посещения и среднее время на сайте необходимо 
поставить скрипт в body :

```html
<script>
window.onload = function(){
  $.get('http://cardback.penchat.ru/open/' + USER_ID )
}
window.onbeforeunload = function(){
  $.get('http://cardback.penchat.ru/leave/' + USER_ID )
}
</script>
```

Где USER_ID - уникальный id пользователя

Для того, чтобы считать колличество сформированных отчетов и загрузок необходимо 
установить следующие запросы в handle кнопок:

```js
$(BUTTON_ID_FORM).on('click', function(){
  // что-то делаем с отчетом
  // затем отправляем данные 
  $.get('http://cardback.penchat.ru/form/' + USER_ID)
})

$(BUTTON_ID_LOAD).on('click', function(){
  // что-то делаем с отчетом
  // затем отправляем данные 
  $.get('http://cardback.penchat.ru/load/' + USER_ID)
})
```

где BUTTON_ID_FORM и BUTTON_ID_LOAD соответствующие кнопки для формирования и загрузки отчета

Все запросы на червер делаются через GET!


