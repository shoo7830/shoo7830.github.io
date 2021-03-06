---
layout: post
title: Nuxt.js를 활용하여 개편 소개 페이지 만들기
author: [Aria]
date: 2017-10-23 11:09:07
tags:
  - frontend
  - vue
  - nuxt
  - study
draft: false
---

## 도입배경
올해 초 부터 Vue.js에 관심이 생겨 개인적으로 학습하고 있었다.
[2017 1사분기를 회고](http://webholic.net/2017%EB%85%84-1%EC%82%AC%EB%B6%84%EA%B8%B0-%ED%9A%8C%EA%B3%A0/)하는 글에 이런 내용을 적었었다.
> "회사 개발자 세미나에서도 해당 주제로 발표할 예정이며,  
> 가능하다면 외부 밋업에서도 발표하고 싶다."

실제로 지난 4월 19일에 외부 밋업에서 발표하게 되었다.

주제는 회사에서 발표한 [Vue.js와 Firebase를 활용기](https://www.slideshare.net/shoo7830/vuejs-firebase-75249704)를 [Vuetiful Korea 1회 모임](https://vuejs-kr.github.io/meetup/)에서 발표하였다.
이 날 많은 사람들 앞에서 발표한 것도 좋은 경험이였지만 [Nuxt.js](https://ko.nuxtjs.org)라는 Vue.js 기반 범용 SSR 프레임워크를 알게 되었다.
용량도 가볍고 필요한 개발 환경은 미리 다 포함하고 있어서(`Vue, Vuex, Vue-router, Vue-meta, webpack`) 개발 생산성이 높아질 것으로 보여졌다. 

어떤 서비스에 도입해볼까 고민하다가 하이웍스 전자결재 개편 소개 페이지에 도입해보았다.
하이웍스 전자결재 개편 소개 페이지는 IE9 이상 지원해도 될 것이라 생각하였고 20여 페이지 정도의 작은 규모이니 무리가 없을 것이라고 생각했다. 

> "일단 만들면서 모르면 찾아보자"

라고 가볍게 생각하고 시작했는데 결론은 도입은 했으나 삽질의 연속이였다.

[하이웍스 전자 결재 개편 소개 바로 가기](https://www.hiworks.com/hiworks_beta/)

## 본격 도입기 ( ~~삽질기~~)
### 1. 페이지 구성/설계
* 디렉터리 구조
~~~
src/
--| assets/
----| css/
------| main.css
----| images/
--| components/
----| Leftmenu.vue
----| main.vue
----| Rightcontent.vue
--| layouts/
----| hiworks.vue
--| pages/
----| default-approve/
------| create.vue
------| index.vue
------| public.vue
----| format-approve/
------| apply.vue
------| applyview.vue
------| index.vue
------| reply.vue
------| send.vue
------| sendview.vue
------| view.vue
----| new-approve/
------| after.vue
------| after2.vue
------| behalf.vue
------| behalf2.vue
------| index.vue
------| last.vue
------| last2.vue
----| view-approve/
------| index.vue
------| progresss.vue
----| admin-approve.vue
----| docu-approve.vue
----| go-beta.vue
----| index.vue
----| list-approve.vue
----| print-approve.vue
----| write-approve.vue
~~~
* 메인 페이지
  * 반복되는 부분을 v-for를 써서 처리
  <img src="/images/index.png">
* 서브 페이지
    * layout을 만들어서 모든 subpage는 동일한 레이아웃 사용
    * 좌 메뉴는 컴포넌트로 만들어서 재사용
    * 우 콘텐츠는 구성은 비슷하지만 내용이 바뀌는 구조
    <img src="/images/sub.PNG">
### 2.  필요한 개발 도구 설치
* Yarn
    * Yarn은 작업을 병렬로 처리하여 속도가 빠르다.
    * 윈도우는 사이트에서 설치 파일을 다운로드 받아 설치한다.
    * 제대로 설치 되었는지 버전을 확인한다.
    ~~~
    yarn --version
    ~~~
    * 여러 작업자가 일관적으로 패키지 버전을 관리하려면 `yarn.lock`을 공유하면 된다.
    * 새 프로젝트를 initialize하여 package.json을 생성한다.
    ~~~
    yarn init
    ~~~
* Nuxt.js
    * package.json을 아래와 같이 작성한다.       
{% gist 8ef403976aa23ccd684db69fec1859e2 %}
    * Nuxt.js 설치를 한다. 현재 Nuxt.js는 rc버전이므로 0.10.7버전을 선택해서 설치한다.
    ~~~
    yarn add nuxt@0.10.7
    ~~~
    * Vue, vue-server-renderer, vue-template-compiler 세 개의 버전이 모두 동일해야한다. 
      안그러면 start할 때 에러가 발생한다. 개별적으로 Vue의 버전을 업데이트 했다가 이런 문제를 겪었다.
      
### 3. 작업 과정
* 기본 가이드에서는 pages를 생성하고 그 안에서 *.Vue파일을 생성하게 되어 있는데 assets과 components, layouts의 폴더가 생기니 너무 산만해서 src라는 폴더를 만들고 `nuxt.config.js`에서 srcDir 설정을 바꿨다. 
* router는 base에서 변경할 수 있다. 
* generate 폴더 설정
* build 아웃풋 파일 네이밍 변경
* 페이지 생성
    * 모든 Vue 파일에는 name 옵션을 줘서 디버깅이 쉽게 하였다.
    * 메인 페이지는 v-for로 돌리고, css는 scoped 옵션을 줬다.
    * 서브 페이지
        * 좌 메뉴는 컴포넌트로 생성하였다. 
        * `hiworks` 레이아웃을 만들었다. 적용은 `layout: '레이아웃 이름'`
        * 레이아웃을 쓸 때 `<template>` 안에 `<nuxt />`를 넣어주어야 한다.
    * 로딩 페이지
        * 로딩 페이지를 만들고 nuxt.config.js 에서 로딩 페이지 관련 내용을 정의해준다.
        * `true`면 기본 로딩 바를 사용한다는 의미이다.
        * 기본 로딩 바의 색상도 변경 가능하다.
    * 활성 페이지 설정
        * 자동으로 해당 링크에 활성 페이지의 클래스가 생성된다.
        * 그 클래스명(`.nuxt-link-active `)에 맞춰 css를 추가하면 된다.

    * 트랜지션
        * 이것 역시 해당하는 클래스가 있으므로 그것을 그대로 사용하면 된다.   
``` css
.page-enter-active, .page-leave-active {
  transition: all .3s ease;
}

.page-enter, .page-leave-to
{
  opacity: 0;
}

```
* 에셋에 대한 경로나 기타 경로 설정
    * ~assets/
    * ~components/
    * 에셋은 webpack에서 처리된 에셋을 사용해도 되고 별도로 폴더를 루트에 생성하고 사용해도 된다.
* 각 페이지의 메타 태그
    * 전역 메타는 `nuxt.config.js`, 각 페이지 메타 태그는 각 페이지에서 설정한다.
    * 전역 메타의 경우는 og를 넣어주는 것이 좋다.
* 최종 nuxt.config.js는 아래와 같다.
{% gist e198db1d1407fbdab7625c4914591aa2 %}
* 개발서버 자체에서 build 할 수 있게 셋팅이 안되어 있으므로 `yarn generate` 를 입력해서 정적인 파일로 변환하여 배포한다.

        
## 장점
* 기본 레이아웃 사용, 좌 메뉴 컴포넌트 사용, v-for의 디렉티브 사용으로 코드의 양이 줄었다.
* 각 페이지 별로 메타 태그를 설정할 수 있어서 SEO를 향상시킬 수 있었다.
* 기본적으로 페이지 전환, 활성화 된 페이지 표시, 로딩 페이지 기능을 제공하고 있어서 작업 공수를 줄여준다.
* 일부 CSS는 작동하지 않았지만 IE8에서 개편 소개 페이지를 볼 수 있었다.
* 전역 설정과 지역 설정을 나눠서 작업할 수 있다. (메타태그, 페이지 전환, 스타일 시트 적용 등)
* 오류를 체크해주므로 디버깅을 쉽게 할 수 있다.
* 정적인 파일 생성시 자동으로 코드 분할 uglify, minify를 해준다. 이 부분은 옵션에서 수정이 가능하다.

## 시행착오
* CodeIgniter의 경우는 my-project와 같은 명명을 지원하지 않는다. controller에서 설정이 가능하지만 되도록이면 백엔드와 협의  후 명명을 하자.
* 임의로 파일명을 생성하기 보다는 조금 더 의미있는 작명을 했어야하지 않을까
* Yarn으로 로컬서버를 실행시키면 다만 파워쉘로 실행시키면 자주 얼음하고 윈도우에서도 설치가 불편하다. 실제로 제대로 설치가 안되서 2-3번 재 설치를 했다.
* 해당 기술에 대한 충분한 이해가 없어서 삽질을 너무 많이했다.
* 우측 콘텐츠 내용을 하드코딩을 해서 넣었는데 사실 컴포넌트로 만들었으면 더 좋지 않았을까?
* webpack으로 번들링을 하게 되면 모든 파일의 무결성을 위해 해시태그가 랜덤하게 붙게 된다. 옵션에서 변경이 가능하였는데 webpack에 대해 잘 몰라서 그냥 사용했다.


## 결론
* Nuxt.js는 빠르고 가벼운 개발을 하기에 적합한 도구이다.
* 너무 많은 삽질은 생산성을 낮출 수 있으니 기본적인 사용방법은 알아두자.
* 모든 문제의 정답은 가이드에 있다. Nuxt.js 가이드 문서에 없는 내용은 각 개발 도구의 가이드 문서를 찾아보면 있다.
* CodeIgniter + Vue.js boilerplate를 하반기에 만들고 싶다. 
* CSS를 Sass로 사용해서 CSS 개발 생산성도 높여야겠다.
* 다음엔 어떤 서비스에 도입해볼까?

추가) 글을 쓰고 나서 Vue 커뮤니티에 해당 글을 올렸더니 최신 버전에서는 경로 설정이 다르다는 피드백을 받았다.
내가 한 작업에 대해 되돌아보고 그 내용을 공유해서 피드백을 받는 것도 중요하다는 생각을 하였다.
















