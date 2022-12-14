const menu = [
  {
    name: '감자 그라탕',
    description:
      '버터에 구운 감자 위에 토마토소스와 모짜렐라치즈를 얹어 오븐에 구운 그라탕',
    ingredients: ['감자', '모짜렐라 치즈', '토마토 소스', '닭 안심', '버터'],
    category: '양식',
  },
  {
    name: '버섯 리조또',
    description: '표고 버섯과 양송이 버섯으로 만든 화이트 리조또',
    ingredients: [
      '표고버섯',
      '양송이 버섯',
      '쌀',
      '올리브유',
      '우유',
      '파마산 치즈',
    ],
    category: '양식',
  },
  {
    name: '크림 스튜',
    description: '화이트 소스에 각종 야채와 고기를 넣어 끓인 스튜',
    ingredients: [
      '우유',
      '밀가루',
      '버터',
      '당근',
      '양파',
      '감자',
      '브로콜리',
      '소세지',
    ],
    category: '일식',
  },
  {
    name: '햄버그 스테이크',
    description:
      '다진 돼지고기로 만들어 와인/크림/토마토/오일 중 원하는 소스를 곁들여 원하는 야채와 서빙',
    ingredients: ['돼지고기', '양파', '마늘', '후추'],
    category: '양식',
  },
  {
    name: '닭 한마리',
    description: '손질 된 닭을 파, 양파, 마늘 등과 푹 끓인 국물 요리',
    ingredients: ['닭', '파', '통마늘', '양파', '감자', '부추'],
    category: '한식',
  },
  {
    name: '계란 볶음밥',
    description: '간단하고 빠른 계란 볶음밥',
    ingredients: ['계란', '간장', '밥', '까나리 액젓'],
    category: '중식',
  },
  {
    name: '마파두부',
    description: '셰프가 가장 자신있어하는 메뉴, 맵기 조절 가능',
    ingredients: ['두부', '두반장', '굴소스', '마늘', '고춧가루', '돼지고기'],
    category: '중식',
  },
  {
    name: '애플 파이',
    description: '사과를 졸여서 만든 파이, 계피 가루 제외 가능',
    ingredients: ['사과', '밀가루', '버터', '시나몬 가루'],
    category: '디저트',
  },
  {
    name: '스콘',
    description: '무염 버터로 만드는 영국식 스콘',
    ingredients: ['밀가루', '계란', '우유', '버터'],
    category: '디저트',
  },
  {
    name: '맨하탄',
    description: '스카치 위스키에 그레나딘 시럽과 라임주스를 넣은 칵테일',
    ingredients: ['스카치', '그레나딘', '트리플 섹', '라임주스'],
    category: '음료',
  },
  {
    name: '핫케익',
    description: '포슬하고 두꺼운 핫케익',
    ingredients: ['핫케익 믹스', '계란', '우유', '핫케익 시럽'],
    category: '디저트',
  },
  {
    name: '치킨 난반',
    description:
      '닭안심을 전분에 튀겨 간장소스와 타르타르 소스에 찍어 밥과 함꼐 먹는 일본 가정식',
    ingredients: ['닭고기', '간장', '생강', '타르타르 소스'],
    category: '일식',
  },
  {
    name: '알리오 올리오',
    description: '평범한 오일 파스타, 토핑 자유롭게 선택 가능',
    ingredients: ['파스타 면', '올리브유'],
    category: '양식',
  },
  {
    name: '오차즈케',
    description:
      '후리가케를 뿌리고 토핑을 올린 쌀밥에 녹차를 부어먹는 먹는 간단한 요리',
    ingredients: ['밥', '후리가케', '녹차', '다시마'],
    category: '일식',
  },
  {
    name: '감자스프',
    description: '감자와 양파를 갈고 우유를 넣어 크루통과 함께 먹는다.',
    ingredients: ['감자', '양파', '버터', '우유', '식빵'],
    category: '양식',
  },
  {
    name: '하이볼',
    description:
      '삼오 바텐더가 타주는 상큼한 하이볼. 베이스 술은 그 때 그 때 다르다.',
    ingredients: ['레몬즙', '양주', '토닉워터'],
    category: '음료',
  },
  {
    name: '맥앤 치즈',
    description:
      '직접 만든 치즈 소스를 마카로니와 섞어 먹는다. 꽤나 느끼하고 짬',
    ingredients: ['마카로니', '치즈', '우유', '버터', '밀가루'],
    category: '양식',
  },
  {
    name: '팝콘',
    description: '그냥 팝콘을 평범하게 튀겨준다. 후추를 뿌려먹으면 맛있다.',
    ingredients: ['팝콘', '버터'],
    category: '디저트',
  },
];

export default menu;
