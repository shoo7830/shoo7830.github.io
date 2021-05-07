---
layout: post
title: 11월에 배운 것 - Laravel + Vue 환경설정
author: [Aria]
date: 2019-12-09 13:28:23
tags:
  - frontend
  - laravel
  - vue
draft: true
---

Vue로 1년 전에도 작업은 하였지만 그때는 Nuxt.js였고, 이번에는 Laravel과 Vue가 결합된 형태의 개발 환경에서 개발하였다.

아무래도 낯선 환경이라 생각보다 잘 안되던 것들이 있었는데 해결하면서 알게 된 것에 대해 정리 해 보았다.

Laravel + Vue환경에서 페이지 추가하기
--------------------------

*   `route/web.php` 에 백엔드 개발에서 정의한 파일명이 있는지 확인
*   `/resources/components` 에 정의한 파일명에 맞게 컴포넌트 생성
*   `/resources/js` 에 컴포넌트에서 생성한 폴더 구성대로 js 파일 생성 및 `route.js` 파일 생성
*   `webpack.mix.js` 에 js파일 경로와 빌드할 경로 추가
*   `/views` 에서 위에 생성한 컴포넌트와 매칭되는 이름의 `blade.php` 파일을 열어 `webpack.mix` 에 추가한 경로를 추가

Laravel에서 CSS Sourcemap 사용하기
----------------------------

*   `webpack.mix.js` 에서 아래의 코드 추가 및 수정
    
    let productionSourceMaps = false;
    ...
    
    mix.sass('resources/sass/app.scss','public/css')
    	 .sourceMaps(productionSourceMaps, 'source-map');
    
*   `npm run watch` 재 실행

Vue.js 번들 크기 확인 하기
------------------

*   출처: [https://velog.io/@kyusung/reduce-vue-bundle-size](https://velog.io/@kyusung/reduce-vue-bundle-size)
*   먼저 [laravel-mix-bundle-analyzer](https://www.npmjs.com/package/laravel-mix-bundle-analyzer) 설치
    
    npm install laravel-mix-bundle-analyzer --save-dev
    
*   webpack.mix.js 수정 - `npm run dev` 할 때
    
    const mix = require('laravel-mix');
    require('laravel-mix-bundle-analyzer');
     
    if (!mix.inProduction()) {
        mix.bundleAnalyzer();
    }
    
*   `npm run watch` 할 때
    
    const mix = require('laravel-mix');
    require('laravel-mix-bundle-analyzer');
     
    if (mix.isWatching()) {
        mix.bundleAnalyzer();
    }