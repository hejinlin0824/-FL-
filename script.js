// 团队成员数据
const teamMembers = {
    supervisors: [
        { name: "田老师", title: "教授", photo: "https://via.placeholder.com/300", description: "联邦学习研究团队负责人" },
    ],
    phd: [
        { name: "张三", title: "博士研究生（研三）", photo: "https://via.placeholder.com/300", description: "专注于联邦学习算法优化" },
        { name: "李四", title: "博士研究生（研二）", photo: "https://via.placeholder.com/300", description: "研究隐私保护机制" },
        { name: "王五", title: "博士研究生（研一）", photo: "https://via.placeholder.com/300", description: "跨域联邦学习专家" },
    ],
    masters: [
        { name: "赵六", title: "硕士研究生（研二）", photo: "https://via.placeholder.com/300", description: "联邦学习系统实现" },
        { name: "钱七", title: "硕士研究生（研一）", photo: "https://via.placeholder.com/300", description: "联邦学习应用研究" },
    ]
};

// 论文列表数据
const publications = [
    "张三, 李四. (2022). 联邦学习中的隐私保护机制研究. ��工智能学报, 10(2), 123-135.",
    "王五, 赵六. (2021). 跨域联邦学习: 理论与实践. 计算机研究与发展, 58(5), 1001-1015.",
    "李四, 张三. (2020). FedAvg: 一种高效的联邦学习聚合算法. 软件学报, 31(3), 567-580."
];

// 新增专利列表数据
const patents = [
    "张三, 李四. (2022). 一种基于联邦学习的隐私保护方法. 专利号: CN123456789A",
    "王五, 赵六. (2021). 跨域联邦学习系统及方法. 专利号: CN987654321A",
    "李四, 张三. (2020). 联邦学习中的高效聚合算法. 专利号: CN246813579A"
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
                    <img src="${member.photo}" class="card-img-top" alt="${member.name}">
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
