'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function setMenu(open) {
  navigation.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
}
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
window.addEventListener('resize', () => { if (window.innerWidth > 760) setMenu(false); });

const cases = {
  "governance": {
    "category": "成果发布 / 已完成",
    "title": "城乡公共空间协同治理",
    "lead": "“路路通”：把治理实践组织成问题、机制与价值的成果发布故事。",
    "gallery": [
      [
        "governance-02.jpg",
        "项目封面 · “路路通”协同治理创新实践"
      ],
      [
        "governance-04.jpg",
        "问题聚焦 · 三类难题"
      ],
      [
        "governance-05.jpg",
        "思路创新 · 协同机制"
      ],
      [
        "governance-07.jpg",
        "实施举措 · 组织关系与金字塔"
      ],
      [
        "governance-08.jpg",
        "信息协同 · 多层治理结构"
      ],
      [
        "governance-09.jpg",
        "信息协同 · 城市运行感知"
      ],
      [
        "governance-12.jpg",
        "项目成效 · 场景与数据表达"
      ],
      [
        "governance-14.jpg",
        "结束页 · 与封面呼应"
      ]
    ],
    "details": [
      [
        "服务场景",
        "电力设施与城乡公共空间治理成果发布。"
      ],
      [
        "工作内容",
        "梳理问题与治理机制，组织发布叙事、图示关系与页面视觉。"
      ],
      [
        "作品形态",
        "成果发布 PPT 与 PDF。这里展示成稿封面和精选内页。"
      ]
    ]
  },
  "talent": {
    "category": "人才答辩 / 已完成",
    "title": "技术人才申报答辩",
    "lead": "面向东方英才计划，组织专业贡献、技术证据与未来研究方向。",
    "gallery": [
      [
        "talent-01.jpg",
        "答辩封面 · 东方英才计划"
      ],
      [
        "talent-02.jpg",
        "内容目录 · 五章叙事结构"
      ],
      [
        "talent-10.jpg",
        "研究背景 · 特高压与能源配置"
      ],
      [
        "talent-12.jpg",
        "创新场景 · 风灾中的不停电应急抢修"
      ],
      [
        "talent-14.jpg",
        "应用场景 · 无人机作业"
      ],
      [
        "talent-15.jpg",
        "技术成果 · 关键指标对标"
      ],
      [
        "talent-35.jpg",
        "培养计划 · 技术路线与研究内容"
      ],
      [
        "talent-36.jpg",
        "培养计划 · 项目化研究路径"
      ]
    ],
    "details": [
      [
        "服务场景",
        "技术人才计划申报与评审答辩。"
      ],
      [
        "工作内容",
        "从申报资料和技术成果中梳理汇报主线，以图示、场景与证据支撑答辩。"
      ],
      [
        "作品形态",
        "服务建议书与答辩 PPT。展示成稿选页，人物姓名已处理。"
      ]
    ]
  },
  "sustainability": {
    "category": "可持续发展路演 / 已完成",
    "title": "绿色“心脏”，全电“脉搏”",
    "lead": "以全电能源站助力上海零碳园区发展，让技术路径与可持续价值连成一条主线。",
    "gallery": [
      [
        "speech-cover.jpg",
        "演讲稿作品封面 · 为网站重新排版"
      ],
      [
        "speech-opening.jpg",
        "真实文稿选段 · 以问题开场"
      ],
      [
        "speech-model.jpg",
        "真实文稿选段 · 一站双重构"
      ],
      [
        "speech-value.jpg",
        "真实文稿选段 · 技术与价值"
      ]
    ],
    "details": [
      [
        "服务场景",
        "零碳示范项目的可持续发展路演。"
      ],
      [
        "工作内容",
        "提炼“一站双重构”，以能源“心脏”和“脉搏”的比喻降低理解门槛，组织现场演讲主线。"
      ],
      [
        "作品形态",
        "实际交付为演讲稿。上方展示页依据最终文稿重新排版，保留真实选段。"
      ]
    ]
  },
  "roadshow": {
    "category": "路演 PPT / 已完成",
    "title": "微创升级，无废焕新",
    "lead": "超大城市主电网老旧设备改造创新实践，以一致的视觉主线讲清复杂技术方案。",
    "gallery": [
      [
        "roadshow-01.jpg",
        "路演封面 · 微创升级，无废焕新"
      ],
      [
        "roadshow-03.jpg",
        "问题表达 · 设备与资源账单"
      ],
      [
        "roadshow-04.jpg",
        "概念表达 · 时钟与代谢结构"
      ],
      [
        "roadshow-05.jpg",
        "方案表达 · 从整体更换到微创升级"
      ],
      [
        "roadshow-06.jpg",
        "术前 · 协同会诊"
      ],
      [
        "roadshow-08.jpg",
        "术中 · 外接平台与技术实物"
      ],
      [
        "roadshow-11.jpg",
        "术后 · 三阶九步实施流程"
      ],
      [
        "roadshow-14.jpg",
        "价值结构 · 四个价值方向"
      ],
      [
        "roadshow-17.jpg",
        "价值表达 · 民生用电"
      ],
      [
        "roadshow-20.jpg",
        "总结展望 · 技术创新与循环经济"
      ]
    ],
    "details": [
      [
        "服务场景",
        "金钥匙项目路演，面向电网设备改造的创新实践。"
      ],
      [
        "工作内容",
        "统一“微创手术”的视觉隐喻，将设备实物、技术流程与价值结构组织为连贯页面。"
      ],
      [
        "作品形态",
        "路演 PPT 视觉重构与多轮校对，配套 PDF。这里展示最终设计页。"
      ]
    ]
  },
  "posters": {
    "category": "品牌传播 / 阶段作品",
    "title": "企业文化系列宣传海报",
    "lead": "把长篇企业文化图文转化为适合办公区屏幕浏览的系列视觉。",
    "gallery": [
      [
        "poster-02.jpg",
        "系列海报 · 72 小时协同"
      ],
      [
        "poster-01.jpg",
        "系列海报 · 业务成果与客户反馈"
      ],
      [
        "poster-03.jpg",
        "系列海报 · 产品形成的故事"
      ],
      [
        "poster-04.jpg",
        "系列海报 · 科技与专业信任"
      ]
    ],
    "details": [
      [
        "服务场景",
        "员工食堂、电梯间与办公区屏幕循环展示。"
      ],
      [
        "工作内容",
        "精简长篇内容，设计图示和信息层级，根据客户反馈迭代系列海报与循环视频。"
      ],
      [
        "作品形态",
        "四张系列海报、可编辑 PPT 与循环视频。项目台账仍在进行中，因此标为阶段作品。"
      ]
    ]
  },
  "motion": {
    "category": "新媒体 / 已完成",
    "title": "公众号动态海报",
    "lead": "在静态主视觉上组织光带、关键词与电路树的动态入场。",
    "video": "motion-preview.mp4",
    "poster": "motion-poster.png",
    "details": [
      [
        "服务场景",
        "公众号推文中的动态主视觉。"
      ],
      [
        "工作内容",
        "按背景光带、关键词入场、电路树生长与定格组织动画节奏。"
      ],
      [
        "作品形态",
        "实际交付为 GIF。本页展示完整动画的可暂停视频版本，保留原画面的品牌与构图。"
      ]
    ]
  }
};

const caseCards = [...document.querySelectorAll('[data-case]')];
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(filter => filter.setAttribute('aria-pressed',String(filter===button)));
    let count=0;
    caseCards.forEach(card => {
      const show=button.dataset.filter==='all'||card.dataset.category===button.dataset.filter;
      card.hidden=!show;
      if(show) count++;
    });
    document.querySelector('.case-count').textContent=`当前显示 ${count} 项案例`;
  });
});

const dialogTriggers = new WeakMap();
function openDialog(dialog, trigger) {
  setMenu(false);
  dialogTriggers.set(dialog, trigger);
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    dialog.querySelectorAll('video').forEach(video=>video.pause());
    document.body.classList.toggle('dialog-open', Boolean(document.querySelector('dialog[open]')));
    const trigger = dialogTriggers.get(dialog);
    if (trigger) trigger.focus({ preventScroll: true });
  });
});

let activeGallery = [];
let activePage = 0;
let galleryNodes = null;
const artworkDialog = document.querySelector('#artwork-dialog');

function showGalleryPage(index) {
  if (!activeGallery.length || !galleryNodes) return;
  activePage = (index + activeGallery.length) % activeGallery.length;
  const [filename, caption] = activeGallery[activePage];
  const src = `assets/cases/${filename}`;
  galleryNodes.preview.src = src;
  galleryNodes.preview.alt = caption;
  galleryNodes.open.setAttribute('aria-label', `放大作品：${caption}`);
  galleryNodes.caption.textContent = caption;
  galleryNodes.counter.textContent = `${String(activePage + 1).padStart(2, '0')} / ${String(activeGallery.length).padStart(2, '0')}`;
  galleryNodes.thumbs.forEach((button, i) => button.setAttribute('aria-pressed', String(i === activePage)));
  document.querySelector('#artwork-image').src = src;
  document.querySelector('#artwork-image').alt = caption;
  document.querySelector('#artwork-caption').textContent = `${activePage + 1} / ${activeGallery.length} · ${caption}`;
}

function renderCaseGallery(item, gallery) {
  gallery.replaceChildren();
  activeGallery = item.gallery || [];
  activePage = 0;
  galleryNodes = null;
  if (activeGallery.length) {
    const viewer = document.createElement('section');
    viewer.className = 'case-viewer';
    viewer.setAttribute('aria-label', `精选作品，共 ${activeGallery.length} 页`);
    const frame = document.createElement('button');
    frame.type = 'button'; frame.className = 'artwork-open';
    const preview = document.createElement('img');
    frame.append(preview);
    frame.addEventListener('click', () => openDialog(artworkDialog, frame));
    const controls = document.createElement('div'); controls.className = 'gallery-controls';
    const prev = document.createElement('button'); prev.type = 'button'; prev.textContent = '←'; prev.setAttribute('aria-label', '上一页作品');
    const next = document.createElement('button'); next.type = 'button'; next.textContent = '→'; next.setAttribute('aria-label', '下一页作品');
    const counter = document.createElement('span'); counter.className = 'gallery-counter'; counter.setAttribute('role', 'status'); counter.setAttribute('aria-live', 'polite');
    prev.addEventListener('click', () => showGalleryPage(activePage - 1));
    next.addEventListener('click', () => showGalleryPage(activePage + 1));
    controls.append(prev, counter, next);
    const caption = document.createElement('p'); caption.className = 'gallery-caption';
    const thumbnails = document.createElement('div'); thumbnails.className = 'gallery-thumbnails'; thumbnails.setAttribute('aria-label', '选择作品页面');
    const thumbs = activeGallery.map(([filename, label], i) => {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'case-thumb'; button.setAttribute('aria-label', `第 ${i + 1} 页：${label}`);
      const image = document.createElement('img'); image.src = `assets/cases/${filename}`; image.alt = ''; image.loading = 'lazy';
      const number = document.createElement('span'); number.textContent = String(i + 1).padStart(2, '0');
      button.append(image, number); button.addEventListener('click', () => showGalleryPage(i)); thumbnails.append(button);
      return button;
    });
    viewer.append(frame, controls, caption, thumbnails); gallery.append(viewer);
    galleryNodes = {preview, open:frame, counter, caption, thumbs};
    showGalleryPage(0);
  }
  if (item.video) {
    const figure = document.createElement('figure'); figure.className = 'motion-figure';
    const video = document.createElement('video'); video.controls = true; video.playsInline = true; video.preload = 'metadata'; video.poster = `assets/cases/${item.poster}`;
    video.src = `assets/cases/${item.video}`; video.textContent = '浏览器无法播放此视频。';
    const label = document.createElement('figcaption'); label.textContent = '完整公众号动画 · 点击播放，可随时暂停';
    figure.append(video, label); gallery.append(figure);
  }
}

document.querySelector('#artwork-prev').addEventListener('click', () => showGalleryPage(activePage - 1));
document.querySelector('#artwork-next').addEventListener('click', () => showGalleryPage(activePage + 1));
document.addEventListener('keydown', event => {
  if (!activeGallery.length || !document.querySelector('#case-dialog').open) return;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showGalleryPage(activePage + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
document.querySelectorAll('[data-case]').forEach(button => {
  button.addEventListener('click', () => {
    const item = cases[button.dataset.case];
    document.querySelector('#case-category').textContent = item.category;
    document.querySelector('#case-title').textContent = item.title;
    document.querySelector('#case-lead').textContent = item.lead;
    const gallery = document.querySelector('#case-gallery');
    renderCaseGallery(item, gallery);
    const details = document.querySelector('#case-details');
    details.replaceChildren();
    item.details.forEach(([heading, content]) => {
      const section = document.createElement('section');
      section.className = 'case-detail';
      const title = document.createElement('h3');
      title.textContent = heading;
      const text = document.createElement('p');
      text.textContent = content;
      section.append(title, text);
      details.append(section);
    });
    openDialog(document.querySelector('#case-dialog'), button);
  });
});
document.querySelectorAll('[data-open-brief]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#form-status').textContent = '';
    openDialog(document.querySelector('#brief-dialog'), button);
  });
});
document.querySelector('#brief-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const goal = form.elements.goal.value.trim();
  if (!goal) {
    form.elements.goal.setCustomValidity('请填写希望解决的问题。');
    form.elements.goal.reportValidity();
    return;
  }
  form.elements.goal.setCustomValidity('');
  const text = ['鑫诚则灵 · 项目需求说明', '', `支持方向：${form.elements.type.value}`, `项目目标：${goal}`, `目标交付时间：${form.elements.deadline.value || '待沟通'}`, `已有资料：${form.elements.materials.value.trim() || '待整理'}`, '', '此文件由工作室主页导出，内容未发送给工作室。'].join('\r\n');
  const url = URL.createObjectURL(new Blob(['\ufeff', text], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = '鑫诚则灵-项目需求.txt';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  document.querySelector('#form-status').textContent = '已生成项目需求文件。请查看浏览器下载列表；内容尚未发送。';
});
document.querySelector('#project-goal').addEventListener('input', event => event.currentTarget.setCustomValidity(''));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll('a').forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px' });
  ['perspective', 'services', 'work', 'about'].forEach(id => observer.observe(document.getElementById(id)));
}
