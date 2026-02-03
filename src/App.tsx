import MobileLandingpage from './imports/MobileLandingpage';

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-black">
      <div className="w-[375px] h-full overflow-y-auto">
        <MobileLandingpage />
      </div>
    </div>
  );
}
