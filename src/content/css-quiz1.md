---
layout: post
title: CSS Quiz-CSS를 이용해 아군을 구출하라!
image: img/testimg-cover.jpg
author: [Aria]
date: 2015-06-30 11:45:37
tags: 
  - frontend
  - css
  - markup
excerpt: Where to find this project on GitHub.
draft: true
---

출처 : 정찬명님 블로그 (http://naradesign.net/wp/2014/08/01/2057/)

 상황 설명
------

*   <ol>은 적의 진영이기 때문에 함부로 침범하거나 수정할 수 없습니다.
*   <li>는 적군 병사이거나 또는 적군에게 잡혀간 아군 병사들 입니다.
*   1과 9는 적의 문지기 병사이고, 짝수인 2, 4, 6, 8 역시 적군 병사입니다.
*   밑줄 친 숫자(1보다 크고 9보다 작은 홀수)가 적진에 잡혀간 아군 병사입니다.

> <style>/* 아군 진지: 작전은 이곳에 */</style>  
> <!– 적군 진지: 수정할 수 없음 –>  
> <ol>  
> <li>1(적군: 문지기)</li>  
> <li>2(적군)</li>  
> <li>3(아군)</li>  
> <li>4(적군)</li>  
> <li>5(아군)</li>  
> <li>6(적군)</li>  
> <li>7(아군)</li>  
> <li>8(적군)</li>  
> <li>9(적군: 문지기)</li>  
> </ol>  
> <!– 적군 진지: 수정할 수 없음 –>

미션 설명
-----

*   아군 진지에서 스타일 상륙작전을 이용하여 적진에 잡혀간 아군 병사에게 빨간 망토(background:red)를 씌워주세요.
*   아군 진지에서 가장 짧게 작전을 작성하여 아군 포로에게만 빨간 망토를 씌우는 사람이 승리.
*   비밀 작전이기 때문에 JS 또는 image 연합군의 도움을 받을 수 없음.
*   야전 교범: [http://www.w3.org/TR/selectors/](http://www.w3.org/TR/selectors/)
*   훈련소: [http://codepen.io/](http://codepen.io/) | [http://jsfiddle.net/](http://jsfiddle.net/)
*   정찬명 님의 답 :  [http://codepen.io/naradesign/pen/Hocut](http://codepen.io/naradesign/pen/Hocut)

최근에 전문가를 위한 CSS3를 공부하는 중에 이 문제를 만난 덕분에 쉽게 풀었습니다.

See the Pen [yNPxGe](http://codepen.io/shoo7830/pen/yNPxGe/) by In Suk Kim ([@shoo7830](http://codepen.io/shoo7830)) on [CodePen](http://codepen.io).