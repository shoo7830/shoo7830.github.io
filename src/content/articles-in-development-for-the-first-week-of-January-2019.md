---
layout: post
title: 2019 1월 첫 주 개발 아티클
author: [Aria]
date: 2019-01-09 00:16:35
tags: 
  - articles
  - css
  - development
  - html
  - javascript
  - vue
excerpt: Where to find this project on GitHub.
draft: false
---

개발 일반
-----

*   [번역 2019년, 프론트엔드 개발자는 여전히 좋은 선택일까?](https://seunghyun90.tistory.com/35?fbclid=IwAR0MWURvGgMbg0iGFGmtKo0cg22NpdM0u0Q4tPwgzhbScnVJiK3_9pduFTo) \- 프론트엔드개발에 대한 장점/단점/갖춰야할 역량들을 짚어보는 글. 트렌드에 흔들리지 않기 위해서 프레임워크보다는 기본 개념과 원리를 공부하는 것에 대해 강조하고 있다. 자바스크립트는 반드시 알야야 할 것!
*   [효과적인 코드 리뷰를 위해서 \- LINE ENGINEERING](https://engineering.linecorp.com/ko/blog/effective-codereview/?fbclid=IwAR379y2wA7az5KLt48uRE6AAc9NKTf3QUg8aGC-VbNUV58y67D9Qb4gWmOY) \- 라인 대만에서 유닛 테스트와 코드 리뷰 프로세스를 활성화 시키기 위해 했던 것에 대한 소개. 효과적인 코드 리뷰를 위한 팁들을 알려주고 있다. 추후 팀에 코드 리뷰를 도입할 때 도움이 될 내용.
*   [어느 스타트업의 애자일 스크럼와 JIRA에 대한 연구 문서](http://luckyyowu.tistory.com/370?fbclid=IwAR1YdyJ73KgTG0bOjyeFX7ZfjYa3LKcY48ckw8QKfPCUrygfiTCrxLnxbJo) \- JIRA를 도입하면서 JIRA의 활용 방안을 연구해서 작성한 글. 레드마인과는 어떤 차이가 있나 한번 읽어봐야겠다.
*   [Top Web Development Articles of 2018 – gitconnected.com blog | Be a Better Developer](https://levelup.gitconnected.com/top-web-development-articles-of-2018-bd5c3900110b?fbclid=IwAR0tKAtU5IRnS0cwoYuqWKA5wr_RjLeE-sTyUasKdZP0nTLvazVZ57rTPjs) \- 2018년 최고의 웹개발 기사에 대해 다루고 있다 .
*   [JavaScript 코드 리뷰 - 코드 리뷰 문화 – 좋은 JavaScript 코드 작성을 위한 블로그](https://cimfalab.github.io/deepscan/2016/08/code-review-1) \- 오래된 글이지만 코드리뷰를 하면서 자바스크립트 코드 개선 사례와 팁에 대한 공유 글.

HTML/CSS
--------

*   [How To Learn CSS — Smashing Magazine](https://www.smashingmagazine.com/2019/01/how-to-learn-css/?fbclid=IwAR0cZffTV4-8_BaXmPgqpDySEy06O4Y2GDsl_EqM1KjPYeWWcgpJW8jE19o) \- CSS 개발 핵심 기본 사항과 리소스를 간략하게 설명한 글. CSS개발에 대한 흐름을 확인할 수 있다.
*   [NAVER D2 - flexbox로 만들 수 있는 10가지 레이아웃](https://d2.naver.com/helloworld/8540176?fbclid=IwAR2RNVpxxyRdh0zkHvfoBA6hC9jHUfGKc35OvlgjYS2AQJ_GZigX7yl8rI8) \- 구현이 어려운 레이아웃을 간단하게 구현 할 수 있게 CSS3에서 추가된 레이아웃 방식 flexbox에 대해 설명 한 글. 실무에서 많이 사용하지만 기존의 방식으로 구현이 어렵거나 불가능한 레이아웃 10개를 선별해서 구현 하는 방법을 알려준다.
*   [HTML Canvas로 기가 픽셀 데이터 시각화하기 – Sangyeop Bono Yu – Medium](https://medium.com/@Dev_Bono/html-canvas%EB%A1%9C-%EA%B8%B0%EA%B0%80-%ED%94%BD%EC%85%80-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%8B%9C%EA%B0%81%ED%99%94%ED%95%98%EA%B8%B0-2645b3aa2091) \- 분석결과를 시각화 하면서 얻은 노하우에 대한 공유 글.

JavaScript
----------

*   [Including Markdown Content in a Vue or Nuxt SPA - Vue.js Developers](https://vuejsdevelopers.com/2018/12/31/vue-nuxt-spa-markdown/?fbclid=IwAR0Wg4dnVLLDsoIvXYB5EKRzx5eIsDRyEL0hossDbqghTKO9Pd70oBsuyvY) \- Vue SPA에 마크다운 파일을 포함시키는 방법에 대해 단계별로 설명.
*   [GitHub - egoist/lit-vue: 🔥 Vue SFC goodies directly in JavaScript files.](https://github.com/egoist/lit-vue) \- 자바스크립트나 타입스크립트에 바로 Vue SFC를 작성할 수 있게 도와주는 플러그인
*   [Stop using CSS with React | ENvironmentSet](https://environmentset.github.io/2019/01/06/Stop-using-CSS-with-React/) \- React를 사용할 때 CSS selector가 제 역할을 못하게 되므로 CSS-IN-JS를 쓰길 권하는 글
*   [Top JavaScript Frameworks and Topics to Learn in 2019](https://medium.com/javascript-scene/top-javascript-frameworks-and-topics-to-learn-in-2019-b4142f38df20) \- 2019년에 배우게 될 자바스크립트 생태계에 대한 예측. React와 TypeScript, 자바스크립트의 기초, 블록체인에 집중하는 것이 좋겠다.
*   [Vue.js Advent Calendar 2018 - Qiita](https://qiita.com/advent-calendar/2018/vuejs) \- Vue.js관련 대림절 달력. 매년마다 볼만한 다양한 아티클이 올라온다.
*   [NAVER 테크톡 - 함수형 자바스크립트와 동시성 프로그래밍 - YouTube](https://www.youtube.com/watch?v=fWRMM6AaMMc&feature=youtu.be&fbclid=IwAR0g7REljgoyQJMkTneiXf5hsOVhXBMZ9yt4DKoiMejFK-NV4PHblsD5bRc) \- 함수형 자바스크립트 네이버 테크톡 발표 동영상. 이걸 보면 누구나 함수형 프로그래밍의 노예가 된다.

Etc.
----

*   [「GraphQL」徹底入門 ─ RESTとの比較、API・フロント双方の実装から学ぶ - エンジニアHub｜若手Webエンジニアのキャリアを考える！](https://employment.en-japan.com/engineerhub/entry/2018/12/26/103000?fbclid=IwAR0GDexnRiRNySAodOPu9_ctBjmNmhyUQnQ6M1FvKvVzckYniA-h1_Z6ZUQ) \- GraphQL에 대한 철저한 입문 가이드.(일문)