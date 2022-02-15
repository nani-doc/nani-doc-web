<script lang="ts" src="./search.service"></script>
<template>
  <div class="search-box">
    <input
      aria-label="Search"
      autocomplete="off"
      spellcheck="false"
      id="search-input"
      v-model="keyword"
      @input="onInput"
    />
    <div
      class="suggestion"
      v-if="hasSearchResult"
      @click="onSearchElementClick($event, true)"
    >
      <div
        class="modules"
        v-for="(controllers, baseModuleTitle) in searchResults"
        :key="baseModuleTitle"
      >
        <div class="parent-page-title">
          <highlightText
            :texts="searchResultKeys[baseModuleTitle].moduleTitle"
          ></highlightText>
        </div>
        <div class="controllers">
          <div
            class="suggestion-row"
            v-for="(actions, baseControllerTitle) in searchResults[
              baseModuleTitle
            ]"
            :key="baseControllerTitle"
          >
            <div class="page-title">
              <highlightText
                :texts="searchResultKeys[baseControllerTitle].controllerTitle"
              ></highlightText>
            </div>
            <div class="actions">
              <div
                class="suggestion-content"
                v-for="action in actions"
                :key="action.path"
              >
                <a :href="`/nani-doc-web/${projectName}${action.path}`">
                  <div>
                    <highlightText :texts="action.actionTitle"></highlightText>
                  </div>
                  <div>
                    <highlightText :texts="action.actionUrl"></highlightText>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>