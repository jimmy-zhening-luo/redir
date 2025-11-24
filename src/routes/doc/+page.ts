import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
  const { searchParams } = url,
  lang = searchParams.get("lang"),
  topic = searchParams.get("topic");

  return {
    content: `Lang: ${lang} :: Topic: ${topic}`,
  };
};
