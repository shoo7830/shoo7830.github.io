---
layout: post
title: Pure CSS Drawing with codepen.io
image: img/testimg-cover.jpg
author: [Aria]
date: 2014-10-24 11:09:07
tags:
  - frontend
  - codepen
  - css
  - drawing
  - study
excerpt: Where to find this project on GitHub.
draft: true
---

css관련 글을 구글링 하다가 ["Simpsons in CSS"](http://www.chrispattle.com/blog/simpsons-in-css/) 라는 글을 보게 되었습니다.  
Chris Pattle이라는 웹 개발자가 순수하게 CSS만을 사용해서 유명 애니메이션 심슨가족 캐릭터를 어떻게 그렸는지 소개한 글입니다.  
["The Simpsons in CSS"](http://pattle.github.io/simpsons-in-css/)프로젝트 페이지도 연결되어 있어 더 많은 캐릭터 그림을 볼 수 있었습니다.  
이 글을 보고, 저도 언젠가는 CSS로 그림을 그려봐야겠다고 생각(만) 했었죠.

그러다가 CSS만 사용해서 그린 아이폰6를 보게 되었습니다.

See the Pen [CSS Only iPhone 6](http://codepen.io/fbrz/pen/vlrnd/) by Fabrizio Bianchi ([@fbrz](http://codepen.io/fbrz)) on [CodePen](http://codepen.io).

이것을 보고 나니 진짜 CSS로 못하는 것이 무엇일까? 라는 생각과 이렇게 그림을 그리다보면 CSS에 대한 이해도와 활용방법이 늘겠다라는 생각을 하게 되었습니다. 그래서 CSS를 이용해 그림 그리기를 시작했습니다. 전 이제 시작단계이니 나름 간단한 라인의 캐릭터 "브라운"의 얼굴만 그리기로 했습니다.   ![라인 브라운](http://cfile6.uf.tistory.com/image/122ED13350319BB621F358) 일반적인 에디터에서 작업해도 좋지만, 코드를 작성하고 실시간으로 결과를 확인할 수 있는 [codepen.io](http://codepen.io/)를 사용하기로 했습니다. 그렇게 해서 그린 브라운입니다.

See the Pen [line brown css3 drawing](http://codepen.io/shoo7830/pen/jKqcv/) by In Suk Kim ([@shoo7830](http://codepen.io/shoo7830)) on [CodePen](http://codepen.io).

이렇게 그리다보니 제 코드의 몇 가지 개선할 점이 보입니다.

1.  되도록 div를 적게 사용하면서 CSS로 표현하기  
    css로 그린 그림들은 대부분 div하나를 이용하며, :after나 :before 같은 슈도 선택자를 사용해서 그림을 그립니다. 지금은 div를 남발해서 그렸는데 차후에는 저도 div를 줄이려고 합니다.
2.  귀 부분은 어떤 속성을 쓰면 잘 그릴 수 있는지 고민하기  
    브라운의 귀 부분은 얼굴과 자연스럽게 연결이 되며, 귀 안쪽에 반원 형태의 색상이 들어갑니다. 위에 언급한 심슨캐릭터 그리는 방법을 응용해보려고 합니다.

PSD 페이지 마크업만 하다가 이렇게 즐기면서 CSS를 익히니 더 기억에 남고, 불분명한 것은 책이나 명세로 다시 한번 확인하니 쉽게 잊어버리지 않을 것 같습니다.

* * *

**참고링크**

*   [CSS로 그리는 그림, Pure CSS Drawing](http://nuli.navercorp.com/sharing/blog/post/1132695) \- CSS Drawing의 장단점, 실무 적용 가능성에 대해 잘 설명되어 있습니다.
*   [A Single Div](http://a.singlediv.com/) \- 한 개의 div에 CSS로 그림을 그리는 프로젝트입니다.
*   [The Shapes of CSS](http://css-tricks.com/examples/ShapesOfCSS/) \- CSS로 Shape를 그리는 방법을 소개하였습니다.