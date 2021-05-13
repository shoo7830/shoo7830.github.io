---
layout: post
title: Sass/Less에서 calc() 사용하기
author: [Aria]
date: 2017-10-13 23:36:09
tags:
  - frontend
  - sass
  - scss
  - less
  - calc
draft: false
---

css3 width속성 중 `calc()`이라는유용한 단위 값이 있다.
이것은 너비에 대해 계산 된 값을 허용하는 방법인데, 보통은 아래와 같이 작성한다.

~~~ css
width: calc(100% - 10px);
~~~

그런데 Sass/Less로 위와 같이 작성하면 제대로 나오지 않는다.
둘 다 다른 방식으로 작성해야 한다.

## Sass
~~~ scss
@mixin calc($property, $expression) {
  #{$property}: -moz-calc(#{expression});
  #{$property}: -webkit-calc(#{expression});
  #{$property}: calc(#{expression});
}

article {
  @include calc(width, '100% - 10px')
}
~~~

만약 gulp에서 autoprefixer를 설정했다면 위의 두 줄은 생략해도 된다.

## Less
~~~ less
width: ~"calc(100% - 10px)";
~~~

로 적어주거나

~~~ less
@article-width: 10px;

aritcle {
  width: -webkit-calc(~"100% -" @article-width);
  width: -moz-calc(~"100% -" @article-width);
  width: calc(~"100% -" @article-width);
}
~~~

변수를 선언해서 사용해도 된다.

