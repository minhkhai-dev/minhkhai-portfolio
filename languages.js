// languages.js
const translations = {
    vi: {
        nav: {
            about: "Về Tôi",
            skills: "Kỹ Năng",
            projects: "Dự Án",
            contact: "Liên Hệ"
        },
        hero: {
            title: "UÔNG MINH KHẢI",
            subtitle: "Freelance .NET Developer | Sinh viên tại DNTU",
            contactBtn: "Liên Hệ Ngay",
            projectsBtn: "Xem Dự Án"
        },
        about: {
            title: "Về Tôi",
            subtitle: "Freelance .NET Developer",
            description1: "Tôi là một nhà phát triển .NET đầy nhiệt huyết, đang tìm kiếm cơ hội để mở rộng kỹ năng và kinh nghiệm thông qua các dự án freelance. Tôi có nền tảng vững chắc về phát triển web, làm việc nhóm và giải quyết vấn đề.",
            description2: "Với kiến thức chuyên sâu về ASP.NET Core, Entity Framework và các công nghệ liên quan, tôi cam kết mang đến các giải pháp chất lượng cao và đáp ứng nhu cầu khách hàng.",
            location: "Long Thành, Đồng Nai",
            email: "minhkhai.dev@gmail.com",
            phone: "+84 363 606 453",
            github: "github.com/minhkhai-dev"
        },
        skills: {
            title: "Kỹ Năng Chuyên Môn",
            backend: {
                title: "Phát Triển Backend",
                list: "Thiết kế cơ sở dữ liệu"
            },
            frontend: {
                title: "Phát Triển Frontend",
                
            },
            tools: {
                title: "Công Cụ & Quy Trình",
            }
        },
        projects: {
            title: "Dự Án Tiêu Biểu",
            project1: {
                title: "Online Shopping Website",
                description: "Website thương mại điện tử với các tính năng đăng nhập, phân quyền người dùng/admin, quản lý sản phẩm, giỏ hàng, đơn hàng, phân trang, tìm kiếm và hiển thị trang chủ. Tôi đảm nhận vai trò phát triển full-stack, thiết kế cơ sở dữ liệu và giao diện người dùng cho cả admin và khách hàng.",
                link: "Chi tiết"
            },
            project2: {
                title: "News Portal",
                description: "Cổng thông tin tin tức với các tính năng CRUD bài viết, lọc theo danh mục, phân quyền người dùng/admin, cờ trang chủ, quản lý bình luận. Tôi chịu trách nhiệm phát triển logic backend, API, giao diện admin, và logic phân trang và lọc.",
                link: "Chi tiết"
            },
            project3: {
                title: "Coffee Shop Management System",
                description: "Ứng dụng quản lý quán cà phê được xây dựng hoàn toàn bằng WinForms (C#). Hệ thống hỗ trợ đặt món, quản lý bàn, tính tiền và xem thống kê doanh thu. Tôi phát triển toàn bộ hệ thống, từ thiết kế giao diện, xử lý logic nghiệp vụ đến kết nối cơ sở dữ liệu và test phần mềm.",
                link: "Chi tiết"
            },
            project4: {
                title: "Mobile Phone Store App",
                description: "Ứng dụng di động bán điện thoại được phát triển bằng React Native giúp quản lý sản phẩm và đơn hàng theo thời gian thực. Tôi đảm nhận phát triển toàn bộ giao diện, xây dựng chức năng đăng nhập/đăng ký, và lưu trữ dữ liệu bằng SQLite. Giao diện hiện đại, thân thiện, tối ưu cho thiết bị Android.",
                link: "Chi tiết"
            },
            project5: {
                title: "2D Racing Game",
                description: "Trò chơi đua xe đơn giản phát triển bằng WinForms (C#). Xe tự động di chuyển, người chơi điều khiển tránh chướng ngại vật và ghi điểm. Tôi xây dựng toàn bộ giao diện, logic di chuyển và xử lý va chạm.",
                link: "Chi tiết"
            },
            project6: {
                title: "Online Model Store",
                description: "Website bán mô hình online được thiết kế bằng HTML, CSS, JavaScript và Tailwind CSS. Giao diện thân thiện, hiển thị sản phẩm, thêm vào giỏ hàng và tính tổng tiền. Tôi chịu trách nhiệm thiết kế toàn bộ UI và xử lý logic bằng JavaScript.",
                link: "Chi tiết"
            }
        },
        languages: {
            title: "Ngôn Ngữ & Công Cụ",
            csharp: {
                name: "C#",
                level: "Ngôn ngữ chính trong phát triển ứng dụng .NET"
            },
            sql: {
                name: "SQL",
                level: "SQL Server, Truy vấn, Stored Procedures"
            },
            html: {
                name: "HTML/CSS",
                level: "Frontend, Responsive Design, Bootstrap"
            },
            js: {
                name: "JavaScript",
                level: "Frontend functionality, DOM manipulation"
            },
            git: {
                name: "Git",
                level: "Version control, Collaboration, GitHub"
            },
            ef: {
                name: "Entity Framework",
                level: "ORM, Code First, Migration"
            }
        },
        contact: {
            title: "Liên Hệ",
            info: "Thông Tin Liên Hệ",
            address: {
                title: "Địa Chỉ",
                value: "Long Thành, Đồng Nai"
            },
            email: {
                title: "Email",
                value: "minhkhai.dev@gmail.com"
            },
            phone: {
                title: "Điện Thoại",
                value: "+84 363 606 453"
            },
            github: {
                title: "GitHub",
                value: "github.com/minhkhai-dev"
            }
        },
        footer: {
            copyright: "© 2025 Uong Minh Khai. All rights reserved."
        }
    },
    en: {
        nav: {
            about: "About Me",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            title: "UONG MINH KHAI",
            subtitle: "Freelance .NET Developer | Student at DNTU",
            contactBtn: "Contact Me",
            projectsBtn: "View Projects"
        },
        about: {
            title: "About Me",
            subtitle: "Freelance .NET Developer",
            description1: "I am a passionate .NET developer seeking opportunities to expand my skills and experience through freelance projects. I have a solid foundation in web development, teamwork, and problem-solving.",
            description2: "With in-depth knowledge of ASP.NET Core, Entity Framework, and related technologies, I am committed to delivering high-quality solutions that meet client needs.",
            location: "Long Thanh, Dong Nai",
            email: "minhkhai.dev@gmail.com",
            phone: "+84 363 606 453",
            github: "github.com/minhkhai-dev"
        },
        skills: {
            title: "Professional Skills",
            backend: {
                title: "Backend Development",
                list: "Database Design"
            },
            frontend: {
                title: "Frontend Development",
            },
            tools: {
                title: "Tools & Processes",
            }
        },
        projects: {
            title: "Featured Projects",
            project1: {
                title: "Online Shopping Website",
                description: "An e-commerce website with features like user/admin authentication, product management, shopping cart, order processing, pagination, search, and homepage display. I took on a full-stack role, designing the database and user interfaces for both admin and customers.",
                link: "Details"
            },
            project2: {
                title: "News Portal",
                description: "A news portal with CRUD operations for articles, category filtering, user/admin roles, homepage flagging, and comment management. I was responsible for developing backend logic, APIs, admin interface, and pagination/filtering logic.",
                link: "Details"
            },
            project3: {
                title: "Coffee Shop Management System",
                description: "A coffee shop management application built entirely with WinForms (C#). The system supports order placement, table management, billing, and revenue statistics. I developed the entire system, from UI design and business logic to database connectivity and software testing.",
                link: "Details"
            },
            project4: {
                title: "Mobile Phone Store App",
                description: "A mobile phone sales app developed using React Native, enabling real-time product and order management. I handled the entire UI development, implemented login/register functionality, and managed data storage with SQLite. The interface is modern, user-friendly, and optimized for Android devices.",
                link: "Details"
            },
            project5: {
                title: "2D Racing Game",
                description: "A simple racing game developed using WinForms (C#). The car moves automatically, and the player controls it to avoid obstacles and score points. I built the entire UI, movement logic, and collision handling.",
                link: "Details"
            },
            project6: {
                title: "Online Model Store",
                description: "An online model store website designed with HTML, CSS, JavaScript, and Tailwind CSS. The interface is user-friendly, supporting product display, cart addition, and total calculation. I was responsible for designing the entire UI and handling logic with JavaScript.",
                link: "Details"
            }
        },
        languages: {
            title: "Languages & Tools",
            csharp: {
                name: "C#",
                level: "Primary language for .NET application development"
            },
            sql: {
                name: "SQL",
                level: "SQL Server, Queries, Stored Procedures"
            },
            html: {
                name: "HTML/CSS",
                level: "Frontend, Responsive Design, Bootstrap"
            },
            js: {
                name: "JavaScript",
                level: "Frontend functionality, DOM manipulation"
            },
            git: {
                name: "Git",
                level: "Version control, Collaboration, GitHub"
            },
            ef: {
                name: "Entity Framework",
                level: "ORM, Code First, Migration"
            }
        },
        contact: {
            title: "Contact",
            info: "Contact Information",
            address: {
                title: "Address",
                value: "Long Thanh, Dong Nai"
            },
            email: {
                title: "Email",
                value: "minhkhai.dev@gmail.com"
            },
            phone: {
                title: "Phone",
                value: "+84 363 606 453"
            },
            github: {
                title: "GitHub",
                value: "github.com/minhkhai-dev"
            }
        },
        footer: {
            copyright: "© 2025 Uong Minh Khai. All rights reserved."
        }
    }
};