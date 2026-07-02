import type { CareerCompany, CareerProject } from "@/lib/types/career";

export type {
  CareerCompany,
  CareerProject,
  CareerProjectLink,
  CompanySlug,
} from "@/lib/types/career";

export const careerCompanies: CareerCompany[] = [
  { slug: "hankookilbo", label: "hankookilbo.", period: "2023. 07 ~ 현재" },
  { slug: "witplus", label: "witplus.", period: "2017. 02 ~ 2023. 06" },
  { slug: "cidow", label: "cidow", period: "2015. 11 ~ 2016. 11" },
];

export const careerProjects: CareerProject[] = [
  {
    company: "hankookilbo",
    title: "한국일보 뉴플랫폼 모니터링 시스템 운영",
    period: "2026. 04. ~ 2026. 07.",
    role: ["프론트엔드 서비스 모니터링 및 운영 관리"],
    issues: [
      "대규모 트래픽 유입 시 발생하는 클라이언트 사이드 병목 및 런타임 에러의 실시간 관측 필요",
      "릴리즈 이후 실시간 장애 징후 조기 파악 및 전사 전파를 위한 중앙 모니터링 체계 필요",
    ],
    tasks: [
      "DataDog을 활용한 실시간 서비스 에러 관측, 로그 트래킹 및 상시 이슈 대응",
      "클라이언트 사이드 에러 모니터링 및 브라우저 성능 지표 수집·분석",
      "장애 예방을 위한 DataDog 커스텀 대시보드 관리 및 장애 징후 조기 탐지 체계 운영",
    ],
    tech: "Git, Next.js, DataDog, Jenkins",
  },
  {
    company: "hankookilbo",
    title: "한국일보 독자 데이터 트래킹 및 파이프라인 관리",
    period: "2026. 02. ~ 2026. 06.",
    role: ["데이터 트래킹 관리 및 로그 데이터 적재"],
    issues: [
      "지면 개편 및 레이아웃 변경 시 독자 행동 로그 데이터의 수집 누락 및 왜곡 방지 필요",
      "사내 자산(Hmap)과 외부 툴(GA4) 간 데이터 정합성 유지 및 스크립트 증가에 따른 페이지 로딩 부하 제어",
    ],
    tasks: [
      "GTM 기반 이벤트 태깅 수립 및 GA4 데이터 연동 파이프라인 관리",
      "사내 자체 데이터 시스템(Hmap 1.0, 2.0 DLA) 규격에 맞춘 클라이언트 로그 데이터 매핑 및 바인딩",
      "AWS Athena를 활용한 Hmap 2.0 로그 DB 검색 및 수집 정합성 데이터 최종 검증",
      "기사 지면 내 유저 행동 로그 수집 안정성 상시 모니터링 및 유실 방지",
    ],
    tech: "Git, Next.js, GTM, GA4, Hmap 1.0, Hmap 2.0 (DLA), AWS Athena, SQL, Jenkins",
  },
  {
    company: "hankookilbo",
    title: "한국일보 사이트(뉴플랫폼)",
    period: "2025. 07. ~ 2026. 03.",
    role: ["FE 개발 리드 및 아키텍처 설계"],
    issues: [
      "Next.js 전환 과정에서 외주 개발 인력의 일관된 코드 품질 및 컨벤션 통제 필요",
      "기사 데이터 성격에 따른 효율적인 SSR/CSR 분기 및 캐싱 인프라 구성 필요",
    ],
    tasks: [
      "FSD 아키텍처 구조 정의 및 외주 개발용 소스코드 컨벤션 가이드라인 수립",
      "AWS CloudFront 기반 메인(SSR) 및 리스트(CSR) 하이브리드 서빙 아키텍처 설계",
      "외주사 소스코드 리뷰 진행 및 전사 기술 표준화를 위한 파트너사 커뮤니케이션 리드",
    ],
    tech: "Git, Next.js, TypeScript, FSD Architecture, AWS CloudFront, AWS EC2, Jenkins",
  },
  {
    company: "hankookilbo",
    title: "한국일보 대화형 AI 검색",
    period: "2025. 07. ~ 2025. 09.",
    role: ["신규 기능 개발 및 서비스 고도화"],
    issues: [
      "다단계 연쇄 AI API 파이프라인의 실시간 데이터 흐름 제어 필요",
      "연속 재검색 및 이탈 시 발생하는 불필요한 네트워크 리소스 낭비 제어 과제 존재",
    ],
    tasks: [
      "useContext 기반 상태 관리를 활용해 복잡한 AI 질의응답 흐름 데이터 동기화 구현",
      "AbortSignal을 도입하여 연속 요청 및 언마운트 시 이전 API 취소 최적화 적용",
      "엄격한 TypeScript 설계 및 예외 처리 가드로 실시간 데이터의 런타임 에러 차단",
      "피드백 API 연동 및 추천 질문 인터페이스 구현으로 대화형 UI/UX 고도화",
    ],
    tech: "Git, React.js, TypeScript, useContext, REST API, CSS Modules, Jenkins",
  },
  {
    company: "hankookilbo",
    title: "한국일보 뉴스레터 마이그레이션",
    period: "2025. 01. ~ 2025. 03.",
    role: ["서비스 고도화"],
    issues: [
      "전사 기술 전환에 앞서 기존 레거시(JSP) 환경 내에 React.js를 시범 도입하고 검증해야 하는 과제 존재",
      "서로 다른 두 렌더링 환경(JSP와 React)을 결합하며 발생하는 기술적 간극 해소 필요",
    ],
    tasks: [
      "레거시(JSP) 내 핵심 영역을 React 컴포넌트로 점진적 이식하여 안정적 하이브리드 환경 검증",
      "구독, 보관함 등 주요 기능 모듈화로 컴포넌트 재사용률 70% 이상 확보",
      "기존 백엔드 결합도를 낮추고 프론트엔드 중심의 데이터 상태 관리 인터페이스 구조 확립",
    ],
    tech: "Git, React.js, TypeScript, Tailwind CSS, REST API, CDN, Jenkins",
  },
  {
    company: "hankookilbo",
    title: "한국일보 관리자 사이트",
    period: "2023. 07. ~ 2025. 12.",
    role: ["신규 기능 개발 및 서비스 고도화"],
    issues: [
      "Angular와 React 등 이기종 라이브러리가 공존하는 대형 CMS의 독립적 기능 확장 및 유연성 확보 필요",
      "복잡한 전역 상태 구조로 인한 컴포넌트 간 의존성 증대 및 불필요한 리렌더링 현상 제어 필요",
    ],
    tasks: [
      "Yarn 모노레포 환경을 활용하여 app-shell 구조 아래 React 기반 도메인 서비스(vms 등) 전담 개발",
      "공통 [ui] 및 [utils] 패키지를 적극 공유·재활용하여 복잡한 도메인 간 개발 공수 단축",
      "Zustand를 도입해 모듈별 데이터 상태 관리를 최적화하고 복잡한 리렌더링 방지 및 UI 고도화",
    ],
    tech: "Git, React.js, React-Query, Material UI(MUI), Zustand, Yarn Workspaces(Monorepo), Jenkins",
  },
  {
    company: "hankookilbo",
    title: "한국일보 봉황대기",
    period: "2024. 07. ~ 2024. 08.",
    role: ["서비스 고도화 및 FE 아키텍처 개선"],
    issues: [
      "레거시 빌드 도구(Gulp/Grunt) 사용으로 인한 긴 빌드 시간 및 개발 생산성 저하",
      "단기간 대규모 트래픽 집중에 따른 초기 로딩 최적화 및 서버 부하 분산 필요",
    ],
    tasks: [
      "개발 환경을 Astro.js로 개편하여 페이지별 독립 빌드 구조 수립 (빌드 대기 시간 42% ↓)",
      "AWS S3 및 CloudFront(CDN) 기반의 독립 정적 호스팅을 구축하여 백엔드 배포 의존성 제거",
      "Astro 아일랜드 구조를 도입해 실시간 스코어보드 영역만 부분 하이드레이션 적용",
      "사내 토너먼트 대진표 라이브러리(NPM)를 이관·활용하여 대량의 대진표 데이터 안정적 렌더링",
    ],
    tech: "Git, Astro.js, React.js, JavaScript, CSS3, AWS S3, AWS CloudFront(CDN)",
    notes: ["NPM : 대진표(토너먼트 대진표를 만드는 자바스크립트 라이브러리)"],
    links: [
      {
        label: "AstroJS feat 문서",
        href: "https://hankookilbo.atlassian.net/wiki/spaces/gfhIFYBDZn0f/pages/5533505075/AstroJS+feat",
      },
    ],
  },
  {
    company: "hankookilbo",
    title: "한국일보 특별페이지 제22대 국회의원 총선거",
    period: "2024. 02. ~ 2024. 04.",
    role: ["신규 기능 개발 및 서비스 고도화"],
    issues: [
      "실시간 데이터 동기화 시 트래픽 폭증으로 인한 브라우저 병목 및 화면 끊김 현상 방지 필요 및 렌더링 최적화 필요",
    ],
    tasks: [
      "React-Query를 활용한 실시간 개표 데이터 API 호출 최적화 및 상태 관리",
      "선거 예측 및 투표율 시각화를 위한 맞춤형 차트(Bar, Pie 등) UI 구현",
      "Code Splitting 및 이미지 Preload 적용으로 초기 렌더링 성능 최적화",
      "무한 스크롤 및 동적 후보자 비교 카드 등 반응형 UI/UX 개발",
    ],
    tech: "Git, React.js, React-Query, JavaScript, SASS, REST API, Jenkins",
  },
  {
    company: "hankookilbo",
    title: "한국일보 인터랙티브 페이지 개발 (SF소설, 세월호, 상속게임, 미씽 등 4개의 프로젝트)",
    period: "2023. 08. ~ 2024. 08.",
    role: ["신규 기능 개발 및 서비스 고도화"],
    issues: [
      "복잡한 스크롤 애니메이션 및 미디어 레이어의 화면 안정 배치 제어 이슈",
      "퀴즈, 투표 등 참여형 사용자 데이터 유실 방지를 위한 Firebase 동기화 이슈",
    ],
    tasks: [
      "기획 취재 취지를 살린 데이터 시각화 컴포넌트(차트, 그래프 등) 설계 및 구현",
      "CSS 애니메이션을 활용한 정밀한 스크롤 기반 패럴랙스 인터랙션 UI 구현",
    ],
    awards: [
      "<세월호 참사 10주기> 제42회 관훈언론상 저널리즘 혁신 부문 수상 (2024.12)",
      "<미씽> 제41회 관훈언론상 저널리즘 혁신 부문 및 제6회 한국 데이터저널리즘 어워드 올해의 데이터 시각화 상 수상 (2023.11~12)",
    ],
    tech: "Git, Astro.js, React.js, Canvas API, CSS 애니메이션, Firebase",
  },
  {
    company: "hankookilbo",
    title: "한국일보 사이트(레거시)",
    period: "2023. 07. ~ 2026. 02.",
    role: ["FE 운영 관리 및 서비스 고도화"],
    issues: [
      "백엔드 의존적인 배포 구조와 JSP 기반 마크업 변환 작업으로 인한 이중 공수 및 개발 효율성 저하 이슈",
      "정형화된 스타일 가이드 부재로 인한 UI/UX의 파편화 및 레거시 소스코드 유지보수의 어려움 존재",
      "에셋(스타일, 스크립트) 자원의 관리 효율화 및 페이지 로딩 성능 향상을 위한 인프라 개선 필요",
    ],
    tasks: [
      "에셋(CSS, JS)을 우선적으로 분리하여 의존성 없는 독립적인 배포 파이프라인 구축(배포 소요 시간 80% ↓)",
      "미디어 자원 레이지 로딩(Lazy Loading) 및 정적 파일 압축을 통한 웹 성능 개선 (LCP 지표 50% ↓)",
      "표준 태그(Canonical) 최적화 및 시맨틱 마크업 적용 (구글 크롤링 완료 데이터 추가 확보 및 서버 오류율 97% 감소)",
    ],
    tech: "Git, Gulp, HTML5, CSS3, JavaScript, jQuery, React.js, CDN, Jenkins",
  },
  {
    company: "witplus",
    title: "웹 사이트 유지보수 프로젝트 (다이소몰, 엔터식스 등)",
    period: "2019. 11. ~ 2023. 03.",
    role: ["서비스 고도화"],
    issues: ["레거시 스크립트 오류의 신속한 디버깅 및 실시간 대응 필요"],
    tasks: [
      "대형 쇼핑몰 및 유통사 웹/모바일 서비스의 UI/UX 상시 유지보수 및 정기 고도화",
      "프로모션/이벤트 페이지 긴급 대응 및 신속한 UI 반영",
      "레거시 마크업 구조 개선 및 스크립트 오류 디버깅",
    ],
    tech: "Git, HTML5, CSS3, JavaScript, jQuery, Cross-Browsing",
  },
  {
    company: "witplus",
    title: "Vue.js 기반 SPA 구축 프로젝트 (와인나라, 우주부품시험연구포털 등 2개의 프로젝트)",
    period: "2021. 07. ~ 2022. 04.",
    role: ["FE 개발 리드 및 일정관리", "신규 기능 개발"],
    issues: [
      "신규 프레임워크(Vue.js) 도입 시 팀 내 개발 경험 부재로 인한 초기 환경 셋업 및 기술 진입 장벽 해소 필요",
      "프로젝트 안정성을 위한 Webpack 최적화, Git 전략 수립 및 Vue 아키텍처(Router/Vuex) 설계 필요",
    ],
    tasks: [
      "개발 문화와 트렌드 확산에 기여",
      "프로젝트 초기 개발 환경 구축 및 웹팩(Webpack), Git 워크플로우 수립",
      "이커머스 및 연구기관 포털의 Vue.js 기반 싱글 페이지 애플리케이션(SPA) 구축",
      "전체 페이지 공통 컴포넌트 구조 설계 및 비즈니스 로직 구현",
    ],
    tech: "Webpack, Git, Vue.js, Vue Router, Vuex, SCSS",
  },
  {
    company: "witplus",
    title: "쇼핑몰/브랜드 웹·모바일 사이트 구축 프로젝트",
    period: "2017. 04. ~ 2022. 10.",
    role: ["UI 개발 리드 및 일정 관리", "신규 기능 개발 및 서비스 고도화"],
    issues: ["웹 에이전시 특성상 한정된 짧은 개발 일정"],
    tasks: [
      "프로젝트 전반의 마크업 가이드라인 작성 및 공통 UI 컴포넌트 설계",
      "다양한 산업군(이커머스, 호텔, 교육, 브랜드 등)의 신규 사이트 구축 및 모바일 웹/앱 UI 개발",
      "프로모션 페이지(이커머스 사이트 등) 신규 기능 개발(jQuery 인터랙션)",
    ],
    tech: "Git, HTML5, CSS3, SCSS, JavaScript, jQuery, gulp",
  },
  {
    company: "cidow",
    title: "공공기관/기업 웹 접근성 프로젝트",
    period: "2015. 11. ~ 2016. 04.",
    role: ["UI 개발", "웹 접근성 진단 및 개선"],
    issues: [
      "공공기관 사이트(국방부)의 국가 지정 웹 접근성 의무 준수 가이드라인을 충족해야 하는 이슈 존재",
      "글로벌 사용자 및 정보 취약계층을 위한 차별 없는 웹 접근성(WA) 보장 이슈",
    ],
    tasks: [
      "공공기관 사이트의 웹 접근성(WA) UI 개선(인증마크 획득)",
      "KWCAG(한국형 웹 콘텐츠 접근성 지침) 및 W3C 가이드라인 기준 UI 구조 진단",
    ],
    tech: "HTML5, CSS3, Web Accessibility (WA), 스크린 리더",
  },
];
