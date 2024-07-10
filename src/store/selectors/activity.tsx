import { Activities } from '../../@types';

function findActivity(activities: Activities[], searchedSlug: string) {
  const activity = activities.find((testedActivity) => {
    return testedActivity.slug === searchedSlug;
  });

  return activity;
}

export default findActivity;
