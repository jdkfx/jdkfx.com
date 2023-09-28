import fm from 'front-matter';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const posts = [];

try {
	const articleDir = path.join(process.cwd(), "/articles");
	const fileList = fs.readdirSync(articleDir);
	for (const fileName of fileList) {
		if (fileName.length < 4 || fileName.slice(-3) !== ".md") continue;
		const filePath = path.join(articleDir, fileName);
		const stats = fs.statSync(filePath);
		if (!stats.isFile()) continue;
		const file = fs.readFileSync(filePath, "utf-8");
		const content = fm(file);
		const post = {
			slug: fileName.slice(0, -3),
			title: content.attributes.title,
			date: content.attributes.date,
			content: marked(content.body),
		};
		console.log(post);
		posts.push(post);
	}
} catch (err) {
	console.error(err);
}

posts.sort((a,b)=>{
	return a.date === b.date ? 0 : (a.date < b.date ? 1 : -1);
});

export default posts;

// export const posts = [
// 	{
// 		slug: 'welcome',
// 		title: 'Welcome to the Aperture Science computer-aided enrichment center',
// 		content:
// 			'<p>We hope your brief detention in the relaxation vault has been a pleasant one.</p><p>Your specimen has been processed and we are now ready to begin the test proper.</p>'
// 	},

// 	{
// 		slug: 'safety',
// 		title: 'Safety notice',
// 		content:
// 			'<p>While safety is one of many Enrichment Center Goals, the Aperture Science High Energy Pellet, seen to the left of the chamber, can and has caused permanent disabilities, such as vaporization. Please be careful.</p>'
// 	},

// 	{
// 		slug: 'cake',
// 		title: 'This was a triumph',
// 		content: "<p>I'm making a note here: HUGE SUCCESS.</p>"
// 	}
// ];
