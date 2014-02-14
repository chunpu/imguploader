;(function() {
  var el, box
  var html = '<div class="up-box"><div class="up-drag"><label class="up-border">Drag<br/>Click<br/>Ctrl+V<input type="file" multiple="multiple" class="up-click"/></label><div class="up-btn">Upload</div><p>   other info</p></div><div class="up-list">'
  var css = "@font-face{font-family:ico;src:url(data:application/font-woff;base64,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) format('woff')}.up-box{min-width:450px;font-family:Consolas;min-height:300px;background:#2c2f33}.up-box p{margin:0}.up-box .ico{font-family:ico;float:right;text-shadow:0 2px 1px rgba(22,22,22,0.5);cursor:pointer}.up-box .ico:after{color:#4b4d50;content:'㓤'}.up-box .ico.up-ok{cursor:auto}.up-box .ico.up-ok:after{content:'㓣';color:#77c136}.up-box *{box-sizing:border-box}.up-drag{color:#3b3e43;font-weight:bold;font-size:1.6em;text-align:center;line-height:2em;width:30%;float:left}.up-drag .up-border{margin:16px;height:167px;border:8px dashed #3b3e43;cursor:pointer;display:block}.up-drag .up-border:hover{color:#5E6268;border:8px dashed #5E6268}.up-drag .up-btn{height:30px;line-height:30px;margin:0 20px;border-radius:5px;background:#202326;color:#888;cursor:pointer;font-size:18px;transition:all .25s;text-shadow:0 3px 3px rgba(141,141,141,0.5)}.up-drag .up-btn:hover{color:#bbb;text-shadow:1px 5px 12px rgba(224,224,224,0.5)}.up-drag .up-click{display:none}.up-list{border-left:2px solid #34383e;margin-left:30%}.up-list img{width:60px;height:60px;border-radius:7px;float:left;box-shadow:2px 2px 8px #131313}.up-list .up-item{padding:12px 18px;height:90px;border:1px solid #282a2d;border-top:1px solid #34383e;transition:all 600ms ease;-webkit-transform-origin:50% 50% -50px}.up-list .up-item:hover{background:#303438}.up-list .up-item.up-del{position:relative;opacity:0;-webkit-transform:rotateX(180deg)}.up-list .up-md5{vertical-align:top;font-size:10px;color:#aaa;padding:10px}.up-list .up-img-info{margin-left:90px}.up-list .up-img-info p{line-height:35px}.up-list .up-img-info p strong{color:#ffffff;padding:0 10px 0 2px}.up-list .up-img-info p small{color:#6d727a}.up-list .progress{overflow:hidden;height:13px;margin-bottom:20px;background-color:#292929;border-radius:4px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1)}.up-list .progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#42617C;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-transition:width .6s ease;transition:width .6s ease;background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-size:40px 40px}"
  var isdragEnter = false
  var imgs = []
  var listEl
  function $(sel) {
    return document.querySelectorAll(sel)
  }
  function WebUpload(element) {
    el = element
    init()
  }

  function init() {
    box = document.createElement('div')
    var str = html + '<style>' + css + '</style>'
    box.innerHTML = str
    el.appendChild(box)
    listEl = document.querySelector('.up-list')
    bindEvent()
  }

  function bindEvent() {
    box.ondragover = function() {
      if (!isdragEnter) {
        isdragEnter = true
        box.className = 'up-ondrag'
      }
      return false
    }
    box.ondragleave = function() {
      box.className = ''
      isdragEnter = false
      return false
    }
    box.ondrop = onDrop

    box.addEventListener('paste', function(e) {
      var items = e.clipboardData.items
      if (items.length) {
        for (var i = 0; i < items.length; i++) {
          if (items[i].kind == 'file') {
            var file = items[i].getAsFile()
            var url = URL.createObjectURL(file)
            addImg(url, file)
          } else if (items[i].kind == 'string') {
            items[i].getAsString(function(xx) {
              // can get from local
            })
          }
        }
      }
    })

    box.addEventListener('click', function(e) {
      if (e.target.className == 'ico') {
        var item = e.target.parentNode.parentNode.parentNode
        item.className += ' up-del'
        item.addEventListener('transitionend', function() {
          var items = document.querySelectorAll('.up-item')
          var index = Array.prototype.slice.call(items).indexOf(item)
          if (index > -1) {
            imgs.splice(index, 1)
          }
          item.remove()
        })
      }
    })

    function img2qs(img) {
      var b = img.blob
      var arr = []
      var keys = ['lastModifiedDate', 'name', 'size', 'type']
      for (var i = 0; i < keys.length; i++) {
        arr.push(keys[i] + '=' + b[keys[i]])
      }
      arr.push('hash=' + img.hash)
      return '?' + arr.join('&')
    }

    document.querySelector('.up-btn').addEventListener('click', function() {
      if (imgs.length === 0) return false
      var items = document.querySelectorAll('.up-item .progress')
      for (var i = 0; i < items.length; i++) {
        items[i].innerHTML = '<div style="width: 5%" class="progress-bar"></div>'
      }
      if (WebUpload.url) {
        // todo true
        imgs.forEach(function(img, i) {
          var progressBar = items[i].querySelector('.progress-bar')
          ajax({
            method: 'POST',
            url: WebUpload.url + img2qs(img),
            data: img.blob,
            onprogress: function(e) {
              if (e.lengthComputable) {
                var percent = e.loaded / e.total * 100 + '%'
                progressBar.style.width = percent
              }
            },
            onload: function(e) {
              if (this.status >= 200 && this.status < 400) {
                progressBar.style.width = '100%'
                document.querySelectorAll('.up-item .ico')[i].className += ' up-ok'
              } else {
                progressBar.style.backgroundColor = '#7C4242'
              }
            }
          })
        })
      } else {
        var progresses = document.querySelectorAll('.up-item .progress-bar')
        Array.prototype.slice.call(progresses).forEach(function(p, i) {
          var timer = setInterval(function() {
            var w = parseInt(p.style.width)
            var random = ~~(Math.random() * 20)
            if (w + random < 100) {
              p.style.width = w + random + '%'
            } else {
              p.style.width = '100%'
              if (!Math.round(Math.random() * 2)) {
                p.style.backgroundColor = '#7C4242'
              } else {
                document.querySelectorAll('.up-item .ico')[i].className += ' up-ok'
              }
              clearInterval(timer)
            }
          }, 300)
        })
      }
    })

    document.querySelector('.up-click').onchange = function(ev) {
      handleFiles(ev.target.files)
    }
  }

  function handleFiles(files) {
    if (files.length) {
      files = Array.prototype.slice.call(files)
      files.forEach(function(file) {
        var reader = new FileReader()
        reader.onload = function(e) {
          addImg(e.target.result, file, file.name)
        }
        reader.readAsDataURL(file)
      })
    }

  }
  function onDrop(ev) {
    var files = ev.dataTransfer.files

    if (files.length) {
      // from qq, desktop...
      handleFiles(files)
    } else {
      // from web page, and has no blob, and it's impossiable
      var url = ev.dataTransfer.getData('Text')
      if (url.indexOf('http://') === 0) {
        addImg(url)
      }
    }
    return false
  }


  function ajax(o) {
    var xhr = new XMLHttpRequest()
    xhr.onload = o.onload
    if (o.onprogress) {
      xhr.upload.onprogress = o.onprogress
    }
    xhr.open(o.method, o.url, true)
    xhr.send(o.data)
  }

  function addImg(src, blob, name) {
    var img = new Image()
    img.onload = function() {
      if (img.width) {
        img.blob = blob
        imgs.push(img)
        img.name = name || 'untitle'
        img.size = Math.ceil(img.blob.size / 1024 * 100) / 100
        var c = ''
        if (img.blob) {
          file2md5(img.blob, function(hash) {
            img.hash = hash
            img.size = Math.ceil(img.blob.size / 1024 * 100) / 100
            var _imgs = $('.up-item img')
            for (var i = 0; i < _imgs.length; i++) {
              if (_imgs[i].src == img.src) {
                var test = _imgs[i].parentNode.querySelector('.up-md5').innerHTML = 'md5:' + img.hash
              }
            }
          })
          var item = document.createElement('div')
          item.innerHTML = '<div class="up-item"><img src="' + img.src + '"/><div class="up-img-info"><p><span class="ico"></span><strong>' + img.name.substr(0, 15) + '</strong><small>' + img.size + 'kb</small></p><div class="progress"><span class="up-md5">md5</span></div></div></div></div>'
          listEl.appendChild(item.childNodes[0])
        }

      }
    }
    img.src = src
  }
  // md5
  (function(a){if(typeof exports==="object"){module.exports=a()}else{if(typeof define==="function"&&define.amd){define(a)}else{var c;try{c=window}catch(b){c=self}c.SparkMD5=a()}}}(function(c){var e=function(s,r){return(s+r)&4294967295},n=function(z,v,u,r,y,w){v=e(e(v,z),e(r,w));return e((v<<y)|(v>>>(32-y)),u)},a=function(v,u,A,z,r,y,w){return n((u&A)|((~u)&z),v,u,r,y,w)},k=function(v,u,A,z,r,y,w){return n((u&z)|(A&(~z)),v,u,r,y,w)},f=function(v,u,A,z,r,y,w){return n(u^A^z,v,u,r,y,w)},p=function(v,u,A,z,r,y,w){return n(A^(u|(~z)),v,u,r,y,w)},d=function(s,u){var t=s[0],r=s[1],w=s[2],v=s[3];t=a(t,r,w,v,u[0],7,-680876936);v=a(v,t,r,w,u[1],12,-389564586);w=a(w,v,t,r,u[2],17,606105819);r=a(r,w,v,t,u[3],22,-1044525330);t=a(t,r,w,v,u[4],7,-176418897);v=a(v,t,r,w,u[5],12,1200080426);w=a(w,v,t,r,u[6],17,-1473231341);r=a(r,w,v,t,u[7],22,-45705983);t=a(t,r,w,v,u[8],7,1770035416);v=a(v,t,r,w,u[9],12,-1958414417);w=a(w,v,t,r,u[10],17,-42063);r=a(r,w,v,t,u[11],22,-1990404162);t=a(t,r,w,v,u[12],7,1804603682);v=a(v,t,r,w,u[13],12,-40341101);w=a(w,v,t,r,u[14],17,-1502002290);r=a(r,w,v,t,u[15],22,1236535329);t=k(t,r,w,v,u[1],5,-165796510);v=k(v,t,r,w,u[6],9,-1069501632);w=k(w,v,t,r,u[11],14,643717713);r=k(r,w,v,t,u[0],20,-373897302);t=k(t,r,w,v,u[5],5,-701558691);v=k(v,t,r,w,u[10],9,38016083);w=k(w,v,t,r,u[15],14,-660478335);r=k(r,w,v,t,u[4],20,-405537848);t=k(t,r,w,v,u[9],5,568446438);v=k(v,t,r,w,u[14],9,-1019803690);w=k(w,v,t,r,u[3],14,-187363961);r=k(r,w,v,t,u[8],20,1163531501);t=k(t,r,w,v,u[13],5,-1444681467);v=k(v,t,r,w,u[2],9,-51403784);w=k(w,v,t,r,u[7],14,1735328473);r=k(r,w,v,t,u[12],20,-1926607734);t=f(t,r,w,v,u[5],4,-378558);v=f(v,t,r,w,u[8],11,-2022574463);w=f(w,v,t,r,u[11],16,1839030562);r=f(r,w,v,t,u[14],23,-35309556);t=f(t,r,w,v,u[1],4,-1530992060);v=f(v,t,r,w,u[4],11,1272893353);w=f(w,v,t,r,u[7],16,-155497632);r=f(r,w,v,t,u[10],23,-1094730640);t=f(t,r,w,v,u[13],4,681279174);v=f(v,t,r,w,u[0],11,-358537222);w=f(w,v,t,r,u[3],16,-722521979);r=f(r,w,v,t,u[6],23,76029189);t=f(t,r,w,v,u[9],4,-640364487);v=f(v,t,r,w,u[12],11,-421815835);w=f(w,v,t,r,u[15],16,530742520);r=f(r,w,v,t,u[2],23,-995338651);t=p(t,r,w,v,u[0],6,-198630844);v=p(v,t,r,w,u[7],10,1126891415);w=p(w,v,t,r,u[14],15,-1416354905);r=p(r,w,v,t,u[5],21,-57434055);t=p(t,r,w,v,u[12],6,1700485571);v=p(v,t,r,w,u[3],10,-1894986606);w=p(w,v,t,r,u[10],15,-1051523);r=p(r,w,v,t,u[1],21,-2054922799);t=p(t,r,w,v,u[8],6,1873313359);v=p(v,t,r,w,u[15],10,-30611744);w=p(w,v,t,r,u[6],15,-1560198380);r=p(r,w,v,t,u[13],21,1309151649);t=p(t,r,w,v,u[4],6,-145523070);v=p(v,t,r,w,u[11],10,-1120210379);w=p(w,v,t,r,u[2],15,718787259);r=p(r,w,v,t,u[9],21,-343485551);s[0]=e(t,s[0]);s[1]=e(r,s[1]);s[2]=e(w,s[2]);s[3]=e(v,s[3])},q=function(t){var u=[],r;for(r=0;r<64;r+=4){u[r>>2]=t.charCodeAt(r)+(t.charCodeAt(r+1)<<8)+(t.charCodeAt(r+2)<<16)+(t.charCodeAt(r+3)<<24)}return u},m=function(r){var t=[],s;for(s=0;s<64;s+=4){t[s>>2]=r[s]+(r[s+1]<<8)+(r[s+2]<<16)+(r[s+3]<<24)}return t},l=function(A){var u=A.length,r=[1732584193,-271733879,-1732584194,271733878],w,t,z,x,y,v;for(w=64;w<=u;w+=64){d(r,q(A.substring(w-64,w)))}A=A.substring(w-64);t=A.length;z=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(w=0;w<t;w+=1){z[w>>2]|=A.charCodeAt(w)<<((w%4)<<3)}z[w>>2]|=128<<((w%4)<<3);if(w>55){d(r,z);for(w=0;w<16;w+=1){z[w]=0}}x=u*8;x=x.toString(16).match(/(.*?)(.{0,8})$/);y=parseInt(x[2],16);v=parseInt(x[1],16)||0;z[14]=y;z[15]=v;d(r,z);return r},o=function(z){var t=z.length,r=[1732584193,-271733879,-1732584194,271733878],v,s,y,w,x,u;for(v=64;v<=t;v+=64){d(r,m(z.subarray(v-64,v)))}z=(v-64)<t?z.subarray(v-64):new Uint8Array(0);s=z.length;y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(v=0;v<s;v+=1){y[v>>2]|=z[v]<<((v%4)<<3)}y[v>>2]|=128<<((v%4)<<3);if(v>55){d(r,y);for(v=0;v<16;v+=1){y[v]=0}}w=t*8;w=w.toString(16).match(/(.*?)(.{0,8})$/);x=parseInt(w[2],16);u=parseInt(w[1],16)||0;y[14]=x;y[15]=u;d(r,y);return r},j=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],h=function(u){var t="",r;for(r=0;r<4;r+=1){t+=j[(u>>(r*8+4))&15]+j[(u>>(r*8))&15]}return t},b=function(r){var s;for(s=0;s<r.length;s+=1){r[s]=h(r[s])}return r.join("")},i=function(r){return b(l(r))},g=function(){this.reset()};if(i("hello")!=="5d41402abc4b2a76b9719d911017c592"){e=function(r,u){var t=(r&65535)+(u&65535),s=(r>>16)+(u>>16)+(t>>16);return(s<<16)|(t&65535)}}g.prototype.append=function(r){if(/[\u0080-\uFFFF]/.test(r)){r=unescape(encodeURIComponent(r))}this.appendBinary(r);return this};g.prototype.appendBinary=function(t){this._buff+=t;this._length+=t.length;var s=this._buff.length,r;for(r=64;r<=s;r+=64){d(this._state,q(this._buff.substring(r-64,r)))}this._buff=this._buff.substr(r-64);return this};g.prototype.end=function(t){var w=this._buff,v=w.length,u,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r;for(u=0;u<v;u+=1){s[u>>2]|=w.charCodeAt(u)<<((u%4)<<3)}this._finish(s,v);r=!!t?this._state:b(this._state);this.reset();return r};g.prototype._finish=function(s,w){var u=w,t,v,r;s[u>>2]|=128<<((u%4)<<3);if(u>55){d(this._state,s);for(u=0;u<16;u+=1){s[u]=0}}t=this._length*8;t=t.toString(16).match(/(.*?)(.{0,8})$/);v=parseInt(t[2],16);r=parseInt(t[1],16)||0;s[14]=v;s[15]=r;d(this._state,s)};g.prototype.reset=function(){this._buff="";this._length=0;this._state=[1732584193,-271733879,-1732584194,271733878];return this};g.prototype.destroy=function(){delete this._state;delete this._buff;delete this._length};g.hash=function(t,r){if(/[\u0080-\uFFFF]/.test(t)){t=unescape(encodeURIComponent(t))}var s=l(t);return !!r?s:b(s)};g.hashBinary=function(s,r){var t=l(s);return !!r?t:b(t)};g.ArrayBuffer=function(){this.reset()};g.ArrayBuffer.prototype.append=function(r){var u=this._concatArrayBuffer(this._buff,r),t=u.length,s;this._length+=r.byteLength;for(s=64;s<=t;s+=64){d(this._state,m(u.subarray(s-64,s)))}this._buff=(s-64)<t?u.subarray(s-64):new Uint8Array(0);return this};g.ArrayBuffer.prototype.end=function(t){var w=this._buff,v=w.length,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],u,r;for(u=0;u<v;u+=1){s[u>>2]|=w[u]<<((u%4)<<3)}this._finish(s,v);r=!!t?this._state:b(this._state);this.reset();return r};g.ArrayBuffer.prototype._finish=g.prototype._finish;g.ArrayBuffer.prototype.reset=function(){this._buff=new Uint8Array(0);this._length=0;this._state=[1732584193,-271733879,-1732584194,271733878];return this};g.ArrayBuffer.prototype.destroy=g.prototype.destroy;g.ArrayBuffer.prototype._concatArrayBuffer=function(u,s){var t=u.length,r=new Uint8Array(t+s.byteLength);r.set(u);r.set(new Uint8Array(s),t);return r};g.ArrayBuffer.hash=function(r,s){var t=o(new Uint8Array(r));return !!s?t:b(t)};return g}));

  function file2md5(file, cb) {
    var slice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
    var chunkSize = 2 * 64 * 16 * 1024
    var chunks = Math.ceil(file.size / chunkSize)
    var currentChunk = 0
    var spark = new SparkMD5.ArrayBuffer()
    loadNext()

    function frOnload(e) {
      spark.append(e.target.result)
      currentChunk ++
      if (currentChunk < chunks) {
        return loadNext()
      }
      cb(spark.end())
    }

    function loadNext() {
      var fr = new FileReader()
      fr.onload = frOnload
      var start = currentChunk * chunkSize
      var end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize
      fr.readAsArrayBuffer(slice.call(file, start, end))
    }
  }

  window.WebUploader = WebUpload
})()
