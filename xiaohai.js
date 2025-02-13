    //首页滑动效果的js和插件
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30
      });
    
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//等同于以下设置
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
      });
    
  
  
  
  //页面卷动
  const ul = document.querySelector('.list')
  ul.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      if (e.target.dataset.id === '1') {
        let scrollTop = window.pageYOffset;
        let timer = setInterval(() => {
          scrollTop -= 100;
          window.scrollTo(0, scrollTop);
          if (scrollTop <= 0) { clearInterval(timer) }
        }, 20)

      }
      else if (e.target.dataset.id === '2') { window.scrollTo(0, 830) }



      else if (e.target.dataset.id === '3') { window.scrollTo(0, 1680) }
      else if (e.target.dataset.id === '4') { window.scrollTo(0, 2500) }
      else if (e.target.dataset.id === '5') { window.scrollTo(0, 3620) }
      else if (e.target.dataset.id === '6') { window.scrollTo(0, 4520) }
    }
  })

  //页面改变
  const list = document.querySelector('.main-list')


  const time = setInterval(() => {
    const scroll = window.scrollY || window.pageYOffset;
    const swiper = document.querySelector('.swiper-main')
    if (scroll < 740) {
      list.style.display = "none";
      swiper.style.left = '1rem'
    }
    else if (scroll >= 740) {
      list.style.display = "inline";
    }
  }, 100)


  const down = document.querySelector('.arrow-down')
  down.addEventListener('click', function () {
    window.scrollTo(0, 840)
  })




  //页面跳转
  const posts = document.querySelector('.posts-item')
  posts.addEventListener('click', function () {
    window.location.href = 'wenzhang1.html'
  })

  const posts3 = document.querySelector('.posts-item3')
  posts3.addEventListener('click', function () {
    window.location.href = 'lu.html'
  })

  const posts4 = document.querySelector('.posts-item4')
  posts4.addEventListener('click', function () {
    window.location.href = 'https://weiyinfu.cn/MyStatic/MaoZeDongAnthology/'
  })




  //修改右键
  const menus = document.getElementById("menus");
  menus.addEventListener("click", (e) => {
    e.stopPropagation()
    if (e.target.dataset.id === 'c') {
      window.location.href = 'simple-web-music-player-master/index.html'
    }
  });
  menus.addEventListener("click", (e) => {
    e.stopPropagation('play.html')
    if (e.target.dataset.id === 'd') {
      window.location.href = 'play.html'
    }
  });
  menus.addEventListener("click", (e) => {
    e.stopPropagation('play.html')
    if (e.target.dataset.id === 'e') {
      window.location.href = '生日.html'
    }
  });
  menus.addEventListener("click", (e) => {
    e.stopPropagation()
    if (e.target.dataset.id === 'f') {
      window.location.href = 'https://ourcx.github.io/plane-play/'
    }
  });
 


  menus.addEventListener("contextmenu", (e) => { // 菜单要阻止默认事件冒泡
    e.stopPropagation()
    e.preventDefault();
  });
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    showMenu(e);
  });
  document.addEventListener("click", hideMenu, false); // 隐藏菜单
  function showMenu(e) {
    menus.style.top = `${e.clientY}px`;
    menus.style.left = `${e.clientX}px`;
    menus.style.display = "flex";
  }
  function hideMenu() {
    menus.style.display = "none";
  }
  const menusChild = document.querySelectorAll("#menus div");
  menusChild.forEach(item => {
    item.onclick = (e) => {
      console.log(e.target.dataset.id, '元素');
      hideMenu()
    }
  })

  //评论
  //字数显示和文本域操作
  const tx = document.querySelector('#tx')
  const total = document.querySelector('.total')

  tx.addEventListener('focus', function () {
    total.style.opacity = 1
  })//显示相关的数字，用这个方式
  tx.addEventListener('blur', function () {
    total.style.opacity = 0
  })
  tx.addEventListener('input', function () {
    total.innerHTML = `${tx.value.length}/200字`


  })
  //按下回车发布评论
  const item = document.querySelector('.item')
  const text = document.querySelector('.text')
  const lists = document.querySelector('.lists')
  tx.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      //不能用=，这个是赋值，这样搞，全都会对

      if (tx.value.trim()) {
        //消除空的影响，且输入的为空，就直接隐式转换成flase
        //要做一个自增加的形式，不然新的会覆盖旧的
        const html = lists.innerHTML
        lists.innerHTML = html + `  <div class="item" >
    <i class="avatar"></i>
    <div class="info">
      <p class="name">小海</p>
      <p class="text">${tx.value}</p>
      <p class="time">2022-10-10 20:29:21</p>
    </div>
  </div>`}
      tx.value = ''
    }
    total.innerHTML = `0/200字`
  })

  const btn = document.querySelector('#btns')
  btn.addEventListener('click', function () {
    if (tx.value.trim()) {
      const html = lists.innerHTML
      lists.innerHTML = html + `  <div class="item" >
    <i class="avatar"></i>
    <div class="info">
      <p class="name">小海</p>
      <p class="text">${tx.value}</p>
      <p class="time">2022-10-10 20:29:21</p>
    </div>
    </div>`
      tx.value = ''
    }
    total.innerHTML = `0/200字`
  })

  //笔记跳转
  const LoadingBtn = document.getElementById("loading-btn");
  LoadingBtn.addEventListener("click", (e) => {
    e.stopPropagation()

    window.location.href = 'https://ourcx.github.io/word/#/ch1/c1'

  });

  //解决轮播图无法正常运行，通过修改缩放大小来修正
  window.addEventListener('load', function () {

    document.body.style.zoom = '102%';
    setTimeout(() => document.body.style.zoom = '100%', 1000)

  });


  //窗栏
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
      removeActiveClasses();
      panel.classList.add('active');
    })
  })

  function removeActiveClasses() {
    panels.forEach(panel => {
      panel.classList.remove('active');
    })
  }

  panels.forEach(panel => {
    panel.addEventListener('mouseout', () => {
      removeActiveClasses();
      panel.classList.remove('active');
    })
  })

  //写一个时间的函数
  function show() {
    const RunTime = document.querySelector('.RunTime')
    //获取目的日期
    let time = Number(new Date("2024-12-1 19:00:00"));
    // let time=new Date(myyear,mymonth,myday,myhour,myminute,mysecond).getTime();
    //获取当前时间 
    let nowTime = new Date();
    // let nowTime=new Date().getTime();
    //获取时间差
    let timediff = Math.round((nowTime - time) / 1000);
    //获取时间差
    //获取还剩多少天
    let day = parseInt(timediff / 3600 / 24);
    //获取还剩多少小时
    let hour = parseInt(timediff / 3600 % 24);
    //获取还剩多少分钟
    let minute = parseInt(timediff / 60 % 60);
    //获取还剩多少秒

    let second = timediff % 60;
    //输出还剩多少时间
    let inn = `网站已运行${day}天，${hour}小时，${minute}分钟，${second}秒`
    RunTime.innerHTML = inn
    setTimeout(show, 1000);
    if (timediff == 0) { return; }
  }

  show()
  //写一个距离的函数（获取访问ip和我的ip比对？）
  const RunMsterr = document.querySelector('.RunMster')
  async function getIpClient() {
    // const response = await axios.get('https://api.ipify.org?format=json');
    // console.log(response.data.ip);

    const request = new XMLHttpRequest()
    request.open('GET', `https://restapi.amap.com/v3/ip?key=1a7fe1aa39d951fcd8a93ff92f68a732&ip=59.41.252.229`, true)
    request.onload = function () {
      // Begin accessing JSON data here
      const data = JSON.parse(this.response)

      if (request.status >= 200 && request.status < 400) {
        RunMsterr.innerHTML = `位于${data.city}，经纬度是${data.rectangle},网站作者是@小海`
      } else {
        console.log('error')
      }
    }
    request.send()
  }
  getIpClient()


  //写一个浪漫点的东西


  //https://api.52vmy.cn/api/wl/yan/dm?type=text
  //用axios写一个拿这个数据的东西

  const listss = ['在这个伤口中，流走消失的，似乎是我最不愿失去，最重要的东西，最重要的东西。但是，我却记不得那到底是什么。——高月',
    '要是别人说怀有希望是错误的事，不管几次我都一定会否定这句话，不管到什么时候。——鹿目圆',
    '掌中之物，未必在掌握之中。——青山刚昌',
    '比起舍弃自我高洁地死去，还不如就这样按自己的想法活下去，就算有点肮脏也没关系。——坂田银时',
    '居然要在别人身上寻找自己的存在价值——安乐冈花火',
    '总有一天，我会让这里座无虚席。”——高坂穗乃果',
    '陨石坠落的速度是每秒十千米，我该用怎么样的速度，才能将你拯救',
    '你说过的话，一句一句，如同星光般洒落，独自仰望的夜空，会惧怕被深不见底的夜吸进去，和阿渡一起仰望的星空变幻不定，和小椿一起仰望的星空，光辉灿烂却隐隐透着不安。和你一同仰望的星空，是怎样的呢？——有马公生',
    '虽沐浴在光明中，你的真心却一片漆黑，让人不爽……我不会哄骗自己，我是四之宫那月的影子啊……听我唱歌吧……——红ノ月歌音/ブロッコリー',
    "敢小看我天明的家伙们，我一定会让你们后悔的！——天明",
    "奇迹什么的很快就会发生！——宫园薰",
    "我必须变的更强，否则就无法保护同伴，就算他们并不强大我也需要他们在身边，若我不变的比任何人都强大，我就会失去他们。——路飞",
    "四系乃是四系乃的朋友。。。。。。英雄！——四糸乃",
    '让某个人承受痛苦，再把那个人除掉，这就是我为人人',
    '温柔正确的人总是难以生存，因为这世界既不温柔，也不正确。',
    '一个个的声音肯定有各自的意义，可无数个一齐聚集起来就无意义了',

  ];
  const wordd = document.querySelector('.wordd')
  // 随机抽取一个元素的函数
  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];

  }
  const randomElement = getRandomElement(listss);

  wordd.innerHTML = randomElement


  const request = new XMLHttpRequest()

  request.open('GET', 'https://api.52vmy.cn/api/wl/yan/dm?type=tex', true)
  request.onload = function () {
    // Begin accessing JSON data here
    const data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      wordd.innerHTML = data.content
    } else {
      console.log('error')
    }
  }
  request.send()




  //计算运行时间的js代码

  //头标
  const imgmain = document.querySelector('#imgmain')
  imgmain.addEventListener('mouseover', () => {
    imgmain.src = 'images/favicon.png'
  })

  imgmain.addEventListener('mouseout', () => {
    imgmain.src = 'favicon.ico'
  })

  const github = document.querySelector('#github')
  github.addEventListener("click", (e) => {
    e.stopPropagation()

    window.location.href = 'https://github.com/ourcx'

  });
