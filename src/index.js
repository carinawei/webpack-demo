import './assets/styles/index.less';
import './assets/styles/hello.less';

$.get({ url: '/hello' }, (data) => {
  alert(data)
})

