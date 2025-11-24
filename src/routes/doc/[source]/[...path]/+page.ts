import type { PageLoad } from './$types';

export const load: PageLoad = ({ route }) => {
	console.log(route.id); // '/a/[b]/[...c]'
};

export const load: PageLoad = ({ params }) => {
  const { source, path } = params;

  return {
    content: `Source: ${source} :: Path: ${path}`,
  };
};
