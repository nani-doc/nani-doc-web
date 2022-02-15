<script lang="ts" src="./docIndex.service"></script>
<template>
  <div class="theme-container">
    <header class="navbar">
      <div class="sidebar-button"></div>
      <a
        :href="`${basePath}/${projectInfo.projectName}/`"
        class="home-link router-link-active"
      >
        <span class="site-name">{{ projectInfo.projectTitle }}</span>
      </a>
      <div class="links" style="max-width: 1134px">
        <search :projectName="projectInfo.projectName"></search>
        <nav class="nav-links can-hide">
          <div
            class="nav-item"
            v-for="item in projectInfo.modules"
            :key="item.name"
          >
            <div class="dropdown-wrapper" @click="onLoadCatalog(item.name)">
              <button type="button" class="dropdown-title">
                <a
                  class="title"
                  :class="{
                    'router-link-active': item.name === moduleName,
                  }"
                  >{{ item.title }}</a
                >
                <!-- <span class="arrow down"></span> -->
              </button>
              <!-- <ul class="nav-dropdown">
                <li class="dropdown-item">
                  <a href="/taro-yui-vue.io/component/#a" class="nav-link">
                    快速开始sss
                  </a>
                </li>
                <li class="dropdown-item">
                  <a href="/taro-yui-vue.io/component/#basic" class="nav-link">
                    基础
                  </a>
                </li>
                <li class="dropdown-item">
                  <a href="/taro-yui-vue.io/component/#form" class="nav-link">
                    表单
                  </a>
                </li>
              </ul> -->
            </div>
          </div>
          <!---->
        </nav>
      </div>
    </header>
    <div class="sidebar-mask"></div>
    <aside class="sidebar">
      <ul class="sidebar-links">
        <li
          v-for="catalog in catelogs"
          :key="`catalog_${catalog.controllerName}`"
        >
          <section class="sidebar-group depth-0">
            <p class="sidebar-heading open">
              <span>{{ catalog.controllerTitle }}</span>
            </p>
            <ul class="sidebar-links sidebar-group-items">
              <li v-for="item in catalog.pageList" :key="`page_${item.name}`">
                <a
                  class="sidebar-link"
                  :class="{ active: item.path === `${pageName}.json` }"
                  @click="onLoadDoc(item)"
                >
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </section>
        </li>
      </ul>
    </aside>
    <main class="page">
      <div class="theme-default-content content__default">
        <h1 id="添加-修改应用信息">
          <a href="#添加-修改应用信息" class="header-anchor">#</a>
          {{ pageInfo.title }}
        </h1>
        <h3 id="url"><a href="#url" class="header-anchor">#</a> url</h3>
        <p>{{ pageInfo.url }}</p>
        <h3 id="请求方式">
          <a href="#请求方式" class="header-anchor">#</a> 请求方式
        </h3>
        <p>POST</p>
        <h3 id="请求头">
          <a href="#请求头" class="header-anchor">#</a> 请求头
        </h3>
        <table>
          <thead>
            <tr>
              <th>参数名</th>
              <th>是否必须</th>
              <th>类型</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Content-Type</td>
              <td>是</td>
              <td>string</td>
              <td>{{ pageInfo.contentType }}</td>
            </tr>
          </tbody>
        </table>
        <typescriptContent
          v-if="pageInfo.url"
          :pageInfo="pageInfo"
        ></typescriptContent>
      </div>
    </main>
  </div>
</template>