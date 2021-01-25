<template>
  <el-container>

    <!--头部-->
    <el-header>
      <div class="left">
        <div>
          <img width="98" height="36" src="../assets/img/logo.svg" />
        </div>
      </div>
      <div class="center">
        <ul>
          <li>首页</li>
          <li>新闻</li>
          <li>博问</li>
          <li>专区</li>
          <li>内存</li>
          <li>班级</li>
          <li>怀旧</li>
        </ul>
      </div>
      <div class="right">
        <el-input placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>

        <i class="el-icon-s-order"></i>
        <i class="el-icon-bell"></i>
        <i class="el-icon-user-solid user" v-on:click="isshow"></i>
        <dl v-show="Isshows" class="nav-toggle">
          <dd>我的博客</dd>
          <dd>我的园子</dd>
          <dd>账号设置</dd>
          <dd v-on:click="loginOut">退出登录</dd>
        </dl>
      </div>
    </el-header>

    <el-container>

      <!---左导航栏-->
      <el-aside width="200px">
        <div id="side_nav" class="side-left tab-bar">
          <ul class="sidenav">
            <li id="sidenav_pick" class="sidenav-item ">
              <a href="/pick/" title="精华区博文">
                <img src="https://www.cnblogs.com/images/aggsite/picked.svg">
                <span>精华</span>
              </a>
            </li>
            <li id="sidenav_candidate" class="sidenav-item ">
              <a href="/candidate/" title="候选区博文">
                <img src="https://www.cnblogs.com/images/aggsite/candidate.svg">
                <span>候选</span>
              </a>
            </li>
            <li id="sidenav_subscription" class="sidenav-item ">
              <a href="/subscription" title="我订阅的博客">
                <img src="https://www.cnblogs.com/images/aggsite/subscription.svg">
                <span>订阅</span>
              </a>
            </li>
            <li id="sidenav_following" class="sidenav-item ">
              <a href="/following" title="我关注的园友">
                <img src="https://www.cnblogs.com/images/aggsite/following.svg">
                <span>关注</span>
              </a>
            </li>
            <li id="sidenav_commented" class="sidenav-item ">
              <a href="/aggsite/mycommented" title="我评论过的博文">
                <img src="https://www.cnblogs.com/images/aggsite/commented.svg">
                <span>我评</span>
              </a>
            </li>
            <li id="sidenav_digged" class="sidenav-item ">
              <a href="/aggsite/mydigged" title="我推荐过的博文">
                <img src="https://www.cnblogs.com/images/aggsite/digged.svg">
                <span>我赞</span>
              </a>
            </li>
            <li id="sidenav_more" class="dropdown sidenav-item ">
              <div class="dropdown-button">
                <a href="javascript:void(0)">
                  <img src="https://www.cnblogs.com/images/aggsite/more.svg">
                  <span>更多</span>
                </a>
              </div>
              <div class="dropdown-menu">
                <p>
                  <a href="/cate/all">所有随笔</a>
                </p>
                <p>
                  <a href="/comment/">最新评论</a>
                </p>
                <p>
                  <a href="/cmt/">官方博客</a>
                </p>
                <p>
                  <a href="/skins.aspx">博客皮肤</a>
                </p>
              </div>
            </li>
            <li class="sidenav-splitter"></li>
          </ul>
        </div>
      </el-aside>

      <!--主体部位-->
      <el-main>
        <div class="card">
          <div class="card headline">
            <ul>
              <li>
                <a href="https://www.cnblogs.com/ittranslator/p/14260348.html" id="editor_pick_lnk" target="_blank" title="推荐5, 阅读1020">
                  <span class="headline-label">【编辑推荐】</span>C# 中的 null 包容运算符 “!”<span id="editor_pick_count"> (5/1020)</span>
                </a>
                <a href="/aggsite/headline" title="查看更多编辑推荐" class="right_more">»</a>
              </li>
              <li>
                <a href="https://www.cnblogs.com/yilezhu/p/14198025.html" target="_blank" title="评论11, 推荐21, 阅读2458">
                  <span class="headline-label">【最多推荐】</span>晋升新一线的合肥，跨平台的.NET氛围究竟如何？(11/21/2458)
                </a>
                <a href="/aggsite/topdigged24h" title="查看24小时推荐排行" class="right_more">»</a>
              </li>
              <li>
                <a href="https://www.cnblogs.com/sheng_chao/p/14280865.html" target="_blank" title="评论14, 推荐0, 阅读430">
                  <span class="headline-label">【最多评论】</span>.net core 和 WPF 开发升讯威在线客服与营销系统：使用 WebSocket 实现访客端通信(14/0/430)
                </a>
                <a href="/aggsite/topcommented24h" title="查看24小时推荐排行" class="right_more">»</a>
              </li>
              <li>
                <a href="https://news.cnblogs.com/n/685322/" target="_blank" title="评论7, 推荐14, 阅读1264">
                  <span class="headline-label">【新闻头条】</span>我从互联网大厂“裸辞”(7/14/1264)
                </a>
                <a href="https://news.cnblogs.com/" title="查看更多新闻" class="right_more">»</a>
              </li>
              <li>
                <a href="https://news.cnblogs.com/n/685325/" target="_blank" title="评论5, 推荐1, 阅读515">
                  <span class="headline-label">【推荐新闻】</span>零工经济下的2亿“小哥”生死竞速 你们的社保在哪里？(5/1/515)
                </a>
                <a href="https://news.cnblogs.com/n/recommend" title="查看更多推荐新闻" class="right_more">»</a>
              </li>
            </ul>
          </div>

          <div class="post-list">
            <article class="post-item" data-post-id="14282750">
              <section class="post-item-body">
                <div class="post-item-text">
                  <a class="post-item-title" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html" target="_blank">一些JavaSE学习过程中的思路整理（主观性强，持续更新中...）</a>
                  <p class="post-item-summary">
                    <img src="../assets/img/20190728120508.png" class="avatar">
                    一些JavaSE学习过程中的思路整理（主观性强，持续更新中...） 未经作者允许，不可转载，如有错误，欢迎指正o(￣▽￣)o Java书写规范 类名大驼峰，标识符小驼峰，关键字、右括号、右花括号后加空格。方法与方法之间加一个空行。 IDEA的一些常用快捷键 ctrl + shift + f10快速编 ...
                  </p>
                </div>
                <footer class="post-item-foot">
                  <a href="https://www.cnblogs.com/YLTFY1998/" class="post-item-author"><span>YLTFY1998</span></a>
                  <span class="post-meta-item">
                    <span>2021-01-15 16:26</span>
                  </span>
                  <a class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('YLTFY1998', 14282750, 530342, 1);return false;">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <use xlink:href="#icon_digg"></use>
                    </svg> -->

                    <img width="16" height="16" src="../assets/img/点赞.svg">
                    <span id="digg_count_14282750">0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html#commentform">
                    <img width="15" height="15" src="../assets/img/评论.svg">
                    <span>0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html">
                    <img width="16" height="16" src="../assets/img/观看.svg">
                    <span>0</span>
                  </a>
                  <span id="digg_tip_14282750" class="digg-tip" style="color: red"></span>
                </footer>
              </section>
              <figure>
              </figure>
            </article>
            <hr />
            <article class="post-item" data-post-id="14282750">
              <section class="post-item-body">
                <div class="post-item-text">
                  <a class="post-item-title" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html" target="_blank">一些JavaSE学习过程中的思路整理（主观性强，持续更新中...）</a>
                  <p class="post-item-summary">
                    <img src="../assets/img/20190728120508.png" class="avatar">
                    一些JavaSE学习过程中的思路整理（主观性强，持续更新中...） 未经作者允许，不可转载，如有错误，欢迎指正o(￣▽￣)o Java书写规范 类名大驼峰，标识符小驼峰，关键字、右括号、右花括号后加空格。方法与方法之间加一个空行。 IDEA的一些常用快捷键 ctrl + shift + f10快速编 ...
                  </p>
                </div>
                <footer class="post-item-foot">
                  <a href="https://www.cnblogs.com/YLTFY1998/" class="post-item-author"><span>YLTFY1998</span></a>
                  <span class="post-meta-item">
                    <span>2021-01-15 16:26</span>
                  </span>
                  <a class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('YLTFY1998', 14282750, 530342, 1);return false;">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <use xlink:href="#icon_digg"></use>
                    </svg> -->

                    <img width="16" height="16" src="../assets/img/点赞.svg">
                    <span id="digg_count_14282750">0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html#commentform">
                    <img width="15" height="15" src="../assets/img/评论.svg">
                    <span>0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html">
                    <img width="16" height="16" src="../assets/img/观看.svg">
                    <span>0</span>
                  </a>
                  <span id="digg_tip_14282750" class="digg-tip" style="color: red"></span>
                </footer>
              </section>
              <figure>
              </figure>
            </article>
            <hr />
            <article class="post-item" data-post-id="14282750">
              <section class="post-item-body">
                <div class="post-item-text">
                  <a class="post-item-title" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html" target="_blank">一些JavaSE学习过程中的思路整理（主观性强，持续更新中...）</a>
                  <p class="post-item-summary">
                    <img src="../assets/img/20190728120508.png" class="avatar">
                    一些JavaSE学习过程中的思路整理（主观性强，持续更新中...） 未经作者允许，不可转载，如有错误，欢迎指正o(￣▽￣)o Java书写规范 类名大驼峰，标识符小驼峰，关键字、右括号、右花括号后加空格。方法与方法之间加一个空行。 IDEA的一些常用快捷键 ctrl + shift + f10快速编 ...
                  </p>
                </div>
                <footer class="post-item-foot">
                  <a href="https://www.cnblogs.com/YLTFY1998/" class="post-item-author"><span>YLTFY1998</span></a>
                  <span class="post-meta-item">
                    <span>2021-01-15 16:26</span>
                  </span>
                  <a class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('YLTFY1998', 14282750, 530342, 1);return false;">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <use xlink:href="#icon_digg"></use>
                    </svg> -->

                    <img width="16" height="16" src="../assets/img/点赞.svg">
                    <span id="digg_count_14282750">0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html#commentform">
                    <img width="15" height="15" src="../assets/img/评论.svg">
                    <span>0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html">
                    <img width="16" height="16" src="../assets/img/观看.svg">
                    <span>0</span>
                  </a>
                  <span id="digg_tip_14282750" class="digg-tip" style="color: red"></span>
                </footer>
              </section>
              <figure>
              </figure>
            </article>
            <hr />
            <article class="post-item" data-post-id="14282750">
              <section class="post-item-body">
                <div class="post-item-text">
                  <a class="post-item-title" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html" target="_blank">一些JavaSE学习过程中的思路整理（主观性强，持续更新中...）</a>
                  <p class="post-item-summary">
                    <img src="../assets/img/20190728120508.png" class="avatar">
                    一些JavaSE学习过程中的思路整理（主观性强，持续更新中...） 未经作者允许，不可转载，如有错误，欢迎指正o(￣▽￣)o Java书写规范 类名大驼峰，标识符小驼峰，关键字、右括号、右花括号后加空格。方法与方法之间加一个空行。 IDEA的一些常用快捷键 ctrl + shift + f10快速编 ...
                  </p>
                </div>
                <footer class="post-item-foot">
                  <a href="https://www.cnblogs.com/YLTFY1998/" class="post-item-author"><span>YLTFY1998</span></a>
                  <span class="post-meta-item">
                    <span>2021-01-15 16:26</span>
                  </span>
                  <a class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('YLTFY1998', 14282750, 530342, 1);return false;">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <use xlink:href="#icon_digg"></use>
                    </svg> -->

                    <img width="16" height="16" src="../assets/img/点赞.svg">
                    <span id="digg_count_14282750">0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html#commentform">
                    <img width="15" height="15" src="../assets/img/评论.svg">
                    <span>0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html">
                    <img width="16" height="16" src="../assets/img/观看.svg">
                    <span>0</span>
                  </a>
                  <span id="digg_tip_14282750" class="digg-tip" style="color: red"></span>
                </footer>
              </section>
              <figure>
              </figure>
            </article>
            <hr />
            <article class="post-item" data-post-id="14282750">
              <section class="post-item-body">
                <div class="post-item-text">
                  <a class="post-item-title" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html" target="_blank">一些JavaSE学习过程中的思路整理（主观性强，持续更新中...）</a>
                  <p class="post-item-summary">
                    <img src="../assets/img/20190728120508.png" class="avatar">
                    一些JavaSE学习过程中的思路整理（主观性强，持续更新中...） 未经作者允许，不可转载，如有错误，欢迎指正o(￣▽￣)o Java书写规范 类名大驼峰，标识符小驼峰，关键字、右括号、右花括号后加空格。方法与方法之间加一个空行。 IDEA的一些常用快捷键 ctrl + shift + f10快速编 ...
                  </p>
                </div>
                <footer class="post-item-foot">
                  <a href="https://www.cnblogs.com/YLTFY1998/" class="post-item-author"><span>YLTFY1998</span></a>
                  <span class="post-meta-item">
                    <span>2021-01-15 16:26</span>
                  </span>
                  <a class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('YLTFY1998', 14282750, 530342, 1);return false;">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <use xlink:href="#icon_digg"></use>
                    </svg> -->

                    <img width="16" height="16" src="../assets/img/点赞.svg">
                    <span id="digg_count_14282750">0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html#commentform">
                    <img width="15" height="15" src="../assets/img/评论.svg">
                    <span>0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html">
                    <img width="16" height="16" src="../assets/img/观看.svg">
                    <span>0</span>
                  </a>
                  <span id="digg_tip_14282750" class="digg-tip" style="color: red"></span>
                </footer>
              </section>
              <figure>
              </figure>
            </article>
            <hr />
            <article class="post-item" data-post-id="14282750">
              <section class="post-item-body">
                <div class="post-item-text">
                  <a class="post-item-title" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html" target="_blank">一些JavaSE学习过程中的思路整理（主观性强，持续更新中...）</a>
                  <p class="post-item-summary">
                    <img src="../assets/img/20190728120508.png" class="avatar">
                    一些JavaSE学习过程中的思路整理（主观性强，持续更新中...） 未经作者允许，不可转载，如有错误，欢迎指正o(￣▽￣)o Java书写规范 类名大驼峰，标识符小驼峰，关键字、右括号、右花括号后加空格。方法与方法之间加一个空行。 IDEA的一些常用快捷键 ctrl + shift + f10快速编 ...
                  </p>
                </div>
                <footer class="post-item-foot">
                  <a href="https://www.cnblogs.com/YLTFY1998/" class="post-item-author"><span>YLTFY1998</span></a>
                  <span class="post-meta-item">
                    <span>2021-01-15 16:26</span>
                  </span>
                  <a class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('YLTFY1998', 14282750, 530342, 1);return false;">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <use xlink:href="#icon_digg"></use>
                    </svg> -->

                    <img width="16" height="16" src="../assets/img/点赞.svg">
                    <span id="digg_count_14282750">0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html#commentform">
                    <img width="15" height="15" src="../assets/img/评论.svg">
                    <span>0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html">
                    <img width="16" height="16" src="../assets/img/观看.svg">
                    <span>0</span>
                  </a>
                  <span id="digg_tip_14282750" class="digg-tip" style="color: red"></span>
                </footer>
              </section>
              <figure>
              </figure>
            </article>
            <hr />
            <article class="post-item" data-post-id="14282750">
              <section class="post-item-body">
                <div class="post-item-text">
                  <a class="post-item-title" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html" target="_blank">一些JavaSE学习过程中的思路整理（主观性强，持续更新中...）</a>
                  <p class="post-item-summary">
                    <img src="../assets/img/20190728120508.png" class="avatar">
                    一些JavaSE学习过程中的思路整理（主观性强，持续更新中...） 未经作者允许，不可转载，如有错误，欢迎指正o(￣▽￣)o Java书写规范 类名大驼峰，标识符小驼峰，关键字、右括号、右花括号后加空格。方法与方法之间加一个空行。 IDEA的一些常用快捷键 ctrl + shift + f10快速编 ...
                  </p>
                </div>
                <footer class="post-item-foot">
                  <a href="https://www.cnblogs.com/YLTFY1998/" class="post-item-author"><span>YLTFY1998</span></a>
                  <span class="post-meta-item">
                    <span>2021-01-15 16:26</span>
                  </span>
                  <a class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('YLTFY1998', 14282750, 530342, 1);return false;">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <use xlink:href="#icon_digg"></use>
                    </svg> -->

                    <img width="16" height="16" src="../assets/img/点赞.svg">
                    <span id="digg_count_14282750">0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html#commentform">
                    <img width="15" height="15" src="../assets/img/评论.svg">
                    <span>0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html">
                    <img width="16" height="16" src="../assets/img/观看.svg">
                    <span>0</span>
                  </a>
                  <span id="digg_tip_14282750" class="digg-tip" style="color: red"></span>
                </footer>
              </section>
              <figure>
              </figure>
            </article>
            <hr />
            <article class="post-item" data-post-id="14282750">
              <section class="post-item-body">
                <div class="post-item-text">
                  <a class="post-item-title" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html" target="_blank">一些JavaSE学习过程中的思路整理（主观性强，持续更新中...）</a>
                  <p class="post-item-summary">
                    <img src="../assets/img/20190728120508.png" class="avatar">
                    一些JavaSE学习过程中的思路整理（主观性强，持续更新中...） 未经作者允许，不可转载，如有错误，欢迎指正o(￣▽￣)o Java书写规范 类名大驼峰，标识符小驼峰，关键字、右括号、右花括号后加空格。方法与方法之间加一个空行。 IDEA的一些常用快捷键 ctrl + shift + f10快速编 ...
                  </p>
                </div>
                <footer class="post-item-foot">
                  <a href="https://www.cnblogs.com/YLTFY1998/" class="post-item-author"><span>YLTFY1998</span></a>
                  <span class="post-meta-item">
                    <span>2021-01-15 16:26</span>
                  </span>
                  <a class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('YLTFY1998', 14282750, 530342, 1);return false;">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <use xlink:href="#icon_digg"></use>
                    </svg> -->

                    <img width="16" height="16" src="../assets/img/点赞.svg">
                    <span id="digg_count_14282750">0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html#commentform">
                    <img width="15" height="15" src="../assets/img/评论.svg">
                    <span>0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html">
                    <img width="16" height="16" src="../assets/img/观看.svg">
                    <span>0</span>
                  </a>
                  <span id="digg_tip_14282750" class="digg-tip" style="color: red"></span>
                </footer>
              </section>
              <figure>
              </figure>
            </article>
            <hr />
            <article class="post-item" data-post-id="14282750">
              <section class="post-item-body">
                <div class="post-item-text">
                  <a class="post-item-title" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html" target="_blank">一些JavaSE学习过程中的思路整理（主观性强，持续更新中...）</a>
                  <p class="post-item-summary">
                    <img src="../assets/img/20190728120508.png" class="avatar">
                    一些JavaSE学习过程中的思路整理（主观性强，持续更新中...） 未经作者允许，不可转载，如有错误，欢迎指正o(￣▽￣)o Java书写规范 类名大驼峰，标识符小驼峰，关键字、右括号、右花括号后加空格。方法与方法之间加一个空行。 IDEA的一些常用快捷键 ctrl + shift + f10快速编 ...
                  </p>
                </div>
                <footer class="post-item-foot">
                  <a href="https://www.cnblogs.com/YLTFY1998/" class="post-item-author"><span>YLTFY1998</span></a>
                  <span class="post-meta-item">
                    <span>2021-01-15 16:26</span>
                  </span>
                  <a class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('YLTFY1998', 14282750, 530342, 1);return false;">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <use xlink:href="#icon_digg"></use>
                    </svg> -->

                    <img width="16" height="16" src="../assets/img/点赞.svg">
                    <span id="digg_count_14282750">0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html#commentform">
                    <img width="15" height="15" src="../assets/img/评论.svg">
                    <span>0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html">
                    <img width="16" height="16" src="../assets/img/观看.svg">
                    <span>0</span>
                  </a>
                  <span id="digg_tip_14282750" class="digg-tip" style="color: red"></span>
                </footer>
              </section>
              <figure>
              </figure>
            </article>
            <hr />
            <article class="post-item" data-post-id="14282750">
              <section class="post-item-body">
                <div class="post-item-text">
                  <a class="post-item-title" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html" target="_blank">一些JavaSE学习过程中的思路整理（主观性强，持续更新中...）</a>
                  <p class="post-item-summary">
                    <img src="../assets/img/20190728120508.png" class="avatar">
                    一些JavaSE学习过程中的思路整理（主观性强，持续更新中...） 未经作者允许，不可转载，如有错误，欢迎指正o(￣▽￣)o Java书写规范 类名大驼峰，标识符小驼峰，关键字、右括号、右花括号后加空格。方法与方法之间加一个空行。 IDEA的一些常用快捷键 ctrl + shift + f10快速编 ...
                  </p>
                </div>
                <footer class="post-item-foot">
                  <a href="https://www.cnblogs.com/YLTFY1998/" class="post-item-author"><span>YLTFY1998</span></a>
                  <span class="post-meta-item">
                    <span>2021-01-15 16:26</span>
                  </span>
                  <a class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('YLTFY1998', 14282750, 530342, 1);return false;">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <use xlink:href="#icon_digg"></use>
                    </svg> -->

                    <img width="16" height="16" src="../assets/img/点赞.svg">
                    <span id="digg_count_14282750">0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html#commentform">
                    <img width="15" height="15" src="../assets/img/评论.svg">
                    <span>0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html">
                    <img width="16" height="16" src="../assets/img/观看.svg">
                    <span>0</span>
                  </a>
                  <span id="digg_tip_14282750" class="digg-tip" style="color: red"></span>
                </footer>
              </section>
              <figure>
              </figure>
            </article>
            <hr />
            <article class="post-item" data-post-id="14282750">
              <section class="post-item-body">
                <div class="post-item-text">
                  <a class="post-item-title" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html" target="_blank">一些JavaSE学习过程中的思路整理（主观性强，持续更新中...）</a>
                  <p class="post-item-summary">
                    <img src="../assets/img/20190728120508.png" class="avatar">
                    一些JavaSE学习过程中的思路整理（主观性强，持续更新中...） 未经作者允许，不可转载，如有错误，欢迎指正o(￣▽￣)o Java书写规范 类名大驼峰，标识符小驼峰，关键字、右括号、右花括号后加空格。方法与方法之间加一个空行。 IDEA的一些常用快捷键 ctrl + shift + f10快速编 ...
                  </p>
                </div>
                <footer class="post-item-foot">
                  <a href="https://www.cnblogs.com/YLTFY1998/" class="post-item-author"><span>YLTFY1998</span></a>
                  <span class="post-meta-item">
                    <span>2021-01-15 16:26</span>
                  </span>
                  <a class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('YLTFY1998', 14282750, 530342, 1);return false;">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <use xlink:href="#icon_digg"></use>
                    </svg> -->

                    <img width="16" height="16" src="../assets/img/点赞.svg">
                    <span id="digg_count_14282750">0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html#commentform">
                    <img width="15" height="15" src="../assets/img/评论.svg">
                    <span>0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html">
                    <img width="16" height="16" src="../assets/img/观看.svg">
                    <span>0</span>
                  </a>
                  <span id="digg_tip_14282750" class="digg-tip" style="color: red"></span>
                </footer>
              </section>
              <figure>
              </figure>
            </article>
            <hr />
            <article class="post-item" data-post-id="14282750">
              <section class="post-item-body">
                <div class="post-item-text">
                  <a class="post-item-title" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html" target="_blank">一些JavaSE学习过程中的思路整理（主观性强，持续更新中...）</a>
                  <p class="post-item-summary">
                    <img src="../assets/img/20190728120508.png" class="avatar">
                    一些JavaSE学习过程中的思路整理（主观性强，持续更新中...） 未经作者允许，不可转载，如有错误，欢迎指正o(￣▽￣)o Java书写规范 类名大驼峰，标识符小驼峰，关键字、右括号、右花括号后加空格。方法与方法之间加一个空行。 IDEA的一些常用快捷键 ctrl + shift + f10快速编 ...
                  </p>
                </div>
                <footer class="post-item-foot">
                  <a href="https://www.cnblogs.com/YLTFY1998/" class="post-item-author"><span>YLTFY1998</span></a>
                  <span class="post-meta-item">
                    <span>2021-01-15 16:26</span>
                  </span>
                  <a class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('YLTFY1998', 14282750, 530342, 1);return false;">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <use xlink:href="#icon_digg"></use>
                    </svg> -->

                    <img width="16" height="16" src="../assets/img/点赞.svg">
                    <span id="digg_count_14282750">0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html#commentform">
                    <img width="15" height="15" src="../assets/img/评论.svg">
                    <span>0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html">
                    <img width="16" height="16" src="../assets/img/观看.svg">
                    <span>0</span>
                  </a>
                  <span id="digg_tip_14282750" class="digg-tip" style="color: red"></span>
                </footer>
              </section>
              <figure>
              </figure>
            </article>
            <hr />
            <article class="post-item" data-post-id="14282750">
              <section class="post-item-body">
                <div class="post-item-text">
                  <a class="post-item-title" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html" target="_blank">一些JavaSE学习过程中的思路整理（主观性强，持续更新中...）</a>
                  <p class="post-item-summary">
                    <img src="../assets/img/20190728120508.png" class="avatar">
                    一些JavaSE学习过程中的思路整理（主观性强，持续更新中...） 未经作者允许，不可转载，如有错误，欢迎指正o(￣▽￣)o Java书写规范 类名大驼峰，标识符小驼峰，关键字、右括号、右花括号后加空格。方法与方法之间加一个空行。 IDEA的一些常用快捷键 ctrl + shift + f10快速编 ...
                  </p>
                </div>
                <footer class="post-item-foot">
                  <a href="https://www.cnblogs.com/YLTFY1998/" class="post-item-author"><span>YLTFY1998</span></a>
                  <span class="post-meta-item">
                    <span>2021-01-15 16:26</span>
                  </span>
                  <a class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('YLTFY1998', 14282750, 530342, 1);return false;">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <use xlink:href="#icon_digg"></use>
                    </svg> -->

                    <img width="16" height="16" src="../assets/img/点赞.svg">
                    <span id="digg_count_14282750">0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html#commentform">
                    <img width="15" height="15" src="../assets/img/评论.svg">
                    <span>0</span>
                  </a>
                  <a class="post-meta-item btn" href="https://www.cnblogs.com/YLTFY1998/p/14282750.html">
                    <img width="16" height="16" src="../assets/img/观看.svg">
                    <span>0</span>
                  </a>
                  <span id="digg_tip_14282750" class="digg-tip" style="color: red"></span>
                </footer>
              </section>
              <figure>
              </figure>
            </article>
            <hr />

            <div class="page">
              <el-pagination background layout="prev, pager, next" :total="1000">
              </el-pagination>
            </div>

          </div>
        </div>
      </el-main>

    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      Isshows: false
    }
  },
  methods: {
    //退出
    loginOut () {
      //清除token
      window.sessionStorage.clear();
      this.$router.push('/login');
    },
    //是否显示
    isshow () {
      this.Isshows = !this.Isshows;
    }
  }
}
</script>
<style lang="less" scoped>
.el-header {
  line-height: 25px;
  display: flex;
}

.left {
  width: 6%;
}
.left > div {
  line-height: 82px;
}
.center {
  width: 75%;
}
ul {
  list-style: none;
}
ul > li {
  display: inline;
  padding-left: 20px;
  font-size: 15px;
  cursor: pointer;
  color: #666;
}
.right {
  width: 25%;
  line-height: 54px;
}
.right > .el-input {
  width: 240px;
  border-radius: 0px;
}
.input-with-select {
  background-color: #fff;
}
.right > i {
  font-size: 20px;
  padding-left: 40px;
  cursor: pointer;
}
.el-button {
  background-color: #f5f7fa;
  border-radius: 0px;
}
.nav-toggle {
  background-color: #f9f9f9;
  width: 130px;
  position: absolute;
  left: 91%;
  top: 2%;
  border-radius: 5px;
  color: #666666;
  cursor: pointer;
}
.el-aside {
  background-color: #f9f9f9;

  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
}
.el-main {
  display: block;
  position: absolute;
  left: 200px;
  width: calc(100% - 200px);
}
.sidenav {
  color: #555;
  font-size: 14px;
  line-height: 22.5px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 50px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.sidenav > .sidenav-item {
  padding-left: 22px;
  padding-right: 52px;
}
.sidenav > *:not(:first-child) {
  margin-top: 16px;
}
.sidenav > .sidenav-item > a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  /* display: flex; */
  /* -webkit-box-orient: horizontal; */
  /* -webkit-box-direction: normal; */
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  /* align-items: center; */
  /* -webkit-flex-wrap: nowrap; */
  -ms-flex-wrap: nowrap;
  /* flex-wrap: nowrap; */
  /* width: -webkit-max-content; */
  width: -moz-max-content;
  /* width: max-content; */
}
a {
  color: inherit;
  text-decoration: inherit;
}
.sidenav > .sidenav-item > a > *:not(:first-child) {
  margin-left: 17px;
}
#sidenav_more .dropdown-button span {
  margin-left: 17px;
}

.dropdown-menu {
  background-color: #fff;
  width: 100px;
  text-align: center;
  border-radius: 5px;
  color: #666666;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 20px;
  display: none;
}
#sidenav_more:hover .dropdown-menu {
  display: block;
}

.card {
  background-color: #f9f9f9;
  padding: 20px 24px;
  font-size: 14px;
  width: calc(100% - 300px);
  height: 100%;
}
.headline {
  padding: 0px;
}
.headline > ul {
  padding: 0px;
}
.headline > ul > li {
  display: block;
  padding: 0;
  margin-top: 10px;
}
.headline > ul > li > a {
  color: #0053a1;
  font-size: 14px;
}
.headline > ul > li > a:hover {
  text-decoration: underline;
  color: #ff6600;
}

.post-list {
  padding-top: 30px;
}
.post-item-text > a {
  color: #4e4099;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  text-decoration: underline;
  outline: none;
}

.post-list > .post-item > .post-item-body > .post-item-text > .post-item-title {
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  outline: none;
}
.post-item-text > a:hover {
  text-decoration: underline;
  color: #ff6600;
}
.post-list
  > .post-item
  > .post-item-body
  > .post-item-text
  > .post-item-summary {
  display: block;
  color: #555;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  -o-text-overflow: clip;
  text-overflow: clip;
}
.post-list
  > .post-item
  > .post-item-body
  > .post-item-text
  > *:not(:first-child) {
  margin-top: 9px;
}
.post-list
  > .post-item
  > .post-item-body
  > .post-item-text
  > .post-item-summary {
  display: block;
  color: #555;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  -o-text-overflow: clip;
  text-overflow: clip;
}
.post-item .avatar {
  border-radius: 0;
  padding: 1px;
  border: 1px solid #ccc;
  float: left;
  margin-right: 5px;
  margin-top: 3px;
}
.post-list > .post-item > .post-item-body > .post-item-foot {
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  color: #555;
}
.post-list > .post-item > .post-item-body > .post-item-foot > * {
  margin-right: 16px;
  vertical-align: middle;
}
.post-item-foot > a > img,
.post-item-foot > a > span {
  vertical-align: middle;
}
.post-item-foot > a > img {
  padding-left: 10px;
}
.btn > img {
  margin-right: 10px;
}
.page {
  text-align: center;
}
</style>
