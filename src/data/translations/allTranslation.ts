import { homeTranslations } from "./homeTranslations";
import { shopTranslations } from "./shopTranslations";

type Translation = {
	ua: string;
	en: string;
};

export type Translations = {
	[key: string]: Translation;
}

export const allTranslations: Translations = {
	...homeTranslations,
	...shopTranslations
};