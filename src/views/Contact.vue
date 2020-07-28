<template>
	<section v-if="isContactDrawerOpen" class="contact-section">
		<h1>Contact</h1>

		<div class="contact-section__grid-container grid-container">
			<div class="contact"></div>

			<div class="form">
				<form>
					<div class="form-input">
						<label for="name">
							Name
							<span class="req">*</span>
						</label>
						<input type="text" id="name" name="name" required @keyup="activeText($event)" />
					</div>
					<div class="form-input">
						<label for="email">
							Email
							<span class="req">*</span>
						</label>
						<input type="email" id="email" name="email" required @keyup="activeText($event)" />
					</div>
					<div class="form-input">
						<label for="phone">
							Phone
							<span class="req">*</span>
						</label>
						<input type="tel" id="email" name="phone" @input="formatPhone($event)" />
					</div>
					<div class="form-input">
						<label for="message">
							Leave a brief description of your project
							<span class="req">*</span>
						</label>
						<textarea required name="message" id="message"></textarea>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { store } from 'src/store.js';

export default {
	name: 'Contact',
	computed: {
		isContactDrawerOpen() {
			return store.isContactOpen;
		}
	},
	methods: {
		formatPhone(e) {
			const digit = e.target.value
				.replace(/\D/g, '')
				.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
			e.target.value = !digit[2]
				? digit[1]
				: `(${digit[1]}) ${digit[2]}${digit[3] ? `-${digit[3]}` : ''}`;
		},
		activeText(e) {
			console.log(e.type);
			const label = e.target.previousSibling;
			if (e.type === 'keyup') {
				if (e.target.value === '') {
					label.classList.remove('active highlight');
				} else {
					label.classList.add('active highlight');
				}
			} else if (e.type === 'blur') {
				if (e.target.value === '') {
					label.classList.remove('active highlight');
				} else {
					label.classList.remove('highlight');
				}
			} else if (e.type === 'focus') {
				if (e.target.value === '') {
					label.classList.remove('highlight');
				} else if (e.target.value !== '') {
					label.classList.add('highlight');
				}
			}
		}
	}
};
</script>

<style lang="scss">
.contact-section {
	height: 50vh;
	width: 100%;
	background-color: $slate;
	position: fixed;
	bottom: 0;
	z-index: 10;
	overflow: hidden;
	animation: slide-in-blurred-bottom 0.5s both;
	transform: all ease 0.5s;
}

@keyframes slide-in-blurred-bottom {
	0% {
		transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
		transform-origin: 50% 100%;
		filter: blur(10px);
		opacity: 0;
	}
	100% {
		transform: translateY(0) scaleY(1) scaleX(1);
		transform-origin: 50% 50%;
		filter: blur(0);
		opacity: 1;
	}
}

.contact-section {
	&__grid-container {
		color: $black;
		margin: 1em;

		> div {
			background: none;
			box-shadow: none;
		}

		& > div:nth-child(1) {
			grid-area: contact;
		}
		& > div:nth-child(2) {
			grid-area: form;

			form {
				display: flex;
				flex-direction: column;

				.form-input {
					position: relative;
					margin-bottom: 40px;
				}

				label {
					font-weight: 700;
					position: absolute;
					transform: translateY(6px);
					left: 13px;
					color: rgba($black, 0.5);
					transition: all 0.25s ease;
					-webkit-backface-visibility: hidden;
					pointer-events: none;
					font-size: 22px;
					.req {
						margin: 2px;
						color: $purple;
					}

					&:not(:first-of-type) {
						margin-top: 10px;
					}

					&.highlight {
						color: $white;
					}

					&.active {
						transform: translateY(50px);
						left: 2px;
						font-size: 14px;
						.req {
							opacity: 0;
						}
					}
				}

				input,
				textarea {
					display: block;
					font-size: 22px;
					width: 100%;
					height: 100%;
					padding: 5px 10px;
					background: none;
					background-image: none;
					border: 1px solid $slate;
					color: $white;
					border-radius: 0;
					transition: border-color 0.25s ease, box-shadow 0.25s ease;
					&:focus {
						outline: 0;
						border-color: $purple;
					}
				}
			}
		}

		& {
			grid-template-areas:
				'contact'
				'form';

			@media screen and (min-width: 625px) {
				grid-template-areas: 'contact	form';
			}

			@media screen and (min-width: 950px) {
				grid-template-areas: 'contact	form';
			}
		}
	}
}
</style>
