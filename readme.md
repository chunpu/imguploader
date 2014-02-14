Simple Img Uploader
---

[demo](http://chunpu.github.io/imguploader/)

### Usage

```html
<div id='box'></div>
<script>
window.onload = function() {
  var box = document.getElementById('box')
  WebUploader(box)
  WebUploader.url = '/upload'
}
</script>
<script src='./imguploader.js'></script>
```

Img info such as `lastModifiedDate`, `name`, `size`, `type`, `hash(md5)` will add to query string


### Features

- Easy to use, one JS file include CSS, HTML, ICON

- support some actions, `drag` & `click` & `Ctrl + V` & QQ PrintScreen

- Md5 calculation in the frontend



### Browser Support

only check chrome

### Todo

- add theme

- browser support test
