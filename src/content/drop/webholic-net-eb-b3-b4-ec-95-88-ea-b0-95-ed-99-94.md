---
title: webholic.net 보안강화
tags:
  - plugin
  - wordpress
  - wp_login_brute_force_attack
  - 보안
  - 워드프레스
url: 137.html
id: 137
categories:
  - 일상 끄적끄적
date: 2014-06-02 11:10:57
---

지난 토요일 회사에 잠깐 나올 일이 있어서 일을 하고 집에 가는데 문자 한통이 날라온다

> \[OOO 호스팅\] OOOOOOOO계정이 서버과부하 유발로 인하여 차단되었습니다.

응??? 달랑 10메가 바이트 되는 워드프레스 블로그가 무슨? 서버과부하????라는 생각으로 사이트 접속을 해봤는데 너님 계정 서버과부하 유발해서 차단~ 이런 페이지가 뜬다.

주말이라 고객센터에 글을 남겼더니 1초 간격으로 wp-login.php를 접속하려고 시도한게 보였고, 이 시도로 인해 CPU부하가 걸려서 어쩔 수 없이 차단했다는 것이다. 이 부분을 보완하면 해지해주겠다고 답변이 왔다. 해지라고 하니 당연히 웹호스팅 계정 자체를 해지 해야한다는 말로 받아들였다.

일단 자료가 중요하므로, 컴에 APM을 설치하고, FTP접속은 되니 주말에 백업 받아놓은 것들을 로컬에 풀어놓았다. 그리고 몇 가지 워드프레스 플러그인들을 검색해서 테스트로 설치했다.

그리고,  급하게 해당 호스팅 업체에 전화를 했다.

> 슈기냥 : 내 계정 차단당했다. 해지(나의 의미는 호스팅 자체)하라고 하던데...어쩌라는거냐...
> 
> 담당자 : 난 차단한 담당자는 아닌데, 일단 차단된거 해지해주겠다. 바로 보완 ㄱㄱ
> 
> 슈기냥 : (@!$%@#^%^@%$!) 응? 차단 풀어준거...???오케 바로 보완 ㄱㄱ

아니 그러면 차단을 해지해주겠다고 해야지 =_= 목적어 없이 해지라고 하면 어쩔...내가 관심법이 있어서 개떡같이 말해도 찰떡같이 알아먹는 것도 아니고...

차단이 풀리자마자 구글링을 해서 wp-login.php관련 이슈를 찾았다. 그리 했더니 "wp-login.php brute force attack" 이란 것이 있었다. 이것이 이번에 내 블로그를 차단당하게 만든 것이였다.

일단 보안강화는 아래와 같이 했다.

1.  IP Blacklist 플러그인 설치 : 비정상적인 접속을 한 IP차단
2.  Captcha On Login 플러그인 설치 : 로그인 할 때마다 Captcha 입력
3.  HC Custom WP-Admin 플러그인 설치 : 알려져 있는 admin slug를 사용자가 변경할 수 있도록 하는 플러그인

아래의 링크를 참조해서 좀 더 보안할 계획이다.

*   [http://www.inmotionhosting.com/support/news/general/wp-login-brute-force-attack](http://www.inmotionhosting.com/support/news/general/wp-login-brute-force-attack " WordPress wp-login.php brute force attack")