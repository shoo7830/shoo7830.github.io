---
layout: post
title: JavaScript 라이브러리 충돌 방지
author: [Aria]
date: 2015-06-30 07:09:48
tags:
  - frontend
  - javascript
  - jquery
draft: true
---

짧은 실력이지만 현재 운영하고 있는 그룹웨어 서비스 로그인 페이지에 마우스를 오버하면 툴팁이 뜨도록 JQuery로 작업을 했습니다.

그런데, 툴팁이 뜨지 않는 것입니다. 클래스 명이나 변수가 잘못되었나 확인해봤지만 문제가 없었습니다.

firebug로 확인해보니 Prototype.js가 그룹웨어 서비스 어딘가에서 사용되고 있었습니다. Prototype.js 도 JQuery처럼 $() 를 사용합니다.  그러므로 라이브러리간에 충돌이 발생할 수 있습니다.

충돌을 방지하기 위해서는 메서드 $.noConflict() 를 사용하여 아래와 같이 해결합니다.

     //플러그인 간의 충돌을 제거합니다.
     $.noConflict();
     var J = jQuery;
 
 
     //jQuery를 사용합니다.
 
     J(document).ready(function(){
        J('h1').removeClass('high_light')

    });