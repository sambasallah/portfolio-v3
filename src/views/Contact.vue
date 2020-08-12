<template>
	<section v-if="isContactDrawerOpen" class="contact-section" id="contact-section">
		<h1>Get in Touch</h1>

		<div class="contact-section__grid-container grid-container">
			<section class="contact">
				<p>
					New project? Need a website? Great! I'm currently accepting new projects and would love to hear about your
					idea.
				</p>
				<p>Interested in seeing more examples of my work?</p>
				<h3>Connect with me!</h3>

				<ul class="contact-social-links">
					<li>
						<a
							href="https://github.com/cweave"
							target="_blank"
							title="Check out Christa's Github repositories"
						>
							<svg viewBox="0 0 16 15" role="img" labelledby="githubTitle">
								<title id="githubTitle">Github logo</title>
								<use xlink:href="../assets/svgs/github.svg#github" />
							</svg>
						</a>
					</li>
					<li>
						<a href="https://codepen.io/cweave" target="_blank" title="Follow Christa on CodePen">
							<svg viewBox="0 0 16 15" role="img" labelledby="codepenTitle">
								<title id="codepenTitle">Codepen logo</title>
								<use xlink:href="../assets/svgs/codepen.svg#codepen" />
							</svg>
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/weaverchrista/"
							target="_blank"
							title="Connect with Christa on LinkedIn"
						>
							<svg viewBox="0 0 16 15" role="img" labelledby="linkedInTitle">
								<title id="linkedInTitle">LinkedIn logo</title>
								<use xlink:href="../assets/svgs/linkedin.svg#linkedin" />
							</svg>
						</a>
					</li>
				</ul>
			</section>

			<section class="form">
				<h2>Send a Message</h2>
				<form v-if="!messageSent" @submit.prevent="processForm">
					<div class="form-col">
						<div class="form-input">
							<label for="name">
								Name
								<span class="req">*</span>
							</label>
							<input
								type="text"
								id="name"
								name="name"
								v-model="name"
								@keyup="handleKeyUp"
								@blur="handleBlur"
								@focus="handleFocus"
								required
							/>
						</div>
						<div class="form-input">
							<label for="email">
								Email
								<span class="req">*</span>
							</label>
							<input
								type="email"
								id="email"
								name="email"
								v-model="email"
								@keyup="handleKeyUp"
								@blur="handleBlur"
								@focus="handleFocus"
								required
							/>
						</div>
						<div class="form-input">
							<label for="phone">Phone</label>
							<input
								type="tel"
								id="email"
								name="phone"
								v-model="phone"
								@keyup="handleKeyUp"
								@blur="handleBlur"
								@focus="handleFocus"
								@input="formatPhone($event)"
							/>
						</div>
					</div>
					<div class="form-col">
						<div class="form-input">
							<label for="message">
								Message
								<span class="req">*</span>
							</label>
							<textarea
								required
								name="message"
								id="message"
								v-model="message"
								@keyup="handleKeyUp"
								@blur="handleBlur"
								@focus="handleFocus"
							></textarea>
						</div>
						<button type="submit" class="btn btn--primary">Send</button>
					</div>
				</form>
				<p v-else>
					<span class="linebreak"></span>
					Thanks for getting in touch with me! I'll be in contact with you shortly :)
				</p>
			</section>
		</div>
		<p class="small">
			handcrafted with
			<span>&#x2764;</span>
			{{ new Date().getFullYear() }}
		</p>
	</section>
</template>

<script>
import { store } from 'src/store';
import emailjs from 'emailjs-com';

export default {
	name: 'Contact',
	data() {
		return {
			name: '',
			email: '',
			phone: '',
			message: '',
			messageSent: false
		};
	},
	computed: {
		isContactDrawerOpen() {
			return store.isContactOpen;
		}
	},
	methods: {
		formatPhone(e) {
			console.log('format', e.target.value);
			const digit = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
			e.target.value = !digit[2] ? digit[1] : `(${digit[1]}) ${digit[2]}${digit[3] ? `-${digit[3]}` : ''}`;
		},
		handleKeyUp(e) {
			const label = e.target.previousSibling;
			if (e.target.value === '') {
				label.classList.remove('active', 'highlight');
			} else {
				label.classList.add('active', 'highlight');
			}
		},
		handleBlur(e) {
			const label = e.target.previousSibling;
			if (e.target.value === '') {
				label.classList.remove('active', 'highlight');
			} else {
				label.classList.remove('highlight');
			}
		},
		handleFocus(e) {
			const label = e.target.previousSibling;
			if (e.target.value === '') {
				label.classList.remove('highlight');
			} else if (e.target.value !== '') {
				label.classList.add('highlight');
			}
		},
		processForm(e) {
			// change the button to a spinner on submit and disable button
			const submitButton = document.querySelector('button[type=submit]');
			submitButton.classList.add('animate');
			submitButton.disabled = true;
			emailjs.sendForm('cweav3r_gmail_com', 'portfolio_contact', e.target, 'user_K0KkfANhmcimJeLuISYn7').then(
				result => {
					this.messageSent = true;
					submitButton.classList.remove('animate');
					submitButton.classList.add('success');
					console.log('SUCCESS!', result.status, result.text);
				},
				error => {
					console.log('FAILED...', error);
					submitButton.classList.remove('animate');
					submitButton.classList.add('error');
				}
			);
		}
	}
};
</script>

<style lang="scss">
.contact-section {
	width: 100%;
	background-color: $slate;
	position: fixed;
	bottom: 0;
	z-index: 10;
	overflow: hidden;
	animation: slide-in-blurred-bottom 0.5s both; // TODO: fix animation
	transform: all ease 0.5s;
	padding: 0.5em 1em;

	@media (min-width: 775px) {
		height: 50vh;
	}

	h3 {
		font-family: $sans-serif;
		font-weight: 600;
		font-style: italic;
	}

	.small {
		font-size: 0.85em;
		padding: 0;
		position: absolute;
		bottom: 0;
		width: 100%;
		text-align: center;

		span {
			color: $purple;
		}
	}

	&__grid-container {
		color: $black;
		margin: 1em;

		> section {
			background: none;
			box-shadow: none;
		}

		& > section:nth-child(1) {
			grid-area: contact;

			.contact-social-links {
				display: inline-flex;
				list-style-type: none;
				padding: 0;
				margin: 0;

				li {
					a {
						background-image: none;
						transition: color 0.2s ease-in;

						&:hover,
						&:focus,
						&:active {
							color: $mint;
						}
					}

					&:not(:last-of-type) {
						margin-right: 10px;
					}
				}

				svg {
					width: 30px;
				}
			}
		}

		& > section:nth-child(2) {
			grid-area: form;
			padding: 0;

			form {
				display: flex;

				.form {
					&-col {
						&:first-of-type {
							margin-right: 1rem;
						}

						$button-width: 150px;
						$spinner-width: $button-width/6;

						.btn {
							float: right;
							appearance: none;
							border: 0;
							transition: border-radius linear 0.05s, width linear 0.05s;

							&.success:before {
								position: absolute;
								content: '';
								width: $spinner-width;
								height: $spinner-width/2;
								border: 4px solid $white;
								border-right: 0;
								border-top: 0;
								left: 50%;
								top: 50%;
								transform: translate(-50%, -50%) rotate(0deg) scale(0);
								animation: success ease-in 0.15s forwards;
								animation-delay: 2.5s;
							}

							&.error {
								position: relative;
								animation: vibrate ease-in 0.5s forwards;
								animation-delay: 2.5s;

								&:before {
									color: $white;
									position: absolute;
									content: '!';
									font-size: 1.8rem;
									font-weight: bold;
									text-align: center;
									left: 50%;
									top: 50%;
									transform: translate(-50%, -50%) scale(0);
									animation: error ease-in 0.5s forwards;
									animation-delay: 2.5s;
								}
							}

							&.animate {
								width: $button-width/2.2;
								height: $button-width/2.2;
								min-width: 0;
								border-radius: 50%;
								color: transparent;

								&:after {
									position: absolute;
									content: '';
									width: $spinner-width;
									height: $spinner-width;
									border: 4px solid $white;
									border-radius: 50%;
									border-left-color: transparent;
									left: 50%;
									top: 50%;
									transform: translate(-50%, -50%);
									animation: spin ease-in 2.5s forwards;
								}
							}
						}
					}

					&-input {
						position: relative;
						margin-bottom: 28px;
					}
				}

				label {
					font-size: 1.1rem;
					font-weight: 700;
					position: absolute;
					transform: translateY(10px);
					left: 1rem;
					color: $light-slate;
					transition: all 0.25s ease;
					-webkit-backface-visibility: hidden;
					pointer-events: none;
					line-height: 1.15;

					.req {
						margin: 2px;
						color: $purple;
					}

					&.highlight {
						color: $purple;
					}

					&.active {
						transform: translateY(46px);
						left: 2px;
						font-size: 1rem;

						.req {
							opacity: 0;
						}
					}
				}

				input,
				textarea {
					font-family: $sans-serif;
					display: block;
					font-size: 1.25rem;
					color: $black;
					width: 100%;
					padding: 0.5rem 1rem;
					background: none;
					border: 1px solid rgba($black, 0.4);
					border-radius: 4px;
					transition: border-color 0.25s ease, box-shadow 0.25s ease;

					&:focus,
					&:hover {
						outline: 0;
						border-color: $purple;
					}
				}

				textarea {
					margin: 0;
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
