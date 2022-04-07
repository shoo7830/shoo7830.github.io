---
layout: post
title: 2021년 5월에 배운 것
author: [Aria]
date: 2021-06-01 17:30:52
tags: 
  - til
draft: false
---

업무를 하다가 배운 것, 공부를 하다가 배운 것들을 주로 Notion에 정리하고 있다.

정리만 하고 다시 보는 경우가 없어서 5월부터는 무슨 작업을 하다가, 어떤 것을 공부하다가 배운 것인지 블로그에 적어보기로 했다.

* [고밀도 디스플레이 대응](https://blog.hanlee.io/2018/high-density-display-and-images/): 2019년부터 회사에서 맥을 쓰는 직원들이 늘어나기 시작했다. 그러다보니 레티나 디스플레이에서 이미지가 약간 뿌옇게 보인다고 알려주는 사람들이 늘었다. 레티나 디스플레이 같은 고밀도 디스플레이 대응은 꼭 필요하게 되었고 그에 대한 방법론을 찾다가 이 글을 찾게 되었다. 이 글을 통해 디스플레이에 따라 적합한 이미지를 보여주는 방법을 익혔고, EMS 작업할 때 유용하게 사용하였다. 

* [Node.js와 npm 실행시 icu4c 오류](https://jolly-sally.tistory.com/16): Homebrew를 통해서 Node.js, npm을 설치해서 사용하고 있는데 어느날 갑자기 icu4c오류가 떴다. 해당 오류에 대한 해결 방법이 이 글에 정리가 되어있다. 

* mac에서 npm install이 안될 때 해결방안
  * 원인 1. [node-gyp 관련](https://jojoldu.tistory.com/566)
  * 원인 2. node 버전이 LTS가 아니였음.
    * 해당 프로젝트에서 사용하는 node-sass는 node16을 지원하지 않았다.
    * node를 homebrew로 설치했더니 16.x 버전으로 설치가 되었다. LTS로 node를 다시 설치하였더니 npm install이 잘 되었다.

* mpdf
  * mpdf로 pdf를 생성할 경우는 꼭 지원하는 css에는 어떤 것이 있는지 확인할 필요가 있다.
  * 해당 프로젝트에서 `display: inline-block` 을 사용했는데 mpdf에서는 display속성이 `none` 만 지원한다.
  * [mpdf에서 지원하는 css](https://mpdf.github.io/css-stylesheets/supported-css.html)

* [interface와 type의 공통점과 차이점](https://yceffort.kr/2021/03/typescript-interface-vs-type): 캡틴판교님의 타입스크립트 강의를 듣다가 interface와 type이 비슷하면서 차이가 있는 것 같아 잘 정리된 글을 찾다가 발견하였다. 이 글에서는 type보다는 interface를 쓸 것을 추천하고 있다. 

깃헙액션이 제대로 되었는지 확인차 수정