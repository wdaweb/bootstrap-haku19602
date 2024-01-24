gsap.registerPlugin(ScrollTrigger)

// #home 猴子進場
gsap.from('.monkey', {
	x: -200,
	autoAlpha: 0,
	duration: 1.4,
	ease: 'linear'
})

// #home 主題字進場
gsap.from('.text-topic, .topic-info, .topic-button', {
	stagger: 0.2,
	y: 50,
	autoAlpha: 0,
	duration: 1,
	ease: 'linear'
})

// navbar 滾動變黑
gsap.to('.navbar', {
	scrollTrigger: {
		trigger: '.navbar',
		start: 'top top',
		end: '100px top',
		onEnter() {
			$('.navbar').addClass('bg-dark')
		},
		onLeaveBack() {
			$('.navbar').removeClass('bg-dark')
		}
		// markers: true
	},
	transition: 1
})

// collection 段落標題字進場
gsap.from('.collection', {
	scrollTrigger: {
		trigger: '.collection',
		start: '130% bottom'
		// markers: true
	},
	y: 50,
	autoAlpha: 0,
	duration: 1,
	ease: 'linear'
})

// collections 圖片交錯進場
gsap.from('.collections', {
	scrollTrigger: {
		trigger: '.collections',
		start: '50% bottom'
		// markers: true
	},
	stagger: {
		each: 0.3,
		from: '2'
	},
	y: 50,
	autoAlpha: 0,
	duration: 1,
	ease: 'linear'
})

// roadmap 段落標題字進場
gsap.from('.roadmap', {
	scrollTrigger: {
		trigger: '.roadmap',
		start: '130% bottom'
		// markers: true
	},
	y: 50,
	autoAlpha: 0,
	duration: 1,
	ease: 'linear'
})

// 視差效果
const scene = document.querySelector('#scene')
new Parallax(scene, {
	// 位移量
	scalarX: 10,
	scalarY: 10,
	// 摩擦力
	frictionX: 0.1,
	frictionY: 0.1
})

// roadmap 段落標題字進場
gsap.from('.team', {
	scrollTrigger: {
		trigger: '.team',
		start: '130% bottom'
		// markers: true
	},
	y: 50,
	autoAlpha: 0,
	duration: 1,
	ease: 'linear'
})

// teams 圖片交錯進場
gsap.from('.teams', {
	scrollTrigger: {
		trigger: '.teams',
		start: '50% bottom'
		// markers: true
	},
	stagger: {
		each: 0.3,
		from: '2'
	},
	y: 50,
	autoAlpha: 0,
	duration: 1,
	ease: 'linear'
})

// counter 跑數字
const targetNumbers = {
	num1500: 1500,
	num1200: 1200,
	num170: 170
}
gsap.from(targetNumbers, {
	// 動畫的起始值
	num1500: 0,
	num1200: 0,
	num170: 0,

	// 動畫持續時間
	duration: 2,

	// onUpdate 回調會在每一幀更新時執行
	onUpdate: () => {
		// 更新顯示數字的元素文本內容
		document.getElementById('num1500').textContent = Math.round(targetNumbers.num1500)
		document.getElementById('num1200').textContent = Math.round(targetNumbers.num1200)
		document.getElementById('num170').textContent = Math.round(targetNumbers.num170)
	},

	// 控制軸控制動畫何時觸發
	scrollTrigger: {
		trigger: '#counter',
		start: 'top center',
		end: 'bottom center',
		toggleActions: 'play none none none'
		// markers: true
	}
})
