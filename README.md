### 조기 축구 동호회 운영을 위한 웹사이트 개발
#### Frontend : React
#### Backend : Node.js Express
#### DB : Mysql
#### server : RaspberryPi 3 b+
   
> _제작 의도_
- 10년 째 운영하고 있는 조기 축구 동호회의 자동화 및 플랫폼화를 위해서.   
- 매주 참석/불참석 인원을 계산하기 위한 불편함이 있다.   
- 회원별 회비 납부 현황을 편하게 게시할 플랫폼이 필요하다.   
- 회비 사용 내역을 편하게 게시할 플랫폼이 필요하다.   
- 회원마다 축구 스텟 및 포지션을 서로 설정할 수 있도록 함으로써 피파온라인 게임과 같은 흥미를 이끌어내고 지속적인 참석 유도 및 회원 유치.   
- 매주 참석 회원들의 포지션 및 팀 분배를 하는 것에 어려움이 있기 때문에 AI를 활용한 자동 팀 분배가 필요.
   
   
> _제작 목표_
- ~~kakao open api 중, 카카오 친구에게 메시지 전송 API를 통해 금주 참석/불참석 여부 확인 메시지를 개별적으로 전송.~~
     * __postman을 통해 kakao open api 인증 및 테스트 완료__
- 데이터베이스 설계 및 연동
- 로그인 및 회원가입 페이지 제작
- 카카오로 로그인할 수 있는 기능 추가
- ~~JWT로 클라이언트와 서버 인증~~
     * __JWT를 이용한 서버 - 클라이언트 인증 완료__
- 매주 수요일 오전 10시에 가입한 회원들을 대상으로 참석 여부 확인 카카오톡 메시지 전송(메시지의 버튼 선택만으로 참석/불참석 선택이 가능하도록)
- 회비 납부 현황 페이지 제작
- 회비 사용 내역 현황 페이지 제작
- 회원별 스텟 및 포지션 확인 페이지 제작
- 매주 일요일 오전 11시에 금주의 MVP 투표 카카오톡 메시지 전송
- 매주 일요일 오전 11시에 금주 운동에 참석한 회원들을 대상으로 회원 스텟을 수정할 수 있는 포인트 지급
- 참석 예정 회원들의 스텟 합산을 기반으로 자동 팀 배분 및 포지션 지정
