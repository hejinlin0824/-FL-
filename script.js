// 团队成员数据
const teamMembers = {
    supervisors: [
        { 
            name: "田老师", 
            title: "实验室负责人", 
            photo: "田老师.png", 
            description: "联邦学习研究团队负责人",
            researchInterests: "联邦学习，持续学习，差分隐私",
            expertise: "算法设计、系统优化、项目管理",
            education: "博士，计算机科学，斯文本科技大学"
        },
    ],
    phd: [
        { 
            name: "何锦琳", 
            title: "硕士研究生（研二）", 
            photo: "证件照.jpg", 
            description: "联邦学习应用",
            researchInterests: "联邦学习算法、模型应用、模型优化",
            expertise: "深度学习、机器学习、Python",
            education: "硕士，电子与通信工程"
        },
        { 
            name: "王皓杰", 
            title: "硕士研究生（研二）", 
            photo: "证件照.jpg", 
            description: "遥感图像处理",
            researchInterests: "计算机视觉、模式识别、遥感图像处理",
            expertise: "深度学习、机器学习",
            education: "硕士，电子与通信工程"
        },
        { 
            name: "陈政杰", 
            title: "硕士研究生（研二）", 
            photo: "证件照.jpg", 
            description: "遥感图像处理",
            researchInterests: "计算机视觉、模式识别、遥感图像处理",
            expertise: "深度学习、机器学习、Python",
            education: "硕士，电子与通信工程"
        },
        { 
            name: "许楠", 
            title: "硕士研究生（研二）", 
            photo: "证件照.jpg", 
            description: "遥感图像处理",
            researchInterests: "计算机视觉、模式识别、遥感图像处理",
            expertise: "深度学习、机器学习、Python",
            education: "硕士，电子与通信工程"
        },
    ],
    masters: [
        { 
            name: "王钰峰", 
            title: "硕士研究生（研一）", 
            photo: "证件照.jpg", 
            description: "联邦学习算法改进与优化",
            researchInterests: "联邦学习系统、分布式计算、边缘计算",
            expertise: "python、Java编程、机器学习",
            education: "硕士，计算机技术"
        },
        { 
            name: "张阔", 
            title: "硕士研究生（研一）", 
            photo: "证件照.jpg", 
            description: "联邦学习算法改进与优化",
            researchInterests: "联邦学习系统、分布式计算、边缘计算",
            expertise: "python、Java编程、机器学习",
            education: "硕士，计算机技术"
        },
        { 
            name: "赵怡欣", 
            title: "硕士研究生（研一）", 
            photo: "证件照.jpg", 
            description: "联邦学习算法改进与优化",
            researchInterests: "联邦学习系统、分布式计算、边缘计算",
            expertise: "python、Java编程、机器学习",
            education: "硕士，计算机技术"
        },
        { 
            name: "伍一寰", 
            title: "硕士研究生（研一）", 
            photo: "证件照.jpg", 
            description: "联邦学习算法改进与优化",
            researchInterests: "联邦学习系统、分布式计算、边缘计算",
            expertise: "python、Java编程、机器学习",
            education: "硕士，计算机技术"
        },
        { 
            name: "xxx", 
            title: "硕士研究生（研一）", 
            photo: "证件照.jpg", 
            description: "联邦学习算法改进与优化",
            researchInterests: "联邦学习系统、分布式计算、边缘计算",
            expertise: "python、Java编程、机器学习",
            education: "硕士，计算机技术"
        },
    ]
};

// 论文列表数据
const publications = [
    "J. Tian, P.-W. Tsai, F. Wang, K. Zhang, H. Xiao, and J. Chen, “An optional splitting extraction based Gain-AUPRC balanced strategy in federated XGBoost for mitigating imbalanced credit card fraud detection, ”International Journal of Bio-Inspired Computation. IF=3.977 ",
    "J. Tian, P.-W. Tsai, K. Zhang, X. Cai, H. Xiao, K. Yu, and J. Chen, “Synergetic Focal Loss for Multiple Classification in Federated XGBoost with Non-IID Labels,”IEEE Transactions on Artificial Intelligence. IF=7.25 ",
    "J. Tian, X. Cai, K. Zhang, H. Xiao, K. Yu, and P.-W. Tsai, “Sliding Focal Loss for Class Imbalance Classification in Federated XGBoost,” inProc. IEEE International Symposium on Parallel and Distributed Processing with Applications."
];

// 新增专利列表数据
const patents = [
    "李四 (2022). 一种基于联邦学习的隐私保护方法. 专利号: CN123456789A",
    "王五, 赵六. (2021). 跨域联邦学习系统及方法. 专利号: CN987654321A",
    "李四, 张三. (2020). 联邦学习中的高效聚合算法. 专利号: CN246813579A"
];

// 新闻数据
const labNews = [
    {
        title: "实验室成功举办联邦学习研讨会",
        date: "2023-05-15",
        summary: "我们的实验室成功举办了为期两天的联邦学习研讨会,吸引了来自全国各地的专家学者参与。"
    },
    {
        title: "团队最新研究成果发表于期刊",
        date: "2023-04-20",
        summary: "我们团队的最新研究论文《联邦学习中的隐私保护新方法》被IEEE Transactions on Information Forensics and Security接收。"
    },
    {
        title: "实验室获得国家自然科学基金项目资助",
        date: "2023-03-10",
        summary: "我们的实验室成功获得了国家自然科学基金面上项目的资助,项目名称为《跨域联邦学习关键技术研究》。"
    }
];

// 添加团队成员
function addTeamMembers() {
    const supervisorsContainer = document.getElementById('team-supervisors');
    const phdContainer = document.getElementById('team-phd');
    const mastersContainer = document.getElementById('team-masters');

    function createMemberCard(member, index) {
        return `
            <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="card team-member-card h-100" style="cursor: pointer;" onclick="showMemberDetails(${JSON.stringify(member).replace(/"/g, '&quot;')})">
                    <div class="card-img-container">
                        <img src="${member.photo}" class="card-img-top" alt="${member.name}">
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">${member.name}</h5>
                        <p class="card-text text-muted">${member.title}</p>
                    </div>
                </div>
            </div>
        `;
    }

    teamMembers.supervisors.forEach((member, index) => {
        supervisorsContainer.innerHTML += createMemberCard(member, index);
    });

    teamMembers.phd.forEach((member, index) => {
        phdContainer.innerHTML += createMemberCard(member, index);
    });

    teamMembers.masters.forEach((member, index) => {
        mastersContainer.innerHTML += createMemberCard(member, index);
    });
}

// 添加显示成员详情的函数
function showMemberDetails(member) {
    document.getElementById('memberPhoto').src = member.photo;
    document.getElementById('memberName').textContent = member.name;
    document.getElementById('memberTitle').textContent = member.title;
    document.getElementById('memberDescription').textContent = member.description;
    document.getElementById('memberResearchInterests').textContent = member.researchInterests;
    document.getElementById('memberExpertise').textContent = member.expertise;
    document.getElementById('memberEducation').textContent = member.education;
    
    const modal = new bootstrap.Modal(document.getElementById('memberModal'));
    modal.show();
}

// 添加论文列表
function addPublications() {
    const publicationContainer = document.getElementById('publication-list');
    publications.forEach((publication, index) => {
        const publicationItem = `
            <li class="list-group-item publication-item" data-aos="fade-up" data-aos-delay="${index * 50}">
                ${publication}
            </li>
        `;
        publicationContainer.innerHTML += publicationItem;
    });
}

// 新增添加专利列表的函数
function addPatents() {
    const patentContainer = document.getElementById('patent-list');
    patents.forEach((patent, index) => {
        const patentItem = `
            <li class="list-group-item publication-item" data-aos="fade-up" data-aos-delay="${index * 50}">
                ${patent}
            </li>
        `;
        patentContainer.innerHTML += patentItem;
    });
}

// 添加实验室新闻
function addLabNews() {
    const newsContainer = document.getElementById('news-list');
    labNews.forEach((news, index) => {
        const newsItem = `
            <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${news.date}</h6>
                        <p class="card-text">${news.summary}</p>
                    </div>
                </div>
            </div>
        `;
        newsContainer.innerHTML += newsItem;
    });
}

// 导航栏滚动效果
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 根据当前页面URL执行相应的函数
    const currentPage = window.location.pathname.split("/").pop();

    switch(currentPage) {
        case "index.html":
        case "":
            addTeamMembers();
            addPublications();
            addPatents();
            addLabNews();
            break;
        case "team.html":
            addTeamMembers();
            break;
        case "publications.html":
            addPublications();
            addPatents();
            break;
    }
    
    // 初始化AOS库
    AOS.init({
        duration: 1000,
        once: true
    });

    // 添加滚动事件监听
    window.addEventListener('scroll', handleScroll);
});

// 在文件末尾添加以下代码

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.querySelector('.scroll-down-arrow').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
});
