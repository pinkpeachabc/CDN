const ap = new APlayer({
  container: document.getElementById('aplayer'),
  autoplay: false, //自动播放
  listFolded: true, //播放列表默认折叠
  listMaxHeight: 90, //播放列表最大高度
  order: 'list', //音频循环顺序, 可选值: 'list', 'random'
  loop: 'all', //音频循环播放, 可选值: 'all', 'one', 'none'
  theme: '#e9e9e9', //切换音频时的主题色，优先级低于audio.theme
  preload: 'none', //音频预加载，可选值: 'none', 'metadata', 'auto'
  mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
  lrcType: 3, //歌词格式，可选值：3（LRC文件歌词格式），1（JS字符串歌词格式）
  volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
  fixed: true, //吸底模式（fixed:true），迷你模式（mini:true），普通模式（注释此行或者设置fixed:false）
  audio: [{
      name: '平凡之路',
      artist: '朴树',
      lrc: '/downloads/lrc/平凡之路-朴树.lrc',
      cover: 'http://p2.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=300x300',
      url: 'http://fs.open.kugou.com/cd5cbe8edb012e4f77b0857cefc0956e/5c66accf/G097/M08/0A/1F/AYcBAFkQGpOAMUpuAEm-3SlWMyk951.mp3'
    },
    {
      name: '后会无期',
      artist: 'G.E.M.邓紫棋',
      lrc: '/downloads/lrc/后会无期-G.E.M.邓紫棋.lrc',
      cover: 'http://p1.music.126.net/vpvPajo3kn88nHc7jUjeWQ==/5974746185758035.jpg?param=300x300',
      url: 'http://m10.music.126.net/20190215193113/e5afc8b5376136029366f2053cf30f85/ymusic/2c87/6ec3/582e/0d572dcc04f8de34133c0f364b74c30c.mp3'
    }
  ]
});