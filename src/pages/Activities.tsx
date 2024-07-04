import Map from '../components/Map';
import ActivityCard from '../components/ActivityCard';

function Activities() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row flex-wrap gap-8 w-7/12 justify-center my-8">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
      <div className="fixed right-0 h-full w-5/12">
        <Map />
      </div>
    </div>
  );
}

export default Activities;
