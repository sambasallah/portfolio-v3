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
						<div class="form-group">
							<input
								type="text"
								id="name"
								name="name"
								class="form-control"
								v-model="name"
								@keyup="handleKeyUp"
								@blur="handleBlur"
								required
							/>
							<label for="name">
								Name
								<span class="req">*</span>
							</label>
						</div>
						<div class="form-group">
							<input
								type="email"
								id="email"
								name="email"
								class="form-control"
								v-model="email"
								@keyup="handleKeyUp"
								@blur="handleBlur"
								required
							/>
							<label for="email">
								Email
								<span class="req">*</span>
							</label>
						</div>
						<div class="form-group">
							<input
								type="tel"
								id="phone"
								name="phone"
								class="form-control"
								v-model="phone"
								@keyup="handleKeyUp"
								@blur="handleBlur"
								@input="formatPhone($event)"
							/>
							<label for="phone">Phone</label>
						</div>
					</div>
					<div class="form-col">
						<div class="form-group">
							<textarea
								required
								name="message"
								class="form-control"
								id="message"
								v-model="message"
								@keyup="handleKeyUp"
								@blur="handleBlur"
							></textarea>
							<label for="message">
								Message
								<span class="req">*</span>
							</label>
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
			<span role="img" aria-label="love">&#x2764;</span>
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
			const label = e.target.nextSibling;
			e.target.value === '' ? label.classList.remove('filled') : label.classList.add('filled');
		},
		handleBlur(e) {
			const label = e.target.nextSibling;
			if (e.target.value === '') label.classList.remove('filled');
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

			@mixin label-top {
				top: 0;
				opacity: 1;
				color: $purple;
				font-size: 0.8em;
				transition: 0.2s ease all;
			}

			form {
				display: flex;
				flex-wrap: wrap;
				margin: 0 1em;

				input,
				textarea {
					font-family: $sans-serif;
					font-size: 1.15rem;
					color: $black;
					width: 100%;
					padding: 0.5rem 1rem;
					background: none;
					border: 1px solid rgba($black, 0.4);
					border-radius: 4px;
					transition: border-color 0.25s ease, box-shadow 0.25s ease;

					textarea {
						height: 120px;
					}

					&:focus,
					&:hover {
						outline: 0;
					}
				}

				.form {
					&-col {
						@media (min-width: $bp5) {
							flex: 1;
						}

						&:first-of-type {
							margin-right: 1.5em;
						}

						.btn {
							$button-width: 150px;
							$spinner-width: $button-width/6;
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

					&-group {
						position: relative;
						padding-top: 16px;
						margin-bottom: 16px;

						label {
							position: absolute;
							top: 20px;
							left: 0;
							bottom: 0;
							z-index: 2;
							width: 100%;
							font-weight: 300;
							opacity: 0.5;
							cursor: text;
							transition: 0.2s ease all;
							margin: 0;

							&:after {
								content: '';
								position: absolute;
								bottom: 0;
								left: 45%;
								height: 2px;
								width: 10px;
								visibility: hidden;
								background-color: $purple;
								transition: 0.2s ease all;
							}

							.req {
								margin: 2px;
								color: $mint;
							}

							&.filled {
								@include label-top;
								font-weight: 600;
							}
						}
					}

					&-control {
						position: relative;
						z-index: 1;
						border-radius: 0;
						border-width: 0 0 1px;
						border-bottom-color: rgba($black, 0.25);
						height: auto;
						padding: 3px 0 5px;

						&:focus {
							box-shadow: none;
							border-bottom-color: rgba($black, 0.12);

							~ label {
								@include label-top;

								&:after {
									visibility: visible;
									width: 100%;
									left: 0;
								}
							}
						}
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
