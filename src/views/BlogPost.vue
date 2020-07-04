<template>
	<div class="content">
		<router-view />
		<div class="row">
			<button class="btn btn--primary" @click="$router.go(-1)">&laquo; Back</button>
		</div>
	</div>
</template>

<script>
	import prism from '@/scripts/prism';

	export default {
		mounted() {
			prism();
		}
	};
</script>

<style lang="scss" scopped>
	.row {
		margin: 1em 0;
	}

	section {
		//width: 70vw;
		background-color: white;
		padding: 2em;
		border-radius: .5rem;
	}

	pre,
	code,
	pre code[class*="language-"] {
		color: $white;
		background: none;
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		font-size: 1em;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		line-height: 1.5;

		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;

	}
	/* Code blocks */
	pre[class*="language-"] {
		padding: 1em;
		margin: .5em 0;
		overflow: auto;
	}

	code,
	pre {
		padding: 1rem;
		border-radius: .5rem;
	}

	pre {
		background-color: #011627;
	}

	code {
		color: #011627;
		background-color: lighten(#455a64, 60%);
	}

	:not(pre) > code[class*="language-"] span:first-of-type
	{
		padding: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	p {
		code {
			padding: 0.25em;
			white-space: pre-wrap;
			word-break: break-word;
		}
	}

	.token {
		&.comment,
		&.block-comment,
		&.prolog,
		&.doctype,
		&.cdata {
			color: $medium-slate;
		}

		&.punctuation {
			color: $light-slate;
		}

		&.tag,
		&.attr-name,
		&.namespace,
		&.deleted {
			color: #e2777a;
		}

		&.function-name {
			color: #6196cc;
		}

		&.boolean,
		&.number,
		&.function {
			color: #82aaff ;
		}

		&.property,
		&.class-name,
		&.constant,
		&.symbol {
			color: #f8c555;
		}

		&.selector,
		&.important,
		&.atrule,
		&.keyword,
		&.builtin {
			color: #c792ea;
		}

		&.string,
		&.char,
		&.attr-value,
		&.regex,
		&.variable {
			color: $mint;
		}

		&.operator,
		&.entity,
		&.url {
			color: $skyblue;
		}

		&.important,
		&.bold {
			font-weight: bold;
		}

		&.italic {
			font-style: italic;
		}

		&.entity {
			cursor: help;
		}

		&.inserted {
			color: green;
		}
	}

	blockquote {
		margin: 0 auto;
		border-left: 8px solid $light-slate;
		position: relative;
		width: 50vw;
		box-shadow: 2px 2px 15px $light-slate;
		padding: 0.2em 1em 0.2em 3em;
		font-style: italic;

		p {
			margin-left: 1em;
			font-style: italic;
		}

		&::before {
			font-family: Arial;
			color: $mint;
			font-size: 4em;
			position: absolute;
			content: '\201C';
			left: 10px;
			top: -10px;
		}

		&::after {
			content: '';
		}
	}

	img {
		margin: 0 auto;
	}

</style>
