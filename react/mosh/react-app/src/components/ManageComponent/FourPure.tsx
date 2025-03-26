// pure function given same input produces same output always
// but if we get results at different time for same input that is impure function

// react expects every components to be pure function
// which means on same props components should always return same jsx

let count = 0; // global vaialbe is shared across all the instance of components

function FourPure() {
  let countP = 0;
  count++;
  countP++;
  return (
    <>
      <div>
        Message {count} {countP}
      </div>
    </>
  );
}

export default FourPure;

// so for pure we shoudl keep changes out of the render phase
// we should not change any objects existed before rendering like count
// so its totally fine to update the obje that is part of rendering like COuntp