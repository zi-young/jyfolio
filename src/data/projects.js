export const projects = [
  {
    title: "TMS 언어번역회사 웹사이트",
    summary: "언어번역 회사 내부 직원들이 사용하는 프로젝트 관리 시스템의 프론트엔드 개발을 담당했습니다. React와 Material UI(MUI)를 활용하여 직관적이고 일관성 있는 UI를 구축했으며, 프로젝트 등록, 진행 상태 확인, 일정 관리 등을 통해 번역 업무를 보다 효율적으로 관리할 수 있도록 구현했습니다.",
    technologies: ["React", "Material UI", "JavaScript"],
    image: "/img/tms/dashboard.png",
    images: ["/img/tms/dashboard.png", "/img/tms/analytics.png", "/img/tms/project.png", "/img/tms/settings.png"],
    link: null, // 링크가 있다면 URL을 넣으세요
    type: "web", // web, mobile, design, etc.
    duration: "3개월",
    team: "회사 의뢰 프로젝트",
    details: [
      {
        "title": "프로젝트 목표",
        "content": "언어번역 회사 직원들이 번역 프로젝트를 효율적으로 등록, 관리, 모니터링할 수 있는 내부 관리용 웹 애플리케이션 구축"
      },
      {
        "title": "주요 기능",
        "content": "· 프로젝트 등록 및 진행 상태 확인 대시보드\n· 일정 관리 및 마감일 알림 기능\n· 프로젝트별 번역 진행 상황 시각화\n· 사용자 권한에 따른 기능 접근 제어"
      }
      ],
      challenges: [
        {
          "problem": "여러 프로젝트와 일정 정보를 한 화면에서 직관적으로 확인하기 어려움",
          "solution": "React 상태 관리와 MUI 컴포넌트를 활용하여 대시보드 형태의 UI를 설계, 프로젝트별 진행 현황과 일정을 시각적으로 제공"
        },
        {
          "problem": "다양한 디바이스에서 최적화된 사용자 경험 필요",
          "solution": "Material UI의 반응형 Grid 시스템과 CSS Flexbox를 조합하여 모바일 퍼스트 기반의 레이아웃 구현"
        }
      ],
    },
  {
    title: "소비자24 앱",
    summary: "소비자 정보 제공 앱의 유지보수 및 배포를 담당했습니다. 사용자 피드백을 반영한 UI/UX 개선과 안정적인 앱 배포 프로세스를 구축했습니다.",
    technologies: ["Android", "iOS", "App Store", "Google Play"],
    image: "/img/consumer/consumer24.png",
    images: ["/img/consumer/consumer24.png", "/img/consumer/consumer2.png", "/img/consumer/ios.png"],
    link: null,
    type: "mobile"
  },
  {
    title: "CJ 대한통운 AI 분석 플랫폼",
    summary: "물류 데이터 분석을 위한 AI 플랫폼의 프론트엔드 개발을 담당했습니다. Vue.js와 Vuetify를 활용하여 직관적인 데이터 시각화 인터페이스를 구현했습니다.",
    technologies: ["Vue.js", "Vuetify", "JavaScript", "HTML", "CSS"],
    image: "/img/cj.png",
    images: ["/img/cj.png", "/img/cj_catalog.png"],
    link: null,
    type: "web"
  },
  {
    title: "GS건설 국책과제",
    summary: "정부 정책 관련 국책과제의 웹 시스템 유지보수를 담당했습니다. JSP 기반의 기존 시스템을 안정적으로 운영하고 필요한 기능 개선을 수행했습니다.",
    technologies: ["eGovFrame", "HTML", "CSS", "JavaScript", "JSP"],
    image: "/img/gms/gms1.png",
    images: ["/img/gms/gms1.png", "/img/gms/monitoring.png", "/img/gms/report.png", "/img/gms/discharge.png"],
    link: null,
    type: "web"
  },
  {
    title: "ThingsMiner IIoT 플랫폼",
    summary: "ThingsBoard를 기반으로 IIoT 플랫폼인 ThingsMiner를 구축했습니다. 센서 및 디바이스 데이터를 API와 연동하여 실시간으로 수집하고, 대시보드 위젯을 통해 모니터링할 수 있는 UI를 개발했습니다. 이를 통해 다양한 산업 현장에서 맞춤형 모니터링 환경을 제공했습니다.",
    technologies: ["ThingsBoard", "HTML", "CSS", "JavaScript", "Chart.js"],
    image: "/img/thingsminer/things_gs.png",
    images: ["/img/thingsminer/things_gs.png", "/img/thingsminer/hmi.png", "/img/thingsminer/mle.png", "/img/thingsminer/widget.png"],
    link: null,
    type: "web"
  },
  {
    title: "모바일 청첩장",
    summary: "개인 프로젝트로 개발한 모바일 청첩장 웹 애플리케이션입니다. 참석 여부 확인 기능과 반응형 디자인을 적용하여 모바일 친화적인 사용자 경험을 제공했습니다.",
    technologies: ["React", "Next.js", "Supabase", "Netlify", "CSS Modules"],
    image: "/img/hm/invite.png",
    images: ["/img/hm/invite.png", "/img/hm/invite2.png", "/img/hm/invite3.png", "/img/hm/invite4.png"],
    link: null,
    type: "web",
    duration: "1주일",
    team: "개인 프로젝트",
    details: [
      {
        title: "프로젝트 목표",
        content: "전통적인 청첩장을 디지털화하여 친구들의 결혼식을 더욱 특별하게 만들고, 참석 여부를 쉽게 관리할 수 있는 플랫폼 구축"
      },
      {
        title: "주요 기능",
        content: "청첩장 정보 표시, 참석 여부 확인, 축하 메시지 작성, 반응형 디자인으로 모바일 최적화"
      }
    ],
    challenges: [
      {
        problem: "모바일 환경에서의 최적화된 사용자 경험 제공",
        solution: "CSS Modules를 활용한 모바일 퍼스트 디자인과 터치 친화적인 인터페이스 구현"
      },
      {
        problem: "실시간 참석 여부 데이터 관리",
        solution: "Supabase를 활용한 실시간 데이터베이스 연동 및 상태 관리"
      }
    ],
    results: [
      "모바일 친화적인 반응형 디자인으로 접근성 향상",
      "실시간 참석 여부 확인으로 결혼식 준비 효율성 증대",
      "개인 프로젝트로 완성도 높은 풀스택 웹 애플리케이션 구축"
    ]
  },
  {
    title: "WordPress 회사 홈페이지 수정",
    summary: "기존 WordPress 기반 회사 홈페이지의 디자인 개선 및 기능 추가를 담당했습니다. 사용자 요구사항에 맞춘 커스터마이징과 SEO 최적화를 수행했습니다.",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript", "SEO"],
    image: "/img/wordpress.png",
    images: ["/img/wordpress.png", "/img/wordpress2.png"],
    link: null,
    type: "web"
  },
  {
    title: "Figma 마이팜웍스 앱 제안서 시안",
    summary: "농업 관련 스타트업의 앱 제안서를 위한 UI/UX 디자인 시안을 Figma로 제작했습니다. 사용자 여정을 고려한 직관적인 인터페이스 설계에 참여했습니다.",
    technologies: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
    image: "/img/figma/figma.jpg",
    images: ["/img/figma/figma.jpg", "/img/figma/figma2.jpg"],
    link: null,
    type: "design",
    duration: "1일",
    team: "개인 작업",
    details: [
      {
        title: "프로젝트 목표",
        content: "농업인들을 위한 스마트팜 관리 앱의 UI/UX 디자인 시안 제작 및 사용자 경험 최적화"
      },
      {
        title: "디자인 컨셉",
        content: "농업의 자연스러운 느낌을 살리면서도 현대적이고 직관적인 인터페이스 디자인"
      }
    ],
    challenges: [
      {
        problem: "농업인들의 디지털 접근성과 사용성 고려",
        solution: "간단하고 직관적인 아이콘과 메뉴 구조 설계, 대형 터치 영역과 명확한 시각적 피드백 제공"
      }
    ],
    results: [
      "사용자 친화적인 인터페이스 디자인 완성",
      "농업 특화 기능에 최적화된 UX 플로우 설계",
      "투자 유치를 위한 효과적인 제안서 시각화"
    ]
  },
  {
    title: "사람인 채용공고 이미지 디자인",
    summary: "채용 플랫폼의 채용공고 이미지 디자인을 담당했습니다. 브랜드 가이드라인에 맞춘 일관된 디자인과 시각적 임팩트를 고려한 레이아웃을 제작했습니다.",
    technologies: ["Photoshop", "Illustrator", "Graphic Design", "Branding"],
    image: "/img/figma/monkey.jpg",
    images: ["/img/figma/monkey.jpg"],
    link: null,
    type: "design"
  },
  {
    title: "MC 이벤트 상세 더블혜택 시안",
    summary: "MC 이벤트 상세 페이지의 더블혜택 프로모션 디자인 시안을 제작했습니다. 사용자의 관심을 끌 수 있는 시각적 요소와 명확한 정보 전달을 위한 레이아웃을 설계했습니다.",
    technologies: ["Photoshop", "Illustrator", "UI/UX Design", "Graphic Design"],
    image: "/img/figma/eventPage.jpg",
    images: ["/img/figma/eventPage.jpg"],
    link: null,
    type: "design",
    duration: "1주",
    team: "개인 작업",
    details: [
      {
        title: "프로젝트 목표",
        content: "MC 이벤트 상세 페이지의 더블혜택 프로모션을 효과적으로 전달할 수 있는 시각적 디자인 시안 제작"
      },
      {
        title: "디자인 컨셉",
        content: "혜택의 가치를 강조하고 사용자의 참여를 유도할 수 있는 매력적인 시각적 요소 구성"
      }
    ],
    challenges: [
      {
        problem: "복잡한 혜택 정보를 명확하고 매력적으로 전달",
        solution: "계층적 정보 구조와 시각적 강조를 통한 사용자 이해도 향상"
      }
    ],
    results: [
      "혜택 정보의 명확한 시각적 전달",
      "사용자 참여 유도를 위한 매력적인 디자인 완성",
      "브랜드 일관성을 유지한 프로모션 디자인"
    ]
  }
];

