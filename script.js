// 团队成员数据
const teamMembers = [
    { name: "张三", title: "教授", photo: "https://via.placeholder.com/300", description: "专注于联邦学习算法优化" },
    { name: "李四", title: "副教授", photo: "https://via.placeholder.com/300", description: "研究隐私保护机制" },
    { name: "王五", title: "博士后", photo: "https://via.placeholder.com/300", description: "跨域联邦学习专家" },
    { name: "赵六", title: "博士生", photo: "https://via.placeholder.com/300", description: "联邦学习系统实现" }
];

// 研究成果数据
const achievements = [
    { title: "联邦学习框架FedAvg", description: "开发了一个高效的联邦学习框架FedAvg,支持多种聚合算法。", icon: "fas fa-project-diagram" },
    { title: "隐私保护联邦学习", description: "提出了一种新的隐私保护机制,大幅提高了联邦学习的安全性。", icon: "fas fa-shield-alt" },
    { title: "跨域联邦学习", description: "实现了跨域联邦学习,使不同领域的数据可以协同学习。", icon: "fas fa-globe" }
];

// 论文列表数据
const publications = [
    "张三, 李四. (2022). 联邦学习中的隐私保护机制研究. 人工智能学报, 10(2), 123-135.",
    "王五, 赵六. (2021). 跨域联邦学习: 理论与实践. 计算机研究与发展, 58(5), 1001-1015.",
    "李四, 张三. (2020). FedAvg: 一种高效的联邦学习聚合算法. 软件学报, 31(3), 567-580."
];

// 添加团队成员
function addTeamMembers() {
    const teamContainer = document.getElementById('team-members');
    teamMembers.forEach((member, index) => {
        const memberCard = `
            <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="card team-member-card h-100" style="cursor: pointer;" onclick="showMemberDetails(${index})">
                    <img src="${member.photo}" class="card-img-top" alt="${member.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${member.name}</h5>
                        <p class="card-text text-muted">${member.title}</p>
                    </div>
                </div>
            </div>
        `;
        teamContainer.innerHTML += memberCard;
    });
}

// 添加显示成员详情的函数
function showMemberDetails(index) {
    const member = teamMembers[index];
    document.getElementById('memberPhoto').src = member.photo;
    document.getElementById('memberName').textContent = member.name;
    document.getElementById('memberTitle').textContent = member.title;
    document.getElementById('memberDescription').textContent = member.description;
    
    const modal = new bootstrap.Modal(document.getElementById('memberModal'));
    modal.show();
}

// 添加研究成果
function addAchievements() {
    const achievementContainer = document.getElementById('achievement-list');
    achievements.forEach((achievement, index) => {
        const achievementCard = `
            <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="card achievement-card">
                    <div class="card-body text-center">
                        <i class="${achievement.icon} fa-3x mb-3 text-primary"></i>
                        <h5 class="card-title">${achievement.title}</h5>
                        <p class="card-text">${achievement.description}</p>
                    </div>
                </div>
            </div>
        `;
        achievementContainer.innerHTML += achievementCard;
    });
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
            addAchievements();
            addPublications();
            break;
        case "team.html":
            addTeamMembers();
            break;
        case "achievements.html":
            addAchievements();
            break;
        case "publications.html":
            addPublications();
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