import Map from '../components/Map';

function Activities() {
  return (
    <div className="flex flow-row w-screen h-screen">
      <div className="bg-orange-500 w-1/2 h-full">Cards</div>
      <div className="w-1/2">
        <Map />
      </div>
    </div>
  );
}

export default Activities;
