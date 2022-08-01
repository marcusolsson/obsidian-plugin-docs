#!/usr/bin/env osascript -l JavaScript
ObjC.import("stdlib");
const app = Application.currentApplication();
app.includeStandardAdditions = true;
const alfredMatcher = (str) => str.replace (/[-()_/.]/g, " ") + " " + str + " ";

const workArray = JSON.parse(app.doShellScript('curl -s "https://api.github.com/repos/marcusolsson/obsidian-plugin-docs/git/trees/main?recursive=1"'))
	.tree
	.filter(file => file.path.startsWith("docs/"))
	.filter(file => file.path.endsWith(".md"))
	.map(file => {
		const subsitePath = file.path.slice(5, -3);

		const displayTitle = subsitePath
			.replace(/.*\//, "")
			.replaceAll("-", " ");

		return {
			"title": displayTitle,
			"match": alfredMatcher (subsitePath),
			"arg": `https://marcus.se.net/obsidian-plugin-docs/${subsitePath}`,
			"uid": subsitePath,
		};
	});

JSON.stringify({ items: workArray });
