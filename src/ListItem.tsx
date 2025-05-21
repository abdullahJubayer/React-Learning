export function ListItem() {
  return (
    <div className="max-w-sm mx-auto my-4 flex justify-between it items-baseline">
      <input type="checkbox" name="isComplete" value="Bike" />
      <div>
        <p className="text-md text-gray-300">Getting an invite for dribble</p>
        <p className="text-xs text-gray-400">One of my goals in 2027</p>
      </div>
      <img
        src="https://www.svgrepo.com/show/491620/dots-3-horizontal.svg"
        alt="more-btn"
        className="w-8 h-5"
      />
    </div>
  );
}
