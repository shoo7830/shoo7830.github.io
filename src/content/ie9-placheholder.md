---
layout: post
title: IE9 이하에서 placeholder 적용하기
image: img/testimg-cover.jpg
author: [Aria]
date: 2014-05-29 20:02:50
tags:
  - frontend
  - javascript
  - ie
  - markup
  - placeholder
excerpt: Where to find this project on GitHub.
draft: true
---

각종 입력 폼에 예시 문구를 나타내기 위해서 예전에는 이미지를 잘라서 position을 잡고 포커싱이 되면 이미지가 사라지게 하는 방법을 사용했다.

HTML5에 추가된 placeholder 속성을 사용하면 아주 간단하게 예시 문구를 처리할 수 있는데, 이 죽일 넘의 IE는 IE9 이하는 placholder가 뭔지 모른다.

하지만 간단하게 스크립트 하나만 추가하면 IE9 이하에서도 placeholder를 사용할 수 있다.

두 가지 스크립트가 있다. 하나는 JQuery를 사용하는 방법이고 하나는 Placeholders.js이다.

*   [https://github.com/mathiasbynens/jquery-placeholder](https://github.com/mathiasbynens/jquery-placeholder)
*   [http://jamesallardice.github.io/Placeholders.js/](http://jamesallardice.github.io/Placeholders.js/)

[http://jamesallardice.github.io/Placeholders.js/](http://jamesallardice.github.io/Placeholders.js/)  에서 스크립트를 다운 받고 아래와 같이 써준다.

<script src="placeholders.min.js"></script>

이러면 끝!  
각 버전별로 잘 동작하는 것을 확인할 수 있었다.

2014.09.22 추가사항

Placeholder.js 파일은 간편하지만, IE7~9에서 새로고침을 누른 경우 가끔 placeholder가 사라질 때가 있다.

그래서 지금 진행중인 프로젝트에서는 JQuery를 사용하는 방법을 이용하기로 한다.

우선 [https://github.com/mathiasbynens/jquery-placeholder](https://github.com/mathiasbynens/jquery-placeholder) 에서 스크립트를 다운받고 아래와 같이 써준다.

<script src="jquery.placeholder.js"></script>

그런 다음,  코드 한 줄을 추가한다.

$('input, textarea').placeholder();

IE7~9에서 전부 확인해보니 별 문제 없이 동작하였다. 개인적으로는 이 방법을 더 추천한다.

2015.02.11 추가사항

placeholder.js를 사용하면 IE9이하는  .placeholder라는 클래스가 자동으로 input에 생성된다.

이것을 이용하여 placeholder 색상을 바꿀수 있다.

다만, IE10이상, FF, Chrome의 경우는 각각 브라우저 업체별 접두어를 사용해서 변경한다.

.placeholder {color:#677787;}
:-ms-input-placeholder {color:#677787;} /* M$ */
::-webkit-input-placeholder {color:#677787;} /* webkit */
::-moz-placeholder{color:#677787;} /* firefox */