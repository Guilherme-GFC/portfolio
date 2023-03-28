import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { SiChakraui, SiTypescript } from "react-icons/si";
import { DiPython, DiDjango, DiPostgresql } from "react-icons/di";

export const stackData = [
	{
		title: "HTML",
		img: imgHTML,
	},
	{
		title: "CSS",
		img: imgCSS,
	},
	{
		title: "JS",
		img: imgJS,
	},
	{ title: "TypeScript", img: SiTypescript },
	{
		title: "Styled Components",
		img: imgStyled,
	},
	{
		title: "React",
		img: imgReact,
	},
	{ title: "Chakra-ui", img: SiChakraui },
	{
		title: "Node JS",
		img: imgNode,
	},
	{ title: "Pyhton", img: DiPython },
	{ title: "Django", img: DiDjango },
	{ title: "Postgresql", img: DiPostgresql },
];
