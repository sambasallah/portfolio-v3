<template>
	<div>
		<TabCard :jobTabs="jobTabs" :initialTab="initialTab">
			<template slot="tab-head-front-end-engineer">Front-End Engineer</template>
			<template slot="tab-panel-front-end-engineer">
				<div class="company-information">
					<h2 class="company-information__title">Front-End Engineer</h2>
					<time class="company-information__date">August 2019 - present</time>
					<span class="company-information__name">Cognito Forms</span>
				</div>
				<p
					class="description"
				>Be careful, or I will spill the beans on your placeholder text. I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text. I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things.</p>
			</template>
			<template slot="tab-head-ui-developer">User Interface Developer</template>
			<template slot="tab-panel-ui-developer">
				<div class="company-information">
					<h2 class="company-information__title">User Interface Developer</h2>
					<time class="company-information__date">April 2018 - August 2019</time>
					<span class="company-information__name">United Shore / United Wholesale Mortgage</span>
				</div>
				<p
					class="description"
				>I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, "I can't do it. I just can't do it. It's inappropriate. It's not nice." You’re disgusting. You have so many different things placeholder text has to be able to do, and I don't believe Lorem Ipsum has the stamina. An 'extremely credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud.</p>
			</template>
			<template slot="tab-head-web-developer">Web Developer</template>
			<template slot="tab-panel-web-developer">
				<div class="company-information">
					<h2 class="company-information__title">Web Developer</h2>
					<time class="company-information__date">March 2017 - April 2018</time>
					<span class="company-information__name">Innovative Network Solutions</span>
				</div>
				<p
					class="description"
				>Responsible for all stages of website creation both on the front and back end from initial design and architecture to development, deployment, and management:</p>
				<ul>
					<li>Developed and maintained the functionality for in-house and client websites primarily using HTML, CSS, JavaScript/jQuery, MySQL, and PHP</li>
					<li>Created user friendly, mobile responsive websites</li>
					<li>Manually tested websites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>
					<li>Assisted in building a custom Content Management System and built client websites using it</li>
				</ul>
			</template>
		</TabCard>
	</div>
</template>

<script>
import TabCard from './TabCard.vue';

export default {
	name: 'JobHistory',
	components: {
		TabCard
	},
	data() {
		return {
			initialTab: 'front-end-engineer',
			jobTabs: ['front-end-engineer', 'ui-developer', 'web-developer']
		};
	}
};
</script>

<style lang="scss" scoped>
.company-information {
	display: grid;
	grid-template-columns: 2fr 1fr;
	align-items: center;
	margin-top: 1em;
	position: relative;

	&:before {
		content: '';
		position: absolute;
		width: 60%;
		height: 1px;
		bottom: -10px;
		left: calc(50% - 30%); // 50% minus half width
		border-bottom: 1px solid rgba($light-slate, 0.75);
	}

	&__title {
		padding: 0;
		margin: 0;
	}

	&__date {
		font-size: 0.9em;
		font-style: italic;
		grid-row-end: span 2;
		justify-self: end;
	}

	&__name {
		color: $slate;
	}
}
</style>
