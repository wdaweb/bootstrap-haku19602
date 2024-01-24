gsap.registerPlugin(ScrollTrigger)
// home 背景動畫
// gsap.to('#home', {
//   backgroundSize: 'cover 110%',
//   duration: 10,
//   yoyo: true,
//   repeat: -1
// }
// );

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
