import { MindmapNode } from './types';

export const MINDMAP_DATA: MindmapNode[] = [
  {
    id: 'context',
    title: {
      vi: 'Hoàn cảnh ra đời & Bối cảnh Chiến lược',
      en: 'Policy Context & Strategic Background'
    },
    content: {
      vi: 'Nghị quyết 79-NQ/TW ra đời sau 40 năm Đổi mới, khi mô hình tăng trưởng cũ bộc lộ hạn chế. Kinh tế thế giới biến động mạnh, cạnh tranh chiến lược gia tăng đòi hỏi Việt Nam nâng cao nội lực, bảo đảm độc lập và tự chủ kinh tế.',
      en: 'Resolution 79-NQ/TW was issued after 40 years of Renovation, as old growth models showed limits. Global volatility and increased strategic competition require Vietnam to enhance internal strength and ensure economic autonomy.'
    },
    fullContent: {
      vi: [
        'Nghị quyết số 79-NQ/TW do Tổng Bí thư Tô Lâm ký ban hành ngày 6/1/2026. Bối cảnh kinh tế - xã hội sau gần 40 năm Đổi mới cho thấy kinh tế nhà nước luôn giữ vai trò chủ đạo, nhưng đang đứng trước những yêu cầu phát triển mới cao hơn, toàn diện hơn.',
        'Mục tiêu đến năm 2030 trở thành nước đang phát triển có công nghiệp hiện đại và đến năm 2045 trở thành nước phát triển, thu nhập cao. Để hiện thực hóa điều này, khu vực kinh tế nhà nước phải được củng cố, đổi mới toàn diện.',
        'Mô hình phát triển dựa nhiều vào mở rộng nguồn lực đã bộc lộ giới hạn. Hiệu quả sử dụng các nguồn lực do Nhà nước nắm giữ chưa tương xứng với tiềm năng và lợi thế vốn có.',
        'Sáu tồn tại chính cần giải quyết: Chính sách pháp luật chậm đổi mới; Quản lý nguồn lực kém hiệu quả; DNNN hoạt động chưa tương xứng với vị trí; Kết cấu hạ tầng chưa đồng bộ; Cải cách DNNN còn chậm; Hệ thống đơn vị sự nghiệp công lập chưa tinh gọn.'
      ],
      en: [
        'Resolution No. 79-NQ/TW signed by General Secretary To Lam on January 6, 2026. The socio-economic context after 40 years of Doi Moi shows that while the state economy leads, it faces higher development requirements.',
        'The goal by 2030 is to be a developing country with modern industry, and by 2045, a high-income developed country. To realize this, the state economic sector must be consolidated and comprehensively renovated.',
        'The growth model based on resource expansion has met its limits. The efficiency of resources held by the State is not yet commensurate with their potential and advantages.',
        'Six major issues: Slow legal policy innovation; Inefficient resource management; SOEs underperforming relative to their position; Asynchronous infrastructure; Slow SOE reform; Non-streamlined public service units.'
      ]
    },
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
    caption: {
      vi: 'Kinh tế Việt Nam bước vào kỷ nguyên vươn mình mới.',
      en: 'Vietnam\'s economy enters a new era of ascent.'
    },
    position: { x: 15, y: 30 }
  },
  {
    id: 'mindset',
    title: {
      vi: 'Đột phá Tư duy Quản trị: Từ "Quản lý" sang "Kiến tạo"',
      en: 'Management Mindset Breakthrough: From "Management" to "Facilitation"'
    },
    content: {
      vi: 'Chuyển đổi mạnh mẽ từ mô hình "quản lý hành chính" sang "kiến tạo phát triển". Nhà nước tập trung xây dựng môi trường pháp lý minh bạch, không can thiệp sâu vào sản xuất kinh doanh cụ thể của doanh nghiệp.',
      en: 'Strongly transforming from "administrative management" to "development facilitation". The State focuses on building a transparent legal environment, avoiding deep interference in specific business operations.'
    },
    fullContent: {
      vi: [
        'Về tư duy quản trị: Chuyển từ "quản lý hành chính" sang "kiến tạo phát triển", không can thiệp trực tiếp vào hoạt động cụ thể của doanh nghiệp mà tập trung xây dựng môi trường pháp lý thuận lợi.',
        'Quản trị nguồn lực: Chuyển từ tư duy quản lý DNNN sang quản trị toàn bộ nguồn lực kinh tế nhà nước (đất đai, tài nguyên, ngân sách, hạ tầng).',
        'Tách bạch chức năng: Phân định rõ chức năng quản lý nhà nước và chức năng đại diện chủ sở hữu vốn; giữa nhiệm vụ chính trị và hoạt động sản xuất kinh doanh.',
        'Xóa bỏ cơ chế "xin – cho" và hạn chế can thiệp hành chính tùy tiện, tạo môi trường kinh doanh minh bạch và bình đẳng.',
        'Thể chế và chính sách: Bảo đảm cạnh tranh bình đẳng giữa các khu vực kinh tế (DNNN, tư nhân, FDI); áp dụng cơ chế thị trường minh bạch trong đấu thầu.'
      ],
      en: [
        'Management mindset: Shifting from "administrative management" to "development facilitation", focusing on the legal environment rather than direct business interference.',
        'Resource governance: Shifting from SOE management to governing all state economic resources (land, resources, budget, infrastructure).',
        'Functional separation: Clearly separating state management from ownership representation; political tasks from business activities.',
        'Eliminating the "ask-give" mechanism and limiting arbitrary administrative intervention to create a transparent business environment.',
        'Institutions and policies: Ensuring fair competition across sectors (SOE, private, FDI); applying transparent market mechanisms in bidding.'
      ]
    },
    image: 'https://images.unsplash.com/photo-1507679799987-c7377f323bc2?auto=format&fit=crop&q=80&w=800',
    caption: {
      vi: 'Thay đổi tư duy là yếu tố then chốt cho sự bứt phá.',
      en: 'Mindset change is key to breakthrough.'
    },
    position: { x: 50, y: 30 }
  },
  {
    id: 'objectives',
    title: {
      vi: 'Mục tiêu: Đưa DNNN vươn tầm Top 500 Thế giới',
      en: 'Objectives: Bringing SOEs to Global Top 500'
    },
    content: {
      vi: 'Phát triển kinh tế nhà nước trở thành lực lượng vật chất nòng cốt, dẫn dắt nền kinh tế. Phấn đấu đến 2030 có 50 DNNN lớn nhất ĐNA và 1-3 doanh nghiệp lọt top 500 thế giới.',
      en: 'Developing the state economy as the core material force, leading the economy. Striving for 50 largest SE Asian SOEs and 1-3 SOEs in the global top 500 by 2030.'
    },
    fullContent: {
      vi: [
        'Mục tiêu tổng quát: Kinh tế nhà nước là công cụ quan trọng để Nhà nước điều tiết vĩ mô, ổn định kinh tế và định hướng phát triển dài hạn.',
        'Nâng cao hiệu quả: DNNN hoạt động theo hướng hiện đại, minh bạch, có năng lực cạnh tranh cao và ngang tầm quốc tế.',
        'Hạ tầng chiến lược: Phát triển hệ thống kết cấu hạ tầng đồng bộ, hiện đại trong các lĩnh vực then chốt như giao thông, năng lượng, công nghệ và logistics.',
        'Đổi mới sáng tạo: Đẩy mạnh chuyển đổi số, ứng dụng KHCN để nâng cao năng suất lao động và hiệu quả sản xuất kinh doanh.'
      ],
      en: [
        'General goal: The state economy is a key tool for macro-regulation, stability, and long-term development orientation.',
        'Efficiency improvement: SOEs operating modernly, transparently, with high competitiveness and international standing.',
        'Strategic infrastructure: Developing synchronous, modern infrastructure in key areas like transport, energy, tech, and logistics.',
        'Innovation: Promoting digital transformation and tech application to increase labor productivity and business efficiency.'
      ]
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    caption: {
      vi: 'Hạ tầng chiến lược là nền móng cho mục tiêu 2030.',
      en: 'Strategic infrastructure is the foundation for 2030 goals.'
    },
    position: { x: 85, y: 30 }
  },
  {
    id: 'theory',
    title: {
      vi: 'Cơ sở Lý luận: Vai trò "Bàn tay hữu hình"',
      en: 'Theoretical Basis: The "Visible Hand" Role'
    },
    content: {
      vi: 'Nhà nước không làm thay thị trường mà tạo ra "đường ray" thể chế. Kinh tế Nhà nước nắm giữ các "yết hầu" để dẫn dắt và kiểm soát các thành phần kinh tế khác phục vụ lợi ích dân tộc.',
      en: 'The State does not replace the market but creates an institutional "railway". The State economy holds "choke points" to lead and control other sectors for national interest.'
    },
    fullContent: {
      vi: [
        'Vai trò kiến tạo: Nhà nước tạo ra hành lang pháp lý, bảo vệ quyền sở hữu và xây dựng đồng bộ các loại thị trường (vốn, lao động, KHCN).',
        'Vai trò định hướng: Khác với sự phát triển tự phát của thị trường, Nhà nước định hướng nền kinh tế phục vụ mục tiêu chung thông qua sức mạnh của KTNN và công cụ kế hoạch hóa định hướng.',
        'Điều tiết vĩ mô: Sử dụng chính sách tài khóa và tiền tệ để "san bằng" các chu kỳ khủng hoảng, ổn định giá cả các mặt hàng thiết yếu.',
        'Khắc phục khuyết tật thị trường: Cung cấp hàng hóa công cộng (quốc phòng, hạ tầng), xử lý ngoại ứng tiêu cực và chống độc quyền.',
        'Tiến bộ và công bằng xã hội: Thực hiện phân phối lại qua phúc lợi, đảm bảo an sinh xã hội song hành cùng tăng trưởng kinh tế.'
      ],
      en: [
        'Facilitation role: The State creates legal corridors, protects ownership, and builds synchronous markets (capital, labor, tech).',
        'Orientation role: Unlike spontaneous market development, the State guides the economy toward common goals through state economic strength and oriented planning.',
        'Macro-regulation: Using fiscal and monetary policies to "level out" crisis cycles and stabilize essential goods prices.',
        'Correcting market failures: Providing public goods (defense, infra), handling negative externalities, and anti-monopoly.',
        'Social progress: Performing redistribution through welfare, ensuring social security alongside economic growth.'
      ]
    },
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    caption: {
      vi: 'Điều tiết vĩ mô đảm bảo sự ổn định của nền kinh tế.',
      en: 'Macro-regulation ensures economic stability.'
    },
    position: { x: 50, y: 70 }
  },
  {
    id: 'impact',
    title: {
      vi: 'Tác động thực tiễn: "Liều thuốc" cho kinh tế',
      en: 'Practical Impact: A "Medicine" for the Economy'
    },
    content: {
      vi: 'Nghị quyết 79 đóng vai trò là công cụ điều tiết, giải quyết các mâu thuẫn để thúc đẩy lực lượng sản xuất. Ổn định vĩ mô, tháo gỡ rào cản cơ chế và chuyển dịch cơ cấu xanh.',
      en: 'Resolution 79 acts as a regulatory tool, resolving conflicts to promote productive forces. Stabilizing macro-economy, removing barriers, and green structural shift.'
    },
    fullContent: {
      vi: [
        'Đối với nền kinh tế: Ổn định vĩ mô, kiểm soát lạm phát, khai thông các nguồn lực xã hội và thúc đẩy tăng trưởng GDP.',
        'Đối với doanh nghiệp: Giảm gánh nặng tài chính (thuế, phí), cải thiện môi trường cạnh tranh và khuyến khích đổi mới sáng tạo.',
        'Đối với người lao động: Bảo vệ việc làm, nâng cao thu nhập và hài hòa quan hệ lợi ích thông qua các chính sách an sinh.',
        'Ý nghĩa dài hạn: Xây dựng nền tảng thể chế vững chắc, hiện thực hóa mục tiêu "dân giàu, nước mạnh, dân chủ, công bằng, văn minh".',
        'Thực tiễn: Gia hạn thuế, hỗ trợ vốn vay, cải cách hành chính đã và đang giúp doanh nghiệp phục hồi mạnh mẽ.'
      ],
      en: [
        'For the economy: Macro-stability, inflation control, unlocking social resources, and boosting GDP growth.',
        'For businesses: Reducing financial burdens (taxes, fees), improving the competitive environment, and encouraging innovation.',
        'For workers: Protecting jobs, increasing income, and harmonizing interests through welfare policies.',
        'Long-term significance: Building a firm institutional foundation, realizing "rich people, strong country, democratic, fair, civilized".',
        'Practice: Tax extensions, loan support, and administrative reform are helping businesses recover strongly.'
      ]
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    caption: {
      vi: 'Kết quả ban đầu cho thấy sự phục hồi rõ rệt của DNNN.',
      en: 'Initial results show visible recovery of SOEs.'
    },
    position: { x: 85, y: 70 }
  }
];

export const NEWSPAPER_CONFIG = {
  header: {
    vi: 'KINH TẾ CHÍNH TRỊ MÁC-LÊNIN',
    en: 'MARXISM-LENINISM POLITICAL ECONOMY'
  },
  subHeader: {
    vi: 'Môn học: Kinh tế Chính trị Mác-Lênin \nTrường: Đại học Giao thông Vận tải TP.HCM',
    en: 'Subject: Marxism-Leninism Political Economy \nUniversity: University of Transport HCMC'
  },
  tagline: {
    vi: 'CHÍNH SÁCH VÀ CUỘC SỐNG',
    en: 'POLICY AND LIFE'
  },
  headline: {
    vi: 'Nghị quyết 79-NQ/TW của Bộ Chính trị về phát triển kinh tế nhà nước',
    en: 'Politburo Resolution 79-NQ/TW on State Economic Development'
  },
  meta: {
    issue: 'Cập nhật 12:08 05/05/2026',
    founded: 'Xuất bản định kỳ từ 2026',
    url: 'KTCTUTH.VN'
  }
};

