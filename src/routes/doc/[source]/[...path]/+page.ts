import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const { source, path } = params;

  return {
    content: `Source: ${source} :: Path: ${path}`,
  };
};
