<template>
	<div id="app" >
		<navbar />
		<transition name="slide" mode="out-in">
			<div :class="{ 'content-container' : !routeIsHome }">
				<!-- <div class="hero__flourish">
					<svg class="hero__flourish-shape" width="560px" height="621px" viewBox="0 0 560 621" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<linearGradient x1="-20.1496696%" y1="54.356696%" x2="100%" y2="59.145544%" id="linearGradient-1">
								<stop stop-color="#00B3E6" stop-opacity="0.8" offset="0%"></stop>
								<stop stop-color="#00B3E6" stop-opacity="0.1" offset="100%"></stop>
							</linearGradient>
						</defs>
						<g id="HelloSign" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.25169837">
							<g id="HelloSign-(March-23)" transform="translate(-689.000000, -121.000000)" fill="url(#linearGradient-1)">
								<path d="M1155.35455,659.915606 C1146.41338,680.979851 1134.07543,700.176284 1116.11633,714.058544 C1086.41434,737.020118 1037.66704,738.556163 1015.11398,708.544838 C993.197294,679.38005 1004.65211,637.65889 995.4441,602.358185 C985.930301,565.894526 954.188121,538.538517 919.215642,524.503952 C876.508626,507.364237 828.199354,504.895467 782.670549,505.038327 C744.623618,505.156393 699.64146,508.490592 668.53802,482.129883 C649.410066,465.918171 632.060193,446.862238 621.874596,423.951432 C611.690179,401.040627 609.360727,373.823936 619.705714,350.986332 C637.304707,312.140091 681.413172,297.221208 705.845855,264.196826 C735.687164,223.861766 745.313126,170.181649 776.400037,129.429814 C829.279663,60.1117885 930.287919,36.9152623 1012.66292,65.4767305 C1106.79144,98.1162157 1157.9225,182.760454 1188.40845,272.678723 C1228.39994,390.633065 1198.10289,500.235382 1169.16243,617.164906 C1165.59682,631.571381 1161.20121,646.141968 1155.35455,659.915606" id="Fill-1" transform="translate(910.321689, 392.364718) rotate(-301.000000) translate(-910.321689, -392.364718) "></path>
							</g>
						</g>
					</svg>
				</div> -->
				<router-view />
			</div>
		</transition>
		<contact-button />
		<contact />
	</div>
</template>

<script>
	import ContactButton from '@/components/ContactButton';
	import Contact from '@/views/Contact.vue';
	import Navbar from '@/components/navigation/Navbar.vue';

	export default {
		components: {
			ContactButton,
			Contact,
			Navbar
		},
		computed: {
			routeIsHome() {
				return this.$route.name === 'home'
			}
		}
	};
</script>

<style lang="scss">
	#app {
		height: 100%;
	}

	.content-container {
		margin-left: 200px;
		position: absolute;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;

		> div {
			border-width: 3px;
			border-style: solid;
			border-image:
				linear-gradient(
				to bottom,
				red,
				rgba(0, 0, 0, 0)
			) 1 100%;
		}
	}

	.hero__flourish {
		position: absolute;
		top: 0;
		right: 0;
		height: 100vh;

		&-shape {
			position: relative;
			max-height: 90vh;
			max-width: 100%;
			z-index: 2;
		}

		&-outline {
			position: absolute;
			top: 0;
			right: 0;
			max-height: 90vh;
			width: 100%;
			transform: scale(1.2);
			transform-origin: right;
		}
	}

</style>
