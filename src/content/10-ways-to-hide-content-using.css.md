---
layout: post
title: CSS를 이용한 10가지 콘텐츠 숨기기 방법
author: [Aria]
date: 2022-11-03 09:13:00
tags: 
  - frontend
  - css

draft: true
---

css를 이용한 콘텐츠 숨기기 방법은 매우 다양하다.
애니메이션, 접근성, 이벤트 발생, 성능 등을 기반으로 상황에 적합한 콘텐츠 숨기기 방법을 선택할 수 있다.
각 방법의 특징을 알아보고 예제를 보면서 어떻게 콘텐츠를 숨기는지 확인해보자.

## 📺 애니메이션
- 일부 CSS로 콘텐츠를 숨기는 방법은 요소가 완전히 표시되거나 완전히 표시되지 않으며 중간 상태가 없다. 
- 두 상태에서 속성의 변화가 일정기간에 걸쳐 일어나야 CSS Animation이 가능하다.

## 💬  접근성

- 아래의 방법들은 요소를 시각적으로 숨길수 있지만 스크린리더와 같은 보조 기술을 사용하는 사용자에게는 여전히 읽을 수 있는 요소가 될 수도 있다.
- `aria-hidden="true"` 같은 ARIA 속성을 사용하면 된다. 이렇게 하면 스크린리더와 같은 보조 기술을 사용하는 사용자가 콘텐츠 탐색을 할 수 없게 된다.

## 🔫 이벤트 발생

## 💥성능

## 🙈  CSS를 이용한 10가지 콘텐츠 숨기기 방법

### 😟 1. `display: none`
https://codepen.io/shoo7830/pen/qBxZpzX
- 가장 많이 사용하지만 가장 느리다. → 성능 나쁨
- 이 속성이 설정되면 DOM에서 요소는 완전히 삭제
- 페이지 레이아웃 변경이 발생.
- 애니메이션을 할 수 없다.
- 스크린리더가 읽지 않는다.
- 이벤트가 발생하지 않는다.

### 2. `visibility: hidden`

### 3. hidden 속성 (HTML attribute)

### 🌟 4. `opacity`

### 5. `color` Alpha Transparency

### 🌟 6. `transform`

### 7. `clip-path`

### 8. `position` 으로 화면에서 밀어내기

### 9. 다른 요소로 덮어쓰기

### 10. 요소의 크기를 0으로 하기


## 🔎 참고

https://twitter.com/swapnakpanda/status/1514080001150185473
