<script lang="ts" src="./typescriptContent.service"></script>
<template>
  <h3 id="请求参数">
    <a href="#请求参数" class="header-anchor">#</a> 请求参数
  </h3>
  <pre
    v-for="item in pageInfo.requestParamList"
    :key="item.name"
    class="line-numbers"
  ><code class="language-typescript">/**
 * {{item.title}}
 */
export interface {{item.name}} {<template v-for="fieldInfo in item.fieldList"> 
  /**
   * {{fieldInfo.title}}
   */
  {{fieldInfo.name}}: {{fieldInfo.type}};</template>
}</code></pre>
  <h3 id="返回参数">
    <a href="#返回参数" class="header-anchor">#</a> 返回参数
  </h3>
  <pre class="line-numbers"><code class="language-typescript"
  v-for="item in pageInfo.responseTypeList"
    :key="item.name"
  >/**
 * {{item.title}}
 */
export interface {{item.name}} {
  <template v-for="fieldInfo in item.fieldList"> 
  /**
   * {{fieldInfo.title}}
   */
  {{fieldInfo.name}}: {{fieldInfo.type}};  
  </template>
}

</code></pre>

  <h3 id="请求方法">
    <a href="#请求方法" class="header-anchor">#</a> 请求方法
  </h3>
  <pre
    class="line-numbers"
  ><code  class="language-typescript">import { postJson } from '@/utils/http'
import {{`{${pageInfo.requestMethod.requestMethod}`}}} from '@/types/request/{{pageInfo.requestMethod.requestMethod}}'
import {{`{${pageInfo.requestMethod.responseClassName}`}}} from '@/types/response{{pageInfo.requestMethod.url}}'

/**
 * {{pageInfo.requestMethod.title}}
 */
export function {{pageInfo.requestMethod.methodName}}(body: {{pageInfo.requestMethod.requestMethod}}) : Promise&lt;{{pageInfo.requestMethod.responseGenericClassName}}> {
    return postJson&lt;{{pageInfo.requestMethod.responseGenericClassName}}>('{{pageInfo.requestMethod.url}}', body)
}</code></pre>
</template>