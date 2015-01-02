jQuery-onType-Event
===================

```javascript
var input = $('input[type="text"]');
input.onType( 
  function(event){
    var val = $(this).val();
    alert( val );
  },
  {
    delay: 400 // Default is 300
  }
);
```
